// ─── CartPage.jsx ─────────────────────────────────────────────────────────────
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

const DELIVERY_OPTIONS = [
  { id:'std',   label:'Standard',  desc:'3–5 hrs',   price:250, icon:'📦' },
  { id:'expr',  label:'Express',   desc:'1–2 hrs',   price:480, icon:'⚡' },
  { id:'sched', label:'Scheduled', desc:'Pick time', price:350, icon:'📅' },
];

const PAYMENT_METHODS = [
  { id:'card',      label:'Credit / Debit Card', icon:'💳', desc:'Visa · Mastercard · UnionPay' },
  { id:'easypaisa', label:'EasyPaisa',           icon:'📱', desc:'Mobile wallet'               },
  { id:'jazzcash',  label:'JazzCash',             icon:'📲', desc:'Mobile wallet'               },
  { id:'cod',       label:'Cash on Delivery',     icon:'💵', desc:'Pay when delivered'          },
];

const p = {
  deep:   '#4A0A1E',
  dark:   '#7C1040',
  mid:    '#D4537E',
  primary:'#C2185B',
  soft:   '#FBEAF0',
  softer: '#FDF5F8',
  border: 'rgba(194,24,91,0.14)',
  text:   '#1C0A10',
  muted:  'rgba(74,24,40,0.50)',
};

// ── Input ─────────────────────────────────────────────────────────────────────
const Field = ({ label, type='text', value, onChange, placeholder, half }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ flex: half ? '1' : 'none', position:'relative' }}>
      <label style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase', color: focused ? p.primary : p.muted, marginBottom:'7px', transition:'color .18s' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          width:'100%', boxSizing:'border-box',
          padding:'13px 16px', borderRadius:'4px',
          border:`1px solid ${focused ? p.primary : p.border}`,
          borderBottom:`2px solid ${focused ? p.primary : 'rgba(194,24,91,0.22)'}`,
          background: focused ? '#FFF8FB' : p.softer,
          fontFamily:"'Montserrat',sans-serif", fontSize:'13px', color:p.text,
          outline:'none', transition:'all .18s',
          boxShadow: focused ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none',
        }}
      />
    </div>
  );
};

// ── CartPage ──────────────────────────────────────────────────────────────────
const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart,     setCart]     = useState(location.state?.cart || []);
  const [delivery, setDelivery] = useState('std');
  const [method,   setMethod]   = useState('card');
  const [step,     setStep]     = useState(1); // 1=cart, 2=payment, 3=confirm
  const [done,     setDone]     = useState(false);
  const [paying,   setPaying]   = useState(false);
  const [note,     setNote]     = useState('');

  const [form, setForm] = useState({ name:'', phone:'', address:'', city:'Hyderabad', area:'', cardNum:'', expiry:'', cvv:'', cardName:'', mpNumber:'' });
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));
  const fmtCard = v => v.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  const fmtExp  = v => { const d=v.replace(/\D/g,'').slice(0,4); return d.length>2?d.slice(0,2)+'/'+d.slice(2):d; };

  const adjustQty    = (id, delta) => setCart(prev => prev.map(i => i.id===id ? {...i, qty:Math.max(1,i.qty+delta)} : i));
  const removeItem   = id => setCart(prev => prev.filter(i => i.id !== id));
  const deliveryObj  = DELIVERY_OPTIONS.find(d => d.id === delivery);
  const itemsTotal   = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const deliveryPrice= deliveryObj?.price || 0;
  const grandTotal   = itemsTotal + deliveryPrice;

  const handlePay = async () => {
    setPaying(true);
    await new Promise(r => setTimeout(r, 2200));
    setPaying(false);
    setDone(true);
  };

  // ── Success ──────────────────────────────────────────────────────────────────
  if (done) return (
    <div style={{ minHeight:'100vh', background:`linear-gradient(160deg,${p.deep} 0%,${p.dark} 100%)`, display:'flex', alignItems:'center', justifyContent:'center', padding:'40px', position:'relative', overflow:'hidden', fontFamily:"'Montserrat',sans-serif" }}>
      <div style={{ position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,192,212,0.05) 1px,transparent 1px)',backgroundSize:'24px 24px',pointerEvents:'none' }}/>
      <div style={{ background:'rgba(253,240,244,0.98)', borderRadius:'4px', boxShadow:'0 40px 100px rgba(74,4,24,0.50)', padding:'64px 56px', maxWidth:'500px', width:'100%', textAlign:'center', border:`1px solid ${p.border}`, position:'relative', zIndex:1 }}>
        <div style={{ width:'72px', height:'72px', borderRadius:'50%', background:`linear-gradient(135deg,${p.mid},${p.dark})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', margin:'0 auto 24px', boxShadow:'0 12px 36px rgba(194,24,91,0.35)', color:'#fff' }}>✓</div>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:p.primary, marginBottom:'12px' }}>Order Confirmed</p>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'34px', fontWeight:700, color:p.text, marginBottom:'8px', lineHeight:1.1 }}>Thank you,<br/><span style={{ fontStyle:'italic', color:p.dark }}>your gift is on its way.</span></h2>
        <div style={{ height:'1px', background:p.border, margin:'24px 0' }}/>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:p.muted, marginBottom:'8px' }}>Order ID: <strong style={{ color:p.text }}>WH-{Math.random().toString(36).slice(2,8).toUpperCase()}</strong></p>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:p.muted, marginBottom:'36px' }}>Total paid: <strong style={{ color:p.dark }}>{fmt(grandTotal)}</strong></p>
        <button onClick={() => navigate('/')} style={{ padding:'15px 48px', borderRadius:'4px', border:'none', background:`linear-gradient(135deg,${p.mid},${p.dark})`, color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', cursor:'pointer', boxShadow:'0 10px 32px rgba(194,24,91,0.35)' }}>Back to Home ✦</button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:'100vh', background:`linear-gradient(160deg,${p.softer} 0%,#FAE0EC 50%,${p.softer} 100%)`, fontFamily:"'Montserrat',sans-serif" }}>

      {/* Nav */}
      <div style={{ height:'64px', background:`linear-gradient(90deg,${p.deep},${p.dark})`, borderBottom:'1px solid rgba(255,192,212,0.15)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 48px', boxShadow:'0 2px 24px rgba(74,4,24,0.30)', position:'sticky', top:0, zIndex:100 }}>
        <button onClick={() => navigate(-1)} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:600, letterSpacing:'1.5px', color:'rgba(255,210,225,0.45)', textTransform:'uppercase' }}>← Back</button>
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:'#FFF0F5' }}>Your Cart</span>
        {/* Step pills */}
        <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
          {[['1','Cart'],['2','Payment'],['3','Confirm']].map(([n,label]) => (
            <div key={n} style={{ display:'flex', alignItems:'center', gap:'5px' }}>
              <div style={{ width:'20px', height:'20px', borderRadius:'50%', background: parseInt(n)<=step ? `linear-gradient(135deg,${p.mid},${p.dark})` : 'rgba(255,192,212,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color: parseInt(n)<=step ? '#fff' : 'rgba(255,192,212,0.35)', boxShadow: parseInt(n)<=step ? '0 3px 10px rgba(194,24,91,0.35)' : 'none' }}>{n}</div>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight: parseInt(n)===step ? 700 : 400, letterSpacing:'1px', color: parseInt(n)===step ? '#FFC8DC' : 'rgba(255,192,212,0.35)' }}>{label}</span>
              {n!=='3' && <div style={{ width:'16px', height:'1px', background:'rgba(255,192,212,0.18)' }}/>}
            </div>
          ))}
        </div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 360px', maxWidth:'1200px', margin:'0 auto', padding:'48px', gap:'32px', alignItems:'start' }}>

        {/* ════ LEFT ════ */}
        <div style={{ display:'flex', flexDirection:'column', gap:'20px' }}>

          {/* ── Step 1: Cart items ── */}
          {step >= 1 && (
            <div style={{ background:'rgba(253,244,247,0.98)', borderRadius:'4px', border:`1px solid ${p.border}`, boxShadow:'0 6px 28px rgba(124,16,64,0.09)', padding:'28px 32px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'22px' }}>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:p.primary, opacity:0.70 }}>Cart Items</span>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
              </div>

              {cart.length === 0 ? (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', color:'rgba(124,16,64,0.30)' }}>Your cart is empty</p>
                  <button onClick={() => navigate(-1)} style={{ marginTop:'16px', padding:'12px 28px', borderRadius:'30px', border:'none', background:`linear-gradient(135deg,${p.mid},${p.dark})`, color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer' }}>Browse Products</button>
                </div>
              ) : (
                <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                  {cart.map(item => (
                    <div key={item.id} style={{ display:'flex', alignItems:'center', gap:'16px', padding:'14px 16px', background:`linear-gradient(135deg,rgba(194,24,91,0.03),rgba(124,16,64,0.02))`, border:`1px solid ${p.border}`, borderRadius:'8px' }}>
                      <div style={{ width:'64px', height:'64px', borderRadius:'10px', flexShrink:0, background:item.color||p.soft, overflow:'hidden' }}>
                        <img src={item.img} alt={item.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e=>{e.target.style.opacity='0';}}/>
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'13px', fontWeight:700, color:p.text, marginBottom:'3px' }}>{item.name}</p>
                        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:p.primary }}>{fmt(item.price)}</p>
                      </div>
                      <div style={{ display:'flex', alignItems:'center', gap:'8px', background:'rgba(194,24,91,0.07)', borderRadius:'100px', padding:'5px 12px', border:`1px solid ${p.border}` }}>
                        <button onClick={() => adjustQty(item.id,-1)} style={{ width:'22px', height:'22px', borderRadius:'50%', border:'none', cursor:'pointer', background:p.soft, color:p.dark, fontSize:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>−</button>
                        <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'13px', fontWeight:700, color:p.text, minWidth:'18px', textAlign:'center' }}>{item.qty}</span>
                        <button onClick={() => adjustQty(item.id,1)} style={{ width:'22px', height:'22px', borderRadius:'50%', border:'none', cursor:'pointer', background:p.soft, color:p.dark, fontSize:'15px', display:'flex', alignItems:'center', justifyContent:'center' }}>+</button>
                      </div>
                      <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:p.dark, minWidth:'90px', textAlign:'right' }}>{fmt(item.price*item.qty)}</p>
                      <button onClick={() => removeItem(item.id)} style={{ width:'28px', height:'28px', borderRadius:'50%', border:'none', cursor:'pointer', background:'rgba(194,24,91,0.10)', color:p.primary, fontSize:'16px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>×</button>
                    </div>
                  ))}
                </div>
              )}

              {/* Delivery */}
              {cart.length > 0 && (
                <div style={{ marginTop:'24px' }}>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', color:p.muted, marginBottom:'12px' }}>Delivery</p>
                  <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px' }}>
                    {DELIVERY_OPTIONS.map(opt => (
                      <div key={opt.id} onClick={() => setDelivery(opt.id)} style={{ padding:'12px 14px', borderRadius:'8px', cursor:'pointer', border: delivery===opt.id ? `1.5px solid ${p.primary}` : `1px solid ${p.border}`, background: delivery===opt.id ? 'rgba(194,24,91,0.07)' : 'transparent', transition:'all .18s' }}>
                        <p style={{ fontSize:'18px', marginBottom:'4px' }}>{opt.icon}</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, color:p.text, marginBottom:'2px' }}>{opt.label}</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:p.muted, marginBottom:'4px' }}>{opt.desc}</p>
                        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', color:p.primary }}>+{fmt(opt.price)}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {cart.length > 0 && step === 1 && (
                <button onClick={() => setStep(2)} style={{ marginTop:'24px', width:'100%', padding:'15px', borderRadius:'4px', border:'none', background:`linear-gradient(135deg,${p.mid},${p.dark})`, color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', cursor:'pointer', boxShadow:'0 8px 28px rgba(194,24,91,0.35)' }}>
                  Proceed to Checkout →
                </button>
              )}
            </div>
          )}

          {/* ── Step 2: Payment ── */}
          {step >= 2 && (
            <div style={{ background:'rgba(253,244,247,0.98)', borderRadius:'4px', border:`1px solid ${p.border}`, boxShadow:'0 6px 28px rgba(124,16,64,0.09)', padding:'28px 32px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'22px' }}>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:p.primary, opacity:0.70 }}>Payment Method</span>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
              </div>

              {/* Method tiles */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
                {PAYMENT_METHODS.map(m => (
                  <div key={m.id} onClick={() => setMethod(m.id)} style={{
                    display:'flex', alignItems:'center', gap:'12px', padding:'14px 16px', borderRadius:'4px', cursor:'pointer',
                    border: method===m.id ? `1.5px solid ${p.primary}` : `1px solid ${p.border}`,
                    background: method===m.id ? 'linear-gradient(135deg,rgba(194,24,91,0.07),rgba(124,16,64,0.04))' : 'transparent',
                    boxShadow: method===m.id ? '0 4px 16px rgba(194,24,91,0.13)' : 'none', transition:'all .18s',
                  }}>
                    <div style={{ width:'38px', height:'38px', borderRadius:'9px', flexShrink:0, background: method===m.id ? `linear-gradient(135deg,${p.mid},${p.dark})` : 'rgba(194,24,91,0.08)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'16px', boxShadow: method===m.id ? '0 4px 12px rgba(194,24,91,0.28)' : 'none', transition:'all .18s' }}>{m.icon}</div>
                    <div style={{ flex:1 }}>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, color:p.text, marginBottom:'2px' }}>{m.label}</p>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:p.muted }}>{m.desc}</p>
                    </div>
                    {method===m.id && <div style={{ width:'16px', height:'16px', borderRadius:'50%', flexShrink:0, background:`linear-gradient(135deg,${p.mid},${p.dark})`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(194,24,91,0.38)' }}><span style={{ color:'#fff', fontSize:'8px', fontWeight:700 }}>✓</span></div>}
                  </div>
                ))}
              </div>

              {/* Card inputs */}
              {method==='card' && (
                <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'16px' }}>
                  {/* Card preview */}
                  <div style={{ background:`linear-gradient(135deg,${p.deep},${p.dark} 60%,#A01848)`, borderRadius:'8px', padding:'18px 22px', boxShadow:'0 10px 36px rgba(74,4,24,0.28)', position:'relative', overflow:'hidden' }}>
                    <div style={{ position:'absolute',top:'-20px',right:'-20px',width:'100px',height:'100px',borderRadius:'50%',background:'rgba(255,192,212,0.08)',pointerEvents:'none' }}/>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', letterSpacing:'2px', color:'rgba(255,210,225,0.50)', marginBottom:'14px', textTransform:'uppercase' }}>Card Details</p>
                    <p style={{ fontFamily:"'Courier New',monospace", fontSize:'15px', letterSpacing:'3px', color:'rgba(255,240,245,0.85)', marginBottom:'14px' }}>{form.cardNum||'•••• •••• •••• ••••'}</p>
                    <div style={{ display:'flex', justifyContent:'space-between' }}>
                      <div>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', letterSpacing:'1.5px', color:'rgba(255,210,225,0.40)', marginBottom:'2px', textTransform:'uppercase' }}>Cardholder</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, color:'rgba(255,240,245,0.75)' }}>{form.cardName||'—'}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', letterSpacing:'1.5px', color:'rgba(255,210,225,0.40)', marginBottom:'2px', textTransform:'uppercase' }}>Expires</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, color:'rgba(255,240,245,0.75)' }}>{form.expiry||'MM/YY'}</p>
                      </div>
                    </div>
                  </div>
                  <Field label="Card Number" value={form.cardNum} onChange={e => setForm(f=>({...f,cardNum:fmtCard(e.target.value)}))} placeholder="1234 5678 9012 3456"/>
                  <Field label="Cardholder Name" value={form.cardName} onChange={set('cardName')} placeholder="As printed on card"/>
                  <div style={{ display:'flex', gap:'14px' }}>
                    <Field label="Expiry" value={form.expiry} onChange={e => setForm(f=>({...f,expiry:fmtExp(e.target.value)}))} placeholder="MM/YY" half/>
                    <Field label="CVV" type="password" value={form.cvv} onChange={e => setForm(f=>({...f,cvv:e.target.value.slice(0,4)}))} placeholder="···" half/>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px', padding:'11px 16px', background:'rgba(194,24,91,0.04)', border:`1px solid rgba(194,24,91,0.10)`, borderRadius:'4px' }}>
                    <span>🔒</span>
                    <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:p.muted }}>Your card details are encrypted and secure.</span>
                  </div>
                </div>
              )}

              {(method==='easypaisa'||method==='jazzcash') && (
                <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'16px' }}>
                  <Field label={`${method==='easypaisa'?'EasyPaisa':'JazzCash'} Mobile Number`} type="tel" value={form.mpNumber} onChange={set('mpNumber')} placeholder="+92 3XX XXXXXXX"/>
                  <div style={{ padding:'14px 18px', background:'rgba(194,24,91,0.04)', border:`1px solid rgba(194,24,91,0.10)`, borderRadius:'4px' }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:p.muted, lineHeight:1.65 }}>You will receive a confirmation PIN on your registered number. Enter it to complete the transaction.</p>
                  </div>
                </div>
              )}

              {method==='cod' && (
                <div style={{ padding:'20px 24px', background:'rgba(194,24,91,0.04)', border:`1px solid rgba(194,24,91,0.10)`, borderRadius:'4px', marginBottom:'16px' }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:p.text, marginBottom:'8px' }}>Pay on Delivery</p>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:p.muted, lineHeight:1.70 }}>Keep <strong style={{ color:p.dark }}>{fmt(grandTotal)}</strong> ready in cash when our team arrives.</p>
                </div>
              )}

              {/* Delivery details */}
              <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'20px' }}>
                <div style={{ display:'flex', gap:'14px' }}>
                  <Field label="Full Name" value={form.name} onChange={set('name')} placeholder="Recipient's full name" half/>
                  <Field label="Phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX" half/>
                </div>
                <Field label="Delivery Address" value={form.address} onChange={set('address')} placeholder="Street, house/flat number"/>
                <div style={{ display:'flex', gap:'14px' }}>
                  <Field label="City" value={form.city} onChange={set('city')} placeholder="Hyderabad" half/>
                  <Field label="Area / Locality" value={form.area} onChange={set('area')} placeholder="Latifabad, Qasimabad…" half/>
                </div>
                <div>
                  <label style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase', color:p.muted, marginBottom:'7px' }}>Gift Note (optional)</label>
                  <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Add a personal message…" rows={2} style={{ width:'100%', boxSizing:'border-box', padding:'13px 16px', borderRadius:'4px', border:`1px solid ${p.border}`, background:p.softer, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:p.text, resize:'none', outline:'none', lineHeight:1.6 }}/>
                </div>
              </div>

              {step === 2 && (
                <button onClick={() => setStep(3)} style={{ width:'100%', padding:'15px', borderRadius:'4px', border:'none', background:`linear-gradient(135deg,${p.mid},${p.dark})`, color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', cursor:'pointer', boxShadow:'0 8px 28px rgba(194,24,91,0.35)' }}>Review Order →</button>
              )}
            </div>
          )}

          {/* ── Step 3: Confirm ── */}
          {step >= 3 && (
            <div style={{ background:'rgba(253,244,247,0.98)', borderRadius:'4px', border:`1px solid ${p.border}`, boxShadow:'0 6px 28px rgba(124,16,64,0.09)', padding:'28px 32px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'22px' }}>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:p.primary, opacity:0.70 }}>Confirm &amp; Place Order</span>
                <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
              </div>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
                {[{l:'Delivering to',v:form.name},{l:'Address',v:`${form.address}, ${form.area}, ${form.city}`},{l:'Phone',v:form.phone},{l:'Payment',v:PAYMENT_METHODS.find(m=>m.id===method)?.label}].map((row,i)=>(
                  <div key={i} style={{ padding:'12px 16px', background:'rgba(194,24,91,0.04)', border:`1px solid rgba(194,24,91,0.09)`, borderRadius:'4px' }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase', color:p.muted, marginBottom:'5px' }}>{row.l}</p>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:p.text }}>{row.v||'—'}</p>
                  </div>
                ))}
              </div>

              <button onClick={handlePay} disabled={paying} style={{ width:'100%', padding:'18px', borderRadius:'4px', border:'none', background:`linear-gradient(135deg,${p.mid},${p.dark})`, color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', cursor: paying ? 'not-allowed' : 'pointer', opacity: paying ? 0.80 : 1, boxShadow:'0 12px 40px rgba(194,24,91,0.40)', transition:'all .22s' }}>
                {paying ? 'Processing…' : `Pay ${fmt(grandTotal)} ✦`}
              </button>
              {paying && <div style={{ textAlign:'center', marginTop:'16px' }}><div style={{ width:'28px', height:'28px', borderRadius:'50%', border:`2px solid rgba(194,24,91,0.15)`, borderTop:`2px solid ${p.primary}`, margin:'0 auto', animation:'spin 0.8s linear infinite' }}/></div>}
            </div>
          )}
        </div>

        {/* ════ RIGHT: Order summary ════ */}
        <div style={{ position:'sticky', top:'84px', background:`linear-gradient(160deg,${p.deep},${p.dark})`, borderRadius:'4px', boxShadow:'0 24px 64px rgba(74,4,24,0.40)', overflow:'hidden', border:'1px solid rgba(255,192,212,0.12)' }}>
          <div style={{ position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,192,212,0.04) 1px,transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none' }}/>
          <div style={{ padding:'24px 22px', borderBottom:'1px solid rgba(255,192,212,0.10)', position:'relative' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }}>
              <div style={{ flex:1, height:'1px', background:'rgba(255,192,212,0.15)' }}/>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'rgba(255,210,225,0.45)' }}>Order Summary</span>
              <div style={{ flex:1, height:'1px', background:'rgba(255,192,212,0.15)' }}/>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <div style={{ width:'38px', height:'38px', borderRadius:'6px', flexShrink:0, background:item.color||'rgba(255,192,212,0.12)', overflow:'hidden' }}>
                    <img src={item.img} alt={item.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e=>{e.target.style.opacity='0';}}/>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:'#FFF0F5' }}>{item.name} ×{item.qty}</p>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', fontWeight:700, color:'rgba(255,220,235,0.80)' }}>{fmt(item.price*item.qty)}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:'20px 22px', position:'relative' }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'9px' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)' }}>Subtotal</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,245,0.75)' }}>{fmt(itemsTotal)}</span>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'16px' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)' }}>Delivery ({deliveryObj?.label})</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,245,0.75)' }}>{fmt(deliveryPrice)}</span>
            </div>
            <div style={{ height:'1px', background:'rgba(255,192,212,0.12)', marginBottom:'16px' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,210,225,0.55)' }}>Total</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:'#FFF0F5' }}>{fmt(grandTotal)}</span>
            </div>
          </div>
          <div style={{ margin:'0 22px 22px', padding:'12px 16px', background:'rgba(255,192,212,0.07)', border:'1px solid rgba(255,192,212,0.12)', borderRadius:'4px', display:'flex', alignItems:'center', gap:'10px' }}>
            <span>🔒</span>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:'rgba(255,192,212,0.45)', lineHeight:1.5 }}>256-bit SSL encryption.<br/>Your payment is safe with us.</span>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform:rotate(360deg); } }`}</style>
    </div>
  );
};

export default CartPage;

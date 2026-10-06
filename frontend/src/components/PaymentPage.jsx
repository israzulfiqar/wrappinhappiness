
// ─── PaymentPage.jsx ──────────────────────────────────────────────────────────
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../theme';

const pink = {
  primary:   '#D4537E',
  deep:      '#7C1040',
  darker:    '#4A0A1E',
  soft:      '#FBEAF0',
  softer:    '#FDF4F7',
  border:    'rgba(194,24,91,0.16)',
  borderAct: '#C2185B',
  text:      '#1C0A10',
  muted:     'rgba(74,24,40,0.50)',
  label:     '#993556',
};

const formatRs = (n) => `Rs. ${(n || 0).toLocaleString()}`;

// ── Payment method SVG icons ───────────────────────────────────────────────────
const CardIcon = ({ active }) => (
  <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
    <rect width="26" height="18" rx="3" fill={active ? '#fff' : 'rgba(124,16,64,0.12)'}/>
    <rect x="1" y="6" width="24" height="4" fill={active ? 'rgba(212,83,126,0.35)' : 'rgba(124,16,64,0.10)'}/>
    <text x="3" y="15" fontFamily="Arial" fontSize="5" fontWeight="bold" fill={active ? '#1A1F71' : 'rgba(124,16,64,0.40)'}>VISA</text>
    <rect x="17" y="11" width="4" height="4" rx="2" fill={active ? '#EB001B' : 'rgba(124,16,64,0.15)'} opacity="0.9"/>
    <rect x="19" y="11" width="4" height="4" rx="2" fill={active ? '#F79E1B' : 'rgba(124,16,64,0.10)'} opacity="0.9"/>
  </svg>
);

const EasypaisaIcon = ({ active }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill={active ? '#00A651' : 'rgba(0,166,81,0.15)'}/>
    <text x="14" y="18" textAnchor="middle" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="#fff">EP</text>
  </svg>
);

const JazzcashIcon = ({ active }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="14" fill={active ? '#E4002B' : 'rgba(228,0,43,0.15)'}/>
    <text x="14" y="18" textAnchor="middle" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="#fff">JC</text>
  </svg>
);

const CodIcon = ({ active }) => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none">
    <rect width="28" height="20" rx="3" fill={active ? '#2E7D32' : 'rgba(46,125,50,0.15)'}/>
    <circle cx="14" cy="10" r="4" fill={active ? 'rgba(255,255,255,0.25)' : 'rgba(46,125,50,0.20)'}/>
    <text x="14" y="13" textAnchor="middle" fontFamily="Arial" fontSize="7" fontWeight="bold" fill={active ? '#fff' : 'rgba(46,125,50,0.60)'}>Rs.</text>
  </svg>
);

const PAYMENT_METHODS = [
  { id:'card',       label:'Credit / Debit Card', Icon: CardIcon,       desc:'Visa · Mastercard · UnionPay' },
  { id:'easypaisa',  label:'EasyPaisa',            Icon: EasypaisaIcon,  desc:'Mobile wallet'               },
  { id:'jazzcash',   label:'JazzCash',              Icon: JazzcashIcon,   desc:'Mobile wallet'               },
  { id:'cod',        label:'Cash on Delivery',      Icon: CodIcon,        desc:'Pay when delivered'          },
];

// ── Section label ──────────────────────────────────────────────────────────────
const SectionLabel = ({ children, light = false }) => (
  <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'22px' }}>
    <div style={{ flex:1, height:'1px', background: light ? 'rgba(255,192,212,0.15)' : 'rgba(194,24,91,0.12)' }}/>
    <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color: light ? 'rgba(255,210,225,0.50)' : pink.label, whiteSpace:'nowrap' }}>{children}</span>
    <div style={{ flex:1, height:'1px', background: light ? 'rgba(255,192,212,0.15)' : 'rgba(194,24,91,0.12)' }}/>
  </div>
);

// ── Input field ────────────────────────────────────────────────────────────────
const InputField = ({ label, type='text', value, onChange, placeholder, half=false }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position:'relative', flex: half ? '1' : 'none' }}>
      <label style={{ display:'block', fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase', color: focused ? pink.primary : pink.muted, marginBottom:'7px', transition:'color .18s' }}>{label}</label>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={()=>setFocused(true)} onBlur={()=>setFocused(false)}
        style={{ ...styles.input, borderColor: focused ? pink.borderAct : pink.border, borderBottomColor: focused ? pink.borderAct : 'rgba(194,24,91,0.24)', boxShadow: focused ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none', background: focused ? '#FFF8FB' : pink.softer, fontSize:'13px', color:pink.text, transition:'all .18s' }}/>
    </div>
  );
};

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state    = location.state || {};
  const { items=[], note='', delivery='std', itemsTotal=0, deliveryPrice=0, grandTotal=0 } = state;

  const [method, setMethod] = useState('card');
  const [step,   setStep]   = useState(1);

  const [form, setForm] = useState({
    name:     'Isra Zulfiqar',
    phone:    '+92 300 1234567',
    address:  'House 12, Block B, Unit 6',
    city:     'Hyderabad',
    area:     'Latifabad',
    mpNumber: '+92 300 1234567',
  });

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  // Go to the separate Review page
  const goToReview = () => {
    navigate('/review', {
      state: {
        items, note, delivery, method,
        customer: { name: form.name, phone: form.phone, address: form.address, city: form.city, area: form.area },
        itemsTotal, deliveryPrice, grandTotal,
      },
    });
  };

  return (
    <div style={{ minHeight:'100vh', background:`linear-gradient(160deg,${pink.softer} 0%,#FAE0EC 50%,${pink.softer} 100%)`, fontFamily:"'Montserrat',sans-serif" }}>

      {/* ── Top bar ── */}
      <div style={{ height:'64px', background:`linear-gradient(90deg,${pink.darker} 0%,${pink.deep} 100%)`, borderBottom:'1px solid rgba(255,192,212,0.15)', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 48px', boxShadow:'0 2px 24px rgba(74,4,24,0.30)', position:'sticky', top:0, zIndex:100 }}>
        <button onClick={()=>navigate(-1)} style={{ background:'none', border:'none', cursor:'pointer', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:600, letterSpacing:'1.5px', color:'rgba(255,210,225,0.45)', textTransform:'uppercase' }}>← Back</button>
        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:'#FFF0F5' }}>Checkout</span>
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          {[['1','Details'],['2','Payment'],['3','Review']].map(([n, label]) => (
            <div key={n} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
              <div style={{ width:'22px', height:'22px', borderRadius:'50%', background: parseInt(n)<=step ? `linear-gradient(135deg,${pink.primary},${pink.deep})` : 'rgba(255,192,212,0.12)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color: parseInt(n)<=step ? '#FFFCFB' : 'rgba(255,192,212,0.35)', boxShadow: parseInt(n)<=step ? '0 3px 12px rgba(194,24,91,0.40)' : 'none' }}>{n}</div>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight: parseInt(n)===step ? 700 : 400, letterSpacing:'1px', color: parseInt(n)===step ? '#FFC8DC' : 'rgba(255,192,212,0.35)' }}>{label}</span>
              {n !== '3' && <div style={{ width:'20px', height:'1px', background:'rgba(255,192,212,0.18)' }}/>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 380px', maxWidth:'1200px', margin:'0 auto', padding:'48px', gap:'36px', alignItems:'start' }}>

        {/* ════ LEFT ════ */}
        <div>

          {/* Step 1 — Delivery */}
          <div style={{ background:'rgba(253,244,247,0.98)', borderRadius:'4px', border:`1px solid ${pink.border}`, boxShadow:'0 6px 28px rgba(124,16,64,0.09)', padding:'32px 36px', marginBottom:'20px' }}>
            <SectionLabel>Delivery Details</SectionLabel>
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <InputField label="Full Name"        value={form.name}    onChange={set('name')}    placeholder="Recipient's full name"/>
              <InputField label="Phone Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX"/>
              <InputField label="Delivery Address" value={form.address} onChange={set('address')}  placeholder="Street, house/flat number"/>
              <div style={{ display:'flex', gap:'14px' }}>
                <InputField label="City"            value={form.city}  onChange={set('city')}  placeholder="Hyderabad" half/>
                <InputField label="Area / Locality" value={form.area}  onChange={set('area')}  placeholder="Latifabad…" half/>
              </div>
              {note && (
                <div style={{ padding:'14px 18px', background:'linear-gradient(135deg,rgba(194,24,91,0.05),rgba(124,16,64,0.05))', border:'1px solid rgba(194,24,91,0.14)', borderRadius:'4px' }}>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:pink.primary, marginBottom:'6px' }}>Gift Note</p>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontStyle:'italic', color:pink.text, lineHeight:1.6 }}>"{note}"</p>
                </div>
              )}
            </div>
            {step === 1 && (
              <button onClick={()=>setStep(2)} disabled={!form.name||!form.phone||!form.address}
                style={{ ...styles.primaryBtn, marginTop:'28px', padding:'15px 40px', fontSize:'10px', letterSpacing:'2px', background:(!form.name||!form.phone||!form.address)?'rgba(194,24,91,0.15)':`linear-gradient(135deg,${pink.primary},${pink.deep})`, color:(!form.name||!form.phone||!form.address)?'rgba(194,24,91,0.35)':'#fff', border:'none', borderRadius:'2px', boxShadow:(!form.name||!form.phone||!form.address)?'none':`0 8px 28px rgba(194,24,91,0.35)`, cursor:(!form.name||!form.phone||!form.address)?'not-allowed':'pointer', transition:'all .22s' }}>
                Continue to Payment →
              </button>
            )}
          </div>

          {/* Step 2 — Payment method */}
          {step >= 2 && (
            <div style={{ background:'rgba(253,244,247,0.98)', borderRadius:'4px', border:`1px solid ${pink.border}`, boxShadow:'0 6px 28px rgba(124,16,64,0.09)', padding:'32px 36px', marginBottom:'20px' }}>
              <SectionLabel>Payment Method</SectionLabel>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'24px' }}>
                {PAYMENT_METHODS.map(({ id, label, Icon, desc }) => {
                  const active = method === id;
                  return (
                    <div key={id} onClick={()=>setMethod(id)} style={{ display:'flex', alignItems:'center', gap:'12px', padding:'14px 16px', borderRadius:'4px', cursor:'pointer', border: active ? `1.5px solid ${pink.borderAct}` : `1px solid ${pink.border}`, background: active ? 'linear-gradient(135deg,rgba(194,24,91,0.07),rgba(124,16,64,0.04))' : 'rgba(253,240,244,0.60)', boxShadow: active ? '0 4px 16px rgba(194,24,91,0.13)' : 'none', transition:'all .18s' }}>
                      <div style={{ width:'44px', height:'44px', borderRadius:'10px', flexShrink:0, background: active ? `linear-gradient(135deg,${pink.primary},${pink.deep})` : 'rgba(194,24,91,0.06)', display:'flex', alignItems:'center', justifyContent:'center', boxShadow: active ? '0 4px 12px rgba(194,24,91,0.30)' : 'none', transition:'all .18s' }}>
                        <Icon active={active}/>
                      </div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, color:pink.text, marginBottom:'2px' }}>{label}</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:pink.muted }}>{desc}</p>
                      </div>
                      {active && (
                        <div style={{ width:'18px', height:'18px', borderRadius:'50%', flexShrink:0, background:`linear-gradient(135deg,${pink.primary},${pink.deep})`, display:'flex', alignItems:'center', justifyContent:'center', boxShadow:'0 2px 8px rgba(194,24,91,0.40)' }}>
                          <span style={{ color:'#fff', fontSize:'9px', fontWeight:700 }}>✓</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Card → paid securely on Stripe's page, no fields here */}
              {method === 'card' && (
                <div style={{ display:'flex', alignItems:'flex-start', gap:'12px', padding:'16px 18px', background:'linear-gradient(135deg,rgba(194,24,91,0.06),rgba(124,16,64,0.04))', border:'1px solid rgba(194,24,91,0.14)', borderRadius:'6px' }}>
                  <span style={{ fontSize:'18px', flexShrink:0 }}>🔒</span>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:pink.muted, lineHeight:1.7, margin:0 }}>
                    <strong style={{ color:pink.label }}>Secure card payment.</strong> You will enter your card details on Stripe's secure payment page after reviewing your order. We never see or store your card.
                  </p>
                </div>
              )}

              {/* ── EasyPaisa ── */}
              {method === 'easypaisa' && (
                <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  <InputField label="EasyPaisa Mobile Number" type="tel" value={form.mpNumber} onChange={set('mpNumber')} placeholder="+92 3XX XXXXXXX"/>
                  <div style={{ padding:'14px 18px', background:'linear-gradient(135deg,rgba(0,166,81,0.06),rgba(0,102,51,0.04))', border:'1px solid rgba(0,166,81,0.18)', borderRadius:'6px' }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:'#2E7D32', lineHeight:1.65, margin:0 }}>
                      You'll receive a <strong>4-digit PIN</strong> on your registered number to confirm payment of <strong>{formatRs(grandTotal)}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* ── JazzCash ── */}
              {method === 'jazzcash' && (
                <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  <InputField label="JazzCash Mobile Number" type="tel" value={form.mpNumber} onChange={set('mpNumber')} placeholder="+92 3XX XXXXXXX"/>
                  <div style={{ padding:'14px 18px', background:'linear-gradient(135deg,rgba(228,0,43,0.06),rgba(179,0,32,0.04))', border:'1px solid rgba(228,0,43,0.18)', borderRadius:'6px' }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:'#B30020', lineHeight:1.65, margin:0 }}>
                      A <strong>confirmation PIN</strong> will be sent to your JazzCash number to approve <strong>{formatRs(grandTotal)}</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* ── COD ── */}
              {method === 'cod' && (
                <div style={{ padding:'22px 24px', background:'linear-gradient(135deg,rgba(46,125,50,0.06),rgba(27,94,32,0.03))', border:'1px solid rgba(46,125,50,0.18)', borderRadius:'8px' }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:pink.text, marginBottom:'6px' }}>Pay on Delivery</p>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:pink.muted, lineHeight:1.70, margin:0 }}>
                    Keep <strong style={{ color:'#2E7D32' }}>{formatRs(grandTotal)}</strong> in cash ready when our team arrives. Available across Hyderabad.
                  </p>
                </div>
              )}

              <button onClick={goToReview} style={{ ...styles.primaryBtn, marginTop:'28px', padding:'15px 40px', fontSize:'10px', letterSpacing:'2px', background:`linear-gradient(135deg,${pink.primary},${pink.deep})`, color:'#fff', border:'none', borderRadius:'2px', boxShadow:`0 8px 28px rgba(194,24,91,0.35)`, cursor:'pointer' }}>
                Review Order →
              </button>
            </div>
          )}
        </div>

        {/* ════ RIGHT: Order summary card ════ */}
        <div style={{ position:'sticky', top:'84px', background:`linear-gradient(160deg,${pink.darker} 0%,${pink.deep} 100%)`, borderRadius:'4px', boxShadow:`0 24px 64px rgba(74,4,24,0.40)`, overflow:'hidden', border:'1px solid rgba(255,192,212,0.12)' }}>
          <div style={{ padding:'28px 24px', borderBottom:'1px solid rgba(255,192,212,0.10)' }}>
            <SectionLabel light>Your Order</SectionLabel>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {items.length > 0 ? items.map(item => (
                <div key={item.id} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <div style={{ width:'42px', height:'42px', borderRadius:'8px', flexShrink:0, background:'rgba(255,192,212,0.10)', border:'1px solid rgba(255,192,212,0.15)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>{item.emoji || '🌸'}</div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:'#FFF0F5', margin:0 }}>{item.name}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:'rgba(255,192,212,0.45)', margin:0 }}>×{item.qty}</p>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', fontWeight:700, color:'rgba(255,220,235,0.80)', margin:0 }}>{formatRs(item.price*item.qty)}</p>
                </div>
              )) : (
                <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)', textAlign:'center', margin:0 }}>No items yet. Go back to the studio to add some.</p>
              )}
            </div>
          </div>

          <div style={{ padding:'22px 24px' }}>
            {[['Subtotal', formatRs(itemsTotal)],['Delivery', formatRs(deliveryPrice)]].map(([l,v]) => (
              <div key={l} style={{ display:'flex', justifyContent:'space-between', marginBottom:'10px' }}>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)' }}>{l}</span>
                <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,245,0.75)' }}>{v}</span>
              </div>
            ))}
            <div style={{ height:'1px', background:'rgba(255,192,212,0.12)', margin:'8px 0 18px' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,210,225,0.55)' }}>Total</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:'#FFF0F5' }}>{formatRs(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
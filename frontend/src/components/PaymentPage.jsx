
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

// ── Section label ──────────────────────────────────────────────────────────────
const SectionLabel = ({ children, light = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
    <div style={{ flex: 1, height: '1px', background: light ? 'rgba(255,192,212,0.15)' : 'rgba(194,24,91,0.12)' }}/>
    <span style={{
      fontFamily: "'Montserrat',sans-serif",
      fontSize: '8px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase',
      color: light ? 'rgba(255,210,225,0.50)' : pink.label,
      whiteSpace: 'nowrap',
    }}>{children}</span>
    <div style={{ flex: 1, height: '1px', background: light ? 'rgba(255,192,212,0.15)' : 'rgba(194,24,91,0.12)' }}/>
  </div>
);

// ── Input field ────────────────────────────────────────────────────────────────
const InputField = ({ label, type = 'text', value, onChange, placeholder, half = false }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ position: 'relative', flex: half ? '1' : 'none' }}>
      <label style={{
        display: 'block', fontFamily: "'Montserrat',sans-serif",
        fontSize: '9px', fontWeight: 700, letterSpacing: '1.8px', textTransform: 'uppercase',
        color: focused ? pink.primary : pink.muted, marginBottom: '7px', transition: 'color .18s',
      }}>{label}</label>
      <input
        type={type} value={value} onChange={onChange} placeholder={placeholder}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          ...styles.input,
          borderColor: focused ? pink.borderAct : pink.border,
          borderBottomColor: focused ? pink.borderAct : 'rgba(194,24,91,0.24)',
          boxShadow: focused ? `0 0 0 3px rgba(194,24,91,0.08)` : 'none',
          background: focused ? '#FFF8FB' : pink.softer,
          fontSize: '13px', color: pink.text,
          transition: 'all .18s',
        }}
      />
    </div>
  );
};

const PAYMENT_METHODS = [
  { id: 'card',      label: 'Credit / Debit Card', icon: '💳', desc: 'Visa · Mastercard · UnionPay' },
  { id: 'easypaisa', label: 'EasyPaisa',           icon: '📱', desc: 'Mobile wallet'               },
  { id: 'jazzcash',  label: 'JazzCash',             icon: '📲', desc: 'Mobile wallet'               },
  { id: 'cod',       label: 'Cash on Delivery',     icon: '💵', desc: 'Pay when delivered'          },
];

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state    = location.state || {};

  const {
    items         = [],
    note          = '',
    itemsTotal    = 0,
    deliveryPrice = 0,
    grandTotal    = 0,
  } = state;

  const [method,     setMethod]  = useState('card');
  const [step,       setStep]    = useState(1);
  const [submitting, setSub]     = useState(false);
  const [done,       setDone]    = useState(false);

  const [form, setForm] = useState({
    name: '', phone: '', address: '', city: 'Hyderabad', area: '',
    cardNum: '', expiry: '', cvv: '', cardName: '', mpNumber: '',
  });
  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const formatCard = (v) => v.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  const formatExp  = (v) => { const d = v.replace(/\D/g,'').slice(0,4); return d.length > 2 ? d.slice(0,2)+'/'+d.slice(2) : d; };

  const handlePay = async () => {
    setSub(true);
    await new Promise(r => setTimeout(r, 2200));
    setSub(false); setDone(true);
  };

  // ── Success screen ─────────────────────────────────────────────────────────
  if (done) return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(160deg, ${pink.darker} 0%, ${pink.deep} 55%, #5C0A2A 100%)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Montserrat',sans-serif", padding: '40px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* bg texture */}
      <div style={{ position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,192,212,0.05) 1px, transparent 1px)',backgroundSize:'24px 24px',pointerEvents:'none' }}/>
      <div style={{ position:'absolute',top:'-100px',right:'-100px',width:'400px',height:'400px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,192,212,0.10),transparent 70%)',pointerEvents:'none' }}/>

      <div style={{
        background: 'rgba(253,240,244,0.98)',
        borderRadius: '4px',
        boxShadow: '0 40px 100px rgba(74,4,24,0.50)',
        padding: '64px 56px', maxWidth: '500px', width: '100%', textAlign: 'center',
        border: '1px solid rgba(194,24,91,0.12)',
        position: 'relative', zIndex: 1,
      }}>
        {/* tick */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '50%',
          background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '28px', margin: '0 auto 24px',
          boxShadow: `0 12px 36px rgba(194,24,91,0.35)`,
          color: '#fff',
        }}>✓</div>

        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:pink.primary, marginBottom:'12px' }}>
          Order Confirmed
        </p>
        <h2 style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'36px', fontWeight:700, color:pink.text, marginBottom:'8px', lineHeight:1.1 }}>
          Thank you,<br/>
          <span style={{ fontStyle:'italic', color:pink.deep }}>your gift is on its way.</span>
        </h2>

        <div style={{ height:'1px', background:'rgba(194,24,91,0.10)', margin:'24px 0' }}/>

        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:pink.muted, lineHeight:1.7, marginBottom:'8px' }}>
          Order ID: <strong style={{ color:pink.text }}>WH-{Math.random().toString(36).slice(2,8).toUpperCase()}</strong>
        </p>
        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:pink.muted, marginBottom:'36px' }}>
          Total paid: <strong style={{ color:pink.deep }}>{formatRs(grandTotal)}</strong>
        </p>

        <button onClick={() => navigate('/')} style={{
          ...styles.primaryBtn,
          background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
          padding: '15px 48px', fontSize: '10px', letterSpacing: '2px',
          boxShadow: `0 10px 32px rgba(194,24,91,0.35)`,
          color: '#fff', border: 'none', borderRadius: '2px', cursor: 'pointer',
        }}>
          Back to Home ✦
        </button>
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: `linear-gradient(160deg, ${pink.softer} 0%, #FAE0EC 50%, ${pink.softer} 100%)`,
      fontFamily: "'Montserrat',sans-serif",
    }}>

      {/* ── Top bar ── */}
      <div style={{
        height: '64px',
        background: `linear-gradient(90deg, ${pink.darker} 0%, ${pink.deep} 100%)`,
        borderBottom: `1px solid rgba(255,192,212,0.15)`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 48px',
        boxShadow: '0 2px 24px rgba(74,4,24,0.30)',
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <button onClick={() => navigate(-1)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: "'Montserrat',sans-serif",
          fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px',
          color: 'rgba(255,210,225,0.45)', textTransform: 'uppercase',
        }}>← Back to Studio</button>

        <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:'#FFF0F5', letterSpacing:'0.01em' }}>
          Checkout
        </span>

        {/* Step indicators */}
        <div style={{ display:'flex', alignItems:'center', gap:'8px' }}>
          {[['1','Details'],['2','Payment'],['3','Confirm']].map(([n, label]) => (
            <div key={n} style={{ display:'flex', alignItems:'center', gap:'6px' }}>
              <div style={{
                width:'22px', height:'22px', borderRadius:'50%',
                background: parseInt(n) <= step
                  ? `linear-gradient(135deg,${pink.primary},${pink.deep})`
                  : 'rgba(255,192,212,0.12)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700,
                color: parseInt(n) <= step ? '#FFFCFB' : 'rgba(255,192,212,0.35)',
                boxShadow: parseInt(n) <= step ? `0 3px 12px rgba(194,24,91,0.40)` : 'none',
              }}>{n}</div>
              <span style={{
                fontFamily:"'Montserrat',sans-serif",
                fontSize:'9px', fontWeight: parseInt(n) === step ? 700 : 400, letterSpacing:'1px',
                color: parseInt(n) === step ? '#FFC8DC' : 'rgba(255,192,212,0.35)',
              }}>{label}</span>
              {n !== '3' && <div style={{ width:'20px', height:'1px', background:'rgba(255,192,212,0.18)' }}/>}
            </div>
          ))}
        </div>
      </div>

      {/* ── Main grid ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 380px',
        maxWidth: '1200px', margin: '0 auto',
        padding: '48px 48px', gap: '36px', alignItems: 'start',
      }}>

        {/* ════ LEFT: Steps ════ */}
        <div>

          {/* ── Step 1: Delivery details ── */}
          {step >= 1 && (
            <div style={{
              background: 'rgba(253,244,247,0.98)',
              borderRadius: '4px',
              border: `1px solid ${pink.border}`,
              boxShadow: '0 6px 28px rgba(124,16,64,0.09)',
              padding: '32px 36px', marginBottom: '20px',
            }}>
              <SectionLabel>Delivery Details</SectionLabel>
              <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                <InputField label="Full Name"         value={form.name}    onChange={set('name')}    placeholder="Recipient's full name"/>
                <InputField label="Phone Number" type="tel" value={form.phone} onChange={set('phone')} placeholder="+92 3XX XXXXXXX"/>
                <InputField label="Delivery Address"  value={form.address} onChange={set('address')}  placeholder="Street, house/flat number"/>
                <div style={{ display:'flex', gap:'14px' }}>
                  <InputField label="City"          value={form.city} onChange={set('city')} placeholder="Hyderabad" half/>
                  <InputField label="Area / Locality" value={form.area} onChange={set('area')} placeholder="Latifabad, Qasimabad…" half/>
                </div>
                {note && (
                  <div style={{
                    padding: '14px 18px',
                    background: `linear-gradient(135deg, rgba(194,24,91,0.05), rgba(124,16,64,0.05))`,
                    border: `1px solid rgba(194,24,91,0.14)`,
                    borderRadius: '4px',
                  }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:pink.primary, marginBottom:'6px' }}>Gift Note</p>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontStyle:'italic', color:pink.text, lineHeight:1.6 }}>"{note}"</p>
                  </div>
                )}
              </div>
              {step === 1 && (
                <button
                  onClick={() => setStep(2)}
                  disabled={!form.name || !form.phone || !form.address}
                  style={{
                    ...styles.primaryBtn,
                    marginTop: '28px', padding: '15px 40px',
                    fontSize: '10px', letterSpacing: '2px',
                    background: (!form.name || !form.phone || !form.address)
                      ? 'rgba(194,24,91,0.15)'
                      : `linear-gradient(135deg,${pink.primary},${pink.deep})`,
                    color: (!form.name || !form.phone || !form.address) ? 'rgba(194,24,91,0.35)' : '#fff',
                    border: 'none', borderRadius: '2px',
                    boxShadow: (!form.name || !form.phone || !form.address) ? 'none' : `0 8px 28px rgba(194,24,91,0.35)`,
                    cursor: (!form.name || !form.phone || !form.address) ? 'not-allowed' : 'pointer',
                    transition: 'all .22s',
                  }}
                >Continue to Payment →</button>
              )}
            </div>
          )}

          {/* ── Step 2: Payment ── */}
          {step >= 2 && (
            <div style={{
              background: 'rgba(253,244,247,0.98)',
              borderRadius: '4px',
              border: `1px solid ${pink.border}`,
              boxShadow: '0 6px 28px rgba(124,16,64,0.09)',
              padding: '32px 36px', marginBottom: '20px',
            }}>
              <SectionLabel>Payment Method</SectionLabel>

              {/* Method selector */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'28px' }}>
                {PAYMENT_METHODS.map(m => (
                  <div key={m.id} onClick={() => setMethod(m.id)} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '14px 16px', borderRadius: '4px', cursor: 'pointer',
                    border: method === m.id ? `1.5px solid ${pink.borderAct}` : `1px solid ${pink.border}`,
                    background: method === m.id
                      ? `linear-gradient(135deg, rgba(194,24,91,0.07), rgba(124,16,64,0.04))`
                      : 'rgba(253,240,244,0.60)',
                    boxShadow: method === m.id ? `0 4px 16px rgba(194,24,91,0.13)` : 'none',
                    transition: 'all .18s',
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                      background: method === m.id
                        ? `linear-gradient(135deg,${pink.primary},${pink.deep})`
                        : `rgba(194,24,91,0.08)`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '18px',
                      boxShadow: method === m.id ? `0 4px 12px rgba(194,24,91,0.30)` : 'none',
                      transition: 'all .18s',
                    }}>{m.icon}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, color:pink.text, marginBottom:'2px' }}>{m.label}</p>
                      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:pink.muted }}>{m.desc}</p>
                    </div>
                    {method === m.id && (
                      <div style={{
                        width:'18px', height:'18px', borderRadius:'50%', flexShrink:0,
                        background:`linear-gradient(135deg,${pink.primary},${pink.deep})`,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        boxShadow:`0 2px 8px rgba(194,24,91,0.40)`,
                      }}>
                        <span style={{ color:'#fff', fontSize:'9px', fontWeight:700 }}>✓</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Card fields */}
              {method === 'card' && (
                <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  {/* Card visual strip */}
                  <div style={{
                    background: `linear-gradient(135deg, ${pink.darker} 0%, ${pink.deep} 60%, #A01848 100%)`,
                    borderRadius: '8px', padding: '20px 24px',
                    boxShadow: `0 10px 36px rgba(74,4,24,0.30)`,
                    marginBottom: '8px',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    <div style={{ position:'absolute',top:'-20px',right:'-20px',width:'120px',height:'120px',borderRadius:'50%',background:'rgba(255,192,212,0.08)',pointerEvents:'none' }}/>
                    <div style={{ position:'absolute',bottom:'-30px',left:'30px',width:'100px',height:'100px',borderRadius:'50%',background:'rgba(255,192,212,0.05)',pointerEvents:'none' }}/>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', letterSpacing:'2px', color:'rgba(255,210,225,0.50)', marginBottom:'16px', textTransform:'uppercase' }}>Card Details</p>
                    <p style={{ fontFamily:"'Courier New',monospace", fontSize:'16px', letterSpacing:'3px', color:'rgba(255,240,245,0.85)', marginBottom:'16px' }}>
                      {form.cardNum || '•••• •••• •••• ••••'}
                    </p>
                    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
                      <div>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', letterSpacing:'1.5px', color:'rgba(255,210,225,0.40)', marginBottom:'3px', textTransform:'uppercase' }}>Cardholder</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, color:'rgba(255,240,245,0.75)' }}>{form.cardName || '—'}</p>
                      </div>
                      <div style={{ textAlign:'right' }}>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', letterSpacing:'1.5px', color:'rgba(255,210,225,0.40)', marginBottom:'3px', textTransform:'uppercase' }}>Expires</p>
                        <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, color:'rgba(255,240,245,0.75)' }}>{form.expiry || 'MM/YY'}</p>
                      </div>
                    </div>
                  </div>

                  <InputField label="Card Number" value={form.cardNum}
                    onChange={e => setForm(f => ({ ...f, cardNum: formatCard(e.target.value) }))}
                    placeholder="1234 5678 9012 3456"/>
                  <InputField label="Cardholder Name" value={form.cardName} onChange={set('cardName')} placeholder="As printed on card"/>
                  <div style={{ display:'flex', gap:'14px' }}>
                    <InputField label="Expiry" value={form.expiry}
                      onChange={e => setForm(f => ({ ...f, expiry: formatExp(e.target.value) }))}
                      placeholder="MM/YY" half/>
                    <InputField label="CVV" type="password" value={form.cvv}
                      onChange={e => setForm(f => ({ ...f, cvv: e.target.value.slice(0,4) }))}
                      placeholder="···" half/>
                  </div>
                  <div style={{
                    display:'flex', alignItems:'center', gap:'10px',
                    padding:'11px 16px',
                    background:`linear-gradient(135deg,rgba(194,24,91,0.05),rgba(124,16,64,0.04))`,
                    border:`1px solid rgba(194,24,91,0.10)`, borderRadius:'4px',
                  }}>
                    <span style={{ fontSize:'14px' }}>🔒</span>
                    <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:pink.muted }}>
                      Your card details are encrypted and secure.
                    </span>
                  </div>
                </div>
              )}

              {/* EasyPaisa / JazzCash */}
              {(method === 'easypaisa' || method === 'jazzcash') && (
                <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
                  <InputField
                    label={`${method === 'easypaisa' ? 'EasyPaisa' : 'JazzCash'} Mobile Number`}
                    type="tel" value={form.mpNumber} onChange={set('mpNumber')}
                    placeholder="+92 3XX XXXXXXX"
                  />
                  <div style={{
                    padding:'14px 18px',
                    background:`linear-gradient(135deg,rgba(194,24,91,0.05),rgba(124,16,64,0.04))`,
                    border:`1px solid rgba(194,24,91,0.12)`, borderRadius:'4px',
                  }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:pink.muted, lineHeight:1.65 }}>
                      You will receive a confirmation PIN on your registered mobile number. Enter it to complete the transaction.
                    </p>
                  </div>
                </div>
              )}

              {/* COD */}
              {method === 'cod' && (
                <div style={{
                  padding:'20px 24px',
                  background:`linear-gradient(135deg,rgba(194,24,91,0.05),rgba(124,16,64,0.03))`,
                  border:`1px solid rgba(194,24,91,0.12)`, borderRadius:'4px',
                }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:pink.text, marginBottom:'8px' }}>
                    Pay on Delivery
                  </p>
                  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:pink.muted, lineHeight:1.70 }}>
                    Keep <strong style={{ color:pink.deep }}>{formatRs(grandTotal)}</strong> ready in cash when our team arrives.
                    Available across Hyderabad.
                  </p>
                </div>
              )}

              {step === 2 && (
                <button onClick={() => setStep(3)} style={{
                  ...styles.primaryBtn,
                  marginTop: '28px', padding: '15px 40px',
                  fontSize: '10px', letterSpacing: '2px',
                  background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
                  color: '#fff', border: 'none', borderRadius: '2px',
                  boxShadow: `0 8px 28px rgba(194,24,91,0.35)`,
                  cursor: 'pointer',
                }}>Review Order →</button>
              )}
            </div>
          )}

          {/* ── Step 3: Confirm ── */}
          {step >= 3 && (
            <div style={{
              background: 'rgba(253,244,247,0.98)',
              borderRadius: '4px',
              border: `1px solid ${pink.border}`,
              boxShadow: '0 6px 28px rgba(124,16,64,0.09)',
              padding: '32px 36px',
            }}>
              <SectionLabel>Confirm &amp; Place Order</SectionLabel>

              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginBottom:'28px' }}>
                {[
                  { l:'Delivering to', v:form.name },
                  { l:'Address',       v:`${form.address}, ${form.area}, ${form.city}` },
                  { l:'Phone',         v:form.phone },
                  { l:'Payment',       v:PAYMENT_METHODS.find(m=>m.id===method)?.label },
                ].map((row, i) => (
                  <div key={i} style={{
                    padding:'14px 16px',
                    background:`linear-gradient(135deg,rgba(194,24,91,0.05),rgba(124,16,64,0.03))`,
                    border:`1px solid rgba(194,24,91,0.10)`, borderRadius:'4px',
                  }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'1.8px', textTransform:'uppercase', color:pink.muted, marginBottom:'6px' }}>{row.l}</p>
                    <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:pink.text }}>{row.v || '—'}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={handlePay}
                disabled={submitting}
                style={{
                  ...styles.primaryBtn,
                  width:'100%', padding:'18px',
                  fontSize:'11px', letterSpacing:'2.5px',
                  background:`linear-gradient(135deg,${pink.primary},${pink.deep})`,
                  color:'#fff', border:'none', borderRadius:'2px',
                  boxShadow:`0 12px 40px rgba(194,24,91,0.40)`,
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.80 : 1,
                  transition: 'all .22s',
                }}
              >
                {submitting ? 'Processing…' : `Pay ${formatRs(grandTotal)} ✦`}
              </button>

              {submitting && (
                <div style={{ textAlign:'center', marginTop:'18px' }}>
                  <div style={{
                    width:'28px', height:'28px', borderRadius:'50%',
                    border:`2px solid rgba(194,24,91,0.15)`,
                    borderTop:`2px solid ${pink.primary}`,
                    margin:'0 auto', animation:'spin 0.8s linear infinite',
                  }}/>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ════ RIGHT: Order card ════ */}
        <div style={{
          position:'sticky', top:'84px',
          background:`linear-gradient(160deg, ${pink.darker} 0%, ${pink.deep} 100%)`,
          borderRadius:'4px',
          boxShadow:`0 24px 64px rgba(74,4,24,0.40)`,
          overflow:'hidden',
          border:`1px solid rgba(255,192,212,0.12)`,
        }}>
          {/* Top pattern */}
          <div style={{ position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(255,192,212,0.04) 1px, transparent 1px)',backgroundSize:'20px 20px',pointerEvents:'none' }}/>
          <div style={{ position:'absolute',top:'-40px',right:'-40px',width:'180px',height:'180px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,192,212,0.10),transparent 70%)',pointerEvents:'none' }}/>

          <div style={{ padding:'28px 24px', borderBottom:'1px solid rgba(255,192,212,0.10)', position:'relative' }}>
            <SectionLabel light>Your Order</SectionLabel>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {items.map(item => (
                <div key={item.id} style={{ display:'flex', alignItems:'center', gap:'12px' }}>
                  <div style={{
                    width:'42px', height:'42px', borderRadius:'8px', flexShrink:0,
                    background:'rgba(255,192,212,0.10)',
                    border:'1px solid rgba(255,192,212,0.15)',
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:'18px',
                  }}>{item.emoji || '🌸'}</div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:'#FFF0F5' }}>{item.name}</p>
                    <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:'rgba(255,192,212,0.45)' }}>×{item.qty}</p>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'14px', fontWeight:700, color:'rgba(255,220,235,0.80)' }}>
                    {formatRs(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding:'22px 24px', position:'relative' }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'10px' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)' }}>Subtotal</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,245,0.75)' }}>{formatRs(itemsTotal)}</span>
            </div>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'18px' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,192,212,0.45)' }}>Delivery</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', color:'rgba(255,240,245,0.75)' }}>{formatRs(deliveryPrice)}</span>
            </div>
            <div style={{ height:'1px', background:'rgba(255,192,212,0.12)', marginBottom:'18px' }}/>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:'rgba(255,210,225,0.55)' }}>Total</span>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:'#FFF0F5' }}>{formatRs(grandTotal)}</span>
            </div>
          </div>

          {/* Security badge */}
          <div style={{
            margin:'0 24px 24px',
            padding:'12px 16px',
            background:'rgba(255,192,212,0.07)',
            border:'1px solid rgba(255,192,212,0.12)',
            borderRadius:'4px',
            display:'flex', alignItems:'center', gap:'10px',
          }}>
            <span style={{ fontSize:'14px' }}>🔒</span>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:'rgba(255,192,212,0.45)', lineHeight:1.5 }}>
              256-bit SSL encryption.<br/>Your payment is safe with us.
            </span>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default PaymentPage;

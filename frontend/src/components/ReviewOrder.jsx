import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { startStripeCheckout } from '../stripeCheckout';

const fmt = n => `Rs. ${Number(n || 0).toLocaleString()}`;

const p = {
  deep: '#4A0A1E', dark: '#7C1040', mid: '#D4537E', primary: '#C2185B',
  softer: '#FDF5F8', border: 'rgba(194,24,91,0.14)', text: '#1C0A10', muted: 'rgba(74,24,40,0.50)',
};

const METHOD_LABELS = {
  card: 'Credit / Debit Card (secure Stripe page)',
  easypaisa: 'EasyPaisa',
  jazzcash: 'JazzCash',
  cod: 'Cash on Delivery',
};

const label = { fontFamily: "'Montserrat',sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: 1.8, textTransform: 'uppercase', color: p.muted, marginBottom: 5 };
const value = { fontFamily: "'Cormorant Garamond',serif", fontSize: 16, fontWeight: 700, color: p.text, margin: 0 };

const Box = ({ title, children }) => (
  <div style={{ background: 'rgba(253,244,247,0.98)', borderRadius: 4, border: `1px solid ${p.border}`, boxShadow: '0 6px 28px rgba(124,16,64,0.09)', padding: '28px 32px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
      <div style={{ flex: 1, height: 1, background: 'rgba(194,24,91,0.10)' }} />
      <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: 8, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: p.primary, opacity: 0.7 }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: 'rgba(194,24,91,0.10)' }} />
    </div>
    {children}
  </div>
);

const ReviewOrder = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    items = [], delivery = 'std', note = '', method = 'card', customer = {},
    itemsTotal = 0, deliveryPrice = 0, grandTotal = 0,
  } = state || {};

  const [paying, setPaying] = useState(false);
  const [done, setDone] = useState(false);
  const [orderId] = useState(() => 'WH-' + Math.random().toString(36).slice(2, 8).toUpperCase());

  const address = [customer.address, customer.area, customer.city].filter(Boolean).join(', ');

  const handlePay = async () => {
    setPaying(true);
    if (method !== 'card') {
      await new Promise(r => setTimeout(r, 2200));
      setPaying(false);
      setDone(true);
      return;
    }
    try {
      await startStripeCheckout({
        items, delivery, note,
        customer: { name: customer.name, phone: customer.phone, address },
      });
    } catch (e) {
      alert(e.message);
      setPaying(false);
    }
  };

  // Nothing to review (page opened directly)
  if (items.length === 0) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: p.softer, fontFamily: "'Montserrat',sans-serif" }}>
      <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, color: p.dark, marginBottom: 16 }}>Nothing to review yet</p>
      <button onClick={() => navigate('/')} style={{ padding: '12px 28px', borderRadius: 4, border: 'none', background: `linear-gradient(135deg,${p.mid},${p.dark})`, color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', cursor: 'pointer' }}>Back to Home</button>
    </div>
  );

  // Success screen for non-card methods (EasyPaisa / JazzCash / COD)
  if (done) return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(160deg,${p.deep},${p.dark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, fontFamily: "'Montserrat',sans-serif" }}>
      <div style={{ background: 'rgba(253,240,244,0.98)', borderRadius: 4, padding: '56px 48px', maxWidth: 500, width: '100%', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg,${p.mid},${p.dark})`, color: '#fff', fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>✓</div>
        <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: p.primary, marginBottom: 12 }}>Order Confirmed</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: p.text, marginBottom: 16 }}>Thank you, your gift is on its way.</h2>
        <p style={{ fontSize: 12, color: p.muted, marginBottom: 8 }}>Order ID: <strong style={{ color: p.text }}>{orderId}</strong></p>
        <p style={{ fontSize: 12, color: p.muted, marginBottom: 32 }}>Total: <strong style={{ color: p.dark }}>{fmt(grandTotal)}</strong></p>
        <button onClick={() => navigate('/')} style={{ padding: '15px 48px', borderRadius: 4, border: 'none', background: `linear-gradient(135deg,${p.mid},${p.dark})`, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>Back to Home ✦</button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(160deg,${p.softer} 0%,#FAE0EC 50%,${p.softer} 100%)`, fontFamily: "'Montserrat',sans-serif" }}>

      {/* Top bar */}
      <div style={{ height: 64, background: `linear-gradient(90deg,${p.deep},${p.dark})`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 48px', boxShadow: '0 2px 24px rgba(74,4,24,0.30)', position: 'sticky', top: 0, zIndex: 100 }}>
        <button onClick={() => navigate(-1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 10, fontWeight: 600, letterSpacing: 1.5, color: 'rgba(255,210,225,0.6)', textTransform: 'uppercase' }}>← Back</button>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 700, color: '#FFF0F5' }}>Review Order</span>
        <span style={{ width: 60 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', maxWidth: 1100, margin: '0 auto', padding: 48, gap: 32, alignItems: 'start' }}>

        {/* LEFT */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Box title="Delivery & Payment">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['Delivering to', customer.name],
                ['Phone', customer.phone],
                ['Address', address],
                ['Payment', METHOD_LABELS[method]],
              ].map(([l, v]) => (
                <div key={l} style={{ padding: '12px 16px', background: 'rgba(194,24,91,0.04)', border: '1px solid rgba(194,24,91,0.09)', borderRadius: 4 }}>
                  <p style={label}>{l}</p>
                  <p style={value}>{v || '—'}</p>
                </div>
              ))}
            </div>
            {note && (
              <div style={{ marginTop: 14, padding: '14px 18px', background: 'rgba(194,24,91,0.05)', border: '1px solid rgba(194,24,91,0.14)', borderRadius: 4 }}>
                <p style={label}>Gift Note</p>
                <p style={{ ...value, fontStyle: 'italic', fontWeight: 400, fontSize: 15 }}>"{note}"</p>
              </div>
            )}
          </Box>

          <Box title="Your Items">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(item => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  {item.img && (
                    <div style={{ width: 48, height: 48, borderRadius: 8, overflow: 'hidden', background: p.softer, flexShrink: 0 }}>
                      <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={e => { e.target.style.opacity = '0'; }} />
                    </div>
                  )}
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: p.text, margin: 0 }}>{item.name}</p>
                    <p style={{ fontSize: 10, color: p.muted, margin: 0 }}>×{item.qty}</p>
                  </div>
                  <p style={{ ...value, color: p.dark }}>{fmt(item.price * item.qty)}</p>
                </div>
              ))}
            </div>
          </Box>
        </div>

        {/* RIGHT */}
        <div style={{ position: 'sticky', top: 84, background: `linear-gradient(160deg,${p.deep},${p.dark})`, borderRadius: 4, boxShadow: '0 24px 64px rgba(74,4,24,0.40)', padding: '26px 24px' }}>
          {[['Subtotal', fmt(itemsTotal)], ['Delivery', fmt(deliveryPrice)]].map(([l, v]) => (
            <div key={l} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ fontSize: 11, color: 'rgba(255,192,212,0.55)' }}>{l}</span>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 15, color: 'rgba(255,240,245,0.8)' }}>{v}</span>
            </div>
          ))}
          <div style={{ height: 1, background: 'rgba(255,192,212,0.12)', margin: '8px 0 16px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 22 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,210,225,0.6)' }}>Total</span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 700, color: '#FFF0F5' }}>{fmt(grandTotal)}</span>
          </div>

          <button onClick={handlePay} disabled={paying} style={{ width: '100%', padding: 16, borderRadius: 4, border: 'none', background: `linear-gradient(135deg,${p.mid},#A01848)`, color: '#fff', fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: paying ? 'not-allowed' : 'pointer', opacity: paying ? 0.8 : 1, boxShadow: '0 10px 30px rgba(0,0,0,0.30)' }}>
            {paying ? 'Processing…' : method === 'card' ? `Pay ${fmt(grandTotal)} ✦` : 'Place Order ✦'}
          </button>

          <p style={{ fontSize: 10, lineHeight: 1.6, color: 'rgba(255,192,212,0.55)', textAlign: 'center', marginTop: 14 }}>
            {method === 'card'
              ? '🔒 You will enter your card details securely on Stripe\'s payment page.'
              : '🔒 Your order details are safe with us.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewOrder;
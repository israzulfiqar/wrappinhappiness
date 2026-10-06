import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../stripeCheckout';

const p = { deep: '#4A0A1E', dark: '#7C1040', mid: '#D4537E', primary: '#C2185B', text: '#1C0A10', muted: 'rgba(74,24,40,0.50)' };

const Shell = ({ icon, label, title, children }) => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: `linear-gradient(160deg,${p.deep},${p.dark})`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, fontFamily: "'Montserrat',sans-serif" }}>
      <div style={{ background: 'rgba(253,240,244,0.98)', borderRadius: 4, padding: '56px 48px', maxWidth: 500, width: '100%', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: `linear-gradient(135deg,${p.mid},${p.dark})`, color: '#fff', fontSize: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>{icon}</div>
        <p style={{ fontSize: 8, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: p.primary, marginBottom: 12 }}>{label}</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, color: p.text, marginBottom: 16 }}>{title}</h2>
        {children}
        <button onClick={() => navigate('/')} style={{ marginTop: 28, padding: '15px 48px', borderRadius: 4, border: 'none', background: `linear-gradient(135deg,${p.mid},${p.dark})`, color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', cursor: 'pointer' }}>Back to Home ✦</button>
      </div>
    </div>
  );
};

export default function CheckoutSuccess() {
  const [params] = useSearchParams();
  const [info, setInfo] = useState(null);
  const id = params.get('session_id');

  useEffect(() => {
    if (!id) return;
    fetch(`${API_URL}/api/stripe/session/${id}`).then(r => r.json()).then(setInfo).catch(() => {});
  }, [id]);

  return (
    <Shell icon="✓" label="Test payment successful" title="Thank you, your gift is on its way.">
      {info && (
        <p style={{ fontSize: 12, color: p.muted }}>
          Total paid: <strong style={{ color: p.dark }}>Rs. {Math.round(info.amount_total).toLocaleString()}</strong>
          {' · '}Status: <strong>{info.payment_status}</strong>
        </p>
      )}
    </Shell>
  );
}

export function CheckoutCancel() {
  return (
    <Shell icon="×" label="Payment cancelled" title="No worries, your cart is safe.">
      <p style={{ fontSize: 12, color: p.muted }}>You were not charged. Go back and try again whenever you're ready.</p>
    </Shell>
  );
}
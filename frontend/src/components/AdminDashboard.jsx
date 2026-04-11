import styles from '../theme';

const STATS = [
  { label: 'NEW ORDERS', value: '24',       trend: '+ 18% today',        color: styles.colors.deepRed },
  { label: 'REVENUE',    value: 'Rs. 58k',  trend: '+ 12% vs yesterday', color: styles.colors.darkGrey },
  { label: 'BLUEPRINTS', value: '18',        trend: '6 pending pack',     color: styles.colors.deepRed },
  { label: 'LOW STOCK',  value: '3',         trend: '⚠️ Restock',          color: '#ff4d4d' },
];

const ORDERS = [
  { id: '#WH-024', customer: 'Sana Malik',   bundle: 'Pink Romance ×2', total: 'Rs. 4,840', status: 'New'    },
  { id: '#WH-023', customer: 'Fatima Raza',  bundle: 'Birthday Joy',    total: 'Rs. 2,100', status: 'Packed' },
];

const AdminDashboard = () => (
  <div style={{ padding: '60px 8%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
      <div>
        <h1 style={{ ...styles.headline, fontSize: '42px', margin: 0 }}>
          Manage <span style={styles.italicText}>operations</span>
        </h1>
        <p style={{ ...styles.bodyText, color: '#666', marginTop: '10px' }}>
          Real-time business insights for Wrapping Happiness.
        </p>
      </div>
      <button style={styles.primaryBtn}>+ New Product</button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '25px', marginBottom: '40px' }}>
      {STATS.map((s) => (
        <div key={s.label} style={styles.productCard}>
          <p style={{ ...styles.bodyText, fontSize: '11px', fontWeight: '800', color: s.color, letterSpacing: '1px' }}>{s.label}</p>
          <h2 style={{ ...styles.headline, fontSize: '28px', margin: '10px 0' }}>{s.value}</h2>
          <p style={{ ...styles.bodyText, fontSize: '12px', opacity: 0.6 }}>{s.trend}</p>
        </div>
      ))}
    </div>

    <div style={styles.productCard}>
      <h3 style={{ ...styles.headline, marginBottom: '20px', textAlign: 'left' }}>Recent Orders</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: `1px solid ${styles.colors.border}`, color: '#888', fontSize: '12px', fontFamily: 'Montserrat' }}>
            <th style={{ padding: '15px' }}>CUSTOMER</th>
            <th>BUNDLE</th><th>TOTAL</th><th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {ORDERS.map((o) => (
            <tr key={o.id} style={{ borderBottom: `1px solid ${styles.colors.border}` }}>
              <td style={{ ...styles.bodyText, padding: '15px', fontWeight: '600' }}>{o.customer}</td>
              <td style={{ ...styles.bodyText, opacity: 0.7 }}>{o.bundle}</td>
              <td style={{ ...styles.bodyText, color: styles.colors.deepRed, fontWeight: '700' }}>{o.total}</td>
              <td>
                <span style={{ padding: '4px 12px', borderRadius: '20px', fontSize: '11px', background: o.status === 'Packed' ? '#e8f5e9' : '#fff3e0', color: o.status === 'Packed' ? '#2e7d32' : '#ef6c00', fontFamily: 'Montserrat', fontWeight: '700' }}>
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminDashboard;
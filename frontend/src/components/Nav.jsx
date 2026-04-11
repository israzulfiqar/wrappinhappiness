import { Link } from 'react-router-dom';
import styles from '../theme';

const Nav = () => (
  <nav style={styles.nav}>
    <Link to="/" style={{ textDecoration: 'none', ...styles.headline, fontSize: '24px' }}>
      Wrapping <span style={{ color: styles.colors.deepRed }}>Happiness</span>
    </Link>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <Link to="/" style={styles.navLink}>HOME</Link>
      <Link to="/admin" style={styles.navLink}>ADMIN</Link>
      <Link to="/studio">
        <button style={{ ...styles.primaryBtn, padding: '10px 22px', fontSize: '13px' }}>
          Open Studio
        </button>
      </Link>
    </div>
  </nav>
);

export default Nav;
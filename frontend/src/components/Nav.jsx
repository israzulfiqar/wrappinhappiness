
import { Link } from 'react-router-dom';
import logo from '../assets/img/IMG_1546.png';

const Nav = () => (
  <nav style={{
    position: 'absolute',
    top: '24px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 100,
    width: 'calc(100% - 64px)',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 28px',
    borderRadius: '60px',
    background: 'linear-gradient(135deg, #5A0832 0%, #8B1050 100%)',
    border: '1px solid rgba(249,168,212,0.25)',
    boxShadow: '0 4px 24px rgba(74,4,32,0.45)',
  }}>

    {/* ── Left: Logo + Brand + Links ── */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>

      {/* Logo + Branding */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <img
          src={logo}
          alt="Wrapping Happiness Logo"
          style={{
            height: '42px', width: '42px',
            objectFit: 'contain', borderRadius: '50%',
            border: '2px solid rgba(249,168,212,0.40)',
            boxShadow: '0 2px 12px rgba(236,72,153,0.35)',
          }}
        />
        <div style={{
          fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }}>
          <span style={{ color: '#FDE4EE' }}>Wrapping </span>
          <span style={{ color: '#F9A8D4', fontWeight: 400, fontStyle: 'italic' }}>Happiness</span>
        </div>
      </Link>

      {/* Nav Links */}
      <div style={{ display: 'flex', gap: '28px' }}>
        {[
          { to: '/studio',          label: '2D Studio'       },
          { to: '/gallery',         label: 'Collections'     },
          { to: '/our-story',           label: 'Our Story'       },
          { to: '/what-defines-us', label: 'What Defines Us' },
          
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              color: 'rgba(249,168,212,0.85)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = '#FDE4EE'}
            onMouseLeave={e => e.target.style.color = 'rgba(249,168,212,0.85)'}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>

    {/* ── Right Side ── */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <span style={{
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 500,
        fontSize: '10px',
        letterSpacing: '1.8px',
        textTransform: 'uppercase',
        color: 'rgba(249,168,212,0.55)',
      }}>
        PKR (Rs.)
      </span>

      <Link to="/admin" style={{ textDecoration: 'none' }}>
        <button style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '1.8px',
          textTransform: 'uppercase',
          color: '#FFF0F4',
          background: 'linear-gradient(135deg, #F9A8D4 0%, #EC4899 100%)',
          border: '1px solid rgba(255,255,255,0.20)',
          borderRadius: '30px',
          padding: '10px 24px',
          cursor: 'pointer',
          boxShadow: '0 4px 14px rgba(236,72,153,0.40)',
          transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => {
            e.target.style.boxShadow = '0 6px 20px rgba(236,72,153,0.60)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.target.style.boxShadow = '0 4px 14px rgba(236,72,153,0.40)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Admin Login
        </button>
      </Link>
    </div>
  </nav>
);

export default Nav;
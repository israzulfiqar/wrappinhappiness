

export const styles = {
  colors: {
    cream: '#FBFBFC',      // Navigation & Body Background
    deepRed: '#7C0A27',    // Primary Branding & Headlines
    logoPink: '#D088C3',   // Accents, Prices & Category Labels
    babyPink: '#FFC4C4',   // Hero Background & Footer Headings
    darkGrey: '#333333',   // Body Text
    white: '#FFFFFF',
    border: 'rgba(124, 10, 39, 0.1)'
  },

  page: { 
    background: ' #FFC4C4', 
    minHeight: '100vh', 
    fontFamily: "'Montserrat', sans-serif",
    color: '#333333'
  },

  /* --- NAVIGATION --- */
  nav: { 
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
    padding: '0 8%', height: '85px', background: '#7C0A27', 
    borderBottom: '1px solid rgba(241, 233, 235, 0.05)',
    position: 'sticky', top: 0, zIndex: 1000 
  },
  navLink: {
    color: '#FFFFFF', 
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px',
    fontSize: '13px', textDecoration: 'none'
  },

  /* --- TYPOGRAPHY --- */
  headline: { 
    fontFamily: "'Playfair Display', serif", 
    fontWeight: 900, color: '#7C0A27', lineHeight: '1.2'
  },
  bodyText: {
    fontFamily: "'Montserrat', sans-serif", fontWeight: '400',
    color: '#333333', lineHeight: '1.6', fontSize: '15px'
  },
  italicText: { fontStyle: 'italic', color: '#D088C3' },

  /* --- BUTTONS --- */
  primaryBtn: { 
    padding: '16px 36px', borderRadius: '50px', background: '#7C0A27', color: '#FBFBFC', 
    fontWeight: '700', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif",
    boxShadow: '0 8px 20px rgba(124, 10, 39, 0.2)', transition: '0.3s'
  },

  /* --- COMPONENTS --- */
  productCard: {
    background: ' #FFff', borderRadius: '24px', padding: '25px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.04)', textAlign: 'center'
  },
  stepsSection: { 
    padding: '100px 8%', background: '#7C0A27', color: '#D088C3', 
    borderRadius: '80px 80px 0 0' 
  },
  footer: {
    padding: '80px 8%', background: '#7C0A27', color: '#FBFBFC'
  },

  /* --- AUTH & INPUTS --- */
  authBox: {
    background: '#D088C3', 
    backdropFilter: 'blur(20px)', 
    borderRadius: '40px', 
    padding: '50px',
    boxShadow: '0 20px 60px rgba(124, 10, 39, 0.05)',
    textAlign: 'left'
  },
  input: {
    width: '100%',
    padding: '18px 25px',
    margin: '10px 0',
    borderRadius: '15px', 
    border: '1px solid rgba(124, 10, 39, 0.1)', 
    background: '#FFFFFF',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '14px',
    color: '#333333',
    outline: 'none',
    transition: '0.3s ease',
    boxSizing: 'border-box'
  },
  authTab: {
    background: 'none', 
    border: 'none', 
    cursor: 'pointer', 
    fontSize: '22px', 
    fontWeight: '900', 
    fontFamily: "'Playfair Display', serif", 
    paddingBottom: '8px'
  }
};

export default styles;
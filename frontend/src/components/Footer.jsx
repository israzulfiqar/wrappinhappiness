
// ─── Footer.jsx ───────────────────────────────────────────────────────────────
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../theme';

const Ornament = ({ color = 'rgba(184,168,130,0.20)' }) => (
  <svg width="64" height="14" viewBox="0 0 64 14" fill="none" style={{ display:'block' }}>
    <line x1="0" y1="7" x2="22" y2="7" stroke={color} strokeWidth="0.75"/>
    <circle cx="32" cy="7" r="3" stroke={color} strokeWidth="0.75" fill="none"/>
    <circle cx="32" cy="7" r="1.2" fill={color}/>
    <line x1="42" y1="7" x2="64" y2="7" stroke={color} strokeWidth="0.75"/>
  </svg>
);

const LINKS = {
  Studio: [
    { label:'2D Gift Studio',       to:'/studio'  },
    { label:'Theme Gallery',         to:'/gallery' },
    { label:'AI Recommendations',    to:'/studio'  },
    { label:'Saved Designs',         to:'/studio'  },
  ],
  Products: [
    { label:'Fresh Bouquets',        to:'/gallery' },
    { label:'Pintresty Cakes',       to:'/gallery' },
    { label:'Balloon Arrangements',  to:'/gallery' },
    { label:'Surprise Bundles',      to:'/gallery' },
  ],
  Help: [
    { label:'Track Order',           to:'/'        },
    { label:'Custom Requests',       to:'/'        },
    { label:'Contact Us',            to:'/'        },
    { label:'Admin Login',           to:'/admin'   },
  ],
};

const FooterLink = ({ label, to }) => {
  const [hov, setHov] = useState(false);
  return (
    <Link to={to}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:'flex', alignItems:'center', gap:'8px',
        fontFamily:"'Montserrat',sans-serif",
        fontSize:'12.5px', fontWeight:300,
        color: hov ? 'rgba(212,201,176,0.80)' : 'rgba(212,201,176,0.38)',
        textDecoration:'none', marginBottom:'12px', transition:'color .2s',
      }}
    >
      {hov && <span style={{ display:'inline-block', width:'10px', height:'1px', background:'#8C7B56', flexShrink:0 }}/>}
      {label}
    </Link>
  );
};

const SocialBtn = ({ icon }) => {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width:'36px', height:'36px', borderRadius:'2px',
        border: hov ? '1px solid rgba(184,168,130,0.40)' : '1px solid rgba(255,255,255,0.07)',
        background: hov ? 'rgba(184,168,130,0.12)' : 'rgba(255,255,255,0.03)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontFamily:"'Montserrat',sans-serif",
        fontSize:'9px', fontWeight:700, letterSpacing:'0.5px',
        color: hov ? 'rgba(212,201,176,0.80)' : 'rgba(212,201,176,0.35)',
        cursor:'pointer', transition:'all .2s',
      }}
    >{icon}</div>
  );
};

const Footer = () => {
  const [email,      setEmail]      = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailFoc,   setEmailFoc]   = useState(false);

  const handleSub = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true); setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1C1A14 0%, #141210 100%)',
      fontFamily: "'Montserrat',sans-serif",
    }}>
      {/* Top decorative bar */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(184,168,130,0.35), transparent)',
      }}/>

      <div style={{ padding: '72px 8% 0' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '56px', marginBottom: '64px',
        }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '18px' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond','Playfair Display',serif",
                fontSize: '28px', fontWeight: 700, lineHeight: 0.95,
                color: '#EDE5D8', letterSpacing: '-0.01em', marginBottom: '4px',
              }}>Wrapping</p>
              <p style={{
                fontFamily: "'Cormorant Garamond','Playfair Display',serif",
                fontSize: '28px', fontWeight: 400, fontStyle: 'italic', lineHeight: 0.95,
                color: 'rgba(184,168,130,0.70)',
              }}>Happiness</p>
            </div>
            <div style={{ marginBottom: '20px' }}><Ornament/></div>
            <p style={{
              fontFamily: "'Montserrat',sans-serif",
              fontSize: '13px', fontWeight: 300,
              color: 'rgba(212,201,176,0.36)', lineHeight: 1.80,
              maxWidth: '260px', marginBottom: '26px',
            }}>
              Pakistan's first interactive gifting studio. Turning moments into memories,
              one curated bundle at a time.
            </p>

            {/* Location */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px',
              border: '1px solid rgba(184,168,130,0.16)',
              borderRadius: '2px', marginBottom: '26px',
            }}>
              <span style={{ fontSize: '11px' }}>📍</span>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:500, letterSpacing:'1.5px', color:'rgba(212,201,176,0.45)' }}>
                Hyderabad, Sindh, Pakistan
              </span>
            </div>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {['IG','FB','TK','WA'].map(s => <SocialBtn key={s} icon={s}/>)}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px' }}>
                <div style={{ width:'14px', height:'1px', background:'rgba(184,168,130,0.35)' }}/>
                <h5 style={{
                  fontFamily:"'Montserrat',sans-serif",
                  fontSize:'9px', fontWeight:700,
                  letterSpacing:'2.5px', textTransform:'uppercase',
                  color:'rgba(212,201,176,0.30)', margin:0,
                }}>{heading}</h5>
              </div>
              {links.map(l => <FooterLink key={l.label} label={l.label} to={l.to}/>)}
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          padding: '40px 0', marginBottom: '40px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px',
        }}>
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: '22px', fontWeight: 700,
              color: '#EDE5D8', marginBottom: '5px', lineHeight: 1.2,
            }}>Stay in the loop</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:300, color:'rgba(212,201,176,0.38)', lineHeight:1.6 }}>
              New collections, seasonal launches &amp; exclusive offers — straight to your inbox.
            </p>
          </div>
          <form onSubmit={handleSub} style={{ display:'flex', flexShrink:0, maxWidth:'400px', width:'100%' }}>
            {subscribed ? (
              <div style={{
                flex:1, padding:'14px 20px',
                background:'rgba(92,107,80,0.12)',
                border:'1px solid rgba(122,136,104,0.25)',
                borderRadius:'2px',
                fontFamily:"'Montserrat',sans-serif",
                fontSize:'11px', fontWeight:600, letterSpacing:'1px',
                color:'rgba(184,168,130,0.75)', textAlign:'center',
              }}>✓ You're subscribed</div>
            ) : (
              <>
                <input
                  type="email" value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  onFocus={() => setEmailFoc(true)}
                  onBlur={() => setEmailFoc(false)}
                  style={{
                    flex:1, padding:'14px 18px',
                    background: emailFoc ? 'rgba(253,250,244,0.06)' : 'rgba(255,255,255,0.03)',
                    border:'1px solid',
                    borderColor: emailFoc ? 'rgba(184,168,130,0.40)' : 'rgba(255,255,255,0.07)',
                    borderRight:'none',
                    borderRadius:'2px 0 0 2px',
                    fontFamily:"'Montserrat',sans-serif",
                    fontSize:'12px', color:'rgba(212,201,176,0.75)',
                    outline:'none', transition:'all .2s',
                  }}
                />
                <button type="submit" style={{
                  ...styles.primaryBtn,
                  padding:'14px 28px', borderRadius:'0 2px 2px 0',
                  fontSize:'10px', letterSpacing:'1.8px', flexShrink:0,
                }}>Subscribe</button>
              </>
            )}
          </form>
        </div>

        {/* Bottom bar */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'center',
          padding:'0 0 32px', flexWrap:'wrap', gap:'16px',
        }}>
          <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(212,201,176,0.20)' }}>
            © 2026 Wrapping Happiness — SZABIST FYP · CS Department
          </span>
          <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(212,201,176,0.20)' }}>Made with</span>
            <span style={{ color:'#8C7B56', fontSize:'13px' }}>♥</span>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(212,201,176,0.20)' }}>
              by Alisha · Isra · Ahmed
            </span>
          </div>
          <div style={{ display:'flex', gap:'20px' }}>
            {['Privacy Policy','Terms of Service','Refund Policy'].map(l => (
              <span key={l} style={{
                fontFamily:"'Montserrat',sans-serif",
                fontSize:'10px', color:'rgba(212,201,176,0.22)',
                cursor:'pointer', letterSpacing:'0.5px',
              }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// ─── LandingPage.jsx ──────────────────────────────────────────────────────────
import { Link, useNavigate } from 'react-router-dom';
import styles from '../theme';
import ProductGallery from './ProductGallery';
// import logo from '../assets/img/IMG_1546.png';
import OurStory from './OurStory';
import WhatDefinesUs from './WhatDefinesUs';
import Studio from './Studio';
import LocationAndSocial from './LocationAndSocial';

const Ornament = ({ color = 'rgba(249,168,212,0.55)' }) => (
  <svg width="80" height="18" viewBox="0 0 80 18" fill="none" style={{ display: 'block' }}>
    <line x1="0" y1="9" x2="28" y2="9" stroke={color} strokeWidth="0.75"/>
    <circle cx="40" cy="9" r="4.5" stroke={color} strokeWidth="0.75" fill="none"/>
    <circle cx="40" cy="9" r="1.8" fill={color}/>
    <line x1="52" y1="9" x2="80" y2="9" stroke={color} strokeWidth="0.75"/>
  </svg>
);

const PetalAccent = ({ opacity = 0.07 }) => (
  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" style={{ display: 'block' }}>
    <path d="M110 10 C60 10 10 60 10 110 C10 160 60 200 110 200 C160 200 200 160 200 110 C200 60 160 10 110 10 Z" fill={`rgba(249,168,212,${opacity})`}/>
    <path d="M110 10 C110 10 30 80 50 150 C70 180 110 200 110 200" stroke={`rgba(236,72,153,${opacity * 2})`} strokeWidth="1" fill="none"/>
    <path d="M110 10 C110 10 190 80 170 150 C150 180 110 200 110 200" stroke={`rgba(236,72,153,${opacity * 2})`} strokeWidth="1" fill="none"/>
  </svg>
);

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#FDF0F4' }}>

      <section style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}>

        {/* LEFT: image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="/img/background_img.jpeg"
            alt="Wrapping Happiness - Floral Gift"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(160deg,rgba(74,0,40,0.38) 0%,rgba(107,0,56,0.22) 50%,rgba(139,16,80,0.30) 100%)',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px',
            background: 'linear-gradient(to right, transparent, rgba(58,4,32,0.75))',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '140px',
            background: 'linear-gradient(to top, rgba(58,4,32,0.55), transparent)',
            pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', bottom: '28px', left: '50%',
            transform: 'translateX(-50%)', zIndex: 2,
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '12px', fontStyle: 'italic',
              color: 'rgba(249,168,212,0.70)',
              letterSpacing: '2.5px', whiteSpace: 'nowrap',
            }}>Pakistan's First AI Gift Studio</span>
          </div>
        </div>

        {/* RIGHT: dark pink panel */}
        <div style={{
          padding: '80px 8% 80px 7%',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: 'linear-gradient(160deg,#3A0420 0%,#5A0832 42%,#8B1050 70%,#4A0428 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-40px', right: '-60px', pointerEvents: 'none' }}>
            <PetalAccent opacity={0.12}/>
          </div>
          <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', pointerEvents: 'none', transform: 'rotate(180deg)' }}>
            <PetalAccent opacity={0.08}/>
          </div>
          <div style={{ position:'absolute', top:'-120px', right:'-100px', width:'380px', height:'380px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.18),transparent 70%)', pointerEvents:'none' }}/>
          <div style={{ position:'absolute', bottom:'-100px', left:'-80px', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,rgba(190,24,93,0.14),transparent 70%)', pointerEvents:'none' }}/>
          <div style={{
            position: 'absolute', top: '10%', right: 0,
            width: '1px', height: '80%',
            background: 'linear-gradient(to bottom, transparent, rgba(249,168,212,0.20), transparent)',
          }}/>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(249,168,212,0.07) 1px, transparent 1px)',
            backgroundSize: '22px 22px', pointerEvents: 'none',
          }}/>
          <div style={{
            position: 'absolute', top: 0, left: '8%', right: '8%', height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.28), transparent)',
          }}/>

          <div style={{ position: 'relative', zIndex: 1 }}>

            {/* Logo
            <div style={{ marginBottom: '28px' }}>
              <img
                src={logo}
                alt="Wrapping Happiness Logo"
                style={{
                  height: '80px', width: '80px',
                  objectFit: 'contain', borderRadius: '50%', display: 'block',
                  boxShadow: '0 4px 24px rgba(236,72,153,0.40)',
                  border: '2px solid rgba(249,168,212,0.40)',
                }}
              />
            </div> */}

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '32px' }}>
              <div style={{ width: '28px', height: '1.5px', background: 'rgba(249,168,212,0.50)', borderRadius: '2px' }}/>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '9px', fontWeight: 700,
                letterSpacing: '3px', textTransform: 'uppercase',
                color: 'rgba(249,168,212,0.65)',
              }}>Pakistan's First AI Gift Studio</span>
            </div>

            {/* Headline — cute rewrite */}
            {/* <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(50px,5.2vw,82px)',
              fontWeight: 700, lineHeight: 0.94, marginBottom: '6px',
              color: '#FDE4EE', letterSpacing: '-0.02em',
            }}>Wrapping </h4> */}
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(50px,5.2vw,82px)',
              fontWeight: 400, fontStyle: 'italic',
              lineHeight: 0.94, marginBottom: '6px',
              color: '#F9A8D4', letterSpacing: '-0.02em',
            }}> Wrapping Happiness</h2>
            {/* <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(50px,5.2vw,82px)',
              fontWeight: 700, lineHeight: 0.94, marginBottom: '36px',
              color: '#FDE4EE', letterSpacing: '-0.02em',
            }}>a love story. </h2> */}

            {/* Ornament */}
            <div style={{ marginBottom: '28px' }}><Ornament/></div>

            {/* Paragraph — italic, bigger */}
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '19px', fontStyle: 'italic', fontWeight: 300,
              color: 'rgba(253,228,238,0.72)',
              maxWidth: '460px', lineHeight: 1.85,
              marginBottom: '48px', letterSpacing: '0.01em',
            }}>
               Experience Pakistan’s first interactive 2D gift studio. Our AI curates perfect bouquets, cakes, and bundles — designed by you, delivered with all our heart. We bridge the gap between your digital inspiration and physical reality through our signature AI-assisted design process
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <button
                onClick={() => navigate('/auth')}
                style={{
                  padding: '18px 48px', fontSize: '11px',
                  background: 'linear-gradient(135deg,#F9A8D4,#EC4899)',
                  border: 'none', color: '#fff',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase',
                  borderRadius: '30px', cursor: 'pointer',
                  boxShadow: '0 8px 28px rgba(236,72,153,0.45)',
                }}
              >Enter the Studio ✦</button>
              <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <button style={{
                  padding: '17px 36px', fontSize: '11px',
                  border: '1px solid rgba(249,168,212,0.35)',
                  color: '#F9A8D4',
                  background: 'rgba(249,168,212,0.08)',
                  backdropFilter: 'blur(8px)',
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  borderRadius: '30px', cursor: 'pointer',
                }}>View Collections</button>
              </Link>
            </div>

            {/* Social proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex' }}>
                {['AK','FN','SM','ZM'].map((init, i) => (
                  <div key={i} style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    border: '2.5px solid rgba(74,4,32,0.90)',
                    background: [
                      'linear-gradient(135deg,#F9A8D4,#EC4899)',
                      'linear-gradient(135deg,#EC4899,#BE185D)',
                      'linear-gradient(135deg,#F9A8D4,#D4607A)',
                      'linear-gradient(135deg,#FBD6EA,#F9A8D4)',
                    ][i],
                    marginLeft: i === 0 ? 0 : '-12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', fontWeight: 700, color: '#fff',
                    fontFamily: "'Montserrat', sans-serif",
                    boxShadow: '0 2px 10px rgba(236,72,153,0.35)',
                  }}>{init}</div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                  {[...Array(5)].map((_,i) => (
                    <span key={i} style={{ color: '#F9A8D4', fontSize: '13px' }}>★</span>
                  ))}
                </div>
                <p style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '12px', fontWeight: 300,
                  color: 'rgba(253,228,238,0.50)', margin: 0,
                }}>
                  <strong style={{ fontWeight: 700, color: '#FDE4EE' }}>2,400+</strong> families gifted · Hyderabad, PK
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <OurStory/>
      <WhatDefinesUs/>
<Studio></Studio>      
      <ProductGallery/>
      <LocationAndSocial/>
    </div>
  );
};

export default LandingPage;
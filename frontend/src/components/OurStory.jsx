
// ─── OurStory.jsx ─────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom';

const OurStory = () => (
  <div style={{
    background: 'linear-gradient(160deg,#4A0028 0%,#6B0038 35%,#8B1050 60%,#5A0032 100%)',
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Montserrat', sans-serif",
  }}>

    {/* Ambient glows */}
    <div style={{ position:'absolute', top:'-180px', right:'-140px', width:'520px', height:'520px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.18),transparent 70%)', pointerEvents:'none' }}/>
    <div style={{ position:'absolute', bottom:'-160px', left:'-120px', width:'460px', height:'460px', borderRadius:'50%', background:'radial-gradient(circle,rgba(190,24,93,0.14),transparent 70%)', pointerEvents:'none' }}/>
    <div style={{ position:'absolute', top:'40%', right:'15%', width:'300px', height:'300px', borderRadius:'50%', background:'radial-gradient(circle,rgba(249,168,212,0.07),transparent 70%)', pointerEvents:'none' }}/>

    {/* Dot texture */}
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:'radial-gradient(circle,rgba(249,168,212,0.06) 1px,transparent 1px)',
      backgroundSize:'26px 26px',
    }}/>

    {/* Top hairline */}
    <div style={{ position:'absolute', top:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.30),transparent)' }}/>

    {/* Nav */}
    <div style={{ padding:'40px 7% 0', position:'relative', zIndex:1 }}>
      <Link to="/" style={{
        display:'inline-flex', alignItems:'center', gap:'8px',
        fontSize:'10px', fontWeight:700, letterSpacing:'2px',
        textTransform:'uppercase', color:'rgba(249,168,212,0.55)',
        textDecoration:'none',
      }}>‹ Back to Home</Link>
    </div>

    {/* ════ MAIN TWO-COLUMN ════ */}
    <div style={{
      padding: '40px 7% 100px',
      position: 'relative', zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '420px 1fr',
      gap: '64px',
      alignItems: 'start',
    }}>

      {/* ══ LEFT: CEO Photo ══ */}
      <div style={{ display:'flex', flexDirection:'column', gap:'28px' }}>

        {/* Label + heading above photo */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'16px' }}>
            <div style={{ width:'24px', height:'1.5px', background:'rgba(249,168,212,0.45)', borderRadius:'2px' }}/>
            <span style={{
              fontFamily:"'Montserrat',sans-serif",
              fontSize:'9px', fontWeight:700,
              letterSpacing:'3px', textTransform:'uppercase',
              color:'rgba(249,168,212,0.60)',
            }}>Our Story</span>
          </div>
          <h1 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(48px,5.5vw,72px)',
            fontWeight:700, color:'#FDE4EE',
            lineHeight:0.95, letterSpacing:'-0.03em',
            margin:0,
          }}>
            Our{' '}
            <span style={{ fontStyle:'italic', fontWeight:400, color:'#F9A8D4' }}>Story.</span>
          </h1>
        </div>

        {/* CEO Photo */}
        <div style={{ position:'relative', width:'100%' }}>
          <div style={{
            width:'100%',
            aspectRatio:'3/4',
            borderRadius:'20px',
            overflow:'hidden',
            position:'relative',
            boxShadow:'0 24px 60px rgba(0,0,0,0.45), 0 6px 18px rgba(236,72,153,0.20)',
            border:'1px solid rgba(249,168,212,0.18)',
            background:'linear-gradient(160deg,rgba(249,168,212,0.12),rgba(190,24,93,0.08))',
          }}>
            <img
              src="/img/ceoimg.jpeg"
              alt="Founder & CEO"
              style={{
                width:'100%', height:'100%',
                objectFit:'cover', objectPosition:'center top',
                display:'block',
              }}
              onError={e => { e.target.style.display = 'none'; }}
            />
            <div style={{
              position:'absolute', inset:0, pointerEvents:'none',
              backgroundImage:'radial-gradient(circle,rgba(249,168,212,0.08) 1px,transparent 1px)',
              backgroundSize:'20px 20px',
            }}/>
            <div style={{
              position:'absolute', inset:0, pointerEvents:'none',
              background:'linear-gradient(160deg,rgba(74,0,40,0.04) 0%,transparent 45%,rgba(74,0,40,0.30) 100%)',
            }}/>

            {/* Name badge */}
            <div style={{
              position:'absolute', bottom:'16px', left:'16px', right:'16px',
              background:'rgba(42,4,24,0.78)',
              backdropFilter:'blur(18px)',
              borderRadius:'12px', padding:'14px 18px',
              border:'1px solid rgba(249,168,212,0.20)',
              boxShadow:'0 6px 20px rgba(0,0,0,0.30)',
            }}>
              <p style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:'20px', fontWeight:700,
                color:'#FDE4EE', marginBottom:'3px', lineHeight:1.1,
              }}>Isra Zulfiqar</p>
              <p style={{
                fontSize:'8px', fontWeight:700,
                letterSpacing:'1.8px', textTransform:'uppercase',
                color:'rgba(249,168,212,0.55)', margin:0,
              }}>Founder &amp; CEO · Wrapping Happiness</p>
            </div>
          </div>

          {/* Corner flower
          <div style={{
            position:'absolute', top:'-12px', left:'-12px',
            width:'50px', height:'50px', borderRadius:'12px',
            background:'rgba(74,0,40,0.70)',
            backdropFilter:'blur(8px)',
            border:'1px solid rgba(249,168,212,0.22)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'20px',
            boxShadow:'0 4px 14px rgba(0,0,0,0.25)',
          }}></div> */}

         
          <div style={{
            position:'absolute', top:'24px', right:'-16px',
            background:'linear-gradient(135deg,#F9A8D4,#EC4899)',
            borderRadius:'12px', padding:'12px 15px',
            textAlign:'center',
            boxShadow:'0 8px 24px rgba(236,72,153,0.45)',
            border:'2px solid rgba(74,0,40,0.90)',
          }}>
            <p style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'24px', fontWeight:700,
              color:'#fff', lineHeight:1, marginBottom:'3px',
            }}>300+</p>
            <p style={{
              fontSize:'8px', fontWeight:700,
              letterSpacing:'1.5px', textTransform:'uppercase',
              color:'rgba(255,255,255,0.80)', margin:0,
            }}>Families<br/>Gifted</p>
          </div>
        </div>
      </div>

      {/* ══ RIGHT: Heading above paragraph card ══ */}
      <div style={{
        display:'flex',
        flexDirection:'column',
        gap:'24px',
        paddingTop:'8px',
      }}>

        {/* Heading above the card */}
        <div>
          <p style={{
            fontFamily:"'Montserrat',sans-serif",
            fontSize:'9px', fontWeight:700,
            letterSpacing:'3px', textTransform:'uppercase',
            color:'rgba(249,168,212,0.60)',
            marginBottom:'10px',
          }}>The Beginning</p>
          <h2 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(32px,3.5vw,50px)',
            fontWeight:700, color:'#FDE4EE',
            lineHeight:1.05, letterSpacing:'-0.02em',
            margin:0,
          }}>
            Born from a{' '}
            <span style={{ fontStyle:'italic', fontWeight:400, color:'#F9A8D4' }}>
              love of giving.
            </span>
          </h2>
        </div>

        {/* Paragraph card — light pink bg, dark pink text */}
        <div style={{
          background:'linear-gradient(135deg,#FDE4EE,#F9C8DA)',
          border:'1px solid rgba(190,24,93,0.18)',
          borderRadius:'24px',
          padding:'40px 36px',
          boxShadow:'0 12px 40px rgba(190,24,93,0.15)',
          position:'relative',
          overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage:'radial-gradient(circle,rgba(190,24,93,0.06) 1px,transparent 1px)',
            backgroundSize:'20px 20px',
          }}/>

          <div style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'100px', lineHeight:0.5,
            color:'rgba(190,24,93,0.12)',
            marginBottom:'24px',
            userSelect:'none',
            position:'relative', zIndex:1,
          }}>"</div>

          <p style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(20px,2.2vw,26px)',
            fontStyle:'italic',
            color:'#6B0038',
            lineHeight:1.88,
            letterSpacing:'0.01em',
            margin:0,
            position:'relative', zIndex:1,
          }}>
          
            It all started with a lavender dream and a very long to-do list.

Our founder, Isra Zulfiqar, wanted to surprise her bestie with the ultimate lavender-themed celebration. But the reality was far from a "Pinterest moment." The cake was from one bakery, the flowers were from a different florist, and finding balloons that actually matched the "aesthetic" felt like Mission: Impossible. After chasing down three different vendors who didn't "understand the assignment," she realized something was missing in Hyderabad.

Why should gifting feel like a logistics project?

That’s when Wrapping Happiness was born. We created a cozy little home studio where all your favorite things live under one roof. No more mismatched colors or stressful pickups! From dream-worthy floral arrangements and Pinterest-perfect cakes to those airy, aesthetic balloons that make every photo pop—everything is designed to vibe together.

Using our interactive 2D Studio, you get to play creator, and we make sure the reality is even better than the vision. We’re still a small, home-based team, which means every ribbon is tied and every balloon is styled with a whole lot of love and a little bit of magic. 
          </p>

          {/* Signature */}
          <div style={{
            display:'flex', alignItems:'center', gap:'14px',
            marginTop:'32px',
            paddingTop:'20px',
            borderTop:'1px solid rgba(190,24,93,0.15)',
            position:'relative', zIndex:1,
          }}>
            <div style={{ width:'28px', height:'1px', background:'rgba(190,24,93,0.30)' }}/>
            <span style={{
              fontFamily:"'Cormorant Garamond',serif",
              fontSize:'15px', fontStyle:'italic',
              color:'rgba(107,0,56,0.55)',
            }}>With love, the Wrapping Happiness team</span>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom hairline */}
    <div style={{ position:'absolute', bottom:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.20),transparent)' }}/>
  </div>
);

export default OurStory;
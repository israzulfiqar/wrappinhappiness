



// ─── WhatDefinesUs.jsx ────────────────────────────────────────────────────────
import { useState } from 'react';
import { Link } from 'react-router-dom';

const STEPS = [
  { n:'01', emoji:'🎨', title:'Define the Aesthetic',  desc:'Choose a theme — romantic, birthday, anniversary, or baby shower. The palette loads automatically.'  },
  { n:'02', emoji:'✦',  title:'Meet Your AI Bestie',   desc:'Our AI recommends the best picks based on palette, theme, and budget — smart and seamlessly matched.' },
  { n:'03', emoji:'🖱',  title:'Curate in Studio',      desc:'Bring your vision to life in the 2D canvas. Drag, drop, and perfect every detail in real time.'      },
  { n:'04', emoji:'📐', title:'Canvas to Delivery',    desc:'We turn your digital masterpiece into a precise packing blueprint — ready for flawless assembly.'     },
];

const StepCard = ({ step }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))'
          : 'transparent',
        padding:'30px 26px',
        position:'relative', overflow:'hidden',
        transition:'all .32s cubic-bezier(.4,0,.2,1)',
        cursor:'default',
        border: hovered
          ? '1px solid rgba(255,255,255,0.12)'
          : '1px solid transparent',
        boxShadow: hovered
          ? '0 8px 28px rgba(0,0,0,0.18)'
          : 'none',
      }}
    >
      {hovered && (
        <div style={{
          position:'absolute', inset:0, pointerEvents:'none',
          background:'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)',
        }}/>
      )}

      {/* Ghost number */}
      <div style={{
        position:'absolute', top:'-10px', right:'12px',
        fontFamily:"'Cormorant Garamond',serif",
        fontSize:'92px', fontWeight:700, lineHeight:1,
        color:'rgba(255,255,255,0.07)',
        userSelect:'none', pointerEvents:'none',
      }}>{step.n}</div>

      {/* Step label */}
      <div style={{
        display:'flex', alignItems:'center', gap:'8px',
        marginBottom:'14px', position:'relative', zIndex:1,
      }}>
        <span style={{
          fontFamily:"'Montserrat',sans-serif",
          fontSize:'8px', fontWeight:700,
          letterSpacing:'2.2px', textTransform:'uppercase',
          color:'rgba(255,255,255,0.45)',
        }}>Step {step.n}</span>
        <span style={{ flex:1, height:'1px', background:'rgba(255,255,255,0.15)' }}/>
      </div>

      {/* Icon */}
      <div style={{
        width:'46px', height:'46px', borderRadius:'13px',
        background:'rgba(255,255,255,0.12)',
        backdropFilter:'blur(8px)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize:'18px', marginBottom:'16px',
        position:'relative', zIndex:1,
        border:'1px solid rgba(255,255,255,0.20)',
        boxShadow:'0 4px 14px rgba(0,0,0,0.15)',
      }}>{step.emoji}</div>

      <h3 style={{
        fontFamily:"'Cormorant Garamond','Playfair Display',serif",
        fontSize:'21px', fontWeight:700,
        color:'#FDE4EE', marginBottom:'10px',
        position:'relative', zIndex:1, lineHeight:1.15,
      }}>{step.title}</h3>

      <p style={{
        fontFamily:"'Montserrat',sans-serif",
        fontSize:'12.5px', fontWeight:300,
        color:'rgba(253,228,238,0.65)',
        lineHeight:1.82, position:'relative', zIndex:1,
        margin:0,
      }}>{step.desc}</p>
    </div>
  );
};

const WhatDefinesUs = () => (
  <div style={{
    background:'linear-gradient(160deg,#F5C8DC 0%,#EDB4CC 45%,#E8A8C4 100%)',
    minHeight:'100vh',
    position:'relative',
    overflow:'hidden',
    fontFamily:"'Montserrat', sans-serif",
  }}>

    {/* Ambient glows */}
    <div style={{ position:'absolute', top:'-160px', right:'-130px', width:'520px', height:'520px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.16),transparent 70%)', pointerEvents:'none' }}/>
    <div style={{ position:'absolute', bottom:'-140px', left:'-100px', width:'450px', height:'450px', borderRadius:'50%', background:'radial-gradient(circle,rgba(255,255,255,0.22),transparent 70%)', pointerEvents:'none' }}/>

    {/* Dot texture */}
    <div style={{
      position:'absolute', inset:0, pointerEvents:'none',
      backgroundImage:'radial-gradient(circle,rgba(192,72,104,0.09) 1px,transparent 1px)',
      backgroundSize:'24px 24px',
    }}/>

    {/* Top hairline */}
    <div style={{ position:'absolute', top:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(192,72,104,0.35),transparent)' }}/>

    {/* Nav */}
    <div style={{ padding:'40px 7% 0', position:'relative', zIndex:1 }}>
      <Link to="/" style={{
        display:'inline-flex', alignItems:'center', gap:'8px',
        fontSize:'10px', fontWeight:700, letterSpacing:'2px',
        textTransform:'uppercase', color:'rgba(140,40,72,0.65)',
        textDecoration:'none',
      }}>‹ Back to Home</Link>
    </div>

    {/* ════ MAIN TWO-COLUMN ════ */}
    <div style={{
      padding:'40px 7% 100px',
      position:'relative', zIndex:1,
      display:'grid',
      gridTemplateColumns:'1fr 1fr',
      gap:'80px',
      alignItems:'start',
    }}>

      {/* ══ LEFT: Heading above paragraph card ══ */}
      <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>

        {/* Heading */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
            <div style={{ width:'24px', height:'1.5px', background:'rgba(140,40,72,0.50)', borderRadius:'2px' }}/>
            <span style={{
              fontFamily:"'Montserrat',sans-serif",
              fontSize:'9px', fontWeight:700,
              letterSpacing:'3px', textTransform:'uppercase',
              color:'rgba(140,40,72,0.65)',
            }}>About Us</span>
          </div>

          {/* "About Us" — one line, About=black, Us=dark pink */}
          <h1 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(42px,5vw,70px)',
            fontWeight:700,
            lineHeight:0.96, letterSpacing:'-0.03em',
            margin:0,
            whiteSpace:'nowrap',
          }}>
            <span style={{ color:'#1A0810' }}>About </span>
            <span style={{ fontStyle:'italic', fontWeight:400, color:'#8B1A4A' }}>Us.</span>
          </h1>
        </div>

        {/* Paragraph card — deep magenta bg matching screenshot */}
        <div style={{
          background:'#7A1040',
          border:'1px solid rgba(255,255,255,0.10)',
          borderRadius:'24px',
          padding:'40px 36px',
          boxShadow:'0 12px 40px rgba(80,0,40,0.45)',
          position:'relative',
          overflow:'hidden',
        }}>
          {/* Dot texture overlay */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)',
            backgroundSize:'20px 20px',
          }}/>

          {/* Subtle top-left glow */}
          <div style={{
            position:'absolute', top:'-60px', left:'-60px',
            width:'200px', height:'200px', borderRadius:'50%',
            background:'radial-gradient(circle,rgba(255,100,160,0.12),transparent 70%)',
            pointerEvents:'none',
          }}/>

          {/* Quote mark */}
          <div style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'100px', lineHeight:0.5,
            color:'rgba(249,168,212,0.15)',
            marginBottom:'24px',
            userSelect:'none',
            position:'relative', zIndex:1,
          }}>"</div>

          <p style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(18px,1.8vw,22px)',
            fontStyle:'italic',
            color:'#FDE4EE',
            lineHeight:1.90,
            letterSpacing:'0.01em',
            margin:0,
            position:'relative', zIndex:1,
          }}>
            Every celebration deserves to be felt — not just seen. Whether it is a birthday
            that calls for mountains of blooms and a cake that stops hearts, an anniversary
            that whispers something only the two of them understand, or an Eid morning that
            arrives wrapped in colour and sweetness — we are the hands behind that moment.
            We craft bouquets, bake Pinterest-worthy cakes, build balloon arrangements, and
            bundle it all into surprise boxes that make the person receiving them feel like
            the most loved human on earth. No occasion is too small. No feeling is too big.
          </p>

          {/* Trust badge */}
          <div style={{
            display:'inline-flex', alignItems:'center', gap:'10px',
            background:'rgba(255,255,255,0.08)',
            border:'1px solid rgba(249,168,212,0.22)',
            padding:'12px 20px', borderRadius:'30px',
            marginTop:'28px',
            position:'relative', zIndex:1,
          }}>
            <span style={{
              fontFamily:"'Montserrat',sans-serif",
              fontSize:'10px', fontWeight:700,
              letterSpacing:'1px', textTransform:'uppercase',
              color:'rgba(249,168,212,0.80)',
            }}>✦ Loved by 2,400+ families across Pakistan</span>
          </div>
        </div>
      </div>

      {/* ══ RIGHT: Heading above 4 steps ══ */}
      <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>

        {/* Heading */}
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'14px' }}>
            <div style={{ width:'22px', height:'1px', background:'rgba(140,40,72,0.45)' }}/>
            <span style={{
              fontFamily:"'Montserrat',sans-serif",
              fontSize:'9px', fontWeight:700,
              letterSpacing:'3px', textTransform:'uppercase',
              color:'rgba(140,40,72,0.65)',
            }}>How It Works</span>
          </div>

          {/* "Happiness in Four Steps" — one line, Happiness=black, rest=dark pink italic */}
          <h2 style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:'clamp(32px,3.8vw,58px)',
            fontWeight:700,
            lineHeight:0.96, letterSpacing:'-0.03em',
            margin:0,
            whiteSpace:'nowrap',
          }}>
            <span style={{ color:'#1A0810' }}>Happiness </span>
            <span style={{ fontStyle:'italic', fontWeight:400, color:'#8B1A4A' }}>in Four Steps.</span>
          </h2>

          <p style={{
            fontFamily:"'Montserrat',sans-serif",
            fontSize:'13px', fontWeight:300,
            color:'rgba(80,16,42,0.58)',
            lineHeight:1.80,
            marginTop:'12px',
          }}>
            From first idea to happy doorstep — here is how the magic unfolds.
          </p>
        </div>

        {/* Steps 2×2 grid — deep magenta bg matching screenshot */}
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px',
          background:'rgba(80,0,30,0.30)',
          borderRadius:'22px', overflow:'hidden',
          border:'1px solid rgba(255,255,255,0.10)',
          boxShadow:'0 10px 40px rgba(80,0,40,0.35)',
          position:'relative',
        }}>
          {/* Deep magenta base layer */}
          <div style={{
            position:'absolute', inset:0,
            background:'#7A1040',
            zIndex:0,
          }}/>
          {/* Dot texture on steps grid */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none', zIndex:1,
            backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)',
            backgroundSize:'20px 20px',
          }}/>
          {/* Cards sit above the bg layers */}
          <div style={{ display:'contents', position:'relative', zIndex:2 }}>
            {STEPS.map(s => (
              <div key={s.n} style={{ position:'relative', zIndex:2 }}>
                <StepCard step={s}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Bottom hairline */}
    <div style={{ position:'absolute', bottom:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(192,72,104,0.25),transparent)' }}/>
  </div>
);

export default WhatDefinesUs;

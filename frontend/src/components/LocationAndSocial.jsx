
// ─── LocationAndSocial.jsx ────────────────────────────────────────────────────
import React from 'react';

const ACCOUNTS = [
  {
    platform: 'Instagram',
    handle: '@wrappinghappiness',
    desc: 'Daily drops & happy unboxings.',
    link: 'https://instagram.com/wrappinghappiness',
    cta: 'Follow',
    platformBg: 'linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)',
    logo: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
  },
  {
    platform: 'WhatsApp',
    handle: 'Order Instantly',
    desc: 'Fastest way to place a custom order.',
    link: 'https://wa.me/923001234567',
    cta: 'Message',
    platformBg: 'linear-gradient(135deg,#25D366,#128C7E)',
    logo: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    platform: 'TikTok',
    handle: '@wrappinghappiness',
    desc: 'Watch us wrap & deliver joy.',
    link: 'https://tiktok.com/@wrappinghappiness',
    cta: 'Watch',
    platformBg: 'linear-gradient(135deg,#010101,#69C9D0)',
    logo: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
  {
    platform: 'Facebook',
    handle: 'Wrapping Happiness',
    desc: 'Offers, updates & gifting inspo.',
    link: 'https://facebook.com/wrappinghappiness',
    cta: 'Like',
    platformBg: 'linear-gradient(135deg,#1877F2,#0A5DC2)',
    logo: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const INFO_CARDS = [
  { emoji: '🕐', title: 'Order Hours',   lines: ['Mon–Sat  10am – 9pm', 'Sun  11am – 7pm'] },
  { emoji: '🚚', title: 'Delivery',      lines: ['Same-day available', 'Pre-order 7 days ahead'] },
];

const LocationAndSocial = () => (
  <section style={{
    background: 'linear-gradient(160deg,#4A0028 0%,#6B0038 35%,#8B1050 60%,#5A0032 100%)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Montserrat', sans-serif",
  }}>

    {/* ── Ambient blobs ── */}
    <div style={{
      position: 'absolute', top: '-140px', right: '-120px',
      width: '500px', height: '500px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(236,72,153,0.22) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', bottom: '-120px', left: '-100px',
      width: '420px', height: '420px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(190,24,93,0.20) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', top: '45%', left: '48%', transform: 'translate(-50%,-50%)',
      width: '650px', height: '650px', borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(249,168,212,0.06) 0%, transparent 65%)',
      pointerEvents: 'none',
    }} />

    {/* ── Top hairline ── */}
    <div style={{
      position: 'absolute', top: 0, left: '6%', right: '6%', height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.35), transparent)',
    }} />

    {/* ════ SECTION HEADER ════ */}
    <div style={{ padding: '80px 7% 0', position: 'relative', zIndex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
        <div style={{ width: '28px', height: '1.5px', background: 'rgba(249,168,212,0.55)', borderRadius: '2px' }} />
        <span style={{
          fontSize: '9px', fontWeight: 700, letterSpacing: '3px',
          textTransform: 'uppercase', color: 'rgba(249,168,212,0.70)',
        }}>Find Us</span>
      </div>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(36px, 4vw, 58px)',
        fontWeight: 700, color: '#FDE4EE',
        lineHeight: 1.05, letterSpacing: '-0.02em',
        marginBottom: '8px',
      }}>
        Come find us{' '}
        <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#F9A8D4' }}>
          in Hyderabad.
        </span>
      </h2>
      <p style={{
        fontSize: '13px', fontWeight: 300,
        color: 'rgba(253,228,238,0.50)', lineHeight: 1.8, maxWidth: '440px',
        marginBottom: '52px',
      }}>
        Rooted in Hyderabad, Sindh — wrapping happiness for families
        across the city and delivering wherever love needs to go.
      </p>
    </div>

    {/* ════ MAIN TWO-COLUMN GRID ════ */}
    <div style={{
      padding: '0 7% 80px',
      position: 'relative', zIndex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '32px',
      alignItems: 'start',
    }}>

      {/* ── LEFT: Map + 2 Info cards ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* Map */}
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          height: '320px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.40)',
          border: '1px solid rgba(249,168,212,0.15)',
          position: 'relative',
          flexShrink: 0,
        }}>
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(74,0,40,0.06) 0%, transparent 25%, rgba(74,0,40,0.25) 100%)',
          }} />
          {/* Location badge */}
          <div style={{
            position: 'absolute', top: '14px', left: '14px', zIndex: 3,
            background: 'rgba(74,0,40,0.80)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '7px 14px',
            display: 'flex', alignItems: 'center', gap: '6px',
            border: '1px solid rgba(249,168,212,0.25)',
            boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          }}>
            <span style={{ fontSize: '14px' }}>📍</span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F9A8D4', letterSpacing: '0.3px' }}>
              Hyderabad, Sindh
            </span>
          </div>
          <iframe
            title="Wrapping Happiness Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115200!2d68.30!3d25.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc51d36442654637d!2sHyderabad%2C%20Sindh!5e0!3m2!1sen!2spk!4v1700000000000"
            width="100%" height="100%"
            style={{
              border: 0, display: 'block',
              filter: 'saturate(0.55) hue-rotate(290deg) brightness(0.80) contrast(1.10)',
            }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Info cards — 2 cards only (Order Hours + Delivery) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {INFO_CARDS.map((card, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg,#FDE8F2,#FBD6EA)',
              border: '1px solid rgba(236,72,153,0.18)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex', alignItems: 'flex-start', gap: '10px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '9px', flexShrink: 0,
                background: 'linear-gradient(135deg,#F9A8D4,#EC4899)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '16px',
                boxShadow: '0 3px 10px rgba(236,72,153,0.30)',
              }}>{card.emoji}</div>
              <div>
                <p style={{
                  fontSize: '8px', fontWeight: 700,
                  letterSpacing: '1.8px', textTransform: 'uppercase',
                  color: '#BE185D', marginBottom: '4px',
                }}>{card.title}</p>
                {card.lines.map((l, j) => (
                  <p key={j} style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '14px', fontWeight: 600,
                    color: '#6B0038', lineHeight: 1.45, margin: 0,
                  }}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Social cards ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        {/* "Find Us Online" — large heading replacing pill button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '24px', height: '1.5px', background: 'rgba(249,168,212,0.45)', borderRadius: '2px', flexShrink: 0 }} />
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(28px, 3vw, 42px)',
            fontWeight: 700,
            lineHeight: 0.96,
            letterSpacing: '-0.02em',
            margin: 0,
            whiteSpace: 'nowrap',
          }}>
            <span style={{ color: '#FDE4EE' }}>Find Us </span>
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: '#F9A8D4' }}>Online.</span>
          </h3>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(249,168,212,0.30), transparent)' }} />
        </div>

        {/* Social cards — 2×2, light pink bg */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {ACCOUNTS.map((acc, i) => (
            <a
              key={i}
              href={acc.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'linear-gradient(135deg,#FDE8F2,#FBD6EA)',
                  border: '1px solid rgba(236,72,153,0.18)',
                  borderRadius: '14px',
                  padding: '0',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all .25s cubic-bezier(.4,0,.2,1)',
                  height: '100%',
                  boxSizing: 'border-box',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 18px 44px rgba(190,24,93,0.20)';
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.35)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
                  e.currentTarget.style.borderColor = 'rgba(236,72,153,0.18)';
                }}
              >
                {/* Platform colour banner with logo */}
                <div style={{
                  background: acc.platformBg,
                  padding: '18px 16px 14px',
                  display: 'flex', alignItems: 'center', gap: '12px',
                }}>
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.20)',
                    border: '1px solid rgba(255,255,255,0.20)',
                  }}>
                    {acc.logo}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '10px', fontWeight: 700,
                      letterSpacing: '1.5px', textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.70)', marginBottom: '2px',
                    }}>{acc.platform}</p>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '15px', fontWeight: 700,
                      color: '#fff', lineHeight: 1.1,
                    }}>{acc.handle}</p>
                  </div>
                </div>

                {/* Card body — light pink bg so text needs dark colors */}
                <div style={{ padding: '13px 16px 15px' }}>
                  <p style={{
                    fontSize: '11px', fontWeight: 400,
                    color: 'rgba(107,0,56,0.65)',
                    lineHeight: 1.65, marginBottom: '13px',
                  }}>{acc.desc}</p>

                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '7px 16px', borderRadius: '20px',
                    background: 'rgba(190,24,93,0.10)',
                    border: '1px solid rgba(190,24,93,0.22)',
                    fontSize: '10px', fontWeight: 700,
                    letterSpacing: '1px', textTransform: 'uppercase',
                    color: '#BE185D',
                  }}>
                    {acc.cta}
                    <span style={{ fontSize: '11px' }}>→</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* ════ BOTTOM TAGLINE ════ */}
    <div style={{ padding: '0 7% 80px', position: 'relative', zIndex: 1 }}>
      <div style={{
        textAlign: 'center',
        padding: '26px 32px',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(249,168,212,0.12)',
        borderRadius: '16px',
        maxWidth: '580px', margin: '0 auto',
        boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
      }}>
        <span style={{ fontSize: '18px', marginRight: '10px' }}>🌸</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '17px', fontStyle: 'italic',
          color: 'rgba(253,228,238,0.45)',
        }}>
          Tag us in your unboxing — we love seeing your happy moments
        </span>
        <span style={{ fontSize: '18px', marginLeft: '10px' }}>🌸</span>
      </div>
    </div>

    {/* Bottom hairline */}
    <div style={{
      position: 'absolute', bottom: 0, left: '6%', right: '6%', height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(249,168,212,0.20), transparent)',
    }} />
  </section>
);

export default LocationAndSocial;

import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../theme';
import StepsSection from './StepsSection';
import ProductGallery from './ProductGallery';

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        minHeight: '100vh',
        overflow: 'hidden',
      }}>

        {/* Full-bleed background image */}
        <img
          src="/img/IMG_0833.jpg"
          alt="Floral gift arrangements"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            zIndex: 0,
          }}
        />

        {/* Dark overlay for readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.05) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        {/* LEFT: Headline + CTA */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 10%',
        }}>
          <h1 style={{
            ...styles.headline,
            fontSize: '55px',
            marginBottom: '20px',
            color: '#ffffff',
          }}>
            You Dream it, We Wrap it{' '}
            <span style={{ ...styles.italicText, color: '#f9c0cb' }}>They Love it</span>.
          </h1>
          <p style={{
            ...styles.bodyText,
            fontSize: '18px',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.85)',
          }}>
            Wrapping Happiness is Pakistan's First interactive gifting Studio.
            Design custom gifts your loved ones will never forget.
          </p>
          <Link to="/studio">
            <button style={styles.primaryBtn}>Start Designing ✦</button>
          </Link>
        </div>

        {/* RIGHT: Floating login / sign-up card */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 40px 40px 20px',
        }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.80)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '16px',
            padding: '40px 36px',
            width: '100%',
            maxWidth: '360px',
            border: '0.5px solid rgba(255,255,255,0.7)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          }}>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '25px', marginBottom: '28px' }}>
              {['Login', 'Sign Up'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setIsLogin(tab === 'Login')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '900',
                    fontFamily: 'Playfair Display',
                    color: isLogin === (tab === 'Login')
                      ? styles.colors.deepRed
                      : '#bbb',
                    borderBottom: isLogin === (tab === 'Login')
                      ? `3px solid ${styles.colors.deepRed}`
                      : 'none',
                    paddingBottom: '4px',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Full Name"
                  style={styles.input}
                />
              )}
              <input
                type="email"
                placeholder="Email Address"
                style={styles.input}
              />
              <input
                type="password"
                placeholder="Password"
                style={styles.input}
              />
              <button style={{ ...styles.primaryBtn, width: '100%' }}>
                {isLogin ? 'Welcome Back ✦' : 'Create Account ✦'}
              </button>
            </div>

          </div>
        </div>

      </section>

      <StepsSection />
      <ProductGallery />
    </>
  );
};

export default LandingPage;
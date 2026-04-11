import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../theme';
import StepsSection from './StepsSection';
import ProductGallery from './ProductGallery';

const LandingPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', padding: '80px 10%', alignItems: 'center', background: styles.colors.babyPink }}>
        <div>
          <h1 style={{ ...styles.headline, fontSize: '55px', marginBottom: '20px' }}>
            You Dream it, We Wrap it{' '}
            <span style={styles.italicText}>They Love it</span>.
          </h1>
          <p style={{ ...styles.bodyText, fontSize: '18px', marginBottom: '40px', color: styles.colors.darkGrey }}>
            Wrapping Happiness is Pakistan's First interactive gifting Studio...
          </p>
          <Link to="/studio">
            <button style={styles.primaryBtn}>Start Designing ✦</button>
          </Link>
        </div>

        <div style={{ ...styles.productCard, padding: '50px', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)' }}>
          <div style={{ display: 'flex', gap: '25px', marginBottom: '35px' }}>
            {['Login', 'Sign Up'].map((tab) => (
              <button
                key={tab}
                onClick={() => setIsLogin(tab === 'Login')}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', fontSize: '20px', fontWeight: '900',
                  fontFamily: 'Playfair Display',
                  color: isLogin === (tab === 'Login') ? styles.colors.deepRed : '#bbb',
                  borderBottom: isLogin === (tab === 'Login') ? `3px solid ${styles.colors.deepRed}` : 'none',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!isLogin && <input type="text"     placeholder="Full Name"      style={styles.input} />}
            <input type="email"    placeholder="Email Address"  style={styles.input} />
            <input type="password" placeholder="Password"       style={styles.input} />
            <button style={{ ...styles.primaryBtn, width: '100%' }}>
              {isLogin ? 'Welcome Back ✦' : 'Create Account ✦'}
            </button>
          </div>
        </div>
      </section>

      <StepsSection />
      <ProductGallery />
    </>
  );
};

export default LandingPage;
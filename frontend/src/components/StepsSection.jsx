import styles from '../theme';

const StepsSection = () => (
  <section style={styles.stepsSection}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px', alignItems: 'start' }}>
      <div style={{ textAlign: 'left' }}>
        <div style={{ display: 'inline-block', padding: '8px 18px', borderRadius: '50px', background: styles.colors.babyPink, color: styles.colors.deepRed, fontSize: '12px', fontWeight: '800', letterSpacing: '1px', marginBottom: '20px' }}>
          OUR PROMISE
        </div>
        <h2 style={{ ...styles.headline, fontSize: '40px', marginBottom: '25px', color: '#fff' }}>
          You Curates the Surprise ~{' '}
          <span style={{ ...styles.italicText, color: styles.colors.babyPink }}>
            We Deliver the Happiness.
          </span>
        </h2>
        <p style={{ ...styles.bodyText, fontSize: '17px', lineHeight: '1.8', maxWidth: '480px', color: 'rgba(255,255,255,0.9)' }}>
          We believe a gift should be as unique as the person receiving it...
        </p>
      </div>

      <div>
        <h3 style={{ ...styles.headline, fontSize: '32px', marginBottom: '35px', color: '#fff' }}>
          4 Steps of <span style={{ ...styles.italicText, color: styles.colors.babyPink }}>Happiness</span>
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {[
            { n: '01', t: 'Define the Aesthetics', d: 'Choose a theme that fits their personality...' },
            { n: '02', t: 'Meet your AI Bestie', d: 'Our AI Recommends the Best Picks...' },
            { n: '03', t: 'Curate Surprise in Studio', d: 'Bring vision to life in 2D Studio...' },
            { n: '04', t: 'From Canvas to Delivery', d: 'We turn your digital dream surprise...' },
          ].map((s) => (
            <div key={s.n} style={{ background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ color: styles.colors.babyPink, fontWeight: '900', fontSize: '12px', marginBottom: '12px', fontFamily: 'Montserrat' }}>
                STEP {s.n}
              </div>
              <h4 style={{ ...styles.headline, fontSize: '18px', marginBottom: '10px', color: '#fff' }}>{s.t}</h4>
              <p style={{ ...styles.bodyText, fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StepsSection;
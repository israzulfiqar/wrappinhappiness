

// // // // // // export const styles = {
// // // // // //   colors: {
// // // // // //     cream: '#FBFBFC',      // Navigation & Body Background
// // // // // //     deepRed: '#7C0A27',    // Primary Branding & Headlines
// // // // // //     logoPink: '#D088C3',   // Accents, Prices & Category Labels
// // // // // //     babyPink: '#FFC4C4',   // Hero Background & Footer Headings
// // // // // //     darkGrey: '#333333',   // Body Text
// // // // // //     white: '#FFFFFF',
// // // // // //     border: 'rgba(124, 10, 39, 0.1)'
// // // // // //   },

// // // // // //   page: { 
// // // // // //     background: ' #FFC4C4', 
// // // // // //     minHeight: '100vh', 
// // // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // // //     color: '#333333'
// // // // // //   },
  
// // // // // //   /* --- NAVIGATION --- */
// // // // // //   nav: { 
// // // // // //     display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
// // // // // //     padding: '0 8%', height: '85px', background: '#7C0A27', 
// // // // // //     borderBottom: '1px solid rgba(241, 233, 235, 0.05)',
// // // // // //     position: 'sticky', top: 0, zIndex: 1000 
// // // // // //   },
// // // // // //   navLink: {
// // // // // //     color: '#FFFFFF', 
// // // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // // //     fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px',
// // // // // //     fontSize: '13px', textDecoration: 'none'
// // // // // //   },

// // // // // //   /* --- TYPOGRAPHY --- */
// // // // // //   headline: { 
// // // // // //     fontFamily: "'Playfair Display', serif", 
// // // // // //     fontWeight: 900, color: '#7C0A27', lineHeight: '1.2'
// // // // // //   },
// // // // // //   bodyText: {
// // // // // //     fontFamily: "'Montserrat', sans-serif", fontWeight: '400',
// // // // // //     color: '#333333', lineHeight: '1.6', fontSize: '15px'
// // // // // //   },
// // // // // //   italicText: { fontStyle: 'italic', color: '#D088C3' },

// // // // // //   /* --- BUTTONS --- */
// // // // // //   primaryBtn: { 
// // // // // //     padding: '16px 36px', borderRadius: '50px', background: '#7C0A27', color: '#FBFBFC', 
// // // // // //     fontWeight: '700', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat', sans-serif",
// // // // // //     boxShadow: '0 8px 20px rgba(124, 10, 39, 0.2)', transition: '0.3s'
// // // // // //   },

// // // // // //   /* --- COMPONENTS --- */
// // // // // //   productCard: {
// // // // // //     background: ' #FFff', borderRadius: '24px', padding: '25px',
// // // // // //     boxShadow: '0 12px 40px rgba(0,0,0,0.04)', textAlign: 'center'
// // // // // //   },
// // // // // //   stepsSection: { 
// // // // // //     padding: '100px 8%', background: '#7C0A27', color: '#D088C3', 
// // // // // //     borderRadius: '80px 80px 0 0' 
// // // // // //   },
// // // // // //   footer: {
// // // // // //     padding: '80px 8%', background: '#7C0A27', color: '#FBFBFC'
// // // // // //   },

// // // // // //   /* --- AUTH & INPUTS --- */
// // // // // //   authBox: {
// // // // // //     background: '#D088C3', 
// // // // // //     backdropFilter: 'blur(20px)', 
// // // // // //     borderRadius: '40px', 
// // // // // //     padding: '50px',
// // // // // //     boxShadow: '0 20px 60px rgba(124, 10, 39, 0.05)',
// // // // // //     textAlign: 'left'
// // // // // //   },
// // // // // //   input: {
// // // // // //     width: '100%',
// // // // // //     padding: '18px 25px',
// // // // // //     margin: '10px 0',
// // // // // //     borderRadius: '15px', 
// // // // // //     border: '1px solid rgba(124, 10, 39, 0.1)', 
// // // // // //     background: '#FFFFFF',
// // // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // // //     fontSize: '14px',
// // // // // //     color: '#333333',
// // // // // //     outline: 'none',
// // // // // //     transition: '0.3s ease',
// // // // // //     boxSizing: 'border-box'
// // // // // //   },
// // // // // //   authTab: {
// // // // // //     background: 'none', 
// // // // // //     border: 'none', 
// // // // // //     cursor: 'pointer', 
// // // // // //     fontSize: '22px', 
// // // // // //     fontWeight: '900', 
// // // // // //     fontFamily: "'Playfair Display', serif", 
// // // // // //     paddingBottom: '8px'
// // // // // //   }
// // // // // // };

// // // // // // export default styles;


// // // // // // ─── theme.js ─── Wrapping Happiness · Luxury Design System ─────────────────
// // // // // // Colour palette anchored to iColorpalette #445094
// // // // // // Primary ramp: #ffdeeb → #8a0030 (magenta-rose to deep crimson)

// // // // // export const styles = {
// // // // //   colors: {
// // // // //     // ── existing keys (unchanged for backward compat) ──────────────────
// // // // //     cream:    '#FBFBFC',
// // // // //     deepRed:  '#7C0A27',
// // // // //     logoPink: '#D088C3',
// // // // //     babyPink: '#FFC4C4',
// // // // //     darkGrey: '#333333',
// // // // //     white:    '#FFFFFF',
// // // // //     border:   'rgba(124, 10, 39, 0.1)',

// // // // //     // ── extended palette from color swatch ────────────────────────────
// // // // //     rose0:  '#fff5f8',   // page tint
// // // // //     rose1:  '#ffdeeb',   // lightest blush
// // // // //     rose2:  '#ff99b9',   // mid-pink accent
// // // // //     rose3:  '#ff5c8a',   // vivid rose
// // // // //     rose4:  '#f90062',   // electric magenta
// // // // //     rose5:  '#d60054',   // deep magenta
// // // // //     rose6:  '#ba1141',   // primary brand crimson
// // // // //     rose7:  '#8a0030',   // headline dark crimson
// // // // //     rose8:  '#470018',   // near-black maroon (footer, dark sections)

// // // // //     // ── semantics ─────────────────────────────────────────────────────
// // // // //     textPrimary:   '#1c0810',
// // // // //     textSecondary: '#5a2840',
// // // // //     textMuted:     '#9a6070',
// // // // //     borderLight:   'rgba(186,17,65,.1)',
// // // // //     borderMed:     'rgba(186,17,65,.2)',
// // // // //     cardShadow:    '0 24px 64px rgba(138,0,48,.10), 0 4px 16px rgba(138,0,48,.06)',
// // // // //     floatShadow:   '0 40px 100px rgba(138,0,48,.16)',
// // // // //   },

// // // // //   // ── PAGE ─────────────────────────────────────────────────────────────────
// // // // //   page: {
// // // // //     background: '#FFF5F8',
// // // // //     minHeight: '100vh',
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     color: '#1c0810',
// // // // //   },

// // // // //   // ── NAVIGATION ───────────────────────────────────────────────────────────
// // // // //   nav: {
// // // // //     display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// // // // //     padding: '0 6%', height: '80px',
// // // // //     background: 'rgba(253,248,249,.94)',
// // // // //     backdropFilter: 'blur(28px)',
// // // // //     WebkitBackdropFilter: 'blur(28px)',
// // // // //     borderBottom: '1px solid rgba(186,17,65,.1)',
// // // // //     position: 'sticky', top: 0, zIndex: 1000,
// // // // //     boxShadow: '0 4px 24px rgba(138,0,48,.06)',
// // // // //   },
// // // // //   navLink: {
// // // // //     color: '#5a2840',
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     fontWeight: '600',
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '1.2px',
// // // // //     fontSize: '12px',
// // // // //     textDecoration: 'none',
// // // // //     transition: 'color .2s',
// // // // //   },

// // // // //   // ── TYPOGRAPHY ───────────────────────────────────────────────────────────
// // // // //   headline: {
// // // // //     fontFamily: "'Playfair Display', serif",
// // // // //     fontWeight: 900,
// // // // //     color: '#1c0810',
// // // // //     lineHeight: 1.1,
// // // // //   },
// // // // //   bodyText: {
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     fontSize: '15px',
// // // // //     color: '#5a2840',
// // // // //     lineHeight: 1.6,
// // // // //   },
// // // // //   labelText: {
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     fontSize: '10px',
// // // // //     fontWeight: 700,
// // // // //     textTransform: 'uppercase',
// // // // //     letterSpacing: '1.5px',
// // // // //   },

// // // // //   // ── BUTTONS ──────────────────────────────────────────────────────────────
// // // // //   primaryBtn: {
// // // // //     background: 'linear-gradient(135deg, #ba1141 0%, #8a0030 100%)',
// // // // //     color: '#FFFFFF',
// // // // //     border: 'none',
// // // // //     borderRadius: '16px',
// // // // //     padding: '14px 28px',
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     fontWeight: 700,
// // // // //     cursor: 'pointer',
// // // // //     transition: 'transform .2s, box-shadow .2s',
// // // // //   },
// // // // //   ghostBtn: {
// // // // //     background: 'transparent',
// // // // //     border: '1.5px solid rgba(186,17,65,.2)',
// // // // //     color: '#ba1141',
// // // // //     borderRadius: '16px',
// // // // //     padding: '14px 28px',
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     fontWeight: 700,
// // // // //     cursor: 'pointer',
// // // // //   },

// // // // //   // ── CARDS & COMPONENTS ───────────────────────────────────────────────────
// // // // //   productCard: {
// // // // //     background: '#FFFFFF',
// // // // //     borderRadius: '24px',
// // // // //     padding: '0',
// // // // //     boxShadow: '0 12px 40px rgba(138,0,48,.06)',
// // // // //     border: '1px solid rgba(186,17,65,.1)',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   floatCard: {
// // // // //     background: 'rgba(255,255,255,.9)',
// // // // //     backdropFilter: 'blur(20px)',
// // // // //     WebkitBackdropFilter: 'blur(20px)',
// // // // //     borderRadius: '20px',
// // // // //     padding: '20px',
// // // // //     boxShadow: '0 30px 60px rgba(138,0,48,.12)',
// // // // //     border: '1px solid rgba(255,255,255,.8)',
// // // // //   },
// // // // //   badge: {
// // // // //     background: '#ffdeeb',
// // // // //     border: '1px solid rgba(186,17,65,.2)',
// // // // //     padding: '7px 16px 7px 10px',
// // // // //     borderRadius: '50px',
// // // // //     marginBottom: '24px',
// // // // //   },

// // // // //   // ── SECTIONS ─────────────────────────────────────────────────────────────
// // // // //   stepsSection: {
// // // // //     padding: '110px 8%',
// // // // //     background: '#470018',
// // // // //     color: '#D088C3',
// // // // //     borderRadius: '80px 80px 0 0',
// // // // //     position: 'relative',
// // // // //     overflow: 'hidden',
// // // // //   },
// // // // //   footer: {
// // // // //     padding: '80px 8% 0',
// // // // //     background: '#1c0810',
// // // // //     color: '#FBFBFC',
// // // // //   },

// // // // //   // ── AUTH & INPUTS ─────────────────────────────────────────────────────────
// // // // //   authBox: {
// // // // //     background: 'rgba(255,255,255,.82)',
// // // // //     backdropFilter: 'blur(24px)',
// // // // //     WebkitBackdropFilter: 'blur(24px)',
// // // // //     borderRadius: '24px',
// // // // //     padding: '40px 36px',
// // // // //     boxShadow: '0 20px 60px rgba(124,10,39,.18)',
// // // // //     border: '1px solid rgba(255,255,255,.9)',
// // // // //     textAlign: 'left',
// // // // //   },
// // // // //   input: {
// // // // //     width: '100%',
// // // // //     padding: '16px 20px',
// // // // //     borderRadius: '12px',
// // // // //     border: '1px solid rgba(124,10,39,.1)',
// // // // //     background: '#fff',
// // // // //     fontSize: '14px',
// // // // //     fontFamily: "'Montserrat', sans-serif",
// // // // //     outline: 'none',
// // // // //     boxSizing: 'border-box',
// // // // //   },
// // // // // };

// // // // // export default styles;





// // // // // ─── theme.js — Wrapping Happiness · Luxury Design System ────────────────────

// // // // export const styles = {
// // // //   colors: {
// // // //     // ── Core (backward-compatible keys) ──────────────────────────────────
// // // //     cream:    '#FDF0F3',
// // // //     deepRed:  '#7C0A27',
// // // //     logoPink: '#D088C3',
// // // //     babyPink: '#F9C8D4',
// // // //     darkGrey: '#2A1018',
// // // //     white:    '#FFFAF9',
// // // //     border:   'rgba(124,10,39,0.12)',

// // // //     // ── Extended rose ramp ────────────────────────────────────────────────
// // // //     rose0: '#FFF5F7',   // page base — barely-there blush
// // // //     rose1: '#FFE4EC',   // section tint, card fill
// // // //     rose2: '#FFBDD0',   // soft accent
// // // //     rose3: '#FF85A8',   // mid-rose
// // // //     rose4: '#E8416B',   // vivid punch
// // // //     rose5: '#C2154A',   // deep magenta
// // // //     rose6: '#8C0A30',   // brand anchor
// // // //     rose7: '#5C0620',   // near-black crimson

// // // //     // ── Semantics ─────────────────────────────────────────────────────────
// // // //     textPrimary:   '#1E0810',
// // // //     textSecondary: '#5A2035',
// // // //     textMuted:     '#A06070',
// // // //     pageBg:        '#FBF0F3',   // warm blush page (replaces white)
// // // //     sectionAlt:    '#F7E0E8',   // alternate section tint
// // // //     cardBg:        '#FFFAF9',   // warm white for cards
// // // //   },

// // // //   // ── PAGE ─────────────────────────────────────────────────────────────────
// // // //   page: {
// // // //     background: '#FBF0F3',
// // // //     minHeight: '100vh',
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     color: '#1E0810',
// // // //   },

// // // //   // ── NAVIGATION ───────────────────────────────────────────────────────────
// // // //   nav: {
// // // //     display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// // // //     padding: '0 6%', height: '80px',
// // // //     background: 'rgba(253,240,243,0.92)',
// // // //     backdropFilter: 'blur(28px)',
// // // //     WebkitBackdropFilter: 'blur(28px)',
// // // //     borderBottom: '1px solid rgba(124,10,39,0.10)',
// // // //     position: 'sticky', top: 0, zIndex: 1000,
// // // //     boxShadow: '0 2px 24px rgba(124,10,39,0.06)',
// // // //   },
// // // //   navLink: {
// // // //     color: '#5A2035',
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontWeight: '600',
// // // //     textTransform: 'uppercase',
// // // //     letterSpacing: '1.2px',
// // // //     fontSize: '12px',
// // // //     textDecoration: 'none',
// // // //     transition: 'color .2s',
// // // //   },

// // // //   // ── TYPOGRAPHY ───────────────────────────────────────────────────────────
// // // //   headline: {
// // // //     fontFamily: "'Playfair Display', serif",
// // // //     fontWeight: 900,
// // // //     color: '#7C0A27',
// // // //     lineHeight: '1.12',
// // // //     margin: 0,
// // // //   },
// // // //   italicText: {
// // // //     fontStyle: 'italic',
// // // //     fontWeight: 400,
// // // //     color: '#D088C3',
// // // //   },
// // // //   bodyText: {
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontWeight: '400',
// // // //     color: '#5A2035',
// // // //     lineHeight: '1.75',
// // // //     fontSize: '15px',
// // // //     margin: 0,
// // // //   },
// // // //   labelText: {
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontWeight: '700',
// // // //     fontSize: '10px',
// // // //     letterSpacing: '1.6px',
// // // //     textTransform: 'uppercase',
// // // //     color: '#C2154A',
// // // //     margin: 0,
// // // //   },

// // // //   // ── BUTTONS ──────────────────────────────────────────────────────────────
// // // //   primaryBtn: {
// // // //     padding: '15px 36px',
// // // //     borderRadius: '50px',
// // // //     background: 'linear-gradient(135deg, #7C0A27 0%, #5C0620 100%)',
// // // //     color: '#FFFAF9',
// // // //     fontWeight: '700',
// // // //     border: 'none',
// // // //     cursor: 'pointer',
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontSize: '13px',
// // // //     letterSpacing: '0.6px',
// // // //     boxShadow: '0 10px 32px rgba(124,10,39,0.30)',
// // // //     transition: 'all .28s cubic-bezier(.4,0,.2,1)',
// // // //     display: 'inline-flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     gap: '8px',
// // // //     textDecoration: 'none',
// // // //   },
// // // //   ghostBtn: {
// // // //     padding: '14px 30px',
// // // //     borderRadius: '50px',
// // // //     background: 'transparent',
// // // //     color: '#7C0A27',
// // // //     fontWeight: '600',
// // // //     border: '1.5px solid rgba(124,10,39,0.45)',
// // // //     cursor: 'pointer',
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontSize: '13px',
// // // //     letterSpacing: '0.4px',
// // // //     transition: 'all .25s',
// // // //     display: 'inline-flex',
// // // //     alignItems: 'center',
// // // //     justifyContent: 'center',
// // // //     gap: '8px',
// // // //   },

// // // //   // ── CARDS ─────────────────────────────────────────────────────────────────
// // // //   productCard: {
// // // //     background: '#FFFAF9',
// // // //     borderRadius: '24px',
// // // //     padding: '0',
// // // //     boxShadow: '0 8px 32px rgba(124,10,39,0.07)',
// // // //     border: '1px solid rgba(124,10,39,0.08)',
// // // //     overflow: 'hidden',
// // // //     transition: 'all .35s cubic-bezier(.4,0,.2,1)',
// // // //   },
// // // //   floatCard: {
// // // //     background: 'rgba(255,250,249,0.88)',
// // // //     backdropFilter: 'blur(20px)',
// // // //     WebkitBackdropFilter: 'blur(20px)',
// // // //     borderRadius: '18px',
// // // //     border: '1px solid rgba(255,255,255,0.9)',
// // // //     boxShadow: '0 16px 48px rgba(124,10,39,0.13)',
// // // //     padding: '18px 20px',
// // // //   },

// // // //   // ── SECTIONS ──────────────────────────────────────────────────────────────
// // // //   stepsSection: {
// // // //     padding: '110px 8%',
// // // //     background: '#5C0620',
// // // //     borderRadius: '80px 80px 0 0',
// // // //     position: 'relative',
// // // //     overflow: 'hidden',
// // // //   },
// // // //   footer: {
// // // //     padding: '80px 8% 0',
// // // //     background: '#1E0810',
// // // //     color: '#FFFAF9',
// // // //   },

// // // //   // ── AUTH & INPUTS ─────────────────────────────────────────────────────────
// // // //   authBox: {
// // // //     background: 'rgba(255,250,249,0.90)',
// // // //     backdropFilter: 'blur(24px)',
// // // //     WebkitBackdropFilter: 'blur(24px)',
// // // //     borderRadius: '24px',
// // // //     padding: '36px 32px',
// // // //     boxShadow: '0 24px 64px rgba(124,10,39,0.18)',
// // // //     border: '1px solid rgba(255,255,255,0.95)',
// // // //     textAlign: 'left',
// // // //   },
// // // //   input: {
// // // //     width: '100%',
// // // //     padding: '15px 20px',
// // // //     margin: '0',
// // // //     borderRadius: '14px',
// // // //     border: '1.5px solid rgba(124,10,39,0.14)',
// // // //     background: '#FFFFFF',
// // // //     fontFamily: "'Montserrat', sans-serif",
// // // //     fontSize: '14px',
// // // //     color: '#1E0810',
// // // //     outline: 'none',
// // // //     transition: '0.25s ease',
// // // //     boxSizing: 'border-box',
// // // //     display: 'block',
// // // //   },
// // // //   authTab: {
// // // //     background: 'none',
// // // //     border: 'none',
// // // //     cursor: 'pointer',
// // // //     fontFamily: "'Playfair Display', serif",
// // // //     paddingBottom: '6px',
// // // //     transition: 'all .2s',
// // // //   },
// // // // };

// // // // export default styles;



// // // // ─── theme.js — Wrapping Happiness · Luxury Design System ────────────────────

// // // export const styles = {
// // //   colors: {
// // //     // backward-compatible
// // //     cream:    '#FAF3F0',
// // //     deepRed:  '#7C0A27',
// // //     logoPink: '#D088C3',
// // //     babyPink: '#F2C4CE',
// // //     darkGrey: '#1A0A0F',
// // //     white:    '#FFFCFB',
// // //     border:   'rgba(124,10,39,0.10)',

// // //     // rose ramp
// // //     rose0: '#FFF8F5',
// // //     rose1: '#FFE8EE',
// // //     rose2: '#F5B8C8',
// // //     rose3: '#E8789A',
// // //     rose4: '#C94070',
// // //     rose5: '#A01848',
// // //     rose6: '#7C0A27',
// // //     rose7: '#4A0418',

// // //     // semantics
// // //     textPrimary:   '#1A0A0F',
// // //     textSecondary: '#4A1828',
// // //     textMuted:     '#8A5060',
// // //     pageBg:        '#FAF3F0',
// // //     cardBg:        '#FFFCFB',
// // //     gold:          '#C9A84C',
// // //     goldLight:     '#E8D5A0',
// // //   },

// // //   page: {
// // //     background: '#FAF3F0',
// // //     minHeight: '100vh',
// // //     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
// // //     color: '#1A0A0F',
// // //   },

// // //   nav: {
// // //     display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// // //     padding: '0 6%', height: '78px',
// // //     background: 'rgba(250,243,240,0.96)',
// // //     backdropFilter: 'blur(32px)',
// // //     WebkitBackdropFilter: 'blur(32px)',
// // //     borderBottom: '1px solid rgba(124,10,39,0.08)',
// // //     position: 'sticky', top: 0, zIndex: 1000,
// // //     boxShadow: '0 1px 20px rgba(124,10,39,0.05)',
// // //   },
// // //   navLink: {
// // //     color: '#4A1828',
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontWeight: '500',
// // //     textTransform: 'uppercase',
// // //     letterSpacing: '2px',
// // //     fontSize: '11px',
// // //     textDecoration: 'none',
// // //     transition: 'color .2s',
// // //   },

// // //   headline: {
// // //     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
// // //     fontWeight: 700,
// // //     color: '#7C0A27',
// // //     lineHeight: '1.08',
// // //     margin: 0,
// // //     letterSpacing: '-0.01em',
// // //   },
// // //   italicText: {
// // //     fontStyle: 'italic',
// // //     fontWeight: 400,
// // //     color: '#C94070',
// // //   },
// // //   bodyText: {
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontWeight: '400',
// // //     color: '#4A1828',
// // //     lineHeight: '1.80',
// // //     fontSize: '15px',
// // //     margin: 0,
// // //   },
// // //   labelText: {
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontWeight: '600',
// // //     fontSize: '9.5px',
// // //     letterSpacing: '2.2px',
// // //     textTransform: 'uppercase',
// // //     color: '#A01848',
// // //     margin: 0,
// // //   },

// // //   primaryBtn: {
// // //     padding: '16px 40px',
// // //     borderRadius: '4px',
// // //     background: 'linear-gradient(135deg, #7C0A27 0%, #4A0418 100%)',
// // //     color: '#FAF3F0',
// // //     fontWeight: '600',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontSize: '11px',
// // //     letterSpacing: '2px',
// // //     textTransform: 'uppercase',
// // //     boxShadow: '0 8px 28px rgba(124,10,39,0.32)',
// // //     transition: 'all .3s cubic-bezier(.4,0,.2,1)',
// // //     display: 'inline-flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '10px',
// // //     textDecoration: 'none',
// // //   },
// // //   ghostBtn: {
// // //     padding: '15px 36px',
// // //     borderRadius: '4px',
// // //     background: 'transparent',
// // //     color: '#7C0A27',
// // //     fontWeight: '600',
// // //     border: '1px solid rgba(124,10,39,0.40)',
// // //     cursor: 'pointer',
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontSize: '11px',
// // //     letterSpacing: '2px',
// // //     textTransform: 'uppercase',
// // //     transition: 'all .25s',
// // //     display: 'inline-flex',
// // //     alignItems: 'center',
// // //     justifyContent: 'center',
// // //     gap: '10px',
// // //   },

// // //   productCard: {
// // //     background: '#FFFCFB',
// // //     borderRadius: '4px',
// // //     padding: '0',
// // //     boxShadow: '0 4px 24px rgba(124,10,39,0.06)',
// // //     border: '1px solid rgba(124,10,39,0.07)',
// // //     overflow: 'hidden',
// // //     transition: 'all .4s cubic-bezier(.4,0,.2,1)',
// // //   },

// // //   stepsSection: {
// // //     padding: '120px 8%',
// // //     background: '#4A0418',
// // //     borderRadius: '0',
// // //     position: 'relative',
// // //     overflow: 'hidden',
// // //   },
// // //   footer: {
// // //     padding: '80px 8% 0',
// // //     background: '#1A0A0F',
// // //     color: '#FFFCFB',
// // //   },

// // //   authBox: {
// // //     background: 'rgba(255,252,251,0.97)',
// // //     backdropFilter: 'blur(40px)',
// // //     WebkitBackdropFilter: 'blur(40px)',
// // //     borderRadius: '2px',
// // //     padding: '56px 52px',
// // //     boxShadow: '0 40px 100px rgba(124,10,39,0.22), 0 0 0 1px rgba(124,10,39,0.06)',
// // //     border: 'none',
// // //     textAlign: 'left',
// // //     maxWidth: '460px',
// // //     width: '100%',
// // //   },
// // //   input: {
// // //     width: '100%',
// // //     padding: '16px 20px',
// // //     margin: '0',
// // //     borderRadius: '3px',
// // //     border: '1px solid rgba(124,10,39,0.16)',
// // //     borderBottom: '2px solid rgba(124,10,39,0.16)',
// // //     background: '#FFFCFB',
// // //     fontFamily: "'Montserrat', sans-serif",
// // //     fontSize: '13px',
// // //     color: '#1A0A0F',
// // //     outline: 'none',
// // //     transition: '0.25s ease',
// // //     boxSizing: 'border-box',
// // //     display: 'block',
// // //     letterSpacing: '0.3px',
// // //   },
// // //   authTab: {
// // //     background: 'none',
// // //     border: 'none',
// // //     cursor: 'pointer',
// // //     fontFamily: "'Cormorant Garamond', serif",
// // //     paddingBottom: '8px',
// // //     transition: 'all .2s',
// // //   },
// // // };

// // // export default styles;


// // // ─── theme.js — Wrapping Happiness · Luxury Design System ────────────────────

// // export const styles = {
// //   colors: {
// //     // backward-compatible
// //     cream:    '#FAF3F0',
// //     deepRed:  '#7C0A27',
// //     logoPink: '#D088C3',
// //     babyPink: '#F2C4CE',
// //     darkGrey: '#1A0A0F',
// //     white:    '#FFFCFB',
// //     border:   'rgba(124,10,39,0.10)',

// //     // rose ramp
// //     rose0: '#FFF8F5',
// //     rose1: '#FFE8EE',
// //     rose2: '#F5B8C8',
// //     rose3: '#E8789A',
// //     rose4: '#C94070',
// //     rose5: '#A01848',
// //     rose6: '#7C0A27',
// //     rose7: '#4A0418',

// //     // semantics
// //     textPrimary:   '#1A0A0F',
// //     textSecondary: '#4A1828',
// //     textMuted:     '#8A5060',
// //     pageBg:        '#FAF3F0',
// //     cardBg:        '#FFFCFB',
// //     gold:          '#C9A84C',
// //     goldLight:     '#E8D5A0',
// //   },

// //   // ── PAGE ─────────────────────────────────────────────────────────────────
// //   page: {
// //     background: 'linear-gradient(160deg, #FFF8F5 0%, #FAF0F3 40%, #F5E4EC 100%)',
// //     minHeight: '100vh',
// //     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
// //     color: '#1A0A0F',
// //   },

// //   // ── NAVIGATION ───────────────────────────────────────────────────────────
// // nav: {
// //   display: 'flex', justifyContent: 'space-between', alignItems: 'center',
// //   padding: '0 6%', height: '78px',
// //   background: 'linear-gradient(90deg, #1A0A0F 0%, #2E0412 50%, #1A0A0F 100%)',
// //   borderBottom: '1px solid rgba(245,184,200,0.10)',
// //   position: 'sticky', top: 0, zIndex: 1000,
// //   boxShadow: '0 2px 32px rgba(0,0,0,0.35)',
// // },
// // navLink: {
// //   color: '#F5B8C8',
// //   fontFamily: "'Montserrat', sans-serif",
// //   fontWeight: '500',
// //   textTransform: 'uppercase',
// //   letterSpacing: '2px',
// //   fontSize: '11px',
// //   textDecoration: 'none',
// //   transition: 'color .2s',
// // },

// // // ── Add this new token alongside navLink ─────────────────────────────────
// // navBtn: {
// //   padding: '10px 24px',
// //   borderRadius: '50px',
// //   background: 'transparent',
// //   color: '#F5B8C8',
// //   fontWeight: '600',
// //   border: '1px solid rgba(245,184,200,0.35)',
// //   cursor: 'pointer',
// //   fontFamily: "'Montserrat', sans-serif",
// //   fontSize: '11px',
// //   letterSpacing: '2px',
// //   textTransform: 'uppercase',
// //   transition: 'all .25s',
// //   display: 'inline-flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// //   gap: '8px',
// // },

// //   // ── TYPOGRAPHY ───────────────────────────────────────────────────────────
// //   headline: {
// //     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
// //     fontWeight: 700,
// //     background: 'linear-gradient(135deg, #7C0A27 0%, #C94070 60%, #A01848 100%)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     backgroundClip: 'text',
// //     lineHeight: '1.08',
// //     margin: 0,
// //     letterSpacing: '-0.01em',
// //   },
// //   italicText: {
// //     fontStyle: 'italic',
// //     fontWeight: 400,
// //     background: 'linear-gradient(135deg, #C94070, #E8789A)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     backgroundClip: 'text',
// //   },
// //   bodyText: {
// //     fontFamily: "'DM Sans', 'Montserrat', sans-serif",
// //     fontWeight: '400',
// //     color: '#4A1828',
// //     lineHeight: '1.85',
// //     fontSize: '15px',
// //     margin: 0,
// //   },
// //   labelText: {
// //     fontFamily: "'Montserrat', sans-serif",
// //     fontWeight: '600',
// //     fontSize: '9.5px',
// //     letterSpacing: '2.5px',
// //     textTransform: 'uppercase',
// //     background: 'linear-gradient(90deg, #A01848, #C94070)',
// //     WebkitBackgroundClip: 'text',
// //     WebkitTextFillColor: 'transparent',
// //     backgroundClip: 'text',
// //     margin: 0,
// //   },

// //   // ── BUTTONS ──────────────────────────────────────────────────────────────
// //   primaryBtn: {
// //     padding: '16px 40px',
// //     borderRadius: '4px',
// //     background: 'linear-gradient(135deg, #7C0A27 0%, #A01848 50%, #4A0418 100%)',
// //     color: '#FFF8F5',
// //     fontWeight: '600',
// //     border: 'none',
// //     cursor: 'pointer',
// //     fontFamily: "'Montserrat', sans-serif",
// //     fontSize: '11px',
// //     letterSpacing: '2px',
// //     textTransform: 'uppercase',
// //     boxShadow: '0 8px 28px rgba(124,10,39,0.38), inset 0 1px 0 rgba(255,255,255,0.15)',
// //     transition: 'all .3s cubic-bezier(.4,0,.2,1)',
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '10px',
// //     textDecoration: 'none',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   ghostBtn: {
// //     padding: '15px 36px',
// //     borderRadius: '4px',
// //     background: 'linear-gradient(135deg, rgba(255,248,245,0.6), rgba(245,228,236,0.6))',
// //     color: '#7C0A27',
// //     fontWeight: '600',
// //     border: '1px solid rgba(124,10,39,0.35)',
// //     cursor: 'pointer',
// //     fontFamily: "'Montserrat', sans-serif",
// //     fontSize: '11px',
// //     letterSpacing: '2px',
// //     textTransform: 'uppercase',
// //     transition: 'all .25s',
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     gap: '10px',
// //     backdropFilter: 'blur(8px)',
// //   },

// //   // ── CARDS ─────────────────────────────────────────────────────────────────
// //   productCard: {
// //     background: 'linear-gradient(160deg, #FFFCFB 0%, #FFF4F7 50%, #FFE8EE 100%)',
// //     borderRadius: '4px',
// //     padding: '0',
// //     boxShadow: '0 4px 24px rgba(124,10,39,0.07), 0 1px 4px rgba(124,10,39,0.05)',
// //     border: '1px solid rgba(124,10,39,0.07)',
// //     overflow: 'hidden',
// //     transition: 'all .4s cubic-bezier(.4,0,.2,1)',
// //   },
// //   floatCard: {
// //     background: 'linear-gradient(145deg, rgba(255,252,251,0.95), rgba(255,240,245,0.90))',
// //     backdropFilter: 'blur(20px)',
// //     WebkitBackdropFilter: 'blur(20px)',
// //     borderRadius: '4px',
// //     border: '1px solid rgba(255,255,255,0.9)',
// //     boxShadow: '0 16px 48px rgba(124,10,39,0.13)',
// //     padding: '18px 20px',
// //   },

// //   // ── SECTIONS ──────────────────────────────────────────────────────────────
// //   stepsSection: {
// //     padding: '120px 8%',
// //     background: 'linear-gradient(160deg, #3A0412 0%, #4A0418 40%, #6B1030 100%)',
// //     borderRadius: '0',
// //     position: 'relative',
// //     overflow: 'hidden',
// //   },
// //   footer: {
// //     padding: '80px 8% 0',
// //     background: 'linear-gradient(160deg, #0E0006 0%, #1A0A0F 50%, #2E0412 100%)',
// //     color: '#FFFCFB',
// //   },

// //   // ── AUTH & INPUTS ─────────────────────────────────────────────────────────
// //   authBox: {
// //     background: 'linear-gradient(160deg, rgba(255,252,251,0.98) 0%, rgba(255,244,247,0.97) 100%)',
// //     backdropFilter: 'blur(40px)',
// //     WebkitBackdropFilter: 'blur(40px)',
// //     borderRadius: '2px',
// //     padding: '56px 52px',
// //     boxShadow: '0 40px 100px rgba(124,10,39,0.20), 0 0 0 1px rgba(124,10,39,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
// //     border: 'none',
// //     textAlign: 'left',
// //     maxWidth: '460px',
// //     width: '100%',
// //   },
// //   input: {
// //     width: '100%',
// //     padding: '16px 20px',
// //     margin: '0',
// //     borderRadius: '3px',
// //     border: '1px solid rgba(124,10,39,0.14)',
// //     borderBottom: '2px solid rgba(124,10,39,0.20)',
// //     background: 'linear-gradient(160deg, #FFFCFB 0%, #FFF8FA 100%)',
// //     fontFamily: "'DM Sans', 'Montserrat', sans-serif",
// //     fontSize: '13px',
// //     color: '#1A0A0F',
// //     outline: 'none',
// //     transition: '0.25s ease',
// //     boxSizing: 'border-box',
// //     display: 'block',
// //     letterSpacing: '0.3px',
// //   },
// //   authTab: {
// //     background: 'none',
// //     border: 'none',
// //     cursor: 'pointer',
// //     fontFamily: "'Cormorant Garamond', serif",
// //     paddingBottom: '8px',
// //     transition: 'all .2s',
// //   },

// //   // ── EYEBROW / BADGE ───────────────────────────────────────────────────────
// //   eyebrow: {
// //     display: 'inline-flex',
// //     alignItems: 'center',
// //     gap: '10px',
// //     background: 'linear-gradient(90deg, rgba(255,232,238,0.80), rgba(245,184,200,0.50))',
// //     border: '1px solid rgba(201,64,112,0.20)',
// //     padding: '7px 18px 7px 10px',
// //     borderRadius: '50px',
// //     marginBottom: '28px',
// //     width: 'fit-content',
// //     backdropFilter: 'blur(8px)',
// //   },

// //   // ── DIVIDER ───────────────────────────────────────────────────────────────
// //   divider: {
// //     height: '1px',
// //     background: 'linear-gradient(90deg, transparent, rgba(124,10,39,0.18), transparent)',
// //     border: 'none',
// //     margin: '0',
// //   },
// // };

// // export default styles;


// // ─── theme.js — Wrapping Happiness · Sage & Dusty Rose Edition ───────────────
// // Inspo: muted olive-sage nav · warm linen page · dusty rose accents · editorial type
// // Minimal luxury — generous whitespace, organic warmth, zero noise

// export const styles = {
//   colors: {
//     // ── backward-compatible keys (unchanged) ──────────────────────────────
//     cream:    '#F7F4EE',        // was '#FAF3F0' — now warm linen
//     deepRed:  '#4A5038',        // repurposed → deep sage (primary brand anchor)
//     logoPink: '#C4907A',        // repurposed → terracotta rose (accent)
//     babyPink: '#E8C4B8',        // repurposed → dusty blush
//     darkGrey: '#2C2A1E',        // near-black warm
//     white:    '#FDFAF4',        // warm white
//     border:   'rgba(44,42,30,0.09)',

//     // ── Sage ramp (primary) ────────────────────────────────────────────────
//     sage0:  '#F7F4EE',   // linen — page bg
//     sage1:  '#EAE6D8',   // soft cream — section alt
//     sage2:  '#D4CEBC',   // parchment — borders, dividers
//     sage3:  '#C9B89A',   // sand gold — muted accent
//     sage4:  '#8A7354',   // antique brass — eyebrow text, labels
//     sage5:  '#6B7354',   // sage olive — mid brand
//     sage6:  '#4A5038',   // deep sage — nav, headings, primary btn
//     sage7:  '#2C2A1E',   // near-black — darkest text, footer

//     // ── Rose ramp (accent) ─────────────────────────────────────────────────
//     rose0:  '#FDF8F5',   // barely-there blush
//     rose1:  '#F2E4DC',   // blush linen — card tint, icon bg
//     rose2:  '#E8C4B8',   // dusty rose — headlines italic, badges
//     rose3:  '#D4A882',   // warm caramel
//     rose4:  '#C4907A',   // terracotta rose — prices, accents
//     rose5:  '#A06858',   // deep terracotta
//     rose6:  '#7A4838',   // rich brown-rose

//     // ── Semantics ──────────────────────────────────────────────────────────
//     textPrimary:   '#2C2A1E',   // warm near-black
//     textSecondary: '#4A4434',   // dark parchment
//     textMuted:     '#8A8470',   // muted warm grey
//     pageBg:        '#F7F4EE',   // linen
//     sectionAlt:    '#EAE6D8',   // soft cream sections
//     cardBg:        '#FDFAF4',   // warm white cards
//     gold:          '#C9B89A',   // sand gold
//     goldLight:     '#EAE6D8',   // gold surface tint
//   },

//   // ── PAGE ─────────────────────────────────────────────────────────────────
//   page: {
//     background: '#F7F4EE',        // flat linen — no gradients, stays clean
//     minHeight: '100vh',
//     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//     color: '#2C2A1E',
//   },

//   // ── NAVIGATION ───────────────────────────────────────────────────────────
//   nav: {
//     display: 'flex', justifyContent: 'space-between', alignItems: 'center',
//     padding: '0 6%', height: '72px',
//     background: '#4A5038',          // deep sage — matches inspo exactly
//     borderBottom: '1px solid rgba(201,184,154,0.15)',
//     position: 'sticky', top: 0, zIndex: 1000,
//     boxShadow: '0 2px 28px rgba(44,42,30,0.18)',
//   },
//   navLink: {
//     color: 'rgba(247,244,238,0.68)',
//     fontFamily: "'Montserrat', sans-serif",
//     fontWeight: '500',
//     textTransform: 'uppercase',
//     letterSpacing: '2px',
//     fontSize: '10px',
//     textDecoration: 'none',
//     transition: 'color .2s',
//   },
//   navBtn: {
//     padding: '9px 22px',
//     borderRadius: '2px',            // sharp editorial corners
//     background: 'transparent',
//     color: '#E8C4B8',
//     fontWeight: '600',
//     border: '1px solid rgba(232,196,184,0.38)',
//     cursor: 'pointer',
//     fontFamily: "'Montserrat', sans-serif",
//     fontSize: '10px',
//     letterSpacing: '2px',
//     textTransform: 'uppercase',
//     transition: 'all .25s',
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '8px',
//   },

//   // ── TYPOGRAPHY ───────────────────────────────────────────────────────────
//   headline: {
//     fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
//     fontWeight: 300,                // light weight = more luxury
//     color: '#2C2A1E',
//     lineHeight: '1.05',
//     margin: 0,
//     letterSpacing: '-0.01em',
//   },
//   italicText: {
//     fontStyle: 'italic',
//     fontWeight: 300,
//     color: '#C4907A',               // terracotta rose — no gradient, stays clean
//   },
//   bodyText: {
//     fontFamily: "'Montserrat', sans-serif",
//     fontWeight: '400',
//     color: '#4A4434',
//     lineHeight: '1.85',
//     fontSize: '14px',
//     margin: 0,
//     letterSpacing: '0.1px',
//   },
//   labelText: {
//     fontFamily: "'Montserrat', sans-serif",
//     fontWeight: '600',
//     fontSize: '9px',
//     letterSpacing: '3px',
//     textTransform: 'uppercase',
//     color: '#8A7354',               // antique brass — subtle, not loud
//     margin: 0,
//   },

//   // ── BUTTONS ──────────────────────────────────────────────────────────────
//   primaryBtn: {
//     padding: '15px 36px',
//     borderRadius: '2px',            // sharp — editorial, not bubbly
//     background: '#4A5038',          // deep sage solid — no gradient
//     color: '#F7F4EE',
//     fontWeight: '600',
//     border: 'none',
//     cursor: 'pointer',
//     fontFamily: "'Montserrat', sans-serif",
//     fontSize: '10px',
//     letterSpacing: '2.5px',
//     textTransform: 'uppercase',
//     boxShadow: '0 6px 24px rgba(74,80,56,0.28)',
//     transition: 'all .3s cubic-bezier(.4,0,.2,1)',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '10px',
//     textDecoration: 'none',
//   },
//   ghostBtn: {
//     padding: '14px 32px',
//     borderRadius: '2px',
//     background: 'transparent',
//     color: '#4A5038',
//     fontWeight: '600',
//     border: '1px solid rgba(74,80,56,0.35)',
//     cursor: 'pointer',
//     fontFamily: "'Montserrat', sans-serif",
//     fontSize: '10px',
//     letterSpacing: '2.5px',
//     textTransform: 'uppercase',
//     transition: 'all .25s',
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '10px',
//   },

//   // ── CARDS ─────────────────────────────────────────────────────────────────
//   productCard: {
//     background: '#FDFAF4',          // warm white — flat, no gradient
//     borderRadius: '4px',
//     padding: '0',
//     boxShadow: '0 4px 24px rgba(44,42,30,0.07)',
//     border: '1px solid rgba(44,42,30,0.07)',
//     overflow: 'hidden',
//     transition: 'all .4s cubic-bezier(.4,0,.2,1)',
//   },
//   floatCard: {
//     background: 'rgba(253,250,244,0.94)',
//     backdropFilter: 'blur(20px)',
//     WebkitBackdropFilter: 'blur(20px)',
//     borderRadius: '4px',
//     border: '1px solid rgba(212,206,188,0.6)',
//     boxShadow: '0 16px 48px rgba(44,42,30,0.10)',
//     padding: '18px 20px',
//   },

//   // ── SECTIONS ──────────────────────────────────────────────────────────────
//   stepsSection: {
//     padding: '110px 8%',
//     background: '#2C2A1E',          // near-black warm — rich, not cold
//     borderRadius: '0',
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   footer: {
//     padding: '80px 8% 0',
//     background: '#2C2A1E',
//     color: '#F7F4EE',
//   },

//   // ── AUTH & INPUTS ─────────────────────────────────────────────────────────
//   authBox: {
//     background: 'rgba(253,250,244,0.96)',
//     backdropFilter: 'blur(32px)',
//     WebkitBackdropFilter: 'blur(32px)',
//     borderRadius: '4px',
//     padding: '48px 44px',
//     boxShadow: '0 32px 80px rgba(44,42,30,0.16), 0 0 0 1px rgba(44,42,30,0.06)',
//     border: 'none',
//     textAlign: 'left',
//     maxWidth: '420px',
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     padding: '14px 18px',
//     margin: '0',
//     borderRadius: '3px',
//     border: '1px solid rgba(44,42,30,0.12)',
//     borderBottom: '2px solid rgba(74,80,56,0.25)',  // sage bottom accent
//     background: '#F7F4EE',
//     fontFamily: "'Montserrat', sans-serif",
//     fontSize: '13px',
//     color: '#2C2A1E',
//     outline: 'none',
//     transition: '0.25s ease',
//     boxSizing: 'border-box',
//     display: 'block',
//     letterSpacing: '0.3px',
//   },
//   authTab: {
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     fontFamily: "'Cormorant Garamond', serif",
//     paddingBottom: '8px',
//     transition: 'all .2s',
//   },

//   // ── EYEBROW / BADGE ───────────────────────────────────────────────────────
//   eyebrow: {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '10px',
//     background: '#EAE6D8',          // soft cream — flat, organic
//     border: '1px solid rgba(201,184,154,0.5)',
//     padding: '6px 16px 6px 10px',
//     borderRadius: '2px',            // sharp to match editorial feel
//     marginBottom: '28px',
//     width: 'fit-content',
//   },

//   // ── DIVIDER ───────────────────────────────────────────────────────────────
//   divider: {
//     height: '1px',
//     background: 'rgba(44,42,30,0.10)',   // flat subtle line
//     border: 'none',
//     margin: '0',
//   },
// };

// export default styles;




// ─── theme.js — Wrapping Happiness · Botanical Luxury ────────────────────────
// Palette: Field Flowers inspiration — olive, sage, ivory, warm cream, forest

export const styles = {
  colors: {
    // ── Backward-compatible keys ──────────────────────────────────────────
    cream:    '#F5F0E8',
    deepRed:  '#5C4A2A',       // warm dark olive-brown (replaces crimson)
    logoPink: '#B8956A',       // warm gold-tan accent
    babyPink: '#E8DDD0',       // warm ivory
    darkGrey: '#1C1A14',
    white:    '#FDFAF4',
    border:   'rgba(92,74,42,0.12)',

    // ── Botanical palette ─────────────────────────────────────────────────
    olive0:   '#F5F0E8',       // page base — warm ivory
    olive1:   '#EDE5D8',       // lightest cream
    olive2:   '#D4C9B0',       // warm parchment
    olive3:   '#B8A882',       // tan/khaki
    olive4:   '#8C7B56',       // medium olive-tan
    olive5:   '#6B5C38',       // deep olive-brown
    olive6:   '#4A3C24',       // forest floor
    olive7:   '#2E2416',       // near-black warm

    sage0:    '#F0F2EC',       // lightest sage tint
    sage1:    '#D8DDD0',       // light sage
    sage2:    '#B0B89E',       // medium sage
    sage3:    '#7A8868',       // olive-sage
    sage4:    '#5C6B50',       // deep sage
    sage5:    '#3E4E36',       // forest sage
    sage6:    '#2A3624',       // darkest sage

    blush:    '#D4A898',       // dusty rose (used sparingly)
    gold:     '#C9A84C',       // warm gold for accents
    goldLight:'#E8D5A0',

    // ── Semantics ─────────────────────────────────────────────────────────
    textPrimary:   '#1C1A14',
    textSecondary: '#4A3C24',
    textMuted:     '#7A6B50',
    pageBg:        '#F5F0E8',
    cardBg:        '#FDFAF4',
    sectionDark:   '#2A3624',   // forest sage for dark sections
    sectionMid:    '#4A3C24',   // olive for steps section
  },

  page: {
    background: '#F5F0E8',
    minHeight: '100vh',
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    color: '#1C1A14',
  },

  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 6%', height: '76px',
    background: 'rgba(74,60,36,0.97)',
    backdropFilter: 'blur(32px)',
    WebkitBackdropFilter: 'blur(32px)',
    borderBottom: '1px solid rgba(200,185,150,0.12)',
    position: 'sticky', top: 0, zIndex: 1000,
    boxShadow: '0 2px 24px rgba(28,24,16,0.18)',
  },
  navLink: {
    color: 'rgba(237,229,216,0.70)',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '2.2px',
    fontSize: '11px',
    textDecoration: 'none',
    transition: 'color .2s',
  },

  headline: {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    fontWeight: 700,
    color: '#2E2416',
    lineHeight: '1.05',
    margin: 0,
    letterSpacing: '-0.01em',
  },
  italicText: {
    fontStyle: 'italic',
    fontWeight: 400,
    color: '#5C6B50',
  },
  bodyText: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '400',
    color: '#4A3C24',
    lineHeight: '1.80',
    fontSize: '15px',
    margin: 0,
  },
  labelText: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '600',
    fontSize: '9.5px',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    color: '#7A8868',
    margin: 0,
  },

  primaryBtn: {
    padding: '16px 40px',
    borderRadius: '2px',
    background: 'linear-gradient(135deg, #4A3C24 0% , #2E2416  100%)',
    color: '#F5F0E8',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    boxShadow: '0 8px 28px rgba(46,36,22,0.30)',
    transition: 'all .3s cubic-bezier(.4,0,.2,1)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  ghostBtn: {
    padding: '15px 36px',
    borderRadius: '2px',
    background: ' #700606',
    color: 'white',
    fontWeight: '600',
    border: '1px solid rgba(92,74,42,0.45)',
    cursor: 'pointer',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '11px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'all .25s',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },

  productCard: {
    background: '#FDFAF4',
    borderRadius: '3px',
    padding: '0',
    boxShadow: '0 4px 24px rgba(46,36,22,0.07)',
    border: '1px solid rgba(92,74,42,0.09)',
    overflow: 'hidden',
    transition: 'all .4s cubic-bezier(.4,0,.2,1)',
  },

  stepsSection: {
    padding: '120px 8%',
    background: '#2A3624',
    borderRadius: '0',
    position: 'relative',
    overflow: 'hidden',
  },
  footer: {
    padding: '80px 8% 0',
    background: '#1C1A14',
    color: '#FDFAF4',
  },

  authBox: {
    background: 'rgba(253,250,244,0.97)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    borderRadius: '2px',
    padding: '56px 52px',
    boxShadow: '0 40px 100px rgba(28,24,16,0.20), 0 0 0 1px rgba(92,74,42,0.08)',
    border: 'none',
    textAlign: 'left',
    maxWidth: '460px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '16px 20px',
    margin: '0',
    borderRadius: '2px',
    border: '1px solid rgba(92,74,42,0.18)',
    borderBottom: '2px solid rgba(92,74,42,0.20)',
    background: '#FDFAF4',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '13px',
    color: '#1C1A14',
    outline: 'none',
    transition: '0.25s ease',
    boxSizing: 'border-box',
    display: 'block',
    letterSpacing: '0.3px',
  },
  authTab: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Cormorant Garamond', serif",
    paddingBottom: '8px',
    transition: 'all .2s',
  },
};

export default styles;




  // // ─── AuthPage.jsx ─────────────────────────────────────────────────────────────
  // import { useState } from 'react';
  // import { useNavigate, Link } from 'react-router-dom';
  // import styles from '../theme';

  // const Ornament = ({ color = 'rgba(180,60,100,0.30)' }) => (
  //   <svg width="80" height="14" viewBox="0 0 80 14" fill="none" style={{ display: 'block' }}>
  //     <line x1="0" y1="7" x2="28" y2="7" stroke={color} strokeWidth="0.75"/>
  //     <circle cx="40" cy="7" r="4" stroke={color} strokeWidth="0.75" fill="none"/>
  //     <circle cx="40" cy="7" r="1.5" fill={color}/>
  //     <line x1="52" y1="7" x2="80" y2="7" stroke={color} strokeWidth="0.75"/>
  //   </svg>
  // );

  // const FloralMark = () => (
  //   <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
  //     <circle cx="28" cy="28" r="26" stroke="rgba(240,180,200,0.35)" strokeWidth="0.75"/>
  //     <path d="M28 8 C20 8 12 16 12 28 C12 40 20 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
  //     <path d="M28 8 C36 8 44 16 44 28 C44 40 36 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
  //     <path d="M8 28 L48 28" stroke="rgba(240,180,200,0.25)" strokeWidth="0.75"/>
  //     <circle cx="28" cy="28" r="4" fill="rgba(240,180,200,0.40)"/>
  //     <circle cx="28" cy="28" r="1.5" fill="rgba(255,255,255,0.70)"/>
  //   </svg>
  // );

  // const AuthPage = () => {
  //   const [mode, setMode]             = useState('login');
  //   const [focused, setFocused]       = useState(null);
  //   const [btnHovered, setBtnHovered] = useState(false);
  //   const [showPass, setShowPass]     = useState(false);
  //   const navigate                    = useNavigate();

  //   const inputStyle = (field) => ({
  //     ...styles.input,
  //     paddingLeft: '48px',
  //     paddingRight: field === 'pass' ? '56px' : '20px',
  //     borderColor: focused === field ? '#C2185B' : 'rgba(194,24,91,0.18)',
  //     borderBottomColor: focused === field ? '#C2185B' : 'rgba(194,24,91,0.28)',
  //     boxShadow: focused === field ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none',
  //     background: focused === field ? '#FFF5F8' : '#FDF0F4',
  //   });

  //   const iconWrap = {
  //     position: 'absolute', left: '16px', top: '50%',
  //     transform: 'translateY(-50%)',
  //     color: 'rgba(180,60,100,0.45)',
  //     fontSize: '14px', pointerEvents: 'none', lineHeight: 1,
  //   };

  //   return (
  //     <div style={{
  //       minHeight: '100vh',
  //       display: 'grid',
  //       gridTemplateColumns: '1fr 1.15fr',
  //       fontFamily: "'Montserrat', sans-serif",
  //       background: '#FDF0F4',
  //     }}>

  //       {/* ── LEFT: Brand panel ── */}
  //       <div style={{
  //         background: 'linear-gradient(160deg, #4A0A1E 0%, #7C1040 55%, #5C0A2A 100%)',
  //         display: 'flex', flexDirection: 'column',
  //         justifyContent: 'center', alignItems: 'center',
  //         padding: '80px 64px',
  //         position: 'relative', overflow: 'hidden',
  //         textAlign: 'center',
  //       }}>
  //         {/* Texture */}
  //         <div style={{
  //           position: 'absolute', inset: 0,
  //           backgroundImage: 'radial-gradient(rgba(255,192,212,0.06) 1px, transparent 1px)',
  //           backgroundSize: '24px 24px', pointerEvents: 'none',
  //         }}/>
  //         {/* Glows */}
  //         <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'350px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,192,212,0.10), transparent 70%)', pointerEvents:'none' }}/>
  //         <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,150,180,0.08), transparent 70%)', pointerEvents:'none' }}/>

  //         {/* Pink top hairline */}
  //         <div style={{
  //           position: 'absolute', top: 0, left: '15%', right: '15%',
  //           height: '1px',
  //           background: 'linear-gradient(90deg, transparent, rgba(255,192,212,0.50), transparent)',
  //         }}/>

  //         <div style={{ position: 'relative', zIndex: 1 }}>
  //           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
  //             <FloralMark/>
  //           </div>

  //           <p style={{ ...styles.labelText, color: 'rgba(255,210,225,0.60)', letterSpacing: '4px', marginBottom: '18px' }}>
  //             Est. 2024 · Hyderabad, PK
  //           </p>

  //           <h1 style={{
  //             fontFamily: "'Cormorant Garamond','Playfair Display',serif",
  //             fontSize: '52px', fontWeight: 700, lineHeight: 0.96,
  //             color: '#FFF0F5', letterSpacing: '-0.01em', marginBottom: '6px',
  //           }}>Wrapping</h1>
  //           <h1 style={{
  //             fontFamily: "'Cormorant Garamond','Playfair Display',serif",
  //             fontSize: '52px', fontWeight: 400, lineHeight: 0.96,
  //             fontStyle: 'italic',
  //             color: 'rgba(255,192,212,0.85)', marginBottom: '32px',
  //           }}>Happiness</h1>

  //           <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
  //             <Ornament color="rgba(255,192,212,0.35)"/>
  //           </div>

  //           <p style={{
  //             fontFamily: "'Cormorant Garamond','Playfair Display',serif",
  //             fontSize: '19px', fontStyle: 'italic', fontWeight: 400,
  //             color: 'rgba(255,210,225,0.70)', lineHeight: 1.70,
  //             maxWidth: '300px', marginBottom: '48px',
  //           }}>
  //             "Every gift tells a story. We help you write the most beautiful chapter."
  //           </p>

  //           {/* Stats */}
  //           <div style={{
  //             display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
  //             gap: '1px', background: 'rgba(255,192,212,0.12)',
  //             borderRadius: '2px', overflow: 'hidden',
  //           }}>
  //             {[
  //               { n: '2,400+', l: 'Gifts Delivered' },
  //               { n: '4.9 ★',  l: 'Avg. Rating'     },
  //               { n: '3 hrs',  l: 'Avg. Delivery'    },
  //             ].map((s, i) => (
  //               <div key={i} style={{ background: 'rgba(50,5,20,0.40)', padding: '18px 10px', textAlign: 'center' }}>
  //                 <p style={{
  //                   fontFamily: "'Cormorant Garamond',serif",
  //                   fontSize: '22px', fontWeight: 700,
  //                   color: '#FFF0F5', lineHeight: 1, marginBottom: '5px',
  //                 }}>{s.n}</p>
  //                 <p style={{ ...styles.labelText, fontSize: '7px', color: 'rgba(255,210,225,0.50)', letterSpacing: '1.2px' }}>
  //                   {s.l}
  //                 </p>
  //               </div>
  //             ))}
  //           </div>
  //         </div>

  //         <Link to="/" style={{
  //           position: 'absolute', top: '24px', left: '24px',
  //           fontFamily: "'Montserrat',sans-serif",
  //           fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase',
  //           color: 'rgba(255,210,225,0.45)', textDecoration: 'none',
  //           display: 'flex', alignItems: 'center', gap: '8px',
  //         }}>← Home</Link>
  //       </div>

  //       {/* ── RIGHT: Auth form ── */}
  //       <div style={{
  //         display: 'flex', alignItems: 'center', justifyContent: 'center',
  //         padding: '60px 10%',
  //         background: 'linear-gradient(160deg, #FDF0F4 0%, #FAE4EC 100%)',
  //         position: 'relative', overflow: 'hidden',
  //       }}>
  //         {/* Background ornament */}
  //         <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', opacity: 0.06, pointerEvents: 'none' }}>
  //           <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
  //             <circle cx="160" cy="160" r="150" stroke="#C2185B" strokeWidth="1"/>
  //             <circle cx="160" cy="160" r="110" stroke="#C2185B" strokeWidth="0.5"/>
  //             <circle cx="160" cy="160" r="70"  stroke="#C2185B" strokeWidth="0.5"/>
  //           </svg>
  //         </div>

  //         <div style={{ width: '100%', maxWidth: '440px', position: 'relative', zIndex: 1 }}>

  //           {/* Header */}
  //           <div style={{ marginBottom: '40px' }}>
  //             <p style={{ ...styles.labelText, color: '#C2185B', marginBottom: '12px', letterSpacing: '3px' }}>
  //               ✦ &nbsp; {mode === 'login' ? 'Welcome Back' : 'Begin Your Story'}
  //             </p>
  //             <h2 style={{
  //               fontFamily: "'Cormorant Garamond','Playfair Display',serif",
  //               fontSize: '42px', fontWeight: 700, lineHeight: 1.0,
  //               color: '#1C0A10', marginBottom: '4px', letterSpacing: '-0.01em',
  //             }}>
  //               {mode === 'login' ? 'Sign in to your' : 'Create your'}
  //             </h2>
  //             <h2 style={{
  //               fontFamily: "'Cormorant Garamond','Playfair Display',serif",
  //               fontSize: '42px', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.0,
  //               color: '#C2185B', marginBottom: '20px',
  //             }}>
  //               studio account
  //             </h2>
  //             <Ornament color="rgba(194,24,91,0.22)"/>
  //           </div>

  //           {/* Tab switcher */}
  //           <div style={{
  //             display: 'flex', gap: '32px', marginBottom: '36px',
  //             borderBottom: '1px solid rgba(194,24,91,0.12)',
  //           }}>
  //             {['login','signup'].map(m => (
  //               <button key={m} onClick={() => setMode(m)} style={{
  //                 background: 'none', border: 'none', cursor: 'pointer',
  //                 padding: '0 0 14px 0',
  //                 fontFamily: "'Montserrat',sans-serif",
  //                 fontSize: '11px', fontWeight: mode === m ? 700 : 400,
  //                 letterSpacing: '2px', textTransform: 'uppercase',
  //                 color: mode === m ? '#7C1040' : '#B06080',
  //                 borderBottom: mode === m ? '2px solid #C2185B' : '2px solid transparent',
  //                 marginBottom: '-1px',
  //                 transition: 'all .22s',
  //               }}>
  //                 {m === 'login' ? 'Login' : 'Sign Up'}
  //               </button>
  //             ))}
  //           </div>

  //           {/* Fields */}
  //           <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '12px' }}>
  //             {mode === 'signup' && (
  //               <div style={{ position: 'relative' }}>
  //                 <span style={iconWrap}>👤</span>
  //                 <input type="text" placeholder="Full Name"
  //                   style={inputStyle('name')}
  //                   onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}/>
  //               </div>
  //             )}
  //             <div style={{ position: 'relative' }}>
  //               <span style={iconWrap}>✉</span>
  //               <input type="email" placeholder="Email Address"
  //                 style={inputStyle('email')}
  //                 onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}/>
  //             </div>
  //             <div style={{ position: 'relative' }}>
  //               <span style={iconWrap}>🔒</span>
  //               <input
  //                 type={showPass ? 'text' : 'password'}
  //                 placeholder="Password"
  //                 style={inputStyle('pass')}
  //                 onFocus={() => setFocused('pass')} onBlur={() => setFocused(null)}
  //               />
  //               <button onClick={() => setShowPass(s => !s)} style={{
  //                 position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
  //                 background: 'none', border: 'none', cursor: 'pointer',
  //                 fontFamily: "'Montserrat',sans-serif",
  //                 fontSize: '10px', fontWeight: 600, letterSpacing: '0.5px',
  //                 color: 'rgba(194,24,91,0.45)',
  //               }}>{showPass ? 'Hide' : 'Show'}</button>
  //             </div>
  //             {mode === 'signup' && (
  //               <div style={{ position: 'relative' }}>
  //                 <span style={iconWrap}>🔒</span>
  //                 <input type="password" placeholder="Confirm Password"
  //                   style={inputStyle('confirm')}
  //                   onFocus={() => setFocused('confirm')} onBlur={() => setFocused(null)}/>
  //               </div>
  //             )}
  //           </div>

  //           {mode === 'login' && (
  //             <div style={{ textAlign: 'right', marginBottom: '28px' }}>
  //               <span style={{
  //                 fontFamily: "'Montserrat',sans-serif",
  //                 fontSize: '11px', fontWeight: 500,
  //                 color: '#C2185B', cursor: 'pointer',
  //                 borderBottom: '1px solid rgba(194,24,91,0.28)',
  //                 paddingBottom: '1px',
  //               }}>Forgot password?</span>
  //             </div>
  //           )}
  //           {mode === 'signup' && <div style={{ marginBottom: '28px' }}/>}

  //           {/* CTA */}
  //           <button
  //             onMouseEnter={() => setBtnHovered(true)}
  //             onMouseLeave={() => setBtnHovered(false)}
  //             style={{
  //               ...styles.primaryBtn,
  //               width: '100%', padding: '18px',
  //               fontSize: '11px', letterSpacing: '2.5px',
  //               background: btnHovered
  //                 ? 'linear-gradient(135deg, #880E4F 0%, #C2185B 100%)'
  //                 : 'linear-gradient(135deg, #7C1040 0%, #AD1457 100%)',
  //               color: '#FFF0F5',
  //               border: 'none',
  //               borderRadius: '2px',
  //               transform: btnHovered ? 'translateY(-3px)' : 'translateY(0)',
  //               boxShadow: btnHovered
  //                 ? '0 22px 54px rgba(124,16,64,0.40)'
  //                 : '0 10px 32px rgba(124,16,64,0.26)',
  //               marginBottom: '24px',
  //               transition: 'all .22s',
  //               cursor: 'pointer',
  //               textTransform: 'uppercase',
  //             }}
  //           >
  //             {mode === 'login' ? 'Enter Your Studio ✦' : 'Create Account ✦'}
  //           </button>

  //           {/* Divider */}
  //           <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
  //             <div style={{ flex: 1, height: '1px', background: 'rgba(194,24,91,0.10)' }}/>
  //             <span style={{ ...styles.labelText, color: 'rgba(194,24,91,0.32)', fontSize: '8px' }}>OR CONTINUE WITH</span>
  //             <div style={{ flex: 1, height: '1px', background: 'rgba(194,24,91,0.10)' }}/>
  //           </div>

  //           {/* Google */}
  //           <button style={{
  //             width: '100%', padding: '15px 20px', borderRadius: '2px',
  //             background: '#FFF5F8', border: '1px solid rgba(194,24,91,0.18)',
  //             fontFamily: "'Montserrat',sans-serif",
  //             fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase',
  //             color: '#1C0A10', cursor: 'pointer',
  //             display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
  //             boxSizing: 'border-box',
  //             boxShadow: '0 2px 8px rgba(124,16,64,0.07)',
  //             transition: 'box-shadow .2s',
  //           }}>
  //             <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
  //               <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
  //               <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
  //               <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
  //               <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.484 0 2.443 2.017.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" fill="#EA4335"/>
  //             </svg>
  //             Google
  //           </button>

  //           <p style={{
  //             fontFamily: "'Montserrat',sans-serif",
  //             fontSize: '12px', textAlign: 'center',
  //             color: '#B06080', marginTop: '28px',
  //           }}>
  //             {mode === 'login' ? "New here? " : "Already have an account? "}
  //             <span
  //               onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
  //               style={{ color: '#7C1040', fontWeight: 700, cursor: 'pointer', borderBottom: '1px solid rgba(124,16,64,0.32)', paddingBottom: '1px' }}
  //             >
  //               {mode === 'login' ? 'Create Account' : 'Sign In'}
  //             </span>
  //           </p>

  //           <p style={{
  //             fontFamily: "'Montserrat',sans-serif",
  //             fontSize: '10px', textAlign: 'center',
  //             color: 'rgba(124,16,64,0.40)', marginTop: '16px', lineHeight: 1.6,
  //           }}>
  //             By continuing, you agree to our{' '}
  //             <span style={{ color: '#C2185B', cursor: 'pointer' }}>Terms of Service</span>
  //             {' '}&amp;{' '}
  //             <span style={{ color: '#C2185B', cursor: 'pointer' }}>Privacy Policy</span>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  // export default AuthPage;















// ─── AuthPage.jsx ─────────────────────────────────────────────────────────────
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from '../theme';

const Ornament = ({ color = 'rgba(180,60,100,0.30)' }) => (
  <svg width="80" height="14" viewBox="0 0 80 14" fill="none" style={{ display: 'block' }}>
    <line x1="0" y1="7" x2="28" y2="7" stroke={color} strokeWidth="0.75"/>
    <circle cx="40" cy="7" r="4" stroke={color} strokeWidth="0.75" fill="none"/>
    <circle cx="40" cy="7" r="1.5" fill={color}/>
    <line x1="52" y1="7" x2="80" y2="7" stroke={color} strokeWidth="0.75"/>
  </svg>
);

const FloralMark = () => (
  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
    <circle cx="28" cy="28" r="26" stroke="rgba(240,180,200,0.35)" strokeWidth="0.75"/>
    <path d="M28 8 C20 8 12 16 12 28 C12 40 20 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
    <path d="M28 8 C36 8 44 16 44 28 C44 40 36 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
    <path d="M8 28 L48 28" stroke="rgba(240,180,200,0.25)" strokeWidth="0.75"/>
    <circle cx="28" cy="28" r="4" fill="rgba(240,180,200,0.40)"/>
    <circle cx="28" cy="28" r="1.5" fill="rgba(255,255,255,0.70)"/>
  </svg>
);

const AuthPage = () => {
  const [mode, setMode]             = useState('login');
  const [focused, setFocused]       = useState(null);
  const [btnHovered, setBtnHovered] = useState(false);
  const [showPass, setShowPass]     = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState('');
  const [success, setSuccess]       = useState('');

  const navigate = useNavigate(); // ✅ FIX: was missing, caused "next is not a function"

  // ── Form state ──
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirm: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  // ── Submit handler ──
  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    // Basic frontend validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields.'); return;
    }
    if (mode === 'signup') {
      if (!formData.name) { setError('Please enter your full name.'); return; }
      if (formData.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
      if (formData.password !== formData.confirm) { setError('Passwords do not match.'); return; }
    }

    setLoading(true);
    try {
      const endpoint = mode === 'login'
        ? 'http://localhost:5000/api/users/login'
        : 'http://localhost:5000/api/users/register';

      const body = mode === 'login'
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong.');
        return;
      }

      // ── Save token + user to localStorage ──
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // ── Show success message before redirecting ──
      setSuccess(data.message || (mode === 'login' ? 'Welcome back!' : 'Account created successfully!'));
      setError('');

      // ── Redirect: admin → /admin | login → /studio | signup → / ──
      const redirectPath = data.user.role === 'admin'
        ? '/admin'
        : mode === 'login'
          ? '/studio'
          : '/';

      setTimeout(() => navigate(redirectPath), 1200);

    } catch (err) {
      setError('Unable to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    ...styles.input,
    paddingLeft: '48px',
    paddingRight: field === 'pass' ? '56px' : '20px',
    borderColor: focused === field ? '#C2185B' : 'rgba(194,24,91,0.18)',
    borderBottomColor: focused === field ? '#C2185B' : 'rgba(194,24,91,0.28)',
    boxShadow: focused === field ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none',
    background: focused === field ? '#FFF5F8' : '#FDF0F4',
  });

  const iconWrap = {
    position: 'absolute', left: '16px', top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(180,60,100,0.45)',
    fontSize: '14px', pointerEvents: 'none', lineHeight: 1,
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1.15fr',
      fontFamily: "'Montserrat', sans-serif",
      background: '#FDF0F4',
    }}>

      {/* ── LEFT: Brand panel ── */}
      <div style={{
        background: 'linear-gradient(160deg, #4A0A1E 0%, #7C1040 55%, #5C0A2A 100%)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        padding: '80px 64px',
        position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,192,212,0.06) 1px, transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'350px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,192,212,0.10), transparent 70%)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle, rgba(255,150,180,0.08), transparent 70%)', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:'linear-gradient(90deg, transparent, rgba(255,192,212,0.50), transparent)' }}/>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'28px' }}><FloralMark/></div>
          <p style={{ ...styles.labelText, color:'rgba(255,210,225,0.60)', letterSpacing:'4px', marginBottom:'18px' }}>Est. 2024 · Hyderabad, PK</p>
          <h1 style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'52px', fontWeight:700, lineHeight:0.96, color:'#FFF0F5', letterSpacing:'-0.01em', marginBottom:'6px' }}>Wrapping</h1>
          <h1 style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'52px', fontWeight:400, lineHeight:0.96, fontStyle:'italic', color:'rgba(255,192,212,0.85)', marginBottom:'32px' }}>Happiness</h1>
          <div style={{ display:'flex', justifyContent:'center', marginBottom:'32px' }}><Ornament color="rgba(255,192,212,0.35)"/></div>
          <p style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'19px', fontStyle:'italic', fontWeight:400, color:'rgba(255,210,225,0.70)', lineHeight:1.70, maxWidth:'300px', marginBottom:'48px' }}>
            "Every gift tells a story. We help you write the most beautiful chapter."
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1px', background:'rgba(255,192,212,0.12)', borderRadius:'2px', overflow:'hidden' }}>
            {[{ n:'2,400+', l:'Gifts Delivered' },{ n:'4.9 ★', l:'Avg. Rating' },{ n:'3 hrs', l:'Avg. Delivery' }].map((s,i) => (
              <div key={i} style={{ background:'rgba(50,5,20,0.40)', padding:'18px 10px', textAlign:'center' }}>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:'#FFF0F5', lineHeight:1, marginBottom:'5px' }}>{s.n}</p>
                <p style={{ ...styles.labelText, fontSize:'7px', color:'rgba(255,210,225,0.50)', letterSpacing:'1.2px' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <Link to="/" style={{ position:'absolute', top:'24px', left:'24px', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:600, letterSpacing:'1.5px', textTransform:'uppercase', color:'rgba(255,210,225,0.45)', textDecoration:'none', display:'flex', alignItems:'center', gap:'8px' }}>← Home</Link>
      </div>

      {/* ── RIGHT: Auth form ── */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        padding:'60px 10%',
        background:'linear-gradient(160deg, #FDF0F4 0%, #FAE4EC 100%)',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{ position:'absolute', bottom:'-40px', right:'-40px', opacity:0.06, pointerEvents:'none' }}>
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
            <circle cx="160" cy="160" r="150" stroke="#C2185B" strokeWidth="1"/>
            <circle cx="160" cy="160" r="110" stroke="#C2185B" strokeWidth="0.5"/>
            <circle cx="160" cy="160" r="70"  stroke="#C2185B" strokeWidth="0.5"/>
          </svg>
        </div>

        <div style={{ width:'100%', maxWidth:'440px', position:'relative', zIndex:1 }}>

          {/* Header */}
          <div style={{ marginBottom:'40px' }}>
            <p style={{ ...styles.labelText, color:'#C2185B', marginBottom:'12px', letterSpacing:'3px' }}>
              ✦ &nbsp; {mode === 'login' ? 'Welcome Back' : 'Begin Your Story'}
            </p>
            <h2 style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'42px', fontWeight:700, lineHeight:1.0, color:'#1C0A10', marginBottom:'4px', letterSpacing:'-0.01em' }}>
              {mode === 'login' ? 'Sign in to your' : 'Create your'}
            </h2>
            <h2 style={{ fontFamily:"'Cormorant Garamond','Playfair Display',serif", fontSize:'42px', fontWeight:400, fontStyle:'italic', lineHeight:1.0, color:'#C2185B', marginBottom:'20px' }}>
              studio account
            </h2>
            <Ornament color="rgba(194,24,91,0.22)"/>
          </div>

          {/* Tab switcher */}
          <div style={{ display:'flex', gap:'32px', marginBottom:'36px', borderBottom:'1px solid rgba(194,24,91,0.12)' }}>
            {['login','signup'].map(m => (
              <button key={m} onClick={() => { setMode(m); setError(''); setSuccess(''); }} style={{
                background:'none', border:'none', cursor:'pointer',
                padding:'0 0 14px 0',
                fontFamily:"'Montserrat',sans-serif",
                fontSize:'11px', fontWeight: mode === m ? 700 : 400,
                letterSpacing:'2px', textTransform:'uppercase',
                color: mode === m ? '#7C1040' : '#B06080',
                borderBottom: mode === m ? '2px solid #C2185B' : '2px solid transparent',
                marginBottom:'-1px', transition:'all .22s',
              }}>
                {m === 'login' ? 'Login' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* Error message */}
          {error && (
            <div style={{
              background:'rgba(194,24,91,0.08)', border:'1px solid rgba(194,24,91,0.22)',
              borderRadius:'8px', padding:'12px 16px', marginBottom:'16px',
              fontFamily:"'Montserrat',sans-serif", fontSize:'12px',
              color:'#C2185B', lineHeight:1.5,
            }}>
              ⚠ {error}
            </div>
          )}

          {/* Success message */}
          {success && (
            <div style={{
              background:'rgba(56,142,60,0.10)', border:'1px solid rgba(56,142,60,0.22)',
              borderRadius:'8px', padding:'12px 16px', marginBottom:'16px',
              fontFamily:"'Montserrat',sans-serif", fontSize:'12px',
              color:'#2E7D32', lineHeight:1.5,
            }}>
              ✅ {success}
            </div>
          )}

          {/* Fields */}
          <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'12px' }}>
            {mode === 'signup' && (
              <div style={{ position:'relative' }}>
                <span style={iconWrap}>👤</span>
                <input type="text" name="name" placeholder="Full Name"
                  value={formData.name} onChange={handleChange}
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}/>
              </div>
            )}
            <div style={{ position:'relative' }}>
              <span style={iconWrap}>✉</span>
              <input type="email" name="email" placeholder="Email Address"
                value={formData.email} onChange={handleChange}
                style={inputStyle('email')}
                onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}/>
            </div>
            <div style={{ position:'relative' }}>
              <span style={iconWrap}>🔒</span>
              <input
                type={showPass ? 'text' : 'password'}
                name="password" placeholder="Password"
                value={formData.password} onChange={handleChange}
                style={inputStyle('pass')}
                onFocus={() => setFocused('pass')} onBlur={() => setFocused(null)}
              />
              <button onClick={() => setShowPass(s => !s)} style={{
                position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)',
                background:'none', border:'none', cursor:'pointer',
                fontFamily:"'Montserrat',sans-serif",
                fontSize:'10px', fontWeight:600, letterSpacing:'0.5px',
                color:'rgba(194,24,91,0.45)',
              }}>{showPass ? 'Hide' : 'Show'}</button>
            </div>
            {mode === 'signup' && (
              <div style={{ position:'relative' }}>
                <span style={iconWrap}>🔒</span>
                <input type="password" name="confirm" placeholder="Confirm Password"
                  value={formData.confirm} onChange={handleChange}
                  style={inputStyle('confirm')}
                  onFocus={() => setFocused('confirm')} onBlur={() => setFocused(null)}/>
              </div>
            )}
          </div>

          {mode === 'login' && (
            <div style={{ textAlign:'right', marginBottom:'28px' }}>
              <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:500, color:'#C2185B', cursor:'pointer', borderBottom:'1px solid rgba(194,24,91,0.28)', paddingBottom:'1px' }}>
                Forgot password?
              </span>
            </div>
          )}
          {mode === 'signup' && <div style={{ marginBottom:'28px' }}/>}

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              ...styles.primaryBtn,
              width:'100%', padding:'18px',
              fontSize:'11px', letterSpacing:'2.5px',
              background: loading
                ? 'rgba(124,16,64,0.50)'
                : btnHovered
                  ? 'linear-gradient(135deg, #880E4F 0%, #C2185B 100%)'
                  : 'linear-gradient(135deg, #7C1040 0%, #AD1457 100%)',
              color:'#FFF0F5', border:'none', borderRadius:'2px',
              transform: btnHovered && !loading ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: btnHovered && !loading ? '0 22px 54px rgba(124,16,64,0.40)' : '0 10px 32px rgba(124,16,64,0.26)',
              marginBottom:'24px', transition:'all .22s',
              cursor: loading ? 'not-allowed' : 'pointer',
              textTransform:'uppercase',
            }}
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Enter Your Studio ✦' : 'Create Account ✦'}
          </button>

          {/* Divider */}
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'20px' }}>
            <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
            <span style={{ ...styles.labelText, color:'rgba(194,24,91,0.32)', fontSize:'8px' }}>OR CONTINUE WITH</span>
            <div style={{ flex:1, height:'1px', background:'rgba(194,24,91,0.10)' }}/>
          </div>

          {/* Google */}
          <button style={{
            width:'100%', padding:'15px 20px', borderRadius:'2px',
            background:'#FFF5F8', border:'1px solid rgba(194,24,91,0.18)',
            fontFamily:"'Montserrat',sans-serif",
            fontSize:'11px', fontWeight:600, letterSpacing:'1px', textTransform:'uppercase',
            color:'#1C0A10', cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center', gap:'12px',
            boxSizing:'border-box', boxShadow:'0 2px 8px rgba(124,16,64,0.07)', transition:'box-shadow .2s',
          }}>
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.484 0 2.443 2.017.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Google
          </button>

          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', textAlign:'center', color:'#B06080', marginTop:'28px' }}>
            {mode === 'login' ? "New here? " : "Already have an account? "}
            <span onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setSuccess(''); }}
              style={{ color:'#7C1040', fontWeight:700, cursor:'pointer', borderBottom:'1px solid rgba(124,16,64,0.32)', paddingBottom:'1px' }}>
              {mode === 'login' ? 'Create Account' : 'Sign In'}
            </span>
          </p>

          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', textAlign:'center', color:'rgba(124,16,64,0.40)', marginTop:'16px', lineHeight:1.6 }}>
            By continuing, you agree to our{' '}
            <span style={{ color:'#C2185B', cursor:'pointer' }}>Terms of Service</span>
            {' '}&amp;{' '}
            <span style={{ color:'#C2185B', cursor:'pointer' }}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
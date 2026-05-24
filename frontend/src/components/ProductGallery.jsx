
// ─── ProductGallery.jsx ───────────────────────────────────────────────────────
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/IMG_1546.png';

const CATEGORIES = [
  { key: 'Fresh Bouquets'},
  { key: 'Pintresty Cakes'},
  { key: 'Aesthetic Ballons Arrangements'},
  { key: 'Surprise Bundles'},
  { key: "Add On's" },
];

const PRODUCTS = {
  'Fresh Bouquets': [
    { id:101, name:'Pink Romance',       price:2400, img:'/img/bouquet-1.jpg', badge:'Bestseller', desc:'24 long-stemmed roses in blush & magenta, satin ribbon.', color:'#F9D0E0' },
    { id:102, name:'White Elegance',     price:1800, img:'/img/bouquet-2.jpg', badge:null,         desc:'Crisp white lilies & eucalyptus in kraft wrap.',           color:'#F5E6EE' },
    { id:103, name:'Blush Peony Bunch',  price:2200, img:'/img/bouquet-3.jpg', badge:'New',        desc:'Seasonal peonies in soft blush tones, hand-tied.',         color:'#FADADD' },
    { id:104, name:'Sunflower Bliss',    price:1600, img:'/img/bouquet-4.jpg', badge:null,         desc:'Bright sunflowers with dried pampas accents.',             color:'#FDE8D0' },
    { id:105, name:'Lavender Dreams',    price:1900, img:'/img/bouquet-5.jpg', badge:null,         desc:"Fresh lavender bundles with baby's breath.",               color:'#EDD8F5' },
    { id:106, name:'Red Velvet Roses',   price:2800, img:'/img/bouquet-6.jpg', badge:'Luxury',     desc:'18 deep red roses with gold leaf wrap.',                   color:'#F5D0D8' },
    { id:107, name:'Tulip Garden',       price:2100, img:'/img/bouquet-7.jpg', badge:null,         desc:'Mixed tulips in soft pastels, seasonal selection.',        color:'#F9D8E8' },
    { id:108, name:'Garden Wildflowers', price:1500, img:'/img/bouquet-8.jpg', badge:'Popular',    desc:'Loose, garden-gathered wildflower collection.',            color:'#F0E8F5' },
  ],
  'Pintresty Cakes': [
    { id:201, name:'Rose Petal Cake',    price:2800, img:'/img/cake-1.jpg', badge:null,       desc:'Two-tier buttercream with edible rose petals.',    color:'#FADADD' },
    { id:202, name:'Vintage Lambeth',    price:3500, img:'/img/cake-2.jpg', badge:'Popular',  desc:'Classic Lambeth piping on ivory fondant.',         color:'#F9D0E0' },
    { id:203, name:'Bento Love Cake',    price:1400, img:'/img/cake-3.jpg', badge:'Trending', desc:'Mini bento cake with personalised message stamp.', color:'#FDE8D0' },
    { id:204, name:'Floral Drip Cake',   price:3200, img:'/img/cake-4.jpg', badge:null,       desc:'Ganache drip with fresh florals & gold dust.',     color:'#F5D8E8' },
    { id:205, name:'Naked Rustic Cake',  price:2600, img:'/img/cake-5.jpg', badge:null,       desc:'Exposed sponge layers with seasonal fruit.',       color:'#F0DDD8' },
    { id:206, name:'Pink Ombré Cake',    price:3000, img:'/img/cake-6.jpg', badge:'New',      desc:'Three-tier ombre in blush to deep rose.',          color:'#F9D0E0' },
    { id:207, name:'Matcha Bento',       price:1600, img:'/img/cake-7.jpg', badge:null,       desc:'Matcha sponge in an aesthetic bento box.',         color:'#D8EDD8' },
    { id:208, name:'Carousel Cake',      price:4500, img:'/img/cake-8.jpg', badge:'Luxury',   desc:'Three-tier sculpted carousel with sugar details.', color:'#EDD8F5' },
  ],
  'Aesthetic Ballons Arrangements': [
    { id:301, name:'Blush Balloon Arch', price:4800, img:'/img/balloon-1.jpg', badge:'Custom',  desc:'Organic arch in rose, magenta & blush. Setup included.', color:'#FADADD' },
    { id:302, name:'Helium Cluster',     price:1200, img:'/img/balloon-2.jpg', badge:null,      desc:'Set of 12 helium balloons with personalised ribbon.',    color:'#F9D0E0' },
    { id:303, name:'Cloud Column',       price:2200, img:'/img/balloon-3.jpg', badge:'New',     desc:'Dreamy white & nude balloon column, 4ft tall.',          color:'#E8EDF5' },
    { id:304, name:'Foil Number Set',    price:1800, img:'/img/balloon-4.jpg', badge:null,      desc:'Giant foil number balloons in gold or rose-gold.',       color:'#F5EDD0' },
    { id:305, name:'Balloon Garland',    price:3600, img:'/img/balloon-5.jpg', badge:'Popular', desc:'10ft garland in custom palette, self-install kit.',      color:'#F5D8E8' },
    { id:306, name:'Heart Balloon Box',  price:2800, img:'/img/balloon-6.jpg', badge:null,      desc:'Box of 30 mini hearts that float out on opening.',       color:'#F9D0E0' },
    { id:307, name:'Marquee Letter Set', price:5500, img:'/img/balloon-7.jpg', badge:'Luxury',  desc:'LED marquee letters in blush or gold, any word.',        color:'#F5E0D8' },
    { id:308, name:'Confetti Balloons',  price:900,  img:'/img/balloon-8.jpg', badge:null,      desc:'Clear balloons filled with rose-gold confetti.',         color:'#EDD8F5' },
  ],
  'Surprise Bundles': [
    { id:401, name:'The Anniversary Box', price:6500, img:'/img/bundle-1.jpg', badge:'New',      desc:'Roses, macarons, a personal card & velvet ribbon.',   color:'#F9D0E0' },
    { id:402, name:'Birthday Joy',        price:3200, img:'/img/bundle-2.jpg', badge:null,       desc:'Balloon cluster, mini cake & floral spray.',         color:'#FADADD' },
    { id:403, name:'Just Because Box',    price:2800, img:'/img/bundle-3.jpg', badge:'Popular',  desc:'Surprise for no reason — florals, treats & a note.', color:'#F5D8E8' },
    { id:404, name:'New Baby Bundle',     price:4200, img:'/img/bundle-4.jpg', badge:null,       desc:'Soft florals, plush toy & personalised card.',        color:'#D8EDF5' },
    { id:405, name:'Graduation Glory',    price:3800, img:'/img/bundle-5.jpg', badge:null,       desc:'Flowers, balloons & a framed memory box.',            color:'#F5EDD0' },
    { id:406, name:'Eid Mubarak Set',     price:5200, img:'/img/bundle-6.jpg', badge:'Seasonal', desc:'Curated Eid hamper with sweets, florals & lights.',   color:'#EDD8F5' },
    { id:407, name:'Self-Love Bundle',    price:2600, img:'/img/bundle-7.jpg', badge:null,       desc:'Skincare, candle, chocolate & a pampering note.',    color:'#F0EDD8' },
    { id:408, name:'Grand Proposal Kit',  price:9800, img:'/img/bundle-8.jpg', badge:'Luxury',   desc:'Roses, ring box display, foil balloons & setup.',    color:'#F9D0E0' },
  ],
  "Add On's": [
    { id:501, name:'Teddy Bear',         price:1200, img:'/img/addon-1.jpg', badge:null,      desc:'Classic plush in blush. Pairs with any bundle.',    color:'#F5E0D8' },
    { id:502, name:'Personalised Card',  price:350,  img:'/img/addon-2.jpg', badge:null,      desc:'Hand-lettered message card, printed to order.',     color:'#F9D0E0' },
    { id:503, name:'Shimmer Wrap Sheet', price:120,  img:'/img/addon-3.jpg', badge:null,      desc:'Holographic rose-gold wrapping paper, 50×70cm.',    color:'#F5EDD0' },
    { id:504, name:'Scented Candle',     price:900,  img:'/img/addon-4.jpg', badge:'Popular', desc:'Rose & oud soy candle in frosted glass jar.',       color:'#F0EDD8' },
    { id:505, name:'Premium Chocolates', price:1100, img:'/img/addon-5.jpg', badge:null,      desc:'Box of 12 Belgian truffles in signature flavours.', color:'#F5E0D8' },
    { id:506, name:'Satin Ribbon Bow',   price:180,  img:'/img/addon-6.jpg', badge:null,      desc:'Oversized blush satin bow for wrapping.',           color:'#FADADD' },
    { id:507, name:'Photo Frame',        price:800,  img:'/img/addon-7.jpg', badge:null,      desc:'Acrylic easel frame for a printed photo memory.',   color:'#EDD8F5' },
    { id:508, name:'Balloon Weight Set', price:250,  img:'/img/addon-8.jpg', badge:null,      desc:'Decorative weights to anchor helium bundles.',      color:'#E8EDF5' },
  ],
};

export { PRODUCTS };

const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

// ── Cart Context (shared via localStorage-like state lifted to App) ───────────
// Pass cart/setCart as props from App, or use Context. See import guide below.

// ── WishHeart ─────────────────────────────────────────────────────────────────
const WishHeart = ({ small }) => {
  const [loved, setLoved] = useState(false);
  return (
    <button onClick={e => { e.stopPropagation(); setLoved(l => !l); }} style={{
      width: small ? '32px' : '38px', height: small ? '32px' : '38px',
      borderRadius: '50%', border: 'none', cursor: 'pointer',
      background: loved ? 'rgba(210,80,110,0.15)' : 'rgba(255,255,255,0.85)',
      backdropFilter: 'blur(8px)', flexShrink: 0,
      fontSize: small ? '15px' : '18px',
      color: loved ? '#C8607A' : 'rgba(200,96,122,0.40)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 2px 10px rgba(200,96,122,0.14)', transition: 'all .2s',
    }}>{loved ? '♥' : '♡'}</button>
  );
};

// ── Modal ─────────────────────────────────────────────────────────────────────
const Modal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;
  const [added, setAdded] = useState(false);
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:1000,
      background:'rgba(42,10,24,0.55)', backdropFilter:'blur(8px)',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'24px', animation:'fadeIn .22s ease',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'#fff', borderRadius:'24px', overflow:'hidden',
        width:'100%', maxWidth:'680px',
        boxShadow:'0 48px 96px rgba(42,10,24,0.32)',
        animation:'slideUp .30s cubic-bezier(.4,0,.2,1)',
        display:'flex', flexDirection:'column',
      }}>
        <div style={{
          width:'100%', position:'relative',
          background:`radial-gradient(circle at 60% 40%,${product.color},${product.color}bb)`,
          overflow:'hidden', maxHeight:'65vh',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          <img src={product.img} alt={product.name} style={{ width:'100%', height:'auto', maxHeight:'65vh', objectFit:'contain', display:'block' }} onError={e=>{e.target.style.display='none';}}/>
          <div style={{ position:'absolute',bottom:0,left:0,right:0,height:'80px',background:'linear-gradient(to top,rgba(255,255,255,0.40),transparent)',pointerEvents:'none' }}/>
          <button onClick={onClose} style={{ position:'absolute',top:'16px',right:'16px',width:'38px',height:'38px',borderRadius:'50%',border:'none',background:'rgba(255,255,255,0.90)',backdropFilter:'blur(10px)',cursor:'pointer',fontSize:'18px',color:'#C8607A',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 10px rgba(0,0,0,0.14)',zIndex:2 }}>×</button>
          {product.badge && (
            <div style={{ position:'absolute',top:'16px',left:'16px',zIndex:2,background:'linear-gradient(135deg,#D4607A,#C04868)',color:'#fff',padding:'6px 16px',borderRadius:'20px',fontSize:'9px',fontWeight:700,fontStyle:'italic',letterSpacing:'1.5px',textTransform:'uppercase',fontFamily:"'Montserrat',sans-serif",boxShadow:'0 4px 14px rgba(192,72,104,0.35)' }}>{product.badge}</div>
          )}
        </div>
        <div style={{ padding:'28px 32px 34px' }}>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:700, color:'#2A1018', marginBottom:'10px', lineHeight:1.1 }}>{product.name}</h2>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:300, color:'#7A3048', lineHeight:1.78, marginBottom:'24px' }}>{product.desc}</p>
          <div style={{ height:'1px', background:'rgba(210,100,130,0.12)', marginBottom:'24px' }}/>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <div>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, fontStyle:'italic', letterSpacing:'2px', textTransform:'uppercase', color:'rgba(200,96,122,0.55)', marginBottom:'4px' }}>Price</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:700, color:'#C04868', lineHeight:1 }}>{fmt(product.price)}</p>
            </div>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <WishHeart/>
              <button onClick={e => { e.stopPropagation(); onAddToCart(product); setAdded(true); setTimeout(()=>setAdded(false),1400); }} style={{
                padding:'15px 32px', borderRadius:'30px', border:'none', cursor:'pointer',
                background: added ? 'linear-gradient(135deg,#2e7d32,#1b5e20)' : 'linear-gradient(135deg,#D4607A,#C04868)',
                color:'#fff', fontSize:'13px', fontFamily:"'Montserrat',sans-serif",
                fontWeight:700, fontStyle:'italic', letterSpacing:'1.5px', textTransform:'uppercase',
                boxShadow: added ? '0 4px 14px rgba(46,125,50,0.30)' : '0 6px 20px rgba(192,72,104,0.38)',
                transform: added ? 'scale(1.04)' : 'scale(1)', transition:'all .28s',
              }}>{added ? '✓ Added' : '+ Add to Cart'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Carousel Card ─────────────────────────────────────────────────────────────
const CarouselCard = ({ product, isCenter, onClick, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const [added,   setAdded]   = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink:0, width: isCenter ? '290px' : '240px',
        borderRadius:'24px', background:'#fff', overflow:'hidden', cursor:'pointer',
        transform: isCenter ? 'scale(1.07) translateY(-12px)' : hovered ? 'scale(1.03) translateY(-5px)' : 'scale(0.95) translateY(0)',
        boxShadow: isCenter ? '0 28px 64px rgba(200,96,122,0.24),0 0 0 2px rgba(210,100,130,0.20)' : hovered ? '0 18px 40px rgba(200,96,122,0.16)' : '0 6px 20px rgba(200,96,122,0.09)',
        transition:'all .38s cubic-bezier(.4,0,.2,1)', zIndex: isCenter ? 3 : hovered ? 2 : 1, position:'relative', opacity: isCenter ? 1 : 0.84,
      }}
    >
      <div style={{ height: isCenter ? '260px' : '215px', background:`linear-gradient(145deg,${product.color},${product.color}bb)`, position:'relative', overflow:'hidden', transition:'height .38s cubic-bezier(.4,0,.2,1)' }}>
        <img src={product.img} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition:'transform .38s cubic-bezier(.4,0,.2,1)' }} onError={e=>{e.target.style.display='none';}}/>
        <div style={{ position:'absolute',inset:0,pointerEvents:'none',background:'linear-gradient(to top,rgba(42,10,24,0.22) 0%,transparent 55%)' }}/>
        {product.badge && <div style={{ position:'absolute',top:'13px',left:'13px',zIndex:2,background:'linear-gradient(135deg,#D4607A,#C04868)',color:'#fff',padding:'5px 13px',borderRadius:'20px',fontSize:'9px',fontWeight:700,fontStyle:'italic',letterSpacing:'1.2px',textTransform:'uppercase',fontFamily:"'Montserrat',sans-serif",boxShadow:'0 3px 10px rgba(192,72,104,0.32)' }}>{product.badge}</div>}
        <div style={{ position:'absolute',top:'11px',right:'11px',zIndex:2 }}><WishHeart small/></div>
      </div>
      <div style={{ padding: isCenter ? '22px 20px 24px' : '16px 16px 20px', transition:'padding .38s' }}>
        <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isCenter ? '22px' : '18px', fontWeight:700, color:'#2A1018', marginBottom:'5px', lineHeight:1.2, transition:'font-size .38s' }}>{product.name}</h3>
        <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isCenter ? '14px' : '12px', color:'#7A3048', lineHeight:1.55, marginBottom: isCenter ? '18px' : '14px', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', opacity:0.80 }}>{product.desc}</p>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop: isCenter ? '14px' : '10px', borderTop:'1px solid rgba(210,100,130,0.10)' }}>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: isCenter ? '22px' : '17px', fontWeight:700, color:'#C04868', lineHeight:1 }}>{fmt(product.price)}</p>
          <button onClick={e => { e.stopPropagation(); onAddToCart(product); setAdded(true); setTimeout(()=>setAdded(false),1400); }} style={{
            padding: isCenter ? '9px 18px' : '7px 13px', borderRadius:'20px', border:'none', cursor:'pointer',
            background: added ? 'linear-gradient(135deg,#2e7d32,#1b5e20)' : 'linear-gradient(135deg,#D4607A,#C04868)',
            color:'#fff', fontSize: isCenter ? '11px' : '10px', fontFamily:"'Montserrat',sans-serif",
            fontWeight:700, fontStyle:'italic', letterSpacing:'1px', textTransform:'uppercase',
            boxShadow: added ? '0 3px 10px rgba(46,125,50,0.28)' : '0 4px 14px rgba(192,72,104,0.30)',
            transform: added ? 'scale(1.04)' : 'scale(1)', transition:'all .25s',
          }}>{added ? '✓' : isCenter ? '+ Cart' : '+'}</button>
        </div>
      </div>
    </div>
  );
};

// ── ProductGallery ────────────────────────────────────────────────────────────
const ProductGallery = () => {
  const navigate = useNavigate();
  const [activeCat,       setActiveCat] = useState('Fresh Bouquets');
  const [centerIdx,       setCenterIdx] = useState(2);
  const [selectedProduct, setSelected]  = useState(null);
  const [cart,            setCart]      = useState([]);

  const products  = PRODUCTS[activeCat] || [];
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  const addToCart = product => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const scroll = dir => setCenterIdx(i => { const n = i + dir; return (n < 0 || n >= products.length) ? i : n; });
  const handleCatChange = cat => { setActiveCat(cat); setCenterIdx(2); };

  const visibleIndices = [-2,-1,0,1,2].map(offset => {
    const idx = centerIdx + offset;
    return (idx < 0 || idx >= products.length) ? null : idx;
  });

  return (
    <div style={{
      minHeight:'100vh', fontFamily:"'Montserrat',sans-serif",
      display:'grid', gridTemplateColumns:'220px 1fr',
      gridTemplateRows:'auto 1fr',
      background:'linear-gradient(180deg,#FDF0F4 0%,#F9D8E8 40%,#FDF0F4 100%)',
    }}>
      <style>{`
        @keyframes fadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes slideUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(194,24,91,0.22);border-radius:4px}
      `}</style>

      {/* ════ LEFT: Categories ════ */}
      <aside style={{
        gridRow:'1 / 3',
        background:'linear-gradient(160deg,#4A0A1E 0%,#7C1040 100%)',
        borderRight:'1px solid rgba(255,192,212,0.12)',
        display:'flex', flexDirection:'column',
        position:'sticky', top:0, height:'100vh', overflowY:'auto',
      }}>
        {/* <div style={{ padding:'32px 20px 24px', borderBottom:'1px solid rgba(255,192,212,0.10)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute',top:'-24px',right:'-24px',width:'100px',height:'100px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,192,212,0.10),transparent 70%)',pointerEvents:'none' }}/>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:'rgba(255,192,212,0.35)', marginBottom:'6px' }}>Collection</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:'#FFF0F5', lineHeight:1.15 }}>
            Wrapping<br/><span style={{ fontStyle:'italic', color:'rgba(255,192,212,0.70)' }}>Happiness</span>
          </h2>
        </div> */} 
        <div style={{ padding:'24px 20px', borderBottom:'1px solid rgba(255,192,212,0.10)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
  <div style={{ position:'absolute',top:'-24px',right:'-24px',width:'100px',height:'100px',borderRadius:'50%',background:'radial-gradient(circle,rgba(255,192,212,0.10),transparent 70%)',pointerEvents:'none' }}/>
  <img
    src={logo}
    alt="Wrapping Happiness Logo"
    style={{
      height: '72px', width: '72px',
      objectFit: 'contain', borderRadius: '50%',
      border: '2px solid rgba(249,168,212,0.40)',
      boxShadow: '0 4px 20px rgba(236,72,153,0.35)',
    }}
  />
</div>

        <div style={{ padding:'20px 14px', flex:1 }}>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', color:'rgba(255,192,212,0.30)', marginBottom:'12px' }}>Browse</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
            {CATEGORIES.map(({ key, icon }) => {
              const active = activeCat === key;
              return (
                <button key={key} onClick={() => handleCatChange(key)} style={{
                  display:'flex', alignItems:'center', gap:'10px',
                  padding:'11px 12px', borderRadius:'10px', border:'none',
                  background: active ? 'rgba(255,192,212,0.14)' : 'transparent',
                  cursor:'pointer', textAlign:'left', transition:'all .20s',
                  outline: active ? '1px solid rgba(255,192,212,0.28)' : '1px solid transparent',
                  boxShadow: active ? '0 4px 16px rgba(194,24,91,0.20)' : 'none',
                }}>
                  <span style={{ fontSize:'17px', flexShrink:0 }}>{icon}</span>
                  <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight: active ? 700 : 500, color: active ? '#FFF0F5' : 'rgba(255,210,225,0.50)', transition:'all .20s' }}>{key}</span>
                  {active && <div style={{ marginLeft:'auto', width:'5px', height:'5px', borderRadius:'50%', background:'#D4537E', flexShrink:0, boxShadow:'0 0 8px #D4537E' }}/>}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ padding:'14px', borderTop:'1px solid rgba(255,192,212,0.08)' }}>
          <div style={{ padding:'14px', background:'rgba(255,192,212,0.07)', border:'1px solid rgba(255,192,212,0.12)', borderRadius:'10px', textAlign:'center' }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'13px', fontStyle:'italic', color:'rgba(255,220,235,0.65)', marginBottom:'10px', lineHeight:1.4 }}>Design your own gift</p>
            <button onClick={() => navigate('/studio')} style={{ width:'100%', padding:'10px', borderRadius:'7px', border:'none', background:'linear-gradient(135deg,#D4537E,#7C1040)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', cursor:'pointer', boxShadow:'0 4px 16px rgba(194,24,91,0.35)' }}>Open Studio ✦</button>
          </div>
        </div>
      </aside>

      {/* ════ TOP NAV (header row) ════ */}
      <header style={{
        gridColumn:'2 / 3',
        padding:'32px 40px 24px',
        borderBottom:'1px solid rgba(124,10,39,0.10)',
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px' }}>
            <div style={{ width:'28px', height:'1px', background:'#C8788A', opacity:0.6 }}/>
            <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, fontStyle:'italic', letterSpacing:'3px', textTransform:'uppercase', color:'#C8788A' }}>The Collection</span>
            <div style={{ width:'28px', height:'1px', background:'#C8788A', opacity:0.6 }}/>
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(28px,3vw,44px)', fontWeight:700, color:'#2A1018', letterSpacing:'-0.02em', lineHeight:1.1 }}>
            Explore our <span style={{ fontStyle:'italic', color:'#C8607A' }}>curated gifts</span>
          </h2>
        </div>

        {/* Cart Button */}
        <button
          onClick={() => navigate('/cart', { state: { cart } })}
          style={{
            display:'flex', alignItems:'center', gap:'10px',
            padding:'12px 22px', borderRadius:'30px', border:'none', cursor:'pointer',
            background:'linear-gradient(135deg,#9B1239,#7C0A27)',
            color:'#fff', fontFamily:"'Montserrat',sans-serif",
            fontSize:'12px', fontWeight:700, fontStyle:'italic', letterSpacing:'1px', textTransform:'uppercase',
            boxShadow:'0 6px 22px rgba(124,10,39,0.38)', transition:'all .22s', flexShrink:0,
          }}
          onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(124,10,39,0.48)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 6px 22px rgba(124,10,39,0.38)'; }}
        >
          <span style={{ fontSize:'17px' }}>🛒</span>
          <span>Cart</span>
          {cartCount > 0 && (
            <span style={{
              minWidth:'20px', height:'20px', borderRadius:'50%', padding:'0 4px',
              background:'rgba(255,255,255,0.25)',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'11px', fontWeight:800,
            }}>{cartCount}</span>
          )}
        </button>
      </header>

      {/* ════ MAIN: Carousel ════ */}
      <main style={{ gridColumn:'2 / 3', padding:'32px 0 60px', overflow:'hidden' }}>
        <div style={{ position:'relative', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px 0 40px' }}>
          <button onClick={() => scroll(-1)} disabled={centerIdx === 0} style={{ position:'absolute',left:'16px',zIndex:10,width:'52px',height:'52px',borderRadius:'50%',border:'1.5px solid rgba(124,10,39,0.22)',background:'rgba(255,255,255,0.88)',backdropFilter:'blur(12px)',cursor:centerIdx===0?'not-allowed':'pointer',fontSize:'20px',color:'#7C0A27',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 18px rgba(124,10,39,0.12)',opacity:centerIdx===0?0.32:1,transition:'all .2s' }}>‹</button>

          <div style={{ display:'flex', alignItems:'center', gap:'20px', padding:'24px 80px' }}>
            {visibleIndices.map((idx, slot) => {
              if (idx === null) return <div key={`e-${slot}`} style={{ width:'240px', flexShrink:0 }}/>;
              const product  = products[idx];
              const isCenter = slot === 2;
              return <CarouselCard key={product.id} product={product} isCenter={isCenter} onClick={() => setSelected(product)} onAddToCart={addToCart}/>;
            })}
          </div>

          <button onClick={() => scroll(1)} disabled={centerIdx === products.length - 1} style={{ position:'absolute',right:'16px',zIndex:10,width:'52px',height:'52px',borderRadius:'50%',border:'1.5px solid rgba(124,10,39,0.22)',background:'rgba(255,255,255,0.88)',backdropFilter:'blur(12px)',cursor:centerIdx===products.length-1?'not-allowed':'pointer',fontSize:'20px',color:'#7C0A27',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 18px rgba(124,10,39,0.12)',opacity:centerIdx===products.length-1?0.32:1,transition:'all .2s' }}>›</button>
        </div>

        <div style={{ display:'flex', justifyContent:'center', gap:'8px', marginTop:'8px' }}>
          {products.map((_, i) => (
            <div key={i} onClick={() => setCenterIdx(i)} style={{ width: i===centerIdx ? '26px' : '8px', height:'8px', borderRadius:'4px', background: i===centerIdx ? 'linear-gradient(90deg,#9B1239,#7C0A27)' : 'rgba(124,10,39,0.20)', cursor:'pointer', transition:'all .3s cubic-bezier(.4,0,.2,1)' }}/>
          ))}
        </div>
      </main>

      {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelected(null)} onAddToCart={addToCart}/>}
    </div>
  );
};

export default ProductGallery;

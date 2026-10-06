
// import { useState, useRef, useCallback, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useAiStylist from './useAiStylist';
// import AiPicks from './AiPicks';

// // ── Themes ────────────────────────────────────────────────────────────────────
// //   birthday    → pastels
// //   wedding     → reds & golds
// //   anniversary → blues, yellows & pinks
// const THEMES = [
//   { id: 'birthday',    label: 'Birthday',    color: '#F4A0BC', bg: 'linear-gradient(135deg,#A8204E,#D4537E)' },
//   { id: 'wedding',     label: 'Wedding',     color: '#F7D6E0', bg: 'linear-gradient(135deg,#6B2040,#9A3560)' },
//   { id: 'anniversary', label: 'Anniversary', color: '#F2B8CC', bg: 'linear-gradient(135deg,#5A1030,#8A2050)' },
// ];

// // ── Categories & Items ────────────────────────────────────────────────────────
// // The theme (birthday / wedding / anniversary) is part of each image's file name.
// // const CATEGORIES = ['Flowers', 'Balloons', 'Cakes'];

// // const ITEMS = {
// //   Flowers: [
// //     { id: 'f1',  name: 'Sunny Pink Posy',        price: 1850, img: '/img/Studiobouquet_anniversary_01.png', desc: '×12 stems' },
// //     { id: 'f2',  name: 'Crimson Rose Wrap',      price: 1550, img: '/img/Studiobouquet_wedding_02.png',     desc: '×8 stems'  },
// //     { id: 'f3',  name: 'Sunflower Violet Wrap',  price: 2100, img: '/img/Studiobouquet_anniversary_03.png', desc: '×12 stems' },
// //     { id: 'f4',  name: 'Kraft Cream Bouquet',    price: 2400, img: '/img/Studiobouquet_birthday_04.png',    desc: '×6 stems'  },
// //     { id: 'f5',  name: 'Scarlet & Gold Bouquet', price: 1650, img: '/img/Studiobouquet_wedding_05.png',     desc: '×10 stems' },
// //     { id: 'f6',  name: 'Sky Blue Blush Bouquet', price: 1350, img: '/img/Studiobouquet_anniversary_06.png', desc: 'Bunch'     },
// //     { id: 'f7',  name: 'Golden Kraft Bouquet',   price: 1950, img: '/img/Studiobouquet_birthday_07.png',    desc: '×12 stems' },
// //     { id: 'f8',  name: 'Midnight Red Roses',     price: 1750, img: '/img/Studiobouquet_wedding_08.png',     desc: '×8 stems'  },
// //     { id: 'f9',  name: 'Pink Gladiolus Bouquet', price: 2250, img: '/img/Studiobouquet_anniversary_09.png', desc: '×12 stems' },
// //     { id: 'f10', name: 'Ocean Blue Bouquet',     price: 2600, img: '/img/Studiobouquet_anniversary_10.png', desc: '×6 stems'  },
// //     { id: 'f11', name: 'Lilac Dream Bouquet',    price: 1800, img: '/img/Studiobouquet_birthday_11.png',    desc: '×10 stems' },
// //     { id: 'f12', name: 'Ruby Rose Bouquet',      price: 1450, img: '/img/Studiobouquet_wedding_12.png',     desc: 'Bunch'     },
// //   ],
// //   Balloons: [
// //     { id: 'b1',  name: 'Red Bow Balloons',         price: 2200, img: '/img/Studioballoons_wedding_01.png',     desc: '×12 pcs'    },
// //     { id: 'b2',  name: 'Purple Heart Balloons',    price: 1600, img: '/img/Studioballoons_anniversary_02.png', desc: 'Per digit'  },
// //     { id: 'b3',  name: 'Pink Heart Balloons',      price: 1400, img: '/img/Studioballoons_anniversary_03.png', desc: '×10 pcs'    },
// //     { id: 'b4',  name: 'Sage & Cream Balloons',    price: 1800, img: '/img/Studioballoons_birthday_04.png',    desc: '×5 pcs'     },
// //     { id: 'b5',  name: 'Blue Confetti Balloon',    price: 7500, img: '/img/Studioballoons_anniversary_05.png', desc: 'Full setup' },
// //     { id: 'b6',  name: 'Blush Bow Balloon',        price: 3800, img: '/img/Studioballoons_birthday_06.png',    desc: '4ft tall'   },
// //     { id: 'b7',  name: 'Burgundy & Gold Balloons', price: 1600, img: '/img/Studioballoons_wedding_07.png',     desc: '×10 pcs'    },
// //     { id: 'b8',  name: 'Gold Shimmer Balloons',    price: 2000, img: '/img/Studioballoons_wedding_08.png',     desc: '×5 pcs'     },
// //     { id: 'b9',  name: 'Silver Birthday Balloons', price: 8500, img: '/img/Studioballoons_birthday_09.png',    desc: 'Full setup' },
// //     { id: 'b10', name: 'Blush & Silver Balloons',  price: 4200, img: '/img/Studioballoons_birthday_10.png',    desc: '4ft tall'   },
// //   ],
// //   Cakes: [
// //     { id: 'c1',  name: 'Golden Birthday Cake',    price: 2200, img: '/img/Studiocakes_birthday_01.png',    desc: 'Mini'         },
// //     { id: 'c2',  name: 'Red Heart Rose Cake',     price: 4500, img: '/img/Studiocakes_wedding_02.png',     desc: '2-tier'       },
// //     { id: 'c3',  name: 'Bubblegum Pink Cake',     price: 4200, img: '/img/Studiocakes_anniversary_03.png', desc: '2-tier'       },
// //     { id: 'c4',  name: 'Purple Daisy Cake',       price: 5200, img: '/img/Studiocakes_birthday_04.png',    desc: '3-tier'       },
// //     { id: 'c5',  name: 'Pink Rose Cake',          price: 6500, img: '/img/Studiocakes_anniversary_05.png', desc: 'Custom'       },
// //     { id: 'c6',  name: 'Watercolor Floral Cake',  price: 5800, img: '/img/Studiocakes_birthday_06.png',    desc: 'With florals' },
// //     { id: 'c7',  name: 'Crimson Rose Cake',       price: 4400, img: '/img/Studiocakes_wedding_07.png',     desc: '2-tier'       },
// //     { id: 'c8',  name: 'Yellow & Pink Rose Cake', price: 5500, img: '/img/Studiocakes_anniversary_08.png', desc: '3-tier'       },
// //     { id: 'c9',  name: 'Lilac Layer Cake',        price: 7000, img: '/img/Studiocakes_birthday_09.png',    desc: 'Custom'       },
// //     { id: 'c10', name: 'Raspberry Heart Cake',    price: 6200, img: '/img/Studiocakes_wedding_10.png',     desc: 'With florals' },
// //   ],
// // };

// // Theme is read from the image file name, e.g. Studiobouquet_birthday_04.png → 'birthday'
// // const themeOf = (img) => (img.match(/_(birthday|wedding|anniversary)_/) || [])[1];

// // // Flat list of every item (with its category and theme) — used by the AI Stylist
// // const ALL_ITEMS = Object.entries(ITEMS).flatMap(([category, list]) =>
// //   list.map(i => ({ ...i, category, theme: themeOf(i.img) }))
// // );
// // ── Categories & Items ────────────────────────────────────────────────────────
// const CATEGORIES = ['Flowers', 'Balloons', 'Cakes'];

// const ITEMS = {
//   Flowers: [
//     { id: 'f1',  name: 'Sunny Pink Posy',        price: 1850, img: '/img/Studiobouquet_anniversary_01.png', desc: '×12 stems' },
//     { id: 'f2',  name: 'Crimson Rose Wrap',      price: 1550, img: '/img/Studiobouquet_wedding_02.png',     desc: '×8 stems'  },
//     { id: 'f5',  name: 'Scarlet & Gold Bouquet', price: 1650, img: '/img/Studiobouquet_wedding_05.png',     desc: '×10 stems' },
//     { id: 'f6',  name: 'Sky Blue Blush Bouquet', price: 1350, img: '/img/Studiobouquet_anniversary_06.png', desc: 'Bunch'     },
//     { id: 'f7',  name: 'Golden Kraft Bouquet',   price: 1950, img: '/img/Studiobouquet_birthday_07.png',    desc: '×12 stems' },
//     { id: 'f8',  name: 'Midnight Red Roses',     price: 1750, img: '/img/Studiobouquet_wedding_08.png',     desc: '×8 stems'  },
//     { id: 'f9',  name: 'Pink Gladiolus Bouquet', price: 2250, img: '/img/Studiobouquet_anniversary_09.png', desc: '×12 stems' },
//     { id: 'f10', name: 'Ocean Blue Bouquet',     price: 2600, img: '/img/Studiobouquet_anniversary_10.png', desc: '×6 stems'  },
//     { id: 'f11', name: 'Lilac Dream Bouquet',    price: 1800, img: '/img/Studiobouquet_birthday_11.png',    desc: '×10 stems' },
//     { id: 'f12', name: 'Ruby Rose Bouquet',      price: 1450, img: '/img/Studiobouquet_wedding_12.png',     desc: 'Bunch'     },
//   ],
//   Balloons: [
//     { id: 'b1',  name: 'Red Bow Balloons',         price: 2200, img: '/img/Studioballoons_wedding_01.png',     desc: '×12 pcs'    },
//     { id: 'b2',  name: 'Purple Heart Balloons',    price: 1600, img: '/img/Studioballoons_anniversary_02.png', desc: 'Per digit'  },
//     { id: 'b3',  name: 'Pink Heart Balloons',      price: 1400, img: '/img/Studioballoons_anniversary_03.png', desc: '×10 pcs'    },
//     { id: 'b4',  name: 'Sage & Cream Balloons',    price: 1800, img: '/img/Studioballoons_birthday_04.png',    desc: '×5 pcs'     },
//     { id: 'b5',  name: 'Blue Confetti Balloon',    price: 7500, img: '/img/Studioballoons_anniversary_05.png', desc: 'Full setup' },
//     { id: 'b6',  name: 'Blush Bow Balloon',        price: 3800, img: '/img/Studioballoons_birthday_06.png',    desc: '4ft tall'   },
//     { id: 'b7',  name: 'Burgundy & Gold Balloons', price: 1600, img: '/img/Studioballoons_wedding_07.png',     desc: '×10 pcs'    },
//     { id: 'b8',  name: 'Gold Shimmer Balloons',    price: 2000, img: '/img/Studioballoons_wedding_08.png',     desc: '×5 pcs'     },
//     { id: 'b9',  name: 'Silver Birthday Balloons', price: 8500, img: '/img/Studioballoons_birthday_09.png',    desc: 'Full setup' },
//     { id: 'b10', name: 'Blush & Silver Balloons',  price: 4200, img: '/img/Studioballoons_birthday_10.png',    desc: '4ft tall'   },
//   ],
//   Cakes: [
//     { id: 'c1',  name: 'Golden Birthday Cake',    price: 2200, img: '/img/Studiocakes_birthday_01.png',    desc: 'Mini'         },
//     { id: 'c2',  name: 'Red Heart Rose Cake',     price: 4500, img: '/img/Studiocakes_wedding_02.png',     desc: '2-tier'       },
//     { id: 'c3',  name: 'Bubblegum Pink Cake',     price: 4200, img: '/img/Studiocakes_anniversary_03.png', desc: '2-tier'       },
//     { id: 'c4',  name: 'Purple Daisy Cake',       price: 5200, img: '/img/Studiocakes_birthday_04.png',    desc: '3-tier'       },
//     { id: 'c5',  name: 'Pink Rose Cake',          price: 6500, img: '/img/Studiocakes_anniversary_05.png', desc: 'Custom'       },
//     { id: 'c6',  name: 'Watercolor Floral Cake',  price: 5800, img: '/img/Studiocakes_birthday_06.png',    desc: 'With florals' },
//     { id: 'c7',  name: 'Crimson Rose Cake',       price: 4400, img: '/img/Studiocakes_wedding_07.png',     desc: '2-tier'       },
//     { id: 'c8',  name: 'Yellow & Pink Rose Cake', price: 5500, img: '/img/Studiocakes_anniversary_08.png', desc: '3-tier'       },
//     { id: 'c9',  name: 'Lilac Layer Cake',        price: 7000, img: '/img/Studiocakes_birthday_09.png',    desc: 'Custom'       },
//     { id: 'c10', name: 'Raspberry Heart Cake',    price: 6200, img: '/img/Studiocakes_wedding_10.png',     desc: 'With florals' },
//   ],
// };

// // Flat list of every item (with its category) — sent to AI Stylist in full.
// // Which items appear together is decided by the curated combos on the backend.
// const ALL_ITEMS = Object.entries(ITEMS).flatMap(([category, list]) =>
//   list.map(i => ({ ...i, category }))
// );

// // ── Delivery Options ──────────────────────────────────────────────────────────
// const DELIVERY_OPTIONS = [
//   { id: 'std',   label: 'Standard',  desc: '3–5 hrs',   price: 250, icon: '📦' },
//   { id: 'expr',  label: 'Express',   desc: '1–2 hrs',   price: 480, icon: '⚡' },
//   { id: 'sched', label: 'Scheduled', desc: 'Pick time', price: 350, icon: '📅' },
// ];

// // ── Helpers & Constants ───────────────────────────────────────────────────────
// const formatRs = (n) => `Rs. ${n.toLocaleString()}`;
// const ITEM_SIZE = 150;

// // Where "Add all" places an option's 3 items: bouquet, balloons, cake
// const BUNDLE_OFFSETS = [{ dx: -95, dy: 55 }, { dx: 0, dy: -95 }, { dx: 95, dy: 55 }];

// // ── Color Tokens ──────────────────────────────────────────────────────────────
// const pink = {
//   primary:       '#C03A6A',
//   deep:          '#8A1A40',
//   soft:          '#FBEAF0',
//   text:          '#2A0A18',
//   muted:         'rgba(74,24,40,0.50)',
//   labelText:     '#993556',
//   canvasBg:      'linear-gradient(160deg,#3D0820 0%,#5C1030 40%,#7A1840 100%)',
//   navBg:         'linear-gradient(135deg,#8A1A40 0%,#C03A6A 50%,#A0284E 100%)',
//   navBorder:     'rgba(255,160,190,0.18)',
//   sidebarBg:     '#F2D0DC',
//   sidebarBorder: 'rgba(160,40,78,0.20)',
//   sidebarLabel:  '#7A1535',
//   sidebarText:   '#2A0A18',
//   sidebarMuted:  'rgba(90,20,45,0.60)',
// };

// // ── Canvas Item Component ─────────────────────────────────────────────────────
// const CanvasItem = ({ item, isSelected, onMouseDown }) => (
//   <div
//     onMouseDown={onMouseDown}
//     style={{
//       position: 'absolute', left: item.x, top: item.y,
//       cursor: isSelected ? 'grabbing' : 'grab',
//       userSelect: 'none', zIndex: isSelected ? 20 : 1,
//       transform: `scale(${isSelected ? 1.06 : 1})`,
//       transformOrigin: 'center center', transition: 'transform 0.15s ease',
//     }}
//   >
//     {isSelected && (
//       <div style={{
//         position: 'absolute', inset: '-10px', borderRadius: '50%',
//         boxShadow: '0 0 0 2px rgba(212,83,126,0.85), 0 0 32px rgba(212,83,126,0.35)',
//         pointerEvents: 'none',
//       }} />
//     )}
//     <img
//       src={item.img} alt={item.name} draggable={false}
//       style={{
//         width: `${ITEM_SIZE}px`, height: `${ITEM_SIZE}px`,
//         objectFit: 'contain', display: 'block',
//         userSelect: 'none', pointerEvents: 'none',
//         mixBlendMode: 'multiply',
//         filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.60)) drop-shadow(0 3px 8px rgba(0,0,0,0.40))',
//       }}
//     />
//     {item.qty > 1 && (
//       <div style={{
//         position: 'absolute', bottom: '4px', right: '2px',
//         background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
//         borderRadius: '100px', padding: '2px 9px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.45)',
//         border: '1px solid rgba(255,255,255,0.20)',
//       }}>
//         <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 700, color: '#fff' }}>×{item.qty}</span>
//       </div>
//     )}
//   </div>
// );

// // ── Product Card Component ────────────────────────────────────────────────────
// const ProductCard = ({ item, onAdd }) => (
//   <div
//     onClick={onAdd}
//     style={{
//       background: '#fff', borderRadius: '14px',
//       border: '1px solid rgba(212,83,126,0.14)',
//       boxShadow: '0 3px 16px rgba(212,83,126,0.08)',
//       overflow: 'hidden', cursor: 'pointer',
//       transition: 'all .20s', display: 'flex', flexDirection: 'column',
//     }}
//     onMouseEnter={e => {
//       e.currentTarget.style.transform = 'translateY(-4px)';
//       e.currentTarget.style.boxShadow = '0 12px 32px rgba(212,83,126,0.22)';
//       e.currentTarget.style.borderColor = 'rgba(212,83,126,0.38)';
//       e.currentTarget.querySelector('img').style.transform = 'scale(1.12)';
//     }}
//     onMouseLeave={e => {
//       e.currentTarget.style.transform = 'translateY(0)';
//       e.currentTarget.style.boxShadow = '0 3px 16px rgba(212,83,126,0.08)';
//       e.currentTarget.style.borderColor = 'rgba(212,83,126,0.14)';
//       e.currentTarget.querySelector('img').style.transform = 'scale(1)';
//     }}
//   >
//     <div style={{
//       background: '#fff', height: '136px',
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//       position: 'relative', overflow: 'hidden',
//     }}>
//       <img
//         src={item.img} alt={item.name} draggable={false}
//         style={{
//           width: '114px', height: '114px', objectFit: 'contain',
//           mixBlendMode: 'multiply', display: 'block',
//           filter: 'drop-shadow(0 4px 10px rgba(153,37,74,0.18))',
//           transition: 'transform .25s ease',
//         }}
//       />
//       <div style={{
//         position: 'absolute', bottom: '8px', right: '8px',
//         width: '28px', height: '28px', borderRadius: '50%',
//         background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         color: '#fff', fontSize: '18px',
//         boxShadow: '0 4px 12px rgba(212,83,126,0.45)', opacity: 0.90,
//       }}>+</div>
//     </div>
//     <div style={{ padding: '10px 12px 12px' }}>
//       <p style={{
//         fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
//         color: pink.text, marginBottom: '3px',
//         whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
//       }}>{item.name}</p>
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', fontWeight: 700, color: pink.deep }}>
//           {formatRs(item.price)}
//         </p>
//         <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '9px', color: pink.muted }}>{item.desc}</span>
//       </div>
//     </div>
//   </div>
// );

// // ── Main Studio Component ─────────────────────────────────────────────────────
// const Studio = () => {
//   const navigate = useNavigate();

//   const [activeTheme,      setActiveTheme]      = useState(null);
//   const [activeCat,        setActiveCat]        = useState('Flowers');
//   const [canvasItems,      setCanvasItems]      = useState([]);
//   const [selectedOnCanvas, setSelectedOnCanvas] = useState(null);
//   const [delivery,         setDelivery]         = useState('std');
//   const [note,             setNote]             = useState('');
//   const [zoom,             setZoom]             = useState(1);

//   // AI Stylist (state + API call live in useAiStylist.js)
//   const { loading: aiLoading, picks: aiSuggestions, error: aiError, run: fetchPicks, reset: resetAI } = useAiStylist();

//   const canvasRef = useRef(null);
//   const dragItem  = useRef(null);
//   const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

//   const itemsTotal    = canvasItems.reduce((s, i) => s + i.price * i.qty, 0);
//   const deliveryPrice = DELIVERY_OPTIONS.find(d => d.id === delivery)?.price ?? 0;
//   const grandTotal    = itemsTotal + deliveryPrice;

//   // Zoom via scroll wheel
//   useEffect(() => {
//     const el = canvasRef.current;
//     if (!el) return;
//     const onWheel = (e) => {
//       e.preventDefault();
//       setZoom(z => Math.min(3, Math.max(0.3, z - e.deltaY * 0.001)));
//     };
//     el.addEventListener('wheel', onWheel, { passive: false });
//     return () => el.removeEventListener('wheel', onWheel);
//   }, []);

//   // Add item to canvas (or increment qty if already exists). dx/dy shift the start position.
//   const addToCanvas = useCallback((item, dx = 0, dy = 0) => {
//     setCanvasItems(prev => {
//       const exists = prev.find(i => i.id === item.id);
//       if (exists) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
//       const el = canvasRef.current;
//       const cw = el ? el.offsetWidth  : 600;
//       const ch = el ? el.offsetHeight : 500;
//       const x  = (cw / zoom - ITEM_SIZE) / 2 + dx;
//       const y  = (ch / zoom - ITEM_SIZE - 20) / 2 + dy;
//       return [...prev, { ...item, qty: 1, x, y }];
//     });
//   }, [zoom]);

//   // Add a whole AI option (bouquet + balloons + cake) laid out neatly
//   const addBundle = (items) => {
//     items.forEach((it, i) => addToCanvas(it, BUNDLE_OFFSETS[i].dx, BUNDLE_OFFSETS[i].dy));
//   };

//   const removeFromCanvas = useCallback((id) => {
//     setCanvasItems(prev => prev.filter(i => i.id !== id));
//     if (selectedOnCanvas === id) setSelectedOnCanvas(null);
//   }, [selectedOnCanvas]);

//   const adjustQty = useCallback((id, delta) => {
//     setCanvasItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
//   }, []);

//   // Drag to reposition canvas items
//   const onMouseDown = (e, id) => {
//     e.stopPropagation();
//     setSelectedOnCanvas(id);
//     const item = canvasItems.find(i => i.id === id);
//     dragItem.current  = id;
//     dragStart.current = { x: e.clientX, y: e.clientY, ox: item.x, oy: item.y };
//     const onMove = (me) => {
//       const dx = (me.clientX - dragStart.current.x) / zoom;
//       const dy = (me.clientY - dragStart.current.y) / zoom;
//       setCanvasItems(prev =>
//         prev.map(i => i.id === dragItem.current
//           ? { ...i, x: dragStart.current.ox + dx, y: dragStart.current.oy + dy }
//           : i
//         )
//       );
//     };
//     const onUp = () => {
//       dragItem.current = null;
//       window.removeEventListener('mousemove', onMove);
//       window.removeEventListener('mouseup', onUp);
//     };
//     window.addEventListener('mousemove', onMove);
//     window.addEventListener('mouseup', onUp);
//   };

//   // AI Stylist — builds 3 options (bouquet + balloons + cake) from items matching the theme's colors
//   // const runAI = () => {
//   //   if (!activeTheme) return;
//   //   const pool = ALL_ITEMS.filter(i => i.theme === activeTheme);
//   //   fetchPicks(THEMES.find(t => t.id === activeTheme)?.label, pool);
//   // };
//     // AI Stylist — sends the theme id; the backend returns curated bouquet+balloon+cake options for it
//   const runAI = () => {
//     if (!activeTheme) return;
//     fetchPicks(activeTheme, ALL_ITEMS);
//   };

//   const clearCanvas  = () => { setCanvasItems([]); setSelectedOnCanvas(null); };

//   const handleSubmit = () => {
//     if (canvasItems.length === 0) return;
//     navigate('/payment', {
//       state: { items: canvasItems, theme: activeTheme, delivery, note, itemsTotal, deliveryPrice, grandTotal }
//     });
//   };

//   const themeObj = THEMES.find(t => t.id === activeTheme);
//   const selItem  = canvasItems.find(i => i.id === selectedOnCanvas);

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(160deg,#FFF0F5 0%,#FFE4EE 50%,#FFF5F8 100%)',
//       fontFamily: "'Montserrat', sans-serif",
//       display: 'flex', flexDirection: 'column',
//     }}>

//       {/* ── TOP NAV ── */}
//       <div style={{
//         height: '66px', background: pink.navBg,
//         borderBottom: `1.5px solid ${pink.navBorder}`,
//         display: 'grid', gridTemplateColumns: '1fr auto 1fr',
//         alignItems: 'center', padding: '0 28px', flexShrink: 0,
//         boxShadow: '0 2px 24px rgba(138,26,64,0.35)',
//       }}>
//         {/* ← Home */}
//         <button onClick={() => navigate('/')} style={{
//           background: 'none', border: 'none', cursor: 'pointer',
//           fontFamily: "'Montserrat',sans-serif", fontSize: '13px',
//           fontWeight: 700, letterSpacing: '1.5px',
//           color: 'rgba(255,220,235,0.90)', textTransform: 'uppercase', transition: 'opacity .18s',
//         }}
//           onMouseEnter={e => e.currentTarget.style.opacity = '0.60'}
//           onMouseLeave={e => e.currentTarget.style.opacity = '1'}
//         >← Home</button>

//         {/* Title */}
//         <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
//           <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,220,235,0.90)', animation: 'pulse 2s infinite' }} />
//           <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: '#FFF0F5', letterSpacing: '0.5px' }}>
//             2D Gift Studio
//           </span>
//         </div>

//         {/* Zoom + Clear */}
//         <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', alignItems: 'center' }}>
//           <div style={{
//             display: 'flex', alignItems: 'center', gap: '8px',
//             padding: '7px 14px', borderRadius: '8px',
//             border: '1.5px solid rgba(255,200,220,0.30)',
//             background: 'rgba(255,255,255,0.12)',
//           }}>
//             <button onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFE0EE', fontSize: '20px', lineHeight: 1, padding: 0, fontWeight: 700 }}>−</button>
//             <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700, color: '#FFE0EE', minWidth: '40px', textAlign: 'center' }}>
//               {Math.round(zoom * 100)}%
//             </span>
//             <button onClick={() => setZoom(z => Math.min(3, z + 0.1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFE0EE', fontSize: '20px', lineHeight: 1, padding: 0, fontWeight: 700 }}>+</button>
//           </div>
//           <button onClick={clearCanvas} disabled={canvasItems.length === 0} style={{
//             padding: '9px 20px', borderRadius: '8px',
//             border: '1.5px solid rgba(255,200,220,0.35)',
//             background: 'rgba(255,255,255,0.12)',
//             cursor: canvasItems.length === 0 ? 'not-allowed' : 'pointer',
//             fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700,
//             letterSpacing: '1px', textTransform: 'uppercase', transition: 'all .18s',
//             color: canvasItems.length === 0 ? 'rgba(255,200,220,0.30)' : '#FFE0EE',
//           }}
//             onMouseEnter={e => { if (canvasItems.length > 0) e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
//             onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
//           >Clear</button>
//         </div>
//       </div>

//       {/* ── MAIN 3-COLUMN LAYOUT ── */}
//       <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '272px 1fr 316px', minHeight: 0, overflow: 'hidden' }}>

//         {/* ════ LEFT SIDEBAR ════ */}
//         <div style={{ background: pink.sidebarBg, borderRight: `1.5px solid ${pink.sidebarBorder}`, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

//           {/* Themes */}
//           <div style={{ padding: '18px 16px 14px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
//             <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.sidebarLabel, textTransform: 'uppercase', marginBottom: '12px', opacity: 0.65 }}>Theme</p>
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//               {THEMES.map(t => (
//                 <button key={t.id} onClick={() => { setActiveTheme(prev => prev === t.id ? null : t.id); resetAI(); }} style={{
//                   padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all .22s',
//                   border: activeTheme === t.id ? `1.5px solid ${t.color}` : '1.5px solid rgba(192,58,106,0.22)',
//                   background: activeTheme === t.id ? t.bg : 'linear-gradient(135deg,rgba(192,58,106,0.10),rgba(138,26,64,0.08))',
//                   color: activeTheme === t.id ? '#FFF5F8' : '#8A1A40',
//                   fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
//                   letterSpacing: '1px', textTransform: 'uppercase',
//                   boxShadow: activeTheme === t.id ? `0 4px 14px ${t.color}50` : '0 1px 4px rgba(192,58,106,0.10)',
//                 }}>{t.label}</button>
//               ))}
//             </div>
//           </div>

//           {/* AI Stylist */}
//           <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
//             <div style={{ background: 'rgba(255,255,255,0.60)', borderRadius: '12px', border: '1px solid rgba(160,40,78,0.22)', boxShadow: '0 4px 18px rgba(138,26,64,0.10)', padding: '16px' }}>

//               {/* Header */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
//                 <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `linear-gradient(135deg,${pink.primary},${pink.deep})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#fff' }}>✦</div>
//                 <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: 700, color: '#2A0A18' }}>AI Stylist</span>
//               </div>

//               {/* Subtitle */}
//               <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: pink.sidebarMuted, lineHeight: 1.5, marginBottom: '14px' }}>
//                 {activeTheme
//                   ? `Curating picks for "${THEMES.find(t => t.id === activeTheme)?.label}".`
//                   : 'Select a theme to get curated picks.'}
//               </p>

//               {/* Button */}
//               <button onClick={runAI} disabled={!activeTheme || aiLoading} style={{
//                 width: '100%', padding: '12px', borderRadius: '8px', border: 'none', marginBottom: '12px', transition: 'all .22s',
//                 background: !activeTheme ? 'rgba(192,58,106,0.08)' : `linear-gradient(135deg,${pink.primary},${pink.deep})`,
//                 cursor: !activeTheme ? 'not-allowed' : 'pointer',
//                 fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
//                 letterSpacing: '1.5px', textTransform: 'uppercase',
//                 color: !activeTheme ? 'rgba(192,58,106,0.40)' : '#fff',
//                 boxShadow: activeTheme ? '0 4px 18px rgba(192,58,106,0.35)' : 'none',
//               }}>
//                 {aiLoading ? 'Curating…' : '✦ Get AI Picks'}
//               </button>

//               {/* Spinner */}
//               {aiLoading && (
//                 <div style={{ textAlign: 'center', padding: '10px 0' }}>
//                   <div style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid rgba(192,58,106,0.15)', borderTop: `2px solid ${pink.primary}`, margin: '0 auto', animation: 'spin 0.8s linear infinite' }} />
//                 </div>
//               )}

//               {/* Results: 3 options (bouquet + balloons + cake) */}
//               <AiPicks picks={aiSuggestions} error={aiError} onAdd={addToCanvas} onAddAll={addBundle} />
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
//             <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.sidebarLabel, textTransform: 'uppercase', marginBottom: '12px', opacity: 0.65 }}>Order Summary</p>
//             {canvasItems.length === 0 ? (
//               <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: 'rgba(100,30,60,0.35)', textAlign: 'center', padding: '8px 0' }}>
//                 No items on canvas yet
//               </p>
//             ) : (
//               <div style={{ marginBottom: '8px' }}>
//                 {canvasItems.map(item => (
//                   <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
//                     <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: pink.sidebarMuted }}>{item.name} ×{item.qty}</span>
//                     <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', color: '#2A0A18', fontWeight: 700 }}>{formatRs(item.price * item.qty)}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Delivery Options */}
//           <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
//             <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.sidebarLabel, textTransform: 'uppercase', marginBottom: '12px', opacity: 0.65 }}>Delivery</p>
//             {DELIVERY_OPTIONS.map(opt => (
//               <div key={opt.id} onClick={() => setDelivery(opt.id)} style={{
//                 display: 'flex', alignItems: 'center', gap: '8px',
//                 padding: '9px 10px', borderRadius: '8px', cursor: 'pointer', marginBottom: '6px', transition: 'all .18s',
//                 border: delivery === opt.id ? `1.5px solid ${pink.primary}` : '1.5px solid rgba(160,40,78,0.22)',
//                 background: delivery === opt.id ? 'rgba(192,58,106,0.15)' : 'rgba(255,255,255,0.45)',
//               }}>
//                 <span style={{ fontSize: '16px' }}>{opt.icon}</span>
//                 <div style={{ flex: 1 }}>
//                   <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 600, color: '#2A0A18' }}>{opt.label}</p>
//                   <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '9px', color: pink.sidebarMuted }}>{opt.desc}</p>
//                 </div>
//                 <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', color: pink.sidebarLabel, fontWeight: 700 }}>+{formatRs(opt.price)}</span>
//               </div>
//             ))}
//           </div>

//           {/* Gift Note + Total + Submit */}
//           <div style={{ padding: '14px 16px 20px', flexShrink: 0 }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
//               <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: pink.sidebarMuted, textTransform: 'uppercase', letterSpacing: '1px' }}>Total</span>
//               <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: '#2A0A18' }}>{formatRs(grandTotal)}</span>
//             </div>
//             <textarea
//               value={note} onChange={e => setNote(e.target.value)}
//               placeholder="Add a gift note…" rows={2}
//               style={{
//                 width: '100%', boxSizing: 'border-box', resize: 'none', outline: 'none',
//                 background: 'rgba(255,255,255,0.50)', border: '1px solid rgba(160,40,78,0.25)',
//                 borderRadius: '8px', padding: '9px 12px', marginBottom: '12px',
//                 fontFamily: "'Montserrat',sans-serif", fontSize: '11px', lineHeight: 1.6, color: '#2A0A18',
//               }}
//             />
//             <button onClick={handleSubmit} disabled={canvasItems.length === 0} style={{
//               width: '100%', padding: '13px', borderRadius: '8px', border: 'none',
//               background: canvasItems.length === 0 ? 'rgba(192,58,106,0.10)' : `linear-gradient(135deg,${pink.primary},${pink.deep})`,
//               color: canvasItems.length === 0 ? 'rgba(192,58,106,0.30)' : '#FFFCFB',
//               fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700,
//               letterSpacing: '2px', textTransform: 'uppercase',
//               cursor: canvasItems.length === 0 ? 'not-allowed' : 'pointer',
//               boxShadow: canvasItems.length > 0 ? '0 8px 24px rgba(192,58,106,0.40)' : 'none',
//             }}>Submit &amp; Pay ✦</button>
//           </div>
//         </div>

//         {/* ════ CENTRE: Canvas ════ */}
//         <div
//           ref={canvasRef}
//           onClick={() => setSelectedOnCanvas(null)}
//           style={{
//             position: 'relative', overflow: 'hidden',
//             background: themeObj
//               ? `radial-gradient(ellipse at 40% 35%, ${themeObj.color}28 0%, transparent 60%), ${pink.canvasBg}`
//               : pink.canvasBg,
//           }}
//         >
//           {/* Grid overlay */}
//           <div style={{
//             position: 'absolute', inset: 0, pointerEvents: 'none',
//             backgroundImage:
//               'linear-gradient(rgba(255,150,180,0.05) 1px, transparent 1px),' +
//               'linear-gradient(90deg, rgba(255,150,180,0.05) 1px, transparent 1px)',
//             backgroundSize: '40px 40px',
//           }} />

//           {/* Glow effects */}
//           <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,83,126,0.16) 0%,transparent 65%)', pointerEvents: 'none' }} />
//           <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(180,40,90,0.20) 0%,transparent 65%)', pointerEvents: 'none' }} />

//           {/* Labels */}
//           <div style={{ position: 'absolute', top: '14px', left: '18px', fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,180,210,0.18)', pointerEvents: 'none' }}>Design Canvas</div>
//           <div style={{ position: 'absolute', bottom: '14px', right: '18px', fontFamily: "'Montserrat',sans-serif", fontSize: '9px', letterSpacing: '1px', color: 'rgba(255,180,210,0.22)', pointerEvents: 'none' }}>scroll to zoom · drag items to reposition</div>

//           {/* Empty state */}
//           {canvasItems.length === 0 && (
//             <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
//               <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,150,180,0.10)', border: '1px solid rgba(255,150,180,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '20px' }}>🎁</div>
//               <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: 'rgba(255,210,230,0.28)', marginBottom: '8px' }}>Your canvas awaits</p>
//               <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: 'rgba(255,180,210,0.20)', letterSpacing: '1px' }}>Pick a category → tap a product to add</p>
//             </div>
//           )}

//           {/* Zoomable layer with canvas items */}
//           <div style={{ position: 'absolute', inset: 0, transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
//             {canvasItems.map(item => (
//               <CanvasItem
//                 key={item.id} item={item} zoom={zoom}
//                 isSelected={selectedOnCanvas === item.id}
//                 onMouseDown={(e) => onMouseDown(e, item.id)}
//               />
//             ))}
//           </div>

//           {/* Floating controls for selected item */}
//           {selItem && (
//             <div
//               onClick={e => e.stopPropagation()}
//               style={{
//                 position: 'absolute',
//                 left: selItem.x * zoom + (canvasRef.current ? (canvasRef.current.offsetWidth  * (1 - zoom)) / 2 : 0),
//                 top:  Math.max(4, selItem.y * zoom + (canvasRef.current ? (canvasRef.current.offsetHeight * (1 - zoom)) / 2 : 0) - 46),
//                 display: 'flex', alignItems: 'center', gap: '4px',
//                 background: 'rgba(42,10,24,0.94)', backdropFilter: 'blur(12px)',
//                 borderRadius: '100px', padding: '5px 12px',
//                 border: '1px solid rgba(212,83,126,0.40)',
//                 boxShadow: '0 4px 20px rgba(0,0,0,0.45)', zIndex: 30,
//               }}
//             >
//               <button onClick={() => adjustQty(selItem.id, -1)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
//               <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: '#fff', minWidth: '20px', textAlign: 'center' }}>{selItem.qty}</span>
//               <button onClick={() => adjustQty(selItem.id,  1)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
//               <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.12)', margin: '0 3px' }} />
//               <button onClick={() => removeFromCanvas(selItem.id)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(212,83,126,0.22)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
//             </div>
//           )}
//         </div>

//         {/* ════ RIGHT: Product Picker ════ */}
//         <div style={{ borderLeft: '1px solid rgba(212,83,126,0.12)', background: '#fff', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

//           {/* Category tabs */}
//           <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid rgba(212,83,126,0.08)', flexShrink: 0, position: 'sticky', top: 0, background: '#fff', zIndex: 5 }}>
//             <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.labelText, textTransform: 'uppercase', marginBottom: '10px', opacity: 0.55 }}>Categories</p>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
//               {CATEGORIES.map(cat => (
//                 <button key={cat} onClick={() => setActiveCat(cat)} style={{
//                   padding: '7px 14px', borderRadius: '100px', border: '1px solid', cursor: 'pointer', transition: 'all .18s', whiteSpace: 'nowrap',
//                   borderColor: activeCat === cat ? pink.primary : 'rgba(212,83,126,0.20)',
//                   background:  activeCat === cat ? pink.primary : 'transparent',
//                   color:       activeCat === cat ? '#fff' : pink.text,
//                   fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 600,
//                 }}>{cat}</button>
//               ))}
//             </div>
//           </div>

//           {/* Product grid */}
//           <div style={{ padding: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignContent: 'start', flex: 1 }}>
//             {(ITEMS[activeCat] || []).map(item => (
//               <ProductCard key={item.id} item={item} onAdd={() => addToCanvas(item)} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
//         @keyframes spin  { to { transform: rotate(360deg); } }
//         ::-webkit-scrollbar { width: 4px; }
//         ::-webkit-scrollbar-track { background: transparent; }
//         ::-webkit-scrollbar-thumb { background: rgba(192,58,106,0.20); border-radius: 4px; }
//         ::-webkit-scrollbar-thumb:hover { background: rgba(192,58,106,0.38); }
//       `}</style>
//     </div>
//   );
// };

// export default Studio;

import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAiStylist from './useAiStylist';
import AiPicks from './AiPicks';

// ── Themes ────────────────────────────────────────────────────────────────────
const THEMES = [
  { id: 'birthday',    label: 'Birthday',    color: '#F4A0BC', bg: 'linear-gradient(135deg,#A8204E,#D4537E)' },
  { id: 'wedding',     label: 'Wedding',     color: '#F7D6E0', bg: 'linear-gradient(135deg,#6B2040,#9A3560)' },
  { id: 'anniversary', label: 'Anniversary', color: '#F2B8CC', bg: 'linear-gradient(135deg,#5A1030,#8A2050)' },
];

// ── Categories & Items ────────────────────────────────────────────────────────
const CATEGORIES = ['Flowers', 'Balloons', 'Cakes'];

const ITEMS = {
  Flowers: [
    { id: 'f1',  name: 'Sunny Pink Posy',        price: 1850, img: '/img/Studiobouquet_anniversary_01.png', desc: '×12 stems' },
    { id: 'f2',  name: 'Crimson Rose Wrap',      price: 1550, img: '/img/Studiobouquet_wedding_02.png',     desc: '×8 stems'  },
    { id: 'f5',  name: 'Scarlet & Gold Bouquet', price: 1650, img: '/img/Studiobouquet_wedding_05.png',     desc: '×10 stems' },
    { id: 'f6',  name: 'Sky Blue Blush Bouquet', price: 1350, img: '/img/Studiobouquet_anniversary_06.png', desc: 'Bunch'     },
    { id: 'f7',  name: 'Golden Kraft Bouquet',   price: 1950, img: '/img/Studiobouquet_birthday_07.png',    desc: '×12 stems' },
    { id: 'f8',  name: 'Midnight Red Roses',     price: 1750, img: '/img/Studiobouquet_wedding_08.png',     desc: '×8 stems'  },
    { id: 'f9',  name: 'Pink Gladiolus Bouquet', price: 2250, img: '/img/Studiobouquet_anniversary_09.png', desc: '×12 stems' },
    { id: 'f10', name: 'Ocean Blue Bouquet',     price: 2600, img: '/img/Studiobouquet_anniversary_10.png', desc: '×6 stems'  },
    { id: 'f11', name: 'Lilac Dream Bouquet',    price: 1800, img: '/img/Studiobouquet_birthday_11.png',    desc: '×10 stems' },
    { id: 'f12', name: 'Ruby Rose Bouquet',      price: 1450, img: '/img/Studiobouquet_wedding_12.png',     desc: 'Bunch'     },
  ],
  Balloons: [
    { id: 'b1',  name: 'Red Bow Balloons',         price: 2200, img: '/img/Studioballoons_wedding_01.png',     desc: '×12 pcs'    },
    { id: 'b2',  name: 'Purple Heart Balloons',    price: 1600, img: '/img/Studioballoons_anniversary_02.png', desc: 'Per digit'  },
    { id: 'b3',  name: 'Pink Heart Balloons',      price: 1400, img: '/img/Studioballoons_anniversary_03.png', desc: '×10 pcs'    },
    { id: 'b4',  name: 'Sage & Cream Balloons',    price: 1800, img: '/img/Studioballoons_birthday_04.png',    desc: '×5 pcs'     },
    { id: 'b5',  name: 'Blue Confetti Balloon',    price: 7500, img: '/img/Studioballoons_anniversary_05.png', desc: 'Full setup' },
    { id: 'b6',  name: 'Blush Bow Balloon',        price: 3800, img: '/img/Studioballoons_birthday_06.png',    desc: '4ft tall'   },
    { id: 'b7',  name: 'Burgundy & Gold Balloons', price: 1600, img: '/img/Studioballoons_wedding_07.png',     desc: '×10 pcs'    },
    { id: 'b8',  name: 'Gold Shimmer Balloons',    price: 2000, img: '/img/Studioballoons_wedding_08.png',     desc: '×5 pcs'     },
    { id: 'b9',  name: 'Silver Birthday Balloons', price: 8500, img: '/img/Studioballoons_birthday_09.png',    desc: 'Full setup' },
    { id: 'b10', name: 'Blush & Silver Balloons',  price: 4200, img: '/img/Studioballoons_birthday_10.png',    desc: '4ft tall'   },
  ],
  Cakes: [
    { id: 'c1',  name: 'Golden Birthday Cake',    price: 2200, img: '/img/Studiocakes_birthday_01.png',    desc: 'Mini'         },
    { id: 'c2',  name: 'Red Heart Rose Cake',     price: 4500, img: '/img/Studiocakes_wedding_02.png',     desc: '2-tier'       },
    { id: 'c3',  name: 'Bubblegum Pink Cake',     price: 4200, img: '/img/Studiocakes_anniversary_03.png', desc: '2-tier'       },
    { id: 'c4',  name: 'Purple Daisy Cake',       price: 5200, img: '/img/Studiocakes_birthday_04.png',    desc: '3-tier'       },
    { id: 'c5',  name: 'Pink Rose Cake',          price: 6500, img: '/img/Studiocakes_anniversary_05.png', desc: 'Custom'       },
    { id: 'c6',  name: 'Watercolor Floral Cake',  price: 5800, img: '/img/Studiocakes_birthday_06.png',    desc: 'With florals' },
    { id: 'c7',  name: 'Crimson Rose Cake',       price: 4400, img: '/img/Studiocakes_wedding_07.png',     desc: '2-tier'       },
    { id: 'c8',  name: 'Yellow & Pink Rose Cake', price: 5500, img: '/img/Studiocakes_anniversary_08.png', desc: '3-tier'       },
    { id: 'c9',  name: 'Lilac Layer Cake',        price: 7000, img: '/img/Studiocakes_birthday_09.png',    desc: 'Custom'       },
    { id: 'c10', name: 'Raspberry Heart Cake',    price: 6200, img: '/img/Studiocakes_wedding_10.png',     desc: 'With florals' },
  ],
};

// Flat list of every item (with its category) — sent to AI Stylist in full.
const ALL_ITEMS = Object.entries(ITEMS).flatMap(([category, list]) =>
  list.map(i => ({ ...i, category }))
);

// ── Delivery Options ──────────────────────────────────────────────────────────
const DELIVERY_OPTIONS = [
  { id: 'std',   label: 'Standard',  desc: '3–5 hrs',   price: 250, icon: '📦' },
  { id: 'expr',  label: 'Express',   desc: '1–2 hrs',   price: 480, icon: '⚡' },
  { id: 'sched', label: 'Scheduled', desc: 'Pick time', price: 350, icon: '📅' },
];

// ── Helpers & Constants ───────────────────────────────────────────────────────
const formatRs = (n) => `Rs. ${n.toLocaleString()}`;
const ITEM_SIZE = 150;
const PER_PAGE  = 6;

// Where "Add all" places an option's 3 items: bouquet, balloons, cake
const BUNDLE_OFFSETS = [{ dx: -95, dy: 55 }, { dx: 0, dy: -95 }, { dx: 95, dy: 55 }];

// ── Color Tokens ──────────────────────────────────────────────────────────────
const pink = {
  primary:       '#C03A6A',
  deep:          '#8A1A40',
  soft:          '#FBEAF0',
  text:          '#2A0A18',
  muted:         'rgba(74,24,40,0.50)',
  labelText:     '#993556',
  canvasBg:      'linear-gradient(160deg,#3D0820 0%,#5C1030 40%,#7A1840 100%)',
  navBg:         'linear-gradient(135deg,#8A1A40 0%,#C03A6A 50%,#A0284E 100%)',
  navBorder:     'rgba(255,160,190,0.18)',
  sidebarBg:     '#F2D0DC',
  sidebarBorder: 'rgba(160,40,78,0.20)',
  sidebarLabel:  '#7A1535',
  sidebarText:   '#2A0A18',
  sidebarMuted:  'rgba(90,20,45,0.60)',
};

// ── Swipe pages (arrows, dots, touch swipe) ───────────────────────────────────
const chunk = (arr, n) =>
  Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));

const Pager = ({ pages, resetKey }) => {
  const [page, setPage] = useState(0);
  const touchX = useRef(null);

  useEffect(() => { setPage(0); }, [resetKey]);

  const go = (n) => setPage(Math.max(0, Math.min(pages.length - 1, n)));
  const arrow = (disabled) => ({
    width: 28, height: 28, borderRadius: '50%',
    border: '1px solid rgba(212,83,126,0.30)',
    background: disabled ? 'transparent' : '#fff',
    color: disabled ? 'rgba(192,58,106,0.25)' : pink.primary,
    cursor: disabled ? 'default' : 'pointer',
    fontSize: 16, lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
  });

  return (
    <div>
      <div
        style={{ overflow: 'hidden' }}
        onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={e => {
          if (touchX.current === null) return;
          const d = e.changedTouches[0].clientX - touchX.current;
          if (d < -40) go(page + 1);
          if (d > 40) go(page - 1);
          touchX.current = null;
        }}
      >
        <div style={{ display: 'flex', transform: `translateX(-${page * 100}%)`, transition: 'transform .3s ease' }}>
          {pages.map((pg, i) => (
            <div key={i} style={{ flex: '0 0 100%', minWidth: 0 }}>{pg}</div>
          ))}
        </div>
      </div>

      {pages.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '12px' }}>
          <button onClick={() => go(page - 1)} disabled={page === 0} style={arrow(page === 0)}>‹</button>
          <div style={{ display: 'flex', gap: '6px' }}>
            {pages.map((_, i) => (
              <span key={i} onClick={() => go(i)} style={{
                width: i === page ? 18 : 7, height: 7, borderRadius: 4, cursor: 'pointer', transition: 'all .2s',
                background: i === page ? pink.primary : 'rgba(192,58,106,0.25)',
              }} />
            ))}
          </div>
          <button onClick={() => go(page + 1)} disabled={page === pages.length - 1} style={arrow(page === pages.length - 1)}>›</button>
        </div>
      )}
    </div>
  );
};

// ── Canvas Item Component ─────────────────────────────────────────────────────
const CanvasItem = ({ item, isSelected, onMouseDown }) => (
  <div
    onMouseDown={onMouseDown}
    style={{
      position: 'absolute', left: item.x, top: item.y,
      cursor: isSelected ? 'grabbing' : 'grab',
      userSelect: 'none', zIndex: isSelected ? 20 : 1,
      transform: `scale(${isSelected ? 1.06 : 1})`,
      transformOrigin: 'center center', transition: 'transform 0.15s ease',
    }}
  >
    {isSelected && (
      <div style={{
        position: 'absolute', inset: '-10px', borderRadius: '50%',
        boxShadow: '0 0 0 2px rgba(212,83,126,0.85), 0 0 32px rgba(212,83,126,0.35)',
        pointerEvents: 'none',
      }} />
    )}
    <img
      src={item.img} alt={item.name} draggable={false}
      style={{
        width: `${ITEM_SIZE}px`, height: `${ITEM_SIZE}px`,
        objectFit: 'contain', display: 'block',
        userSelect: 'none', pointerEvents: 'none',
        mixBlendMode: 'multiply',
        filter: 'drop-shadow(0 10px 24px rgba(0,0,0,0.60)) drop-shadow(0 3px 8px rgba(0,0,0,0.40))',
      }}
    />
    {item.qty > 1 && (
      <div style={{
        position: 'absolute', bottom: '4px', right: '2px',
        background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
        borderRadius: '100px', padding: '2px 9px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.45)',
        border: '1px solid rgba(255,255,255,0.20)',
      }}>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', fontWeight: 700, color: '#fff' }}>×{item.qty}</span>
      </div>
    )}
  </div>
);

// ── Product Card Component (compact) ──────────────────────────────────────────
const ProductCard = ({ item, onAdd }) => (
  <div
    onClick={onAdd}
    style={{
      background: '#fff', borderRadius: '14px',
      border: '1px solid rgba(212,83,126,0.14)',
      boxShadow: '0 3px 16px rgba(212,83,126,0.08)',
      overflow: 'hidden', cursor: 'pointer',
      transition: 'all .20s', display: 'flex', flexDirection: 'column',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 32px rgba(212,83,126,0.22)';
      e.currentTarget.style.borderColor = 'rgba(212,83,126,0.38)';
      e.currentTarget.querySelector('img').style.transform = 'scale(1.12)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 3px 16px rgba(212,83,126,0.08)';
      e.currentTarget.style.borderColor = 'rgba(212,83,126,0.14)';
      e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    }}
  >
    <div style={{
      background: '#fff', height: '104px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <img
        src={item.img} alt={item.name} draggable={false}
        style={{
          width: '88px', height: '88px', objectFit: 'contain',
          mixBlendMode: 'multiply', display: 'block',
          filter: 'drop-shadow(0 4px 10px rgba(153,37,74,0.18))',
          transition: 'transform .25s ease',
        }}
      />
      <div style={{
        position: 'absolute', bottom: '8px', right: '8px',
        width: '28px', height: '28px', borderRadius: '50%',
        background: `linear-gradient(135deg,${pink.primary},${pink.deep})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontSize: '18px',
        boxShadow: '0 4px 12px rgba(212,83,126,0.45)', opacity: 0.90,
      }}>+</div>
    </div>
    <div style={{ padding: '10px 12px 12px' }}>
      <p style={{
        fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
        color: pink.text, marginBottom: '3px',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{item.name}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', fontWeight: 700, color: pink.deep }}>
          {formatRs(item.price)}
        </p>
        <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '9px', color: pink.muted }}>{item.desc}</span>
      </div>
    </div>
  </div>
);

// ── Main Studio Component ─────────────────────────────────────────────────────
const Studio = () => {
  const navigate = useNavigate();

  const [activeTheme,      setActiveTheme]      = useState(null);
  const [activeCat,        setActiveCat]        = useState('Flowers');
  const [canvasItems,      setCanvasItems]      = useState([]);
  const [selectedOnCanvas, setSelectedOnCanvas] = useState(null);
  const [delivery,         setDelivery]         = useState('std');
  const [deliveryOpen,     setDeliveryOpen]     = useState(false);
  const [note,             setNote]             = useState('');
  const [zoom,             setZoom]             = useState(1);

  // AI Stylist (state + API call live in useAiStylist.js)
  const { loading: aiLoading, picks: aiSuggestions, error: aiError, run: fetchPicks, reset: resetAI } = useAiStylist();

  const canvasRef = useRef(null);
  const dragItem  = useRef(null);
  const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });

  const itemsTotal    = canvasItems.reduce((s, i) => s + i.price * i.qty, 0);
  const deliveryPrice = DELIVERY_OPTIONS.find(d => d.id === delivery)?.price ?? 0;
  const grandTotal    = itemsTotal + deliveryPrice;

  // Zoom via scroll wheel
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      setZoom(z => Math.min(3, Math.max(0.3, z - e.deltaY * 0.001)));
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // Add item to canvas (or increment qty if already exists). dx/dy shift the start position.
  const addToCanvas = useCallback((item, dx = 0, dy = 0) => {
    setCanvasItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      const el = canvasRef.current;
      const cw = el ? el.offsetWidth  : 600;
      const ch = el ? el.offsetHeight : 500;
      const x  = (cw / zoom - ITEM_SIZE) / 2 + dx;
      const y  = (ch / zoom - ITEM_SIZE - 20) / 2 + dy;
      return [...prev, { ...item, qty: 1, x, y }];
    });
  }, [zoom]);

  // Add a whole AI option (bouquet + balloons + cake) laid out neatly
  const addBundle = (items) => {
    items.forEach((it, i) => addToCanvas(it, BUNDLE_OFFSETS[i].dx, BUNDLE_OFFSETS[i].dy));
  };

  const removeFromCanvas = useCallback((id) => {
    setCanvasItems(prev => prev.filter(i => i.id !== id));
    if (selectedOnCanvas === id) setSelectedOnCanvas(null);
  }, [selectedOnCanvas]);

  const adjustQty = useCallback((id, delta) => {
    setCanvasItems(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  }, []);

  // Drag to reposition canvas items
  const onMouseDown = (e, id) => {
    e.stopPropagation();
    setSelectedOnCanvas(id);
    const item = canvasItems.find(i => i.id === id);
    dragItem.current  = id;
    dragStart.current = { x: e.clientX, y: e.clientY, ox: item.x, oy: item.y };
    const onMove = (me) => {
      const dx = (me.clientX - dragStart.current.x) / zoom;
      const dy = (me.clientY - dragStart.current.y) / zoom;
      setCanvasItems(prev =>
        prev.map(i => i.id === dragItem.current
          ? { ...i, x: dragStart.current.ox + dx, y: dragStart.current.oy + dy }
          : i
        )
      );
    };
    const onUp = () => {
      dragItem.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  // AI Stylist — sends the theme id; the backend returns curated bouquet+balloon+cake options for it
  const runAI = () => {
    if (!activeTheme) return;
    fetchPicks(activeTheme, ALL_ITEMS);
  };

  const clearCanvas  = () => { setCanvasItems([]); setSelectedOnCanvas(null); };

  const handleSubmit = () => {
    if (canvasItems.length === 0) return;
    navigate('/payment', {
      state: { items: canvasItems, theme: activeTheme, delivery, note, itemsTotal, deliveryPrice, grandTotal }
    });
  };

  const themeObj = THEMES.find(t => t.id === activeTheme);
  const selItem  = canvasItems.find(i => i.id === selectedOnCanvas);

  return (
    <div style={{
      height: '100vh', overflow: 'hidden',
      background: 'linear-gradient(160deg,#FFF0F5 0%,#FFE4EE 50%,#FFF5F8 100%)',
      fontFamily: "'Montserrat', sans-serif",
      display: 'flex', flexDirection: 'column',
    }}>

      {/* ── TOP NAV ── */}
      <div style={{
        height: '66px', background: pink.navBg,
        borderBottom: `1.5px solid ${pink.navBorder}`,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center', padding: '0 28px', flexShrink: 0,
        boxShadow: '0 2px 24px rgba(138,26,64,0.35)',
      }}>
        {/* ← Home */}
        <button onClick={() => navigate('/')} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: "'Montserrat',sans-serif", fontSize: '13px',
          fontWeight: 700, letterSpacing: '1.5px',
          color: 'rgba(255,220,235,0.90)', textTransform: 'uppercase', transition: 'opacity .18s',
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.60'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >← Home</button>

        {/* Title */}
        <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,220,235,0.90)', animation: 'pulse 2s infinite' }} />
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: '#FFF0F5', letterSpacing: '0.5px' }}>
            2D Gift Studio
          </span>
        </div>

        {/* Zoom + Clear */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', alignItems: 'center' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '7px 14px', borderRadius: '8px',
            border: '1.5px solid rgba(255,200,220,0.30)',
            background: 'rgba(255,255,255,0.12)',
          }}>
            <button onClick={() => setZoom(z => Math.max(0.3, z - 0.1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFE0EE', fontSize: '20px', lineHeight: 1, padding: 0, fontWeight: 700 }}>−</button>
            <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700, color: '#FFE0EE', minWidth: '40px', textAlign: 'center' }}>
              {Math.round(zoom * 100)}%
            </span>
            <button onClick={() => setZoom(z => Math.min(3, z + 0.1))} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#FFE0EE', fontSize: '20px', lineHeight: 1, padding: 0, fontWeight: 700 }}>+</button>
          </div>
          <button onClick={clearCanvas} disabled={canvasItems.length === 0} style={{
            padding: '9px 20px', borderRadius: '8px',
            border: '1.5px solid rgba(255,200,220,0.35)',
            background: 'rgba(255,255,255,0.12)',
            cursor: canvasItems.length === 0 ? 'not-allowed' : 'pointer',
            fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700,
            letterSpacing: '1px', textTransform: 'uppercase', transition: 'all .18s',
            color: canvasItems.length === 0 ? 'rgba(255,200,220,0.30)' : '#FFE0EE',
          }}
            onMouseEnter={e => { if (canvasItems.length > 0) e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          >Clear</button>
        </div>
      </div>

      {/* ── MAIN 3-COLUMN LAYOUT (fixed height, panels scroll inside) ── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '272px 1fr 316px', gridTemplateRows: 'minmax(0, 1fr)', minHeight: 0, overflow: 'hidden' }}>

        {/* ════ LEFT SIDEBAR ════ */}
        <div style={{ background: pink.sidebarBg, borderRight: `1.5px solid ${pink.sidebarBorder}`, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

          {/* Themes */}
          <div style={{ padding: '18px 16px 14px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.sidebarLabel, textTransform: 'uppercase', marginBottom: '12px', opacity: 0.65 }}>Theme</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {THEMES.map(t => (
                <button key={t.id} onClick={() => { setActiveTheme(prev => prev === t.id ? null : t.id); resetAI(); }} style={{
                  padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', textAlign: 'left', transition: 'all .22s',
                  border: activeTheme === t.id ? `1.5px solid ${t.color}` : '1.5px solid rgba(192,58,106,0.22)',
                  background: activeTheme === t.id ? t.bg : 'linear-gradient(135deg,rgba(192,58,106,0.10),rgba(138,26,64,0.08))',
                  color: activeTheme === t.id ? '#FFF5F8' : '#8A1A40',
                  fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
                  letterSpacing: '1px', textTransform: 'uppercase',
                  boxShadow: activeTheme === t.id ? `0 4px 14px ${t.color}50` : '0 1px 4px rgba(192,58,106,0.10)',
                }}>{t.label}</button>
              ))}
            </div>
          </div>

          {/* AI Stylist */}
          <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
            <div style={{ background: 'rgba(255,255,255,0.60)', borderRadius: '12px', border: '1px solid rgba(160,40,78,0.22)', boxShadow: '0 4px 18px rgba(138,26,64,0.10)', padding: '16px' }}>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: `linear-gradient(135deg,${pink.primary},${pink.deep})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', color: '#fff' }}>✦</div>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: 700, color: '#2A0A18' }}>AI Stylist</span>
              </div>

              {/* Subtitle */}
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: pink.sidebarMuted, lineHeight: 1.5, marginBottom: '14px' }}>
                {activeTheme
                  ? `Curating picks for "${THEMES.find(t => t.id === activeTheme)?.label}".`
                  : 'Select a theme to get curated picks.'}
              </p>

              {/* Button */}
              <button onClick={runAI} disabled={!activeTheme || aiLoading} style={{
                width: '100%', padding: '12px', borderRadius: '8px', border: 'none', marginBottom: '12px', transition: 'all .22s',
                background: !activeTheme ? 'rgba(192,58,106,0.08)' : `linear-gradient(135deg,${pink.primary},${pink.deep})`,
                cursor: !activeTheme ? 'not-allowed' : 'pointer',
                fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700,
                letterSpacing: '1.5px', textTransform: 'uppercase',
                color: !activeTheme ? 'rgba(192,58,106,0.40)' : '#fff',
                boxShadow: activeTheme ? '0 4px 18px rgba(192,58,106,0.35)' : 'none',
              }}>
                {aiLoading ? 'Curating…' : '✦ Get AI Picks'}
              </button>

              {/* Spinner */}
              {aiLoading && (
                <div style={{ textAlign: 'center', padding: '10px 0' }}>
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', border: '2px solid rgba(192,58,106,0.15)', borderTop: `2px solid ${pink.primary}`, margin: '0 auto', animation: 'spin 0.8s linear infinite' }} />
                </div>
              )}

              {/* Results: one option at a time, swipe/arrows for the others */}
              {Array.isArray(aiSuggestions) && aiSuggestions.length > 1 ? (
                <Pager
                  resetKey={aiSuggestions}
                  pages={aiSuggestions.map((opt, i) => (
                    <AiPicks key={i} picks={[opt]} error={aiError} onAdd={addToCanvas} onAddAll={addBundle} />
                  ))}
                />
              ) : (
                <AiPicks picks={aiSuggestions} error={aiError} onAdd={addToCanvas} onAddAll={addBundle} />
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.sidebarLabel, textTransform: 'uppercase', marginBottom: '12px', opacity: 0.65 }}>Order Summary</p>
            {canvasItems.length === 0 ? (
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: 'rgba(100,30,60,0.35)', textAlign: 'center', padding: '8px 0' }}>
                No items on canvas yet
              </p>
            ) : (
              <div style={{ marginBottom: '8px' }}>
                {canvasItems.map(item => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                    <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: pink.sidebarMuted }}>{item.name} ×{item.qty}</span>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', color: '#2A0A18', fontWeight: 700 }}>{formatRs(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Delivery Options (dropdown) */}
          <div style={{ padding: '14px 16px', borderBottom: `1px solid ${pink.sidebarBorder}`, flexShrink: 0 }}>
            <button onClick={() => setDeliveryOpen(o => !o)} style={{
              width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.45)', border: '1.5px solid rgba(160,40,78,0.22)',
              borderRadius: '8px', padding: '10px 12px', cursor: 'pointer',
            }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: '#2A0A18', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Delivery: {DELIVERY_OPTIONS.find(d => d.id === delivery)?.label}
              </span>
              <span style={{ color: pink.sidebarLabel, fontSize: '12px' }}>{deliveryOpen ? '▲' : '▼'}</span>
            </button>

            {deliveryOpen && (
              <div style={{ marginTop: '8px' }}>
                {DELIVERY_OPTIONS.map(opt => (
                  <div key={opt.id} onClick={() => { setDelivery(opt.id); setDeliveryOpen(false); }} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '9px 10px', borderRadius: '8px', cursor: 'pointer', marginBottom: '6px', transition: 'all .18s',
                    border: delivery === opt.id ? `1.5px solid ${pink.primary}` : '1.5px solid rgba(160,40,78,0.22)',
                    background: delivery === opt.id ? 'rgba(192,58,106,0.15)' : 'rgba(255,255,255,0.45)',
                  }}>
                    <span style={{ fontSize: '16px' }}>{opt.icon}</span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 600, color: '#2A0A18' }}>{opt.label}</p>
                      <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '9px', color: pink.sidebarMuted }}>{opt.desc}</p>
                    </div>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '13px', color: pink.sidebarLabel, fontWeight: 700 }}>+{formatRs(opt.price)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Gift Note + Total + Submit */}
          <div style={{ padding: '14px 16px 20px', flexShrink: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: pink.sidebarMuted, textTransform: 'uppercase', letterSpacing: '1px' }}>Total</span>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: '#2A0A18' }}>{formatRs(grandTotal)}</span>
            </div>
            <textarea
              value={note} onChange={e => setNote(e.target.value)}
              placeholder="Add a gift note…" rows={2}
              style={{
                width: '100%', boxSizing: 'border-box', resize: 'none', outline: 'none',
                background: 'rgba(255,255,255,0.50)', border: '1px solid rgba(160,40,78,0.25)',
                borderRadius: '8px', padding: '9px 12px', marginBottom: '12px',
                fontFamily: "'Montserrat',sans-serif", fontSize: '11px', lineHeight: 1.6, color: '#2A0A18',
              }}
            />
            <button onClick={handleSubmit} disabled={canvasItems.length === 0} style={{
              width: '100%', padding: '13px', borderRadius: '8px', border: 'none',
              background: canvasItems.length === 0 ? 'rgba(192,58,106,0.10)' : `linear-gradient(135deg,${pink.primary},${pink.deep})`,
              color: canvasItems.length === 0 ? 'rgba(192,58,106,0.30)' : '#FFFCFB',
              fontFamily: "'Montserrat',sans-serif", fontSize: '12px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              cursor: canvasItems.length === 0 ? 'not-allowed' : 'pointer',
              boxShadow: canvasItems.length > 0 ? '0 8px 24px rgba(192,58,106,0.40)' : 'none',
            }}>Submit &amp; Pay ✦</button>
          </div>
        </div>

        {/* ════ CENTRE: Canvas ════ */}
        <div
          ref={canvasRef}
  onMouseDown={() => setSelectedOnCanvas(null)}   // ← was onClick
          style={{
            position: 'relative', overflow: 'hidden',
            background: themeObj
              ? `radial-gradient(ellipse at 40% 35%, ${themeObj.color}28 0%, transparent 60%), ${pink.canvasBg}`
              : pink.canvasBg,
          }}
        >
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(255,150,180,0.05) 1px, transparent 1px),' +
              'linear-gradient(90deg, rgba(255,150,180,0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />

          {/* Glow effects */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(212,83,126,0.16) 0%,transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(180,40,90,0.20) 0%,transparent 65%)', pointerEvents: 'none' }} />

          {/* Labels */}
          <div style={{ position: 'absolute', top: '14px', left: '18px', fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: 'rgba(255,180,210,0.18)', pointerEvents: 'none' }}>Design Canvas</div>
          <div style={{ position: 'absolute', bottom: '14px', right: '18px', fontFamily: "'Montserrat',sans-serif", fontSize: '9px', letterSpacing: '1px', color: 'rgba(255,180,210,0.22)', pointerEvents: 'none' }}>scroll to zoom · drag items to reposition</div>

          {/* Empty state */}
          {canvasItems.length === 0 && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,150,180,0.10)', border: '1px solid rgba(255,150,180,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '20px' }}>🎁</div>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 700, color: 'rgba(255,210,230,0.28)', marginBottom: '8px' }}>Your canvas awaits</p>
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', color: 'rgba(255,180,210,0.20)', letterSpacing: '1px' }}>Pick a category → tap a product to add</p>
            </div>
          )}

          {/* Zoomable layer with canvas items */}
          <div style={{ position: 'absolute', inset: 0, transform: `scale(${zoom})`, transformOrigin: 'center center' }}>
            {canvasItems.map(item => (
              <CanvasItem
                key={item.id} item={item} zoom={zoom}
                isSelected={selectedOnCanvas === item.id}
                onMouseDown={(e) => onMouseDown(e, item.id)}
              />
            ))}
          </div>

          {/* Floating controls for selected item */}
          {selItem && (
            <div
                onMouseDown={e => e.stopPropagation()}   // ← add this
              onClick={e => e.stopPropagation()}
              style={{
                position: 'absolute',
                left: selItem.x * zoom + (canvasRef.current ? (canvasRef.current.offsetWidth  * (1 - zoom)) / 2 : 0),
                top:  Math.max(4, selItem.y * zoom + (canvasRef.current ? (canvasRef.current.offsetHeight * (1 - zoom)) / 2 : 0) - 46),
                display: 'flex', alignItems: 'center', gap: '4px',
                background: 'rgba(42,10,24,0.94)', backdropFilter: 'blur(12px)',
                borderRadius: '100px', padding: '5px 12px',
                border: '1px solid rgba(212,83,126,0.40)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.45)', zIndex: 30,
              }}
            >
              <button onClick={() => adjustQty(selItem.id, -1)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>−</button>
              <span style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: '#fff', minWidth: '20px', textAlign: 'center' }}>{selItem.qty}</span>
              <button onClick={() => adjustQty(selItem.id,  1)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>+</button>
              <div style={{ width: '1px', height: '14px', background: 'rgba(255,255,255,0.12)', margin: '0 3px' }} />
              <button onClick={() => removeFromCanvas(selItem.id)} style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(212,83,126,0.22)', border: 'none', cursor: 'pointer', color: '#F9A8D4', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>
          )}
        </div>

        {/* ════ RIGHT: Product Picker ════ */}
        <div style={{ borderLeft: '1px solid rgba(212,83,126,0.12)', background: '#fff', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>

          {/* Category tabs */}
          <div style={{ padding: '14px 14px 10px', borderBottom: '1px solid rgba(212,83,126,0.08)', flexShrink: 0, position: 'sticky', top: 0, background: '#fff', zIndex: 5 }}>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2.5px', color: pink.labelText, textTransform: 'uppercase', marginBottom: '10px', opacity: 0.55 }}>Categories</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {CATEGORIES.map(cat => (
                <button key={cat} onClick={() => setActiveCat(cat)} style={{
                  padding: '7px 14px', borderRadius: '100px', border: '1px solid', cursor: 'pointer', transition: 'all .18s', whiteSpace: 'nowrap',
                  borderColor: activeCat === cat ? pink.primary : 'rgba(212,83,126,0.20)',
                  background:  activeCat === cat ? pink.primary : 'transparent',
                  color:       activeCat === cat ? '#fff' : pink.text,
                  fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 600,
                }}>{cat}</button>
              ))}
            </div>
          </div>

          {/* Product grid: 6 per page, swipe / arrows for the rest */}
          <div style={{ padding: '14px', flex: 1 }}>
            <Pager
              resetKey={activeCat}
              pages={chunk(ITEMS[activeCat] || [], PER_PAGE).map((group, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignContent: 'start' }}>
                  {group.map(item => (
                    <ProductCard key={item.id} item={item} onAdd={() => addToCanvas(item)} />
                  ))}
                </div>
              ))}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.6;transform:scale(1.3)} }
        @keyframes spin  { to { transform: rotate(360deg); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(192,58,106,0.20); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(192,58,106,0.38); }
      `}</style>
    </div>
  );
};

export default Studio;
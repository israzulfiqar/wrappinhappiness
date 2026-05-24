// // import { useState } from 'react';
// // import { PRODUCTS } from './ProductGallery'; // adjust path as needed

// // // ─── Static Data ──────────────────────────────────────────────────────────────

// // const STATS = [
// //   { label: 'NEW ORDERS',  value: '24',      trend: '↑ 18% today',        up: true  },
// //   { label: 'REVENUE',     value: 'Rs. 58k', trend: '↑ 12% vs yesterday', up: true  },
// //   { label: 'BLUEPRINTS',  value: '18',      trend: '6 pending pack',      up: null  },
// //   { label: 'LOW STOCK',   value: '3',       trend: '⚠ Restock needed',   up: false },
// // ];

// // const ORDERS = [
// //   { id: '#WH-024', customer: 'Sana Malik',  bundle: 'Pink Romance ×2',   date: 'Apr 12', total: 'Rs. 4,840', status: 'New'     },
// //   { id: '#WH-023', customer: 'Fatima Raza', bundle: 'Birthday Joy',       date: 'Apr 12', total: 'Rs. 2,100', status: 'Packed'  },
// //   { id: '#WH-022', customer: 'Hana Sheikh', bundle: 'Balloon Bundle',     date: 'Apr 11', total: 'Rs. 1,350', status: 'Pending' },
// //   { id: '#WH-021', customer: 'Zara Ahmed',  bundle: 'Wedding Flower Box', date: 'Apr 11', total: 'Rs. 6,200', status: 'Packed'  },
// //   { id: '#WH-020', customer: 'Nida Khan',   bundle: 'Blush Peony Bunch',  date: 'Apr 10', total: 'Rs. 2,200', status: 'New'     },
// // ];

// // const BLUEPRINTS = [
// //   {
// //     id: 'BP-001', name: 'Pink Romance Box', size: '12″ × 12″', complexity: 'Medium (5 items)', status: 'Active',
// //     items: [
// //       { emoji: '🌸', label: 'Pink Roses',   x: '9%',  y: '14%' },
// //       { emoji: '🎀', label: 'Blush Ribbon', x: '40%', y: '24%' },
// //       { emoji: '🎈', label: 'Balloons ×5',  x: '63%', y: '10%' },
// //       { emoji: '🎂', label: 'Cake',         x: '26%', y: '58%' },
// //       { emoji: '💌', label: 'Card',         x: '58%', y: '56%' },
// //     ],
// //   },
// //   {
// //     id: 'BP-002', name: 'Birthday Joy Kit', size: '10″ × 10″', complexity: 'Simple (3 items)', status: 'Pending',
// //     items: [
// //       { emoji: '🎂', label: 'Mini Cake',    x: '15%', y: '20%' },
// //       { emoji: '🎈', label: 'Balloon Clstr',x: '55%', y: '15%' },
// //       { emoji: '🌸', label: 'Floral Spray', x: '35%', y: '55%' },
// //     ],
// //   },
// //   {
// //     id: 'BP-003', name: 'Anniversary Grand', size: '16″ × 16″', complexity: 'Complex (7 items)', status: 'Active',
// //     items: [
// //       { emoji: '🌹', label: 'Red Roses ×18',x: '8%',  y: '10%' },
// //       { emoji: '🍫', label: 'Macarons',     x: '40%', y: '8%'  },
// //       { emoji: '🕯️', label: 'Candle',       x: '68%', y: '14%' },
// //       { emoji: '💌', label: 'Personal Card',x: '20%', y: '52%' },
// //       { emoji: '🎀', label: 'Velvet Ribbon',x: '48%', y: '58%' },
// //       { emoji: '🧸', label: 'Teddy Bear',   x: '70%', y: '50%' },
// //       { emoji: '🎈', label: 'Foil Balloon', x: '12%', y: '72%' },
// //     ],
// //   },
// //   {
// //     id: 'BP-004', name: 'Eid Mubarak Set',  size: '14″ × 14″', complexity: 'Medium (4 items)', status: 'Pending',
// //     items: [
// //       { emoji: '🌙', label: 'Crescent Deco',x: '12%', y: '15%' },
// //       { emoji: '🍬', label: 'Sweets Box',   x: '50%', y: '12%' },
// //       { emoji: '🌸', label: 'Florals',      x: '25%', y: '55%' },
// //       { emoji: '✨', label: 'Fairy Lights',  x: '62%', y: '58%' },
// //     ],
// //   },
// //   {
// //     id: 'BP-005', name: 'Self-Love Bundle', size: '10″ × 10″', complexity: 'Simple (3 items)', status: 'Draft',
// //     items: [
// //       { emoji: '🕯️', label: 'Soy Candle',   x: '18%', y: '20%' },
// //       { emoji: '🍫', label: 'Chocolates',   x: '55%', y: '18%' },
// //       { emoji: '💆', label: 'Skincare Set', x: '30%', y: '58%' },
// //     ],
// //   },
// //   {
// //     id: 'BP-006', name: 'Proposal Grand', size: '18″ × 18″', complexity: 'Complex (6 items)', status: 'Draft',
// //     items: [
// //       { emoji: '🌹', label: 'Roses ×50',    x: '10%', y: '12%' },
// //       { emoji: '💍', label: 'Ring Box Disp',x: '45%', y: '10%' },
// //       { emoji: '🎈', label: 'Foil Hearts',  x: '68%', y: '18%' },
// //       { emoji: '🕯️', label: 'Pillar Candle',x: '20%', y: '60%' },
// //       { emoji: '🍫', label: 'Belgian Choc', x: '50%', y: '58%' },
// //       { emoji: '💌', label: 'Love Letter',  x: '72%', y: '62%' },
// //     ],
// //   },
// // ];

// // const STATUS_STYLES = {
// //   New:     { background: 'rgba(236,72,153,0.12)', color: '#BE185D', border: '1px solid rgba(236,72,153,0.25)' },
// //   Packed:  { background: 'rgba(34,197,94,0.10)',  color: '#15803D', border: '1px solid rgba(34,197,94,0.22)'  },
// //   Pending: { background: 'rgba(249,115,22,0.10)', color: '#C2410C', border: '1px solid rgba(249,115,22,0.22)' },
// //   Active:  { background: 'rgba(34,197,94,0.10)',  color: '#15803D', border: '1px solid rgba(34,197,94,0.22)'  },
// //   Draft:   { background: 'rgba(148,163,184,0.12)',color: '#94A3B8', border: '1px solid rgba(148,163,184,0.22)'},
// // };

// // const NAV_ITEMS = [
// //   { icon: '📋', label: 'Orders'     },
// //   { icon: '📐', label: 'Blueprints' },
// //   { icon: '🌸', label: 'Products'   },
// //   { icon: '📊', label: 'Analytics'  },
// //   { icon: '⚙️', label: 'Settings'   },
// // ];

// // const c = {
// //   pageBg:    'linear-gradient(160deg,#3A0420 0%,#5A0832 38%,#8B1050 65%,#4A0428 100%)',
// //   cardBg:    'rgba(255,255,255,0.06)',
// //   cardBgHov: 'rgba(255,255,255,0.10)',
// //   sidebarBg: 'rgba(255,255,255,0.05)',
// //   activeBg:  'rgba(249,168,212,0.14)',
// //   white:     '#FFFFFF',
// //   cream:     '#FDE4EE',
// //   muted:     'rgba(253,228,238,0.45)',
// //   faint:     'rgba(253,228,238,0.22)',
// //   pink:      '#EC4899',
// //   pinkMid:   '#F9A8D4',
// //   pinkDark:  '#BE185D',
// //   pinkBorder:'rgba(249,168,212,0.18)',
// //   pinkBgSoft:'rgba(236,72,153,0.10)',
// // };

// // const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

// // // ─── Shared Components ────────────────────────────────────────────────────────

// // const StatCard = ({ stat }) => {
// //   const [hovered, setHovered] = useState(false);
// //   return (
// //     <div
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       style={{
// //         background: hovered ? c.cardBgHov : c.cardBg,
// //         borderRadius: '16px', padding: '20px 18px',
// //         border: `1px solid ${c.pinkBorder}`, transition: 'all .2s',
// //         boxShadow: hovered ? '0 8px 28px rgba(236,72,153,0.12)' : 'none',
// //       }}
// //     >
// //       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'12px' }}>{stat.label}</p>
// //       <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'8px' }}>{stat.value}</p>
// //       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:500, color: stat.up === true ? '#86EFAC' : stat.up === false ? '#FCA5A5' : c.muted }}>{stat.trend}</p>
// //     </div>
// //   );
// // };

// // const SectionLabel = ({ children }) => (
// //   <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:c.faint, marginBottom:'12px' }}>{children}</p>
// // );

// // // ─── Blueprint Mini Canvas ────────────────────────────────────────────────────

// // const BlueprintCanvas = ({ items }) => (
// //   <div style={{
// //     background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(249,168,212,0.28)',
// //     borderRadius: '12px', height: '160px', position: 'relative', overflow: 'hidden', flexShrink: 0,
// //   }}>
// //     <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(249,168,212,0.10) 1px,transparent 1px)', backgroundSize:'18px 18px', pointerEvents:'none' }}/>
// //     {items.map((item, i) => (
// //       <div key={i} style={{ position:'absolute', left:item.x, top:item.y, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.28)', borderRadius:'8px', padding:'5px 10px', fontSize:'9.5px', color:c.pinkMid, fontWeight:600, whiteSpace:'nowrap', cursor:'pointer', transition:'background .18s', backdropFilter:'blur(4px)' }}
// //         onMouseEnter={e => e.currentTarget.style.background='rgba(249,168,212,0.24)'}
// //         onMouseLeave={e => e.currentTarget.style.background='rgba(249,168,212,0.12)'}
// //       >
// //         <span style={{ marginRight:'6px' }}>{item.emoji}</span>{item.label}
// //       </div>
// //     ))}
// //   </div>
// // );

// // // ─── VIEWS ────────────────────────────────────────────────────────────────────

// // // Orders View
// // const OrdersView = () => (
// //   <div>
// //     <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
// //       {STATS.map(s => <StatCard key={s.label} stat={s}/>)}
// //     </div>

// //     <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'18px' }}>
// //       {/* Orders Table */}
// //       <div style={{ background:c.cardBg, backdropFilter:'blur(12px)', borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}`, boxShadow:'0 8px 32px rgba(0,0,0,0.18)' }}>
// //         <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
// //           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>Recent Orders</h4>
// //           <span style={{ fontSize:'8px', padding:'4px 10px', borderRadius:'6px', background:'rgba(236,72,153,0.15)', border:'1px solid rgba(236,72,153,0.28)', color:c.pinkMid, fontWeight:700, letterSpacing:'1.5px' }}>LIVE</span>
// //         </div>
// //         <table style={{ width:'100%', borderCollapse:'collapse' }}>
// //           <thead>
// //             <tr style={{ borderBottom:`1px solid ${c.pinkBorder}` }}>
// //               {['ORDER','CUSTOMER','BUNDLE','DATE','TOTAL','STATUS'].map(h => (
// //                 <th key={h} style={{ padding:'0 0 14px 0', textAlign:'left', fontSize:'9px', fontWeight:700, color:c.faint, letterSpacing:'1.5px' }}>{h}</th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {ORDERS.map((o, i) => (
// //               <tr key={i} style={{ borderBottom: i === ORDERS.length-1 ? 'none' : '1px solid rgba(249,168,212,0.07)' }}>
// //                 <td style={{ padding:'15px 0', fontSize:'12px', color:c.white, fontWeight:700 }}>{o.id}</td>
// //                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.customer}</td>
// //                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.bundle}</td>
// //                 <td style={{ padding:'15px 0', fontSize:'12px', color:c.faint }}>{o.date}</td>
// //                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.cream, fontWeight:600 }}>{o.total}</td>
// //                 <td style={{ padding:'15px 0' }}>
// //                   <span style={{ padding:'5px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[o.status] }}>{o.status}</span>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Active Blueprint preview */}
// //       <div style={{ background:'rgba(249,168,212,0.06)', backdropFilter:'blur(12px)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column', boxShadow:'0 8px 32px rgba(0,0,0,0.18)' }}>
// //         <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'18px' }}>
// //           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:0 }}>Active Blueprint</h4>
// //           <button style={{ fontSize:'10px', fontWeight:700, fontStyle:'italic', color:c.pinkMid, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.22)', cursor:'pointer', padding:'5px 14px', borderRadius:'8px' }}>Export PDF</button>
// //         </div>
// //         <BlueprintCanvas items={BLUEPRINTS[0].items} />
// //         <div style={{ marginTop:'18px', paddingTop:'16px', borderTop:'1px solid rgba(249,168,212,0.14)' }}>
// //           <SectionLabel>Blueprint Info</SectionLabel>
// //           <div style={{ display:'flex', gap:'24px' }}>
// //             <div>
// //               <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Canvas Size</p>
// //               <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].size}</p>
// //             </div>
// //             <div>
// //               <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Complexity</p>
// //               <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].complexity}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>

// //     {/* Quick actions */}
// //     <div style={{ display:'flex', gap:'12px', marginTop:'18px', flexWrap:'wrap' }}>
// //       {[
// //         { label:'+ New Order',   color:'linear-gradient(135deg,#F9A8D4,#EC4899)', shadow:'rgba(236,72,153,0.38)', textColor:'#fff' },
// //         { label:'Print Packing', color:'rgba(255,255,255,0.07)', shadow:'none', border:`1px solid ${c.pinkBorder}`, textColor:c.muted },
// //         { label:'Export Report', color:'rgba(255,255,255,0.07)', shadow:'none', border:`1px solid ${c.pinkBorder}`, textColor:c.muted },
// //         { label:'Restock Alert', color:'rgba(255,255,255,0.07)', shadow:'none', border:`1px solid ${c.pinkBorder}`, textColor:c.muted },
// //       ].map((btn, i) => (
// //         <button key={i} style={{ padding:'12px 24px', borderRadius:'10px', border:btn.border||'none', background:btn.color, color:btn.textColor, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, fontStyle:'italic', letterSpacing:'0.5px', cursor:'pointer', boxShadow:btn.shadow!=='none'?`0 6px 20px ${btn.shadow}`:'none', transition:'all .2s' }}>{btn.label}</button>
// //       ))}
// //     </div>
// //   </div>
// // );

// // // Blueprints View
// // const BlueprintsView = () => {
// //   const [selected, setSelected] = useState(BLUEPRINTS[0]);
// //   return (
// //     <div>
// //       <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px' }}>
// //         <div>
// //           <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Blueprint Library</h3>
// //           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>{BLUEPRINTS.length} blueprints · {BLUEPRINTS.filter(b=>b.status==='Active').length} active</p>
// //         </div>
// //         <button style={{ padding:'12px 24px', borderRadius:'10px', border:'none', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, fontStyle:'italic', letterSpacing:'0.5px', cursor:'pointer', boxShadow:'0 6px 20px rgba(236,72,153,0.38)' }}>+ New Blueprint</button>
// //       </div>

// //       <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:'20px' }}>
// //         {/* Blueprint list */}
// //         <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
// //           {BLUEPRINTS.map(bp => (
// //             <div key={bp.id} onClick={() => setSelected(bp)} style={{ background: selected.id===bp.id ? 'rgba(249,168,212,0.12)' : c.cardBg, borderRadius:'14px', padding:'16px 18px', border: selected.id===bp.id ? '1px solid rgba(249,168,212,0.40)' : `1px solid ${c.pinkBorder}`, cursor:'pointer', transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
// //               <div>
// //                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{bp.name}</p>
// //                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:0 }}>{bp.id} · {bp.size} · {bp.complexity}</p>
// //               </div>
// //               <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'9px', fontWeight:700, flexShrink:0, ...STATUS_STYLES[bp.status] }}>{bp.status}</span>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Blueprint detail */}
// //         <div style={{ background:'rgba(249,168,212,0.06)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column', gap:'18px' }}>
// //           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
// //             <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>{selected.name}</h4>
// //             <div style={{ display:'flex', gap:'8px' }}>
// //               <button style={{ fontSize:'10px', fontWeight:700, color:c.pinkMid, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.22)', cursor:'pointer', padding:'6px 14px', borderRadius:'8px' }}>Edit</button>
// //               <button style={{ fontSize:'10px', fontWeight:700, fontStyle:'italic', color:c.pinkMid, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.22)', cursor:'pointer', padding:'6px 14px', borderRadius:'8px' }}>Export PDF</button>
// //             </div>
// //           </div>
// //           <BlueprintCanvas items={selected.items} />
// //           <div style={{ paddingTop:'14px', borderTop:'1px solid rgba(249,168,212,0.14)' }}>
// //             <SectionLabel>Blueprint Info</SectionLabel>
// //             <div style={{ display:'flex', gap:'32px' }}>
// //               <div>
// //                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Canvas Size</p>
// //                 <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{selected.size}</p>
// //               </div>
// //               <div>
// //                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Complexity</p>
// //                 <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{selected.complexity}</p>
// //               </div>
// //               <div>
// //                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Status</p>
// //                 <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[selected.status] }}>{selected.status}</span>
// //               </div>
// //             </div>
// //           </div>
// //           <div>
// //             <SectionLabel>Items ({selected.items.length})</SectionLabel>
// //             <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
// //               {selected.items.map((item, i) => (
// //                 <div key={i} style={{ background:'rgba(249,168,212,0.10)', border:'1px solid rgba(249,168,212,0.22)', borderRadius:'8px', padding:'6px 12px', fontSize:'11px', color:c.pinkMid, fontWeight:600 }}>
// //                   {item.emoji} {item.label}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Products View — data from ProductGallery's PRODUCTS export
// // const ProductsView = () => {
// //   const categories = Object.keys(PRODUCTS);
// //   const [activeCat, setActiveCat] = useState(categories[0]);
// //   const [search, setSearch] = useState('');

// //   const allProducts = PRODUCTS[activeCat] || [];
// //   const filtered = allProducts.filter(p =>
// //     p.name.toLowerCase().includes(search.toLowerCase()) ||
// //     p.desc.toLowerCase().includes(search.toLowerCase())
// //   );

// //   return (
// //     <div>
// //       {/* Header */}
// //       <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px', flexWrap:'wrap', gap:'12px' }}>
// //         <div>
// //           <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Product Catalogue</h3>
// //           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>
// //             {Object.values(PRODUCTS).reduce((a, b) => a + b.length, 0)} products across {categories.length} categories
// //           </p>
// //         </div>
// //         <input
// //           value={search}
// //           onChange={e => setSearch(e.target.value)}
// //           placeholder="Search products…"
// //           style={{ padding:'10px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', outline:'none', width:'220px', backdropFilter:'blur(8px)' }}
// //         />
// //       </div>

// //       {/* Category tabs */}
// //       <div style={{ display:'flex', gap:'8px', marginBottom:'22px', flexWrap:'wrap' }}>
// //         {categories.map(cat => (
// //           <button key={cat} onClick={() => { setActiveCat(cat); setSearch(''); }} style={{ padding:'8px 18px', borderRadius:'20px', border: activeCat===cat ? 'none' : `1px solid ${c.pinkBorder}`, background: activeCat===cat ? 'linear-gradient(135deg,#F9A8D4,#EC4899)' : 'rgba(255,255,255,0.06)', color: activeCat===cat ? '#fff' : c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, cursor:'pointer', transition:'all .2s' }}>
// //             {cat}
// //             <span style={{ marginLeft:'6px', fontSize:'10px', opacity:0.7 }}>({PRODUCTS[cat].length})</span>
// //           </button>
// //         ))}
// //       </div>

// //       {/* Products grid */}
// //       <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'14px' }}>
// //         {filtered.map(product => (
// //           <div key={product.id} style={{ background:c.cardBg, borderRadius:'16px', border:`1px solid ${c.pinkBorder}`, overflow:'hidden', transition:'all .2s', cursor:'pointer' }}
// //             onMouseEnter={e => { e.currentTarget.style.background=c.cardBgHov; e.currentTarget.style.boxShadow='0 8px 28px rgba(236,72,153,0.12)'; e.currentTarget.style.transform='translateY(-3px)'; }}
// //             onMouseLeave={e => { e.currentTarget.style.background=c.cardBg; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}
// //           >
// //             {/* Colour swatch header */}
// //             <div style={{ height:'80px', background:`linear-gradient(135deg,${product.color},${product.color}99)`, position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
// //               <img src={product.img} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e => { e.target.style.display='none'; }}/>
// //               {product.badge && (
// //                 <span style={{ position:'absolute', top:'8px', left:'8px', padding:'3px 10px', borderRadius:'20px', fontSize:'8px', fontWeight:700, fontStyle:'italic', background:'linear-gradient(135deg,#D4607A,#C04868)', color:'#fff', letterSpacing:'1.2px', textTransform:'uppercase' }}>{product.badge}</span>
// //               )}
// //             </div>
// //             <div style={{ padding:'14px' }}>
// //               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{product.name}</p>
// //               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'0 0 10px', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{product.desc}</p>
// //               <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
// //                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:c.pink, margin:0 }}>{fmt(product.price)}</p>
// //                 <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:c.faint }}>ID #{product.id}</span>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //         {filtered.length === 0 && (
// //           <div style={{ gridColumn:'1/-1', textAlign:'center', padding:'48px', color:c.muted, fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontStyle:'italic' }}>No products found for "{search}"</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // // Analytics View
// // const AnalyticsView = () => {
// //   const totalRevenue = ORDERS.reduce((sum, o) => sum + parseInt(o.total.replace(/[^0-9]/g,'')), 0);
// //   const totalProducts = Object.values(PRODUCTS).reduce((a, b) => a + b.length, 0);
// //   const categoryData = Object.entries(PRODUCTS).map(([cat, prods]) => ({
// //     cat, count: prods.length, avgPrice: Math.round(prods.reduce((s,p)=>s+p.price,0)/prods.length),
// //   }));
// //   const maxCount = Math.max(...categoryData.map(d => d.count));

// //   return (
// //     <div>
// //       <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Analytics Overview</h3>

// //       {/* KPI row */}
// //       <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
// //         {[
// //           { label:'TOTAL PRODUCTS', value: totalProducts, sub:'Across all categories' },
// //           { label:'BLUEPRINTS',     value: BLUEPRINTS.length, sub:`${BLUEPRINTS.filter(b=>b.status==='Active').length} currently active` },
// //           { label:'RECENT ORDERS',  value: ORDERS.length, sub:'Last recorded orders' },
// //           { label:'CATEGORIES',     value: Object.keys(PRODUCTS).length, sub:'Product categories' },
// //         ].map(k => (
// //           <div key={k.label} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px 18px', border:`1px solid ${c.pinkBorder}` }}>
// //             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'10px' }}>{k.label}</p>
// //             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'6px' }}>{k.value}</p>
// //             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted }}>{k.sub}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Category breakdown */}
// //       <div style={{ background:c.cardBg, borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}`, marginBottom:'18px' }}>
// //         <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Products by Category</h4>
// //         <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
// //           {categoryData.map(d => (
// //             <div key={d.cat}>
// //               <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
// //                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:c.cream, margin:0 }}>{d.cat}</p>
// //                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, margin:0 }}>{d.count} items · avg {fmt(d.avgPrice)}</p>
// //               </div>
// //               <div style={{ height:'8px', borderRadius:'4px', background:'rgba(255,255,255,0.06)', overflow:'hidden' }}>
// //                 <div style={{ height:'100%', borderRadius:'4px', background:'linear-gradient(90deg,#F9A8D4,#EC4899)', width:`${(d.count/maxCount)*100}%`, transition:'width .6s cubic-bezier(.4,0,.2,1)' }}/>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Order status breakdown */}
// //       <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px' }}>
// //         {['New','Packed','Pending'].map(status => {
// //           const count = ORDERS.filter(o=>o.status===status).length;
// //           return (
// //             <div key={status} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px', border:`1px solid ${c.pinkBorder}`, textAlign:'center' }}>
// //               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:700, color:c.white, margin:'0 0 6px' }}>{count}</p>
// //               <span style={{ padding:'4px 14px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[status] }}>{status}</span>
// //               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'10px 0 0' }}>orders</p>
// //             </div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // };

// // // Settings View
// // const SettingsView = () => {
// //   const [storeName, setStoreName] = useState('Wrapping Happiness');
// //   const [currency, setCurrency] = useState('PKR (Rs.)');
// //   const [notif, setNotif] = useState(true);
// //   const [saved, setSaved] = useState(false);

// //   const save = () => { setSaved(true); setTimeout(() => setSaved(false), 1800); };

// //   const Field = ({ label, children }) => (
// //     <div style={{ marginBottom:'20px' }}>
// //       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:c.faint, marginBottom:'8px' }}>{label}</p>
// //       {children}
// //     </div>
// //   );

// //   const inputStyle = { padding:'12px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'13px', outline:'none', width:'100%', boxSizing:'border-box', backdropFilter:'blur(8px)' };

// //   return (
// //     <div>
// //       <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 28px' }}>Settings</h3>
// //       <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
// //         <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
// //           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Store Settings</h4>
// //           <Field label="Store Name">
// //             <input value={storeName} onChange={e=>setStoreName(e.target.value)} style={inputStyle}/>
// //           </Field>
// //           <Field label="Currency">
// //             <select value={currency} onChange={e=>setCurrency(e.target.value)} style={{ ...inputStyle, cursor:'pointer' }}>
// //               <option value="PKR (Rs.)">PKR (Rs.)</option>
// //               <option value="USD ($)">USD ($)</option>
// //               <option value="GBP (£)">GBP (£)</option>
// //             </select>
// //           </Field>
// //           <Field label="Notifications">
// //             <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
// //               <div onClick={() => setNotif(n=>!n)} style={{ width:'44px', height:'24px', borderRadius:'12px', background: notif ? 'linear-gradient(135deg,#F9A8D4,#EC4899)' : 'rgba(255,255,255,0.12)', cursor:'pointer', position:'relative', transition:'background .2s' }}>
// //                 <div style={{ position:'absolute', top:'3px', left: notif ? '23px' : '3px', width:'18px', height:'18px', borderRadius:'50%', background:'#fff', transition:'left .2s', boxShadow:'0 2px 6px rgba(0,0,0,0.2)' }}/>
// //               </div>
// //               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>New order notifications</p>
// //             </div>
// //           </Field>
// //           <button onClick={save} style={{ marginTop:'8px', padding:'12px 28px', borderRadius:'10px', border:'none', background: saved ? 'linear-gradient(135deg,#22c55e,#15803d)' : 'linear-gradient(135deg,#F9A8D4,#EC4899)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, cursor:'pointer', transition:'all .3s', boxShadow: saved ? '0 6px 20px rgba(34,197,94,0.35)' : '0 6px 20px rgba(236,72,153,0.38)' }}>
// //             {saved ? '✓ Saved!' : 'Save Changes'}
// //           </button>
// //         </div>

// //         <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
// //           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Product Summary</h4>
// //           {Object.entries(PRODUCTS).map(([cat, prods]) => (
// //             <div key={cat} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid rgba(249,168,212,0.08)' }}>
// //               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>{cat}</p>
// //               <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream }}>{prods.length} items</span>
// //             </div>
// //           ))}
// //           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0 0' }}>
// //             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, color:c.pinkMid, margin:0 }}>Total</p>
// //             <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.pink }}>{Object.values(PRODUCTS).reduce((a,b)=>a+b.length,0)}</span>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ─── Main AdminDashboard ──────────────────────────────────────────────────────

// // const AdminDashboard = () => {
// //   const [activeNav, setActiveNav] = useState('Orders');

// //   const renderView = () => {
// //     switch (activeNav) {
// //       case 'Orders':     return <OrdersView />;
// //       case 'Blueprints': return <BlueprintsView />;
// //       case 'Products':   return <ProductsView />;
// //       case 'Analytics':  return <AnalyticsView />;
// //       case 'Settings':   return <SettingsView />;
// //       default:           return <OrdersView />;
// //     }
// //   };

// //   return (
// //     <section style={{ padding:'110px 8% 120px', background:c.pageBg, position:'relative', overflow:'hidden', fontFamily:"'Montserrat',sans-serif", minHeight:'100vh' }}>
// //       {/* Background glows */}
// //       <div style={{ position:'absolute', top:'-200px', right:'-180px', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.16),transparent 65%)', pointerEvents:'none' }}/>
// //       <div style={{ position:'absolute', bottom:'-140px', left:'-120px', width:'440px', height:'440px', borderRadius:'50%', background:'radial-gradient(circle,rgba(190,24,93,0.12),transparent 65%)', pointerEvents:'none' }}/>
// //       <div style={{ position:'absolute', top:'40%', left:'50%', transform:'translate(-50%,-50%)', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle,rgba(249,168,212,0.05),transparent 65%)', pointerEvents:'none' }}/>
// //       <div style={{ position:'absolute', top:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.28),transparent)' }}/>

// //       {/* Page header */}
// //       <div style={{ position:'relative', zIndex:1, marginBottom:'48px' }}>
// //         <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
// //           <div style={{ width:'24px', height:'1.5px', background:c.pinkMid, borderRadius:'2px', opacity:0.6 }}/>
// //           <span style={{ fontSize:'9px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:c.pinkMid, opacity:0.70 }}>Admin Dashboard</span>
// //         </div>
// //         <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,3.5vw,52px)', fontWeight:700, color:c.cream, letterSpacing:'-0.02em', lineHeight:1.05 }}>
// //           Manage orders &amp;{' '}
// //           <span style={{ fontStyle:'italic', fontWeight:400, color:c.pinkMid }}>blueprints</span>
// //         </h2>
// //       </div>

// //       {/* Layout */}
// //       <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:'32px', position:'relative', zIndex:1 }}>

// //         {/* Sidebar */}
// //         <div style={{ background:c.sidebarBg, borderRadius:'20px', padding:'16px', border:`1px solid ${c.pinkBorder}`, alignSelf:'start', backdropFilter:'blur(12px)', position:'sticky', top:'24px' }}>
// //           <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px 20px', borderBottom:`1px solid ${c.pinkBorder}`, marginBottom:'12px' }}>
// //             <div style={{ width:'40px', height:'40px', borderRadius:'12px', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', boxShadow:'0 4px 12px rgba(236,72,153,0.35)' }}>🌸</div>
// //             <div>
// //               <p style={{ fontSize:'13px', fontWeight:700, color:c.white, margin:0 }}>Admin Panel</p>
// //               <p style={{ fontSize:'10px', color:c.muted, margin:0 }}>Wrapping Happiness</p>
// //             </div>
// //           </div>

// //           {NAV_ITEMS.map(item => (
// //             <button key={item.label} onClick={() => setActiveNav(item.label)} style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', padding:'13px 16px', borderRadius:'12px', border:'none', background: activeNav===item.label ? c.activeBg : 'transparent', color: activeNav===item.label ? c.cream : c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'13px', fontWeight:600, cursor:'pointer', transition:'all .2s', marginBottom:'4px', borderLeft: activeNav===item.label ? `3px solid ${c.pink}` : '3px solid transparent' }}>
// //               <span style={{ fontSize:'16px', filter: activeNav===item.label ? 'none' : 'grayscale(0.6)' }}>{item.icon}</span>
// //               {item.label}
// //               {activeNav===item.label && <div style={{ marginLeft:'auto', width:'5px', height:'5px', borderRadius:'50%', background:c.pink, boxShadow:`0 0 8px ${c.pink}` }}/>}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Content area — switches by activeNav */}
// //         <div>
// //           {renderView()}
// //         </div>
// //       </div>

// //       <div style={{ position:'absolute', bottom:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.18),transparent)' }}/>
// //     </section>
// //   );
// // };

// // export default AdminDashboard;


// import { useState, useEffect } from 'react';

// // ─── Static Data ──────────────────────────────────────────────────────────────

// const STATS = [
//   { label: 'NEW ORDERS',  value: '24',      trend: '↑ 18% today',        up: true  },
//   { label: 'REVENUE',     value: 'Rs. 58k', trend: '↑ 12% vs yesterday', up: true  },
//   { label: 'BLUEPRINTS',  value: '18',      trend: '6 pending pack',      up: null  },
//   { label: 'LOW STOCK',   value: '3',       trend: '⚠ Restock needed',   up: false },
// ];

// const ORDERS = [
//   { id: '#WH-024', customer: 'Sana Malik',  bundle: 'Pink Romance ×2',   date: 'Apr 12', total: 'Rs. 4,840', status: 'New'     },
//   { id: '#WH-023', customer: 'Fatima Raza', bundle: 'Birthday Joy',       date: 'Apr 12', total: 'Rs. 2,100', status: 'Packed'  },
//   { id: '#WH-022', customer: 'Hana Sheikh', bundle: 'Balloon Bundle',     date: 'Apr 11', total: 'Rs. 1,350', status: 'Pending' },
//   { id: '#WH-021', customer: 'Zara Ahmed',  bundle: 'Wedding Flower Box', date: 'Apr 11', total: 'Rs. 6,200', status: 'Packed'  },
//   { id: '#WH-020', customer: 'Nida Khan',   bundle: 'Blush Peony Bunch',  date: 'Apr 10', total: 'Rs. 2,200', status: 'New'     },
// ];

// const BLUEPRINTS = [
//   {
//     id: 'BP-001', name: 'Pink Romance Box', size: '12″ × 12″', complexity: 'Medium (5 items)', status: 'Active',
//     items: [
//       { label: 'Pink Roses',   x: '9%',  y: '14%' },
//       {  label: 'Blush Ribbon', x: '40%', y: '24%' },
//       { label: 'Balloons ×5',  x: '63%', y: '10%' },
//       {  label: 'Cake',         x: '26%', y: '58%' },
//       {  label: 'Card',         x: '58%', y: '56%' },
//     ],
//   },
//   {
//     id: 'BP-002', name: 'Birthday Joy Kit', size: '10″ × 10″', complexity: 'Simple (3 items)', status: 'Pending',
//     items: [
//       {  label: 'Mini Cake',    x: '15%', y: '20%' },
//       { label: 'Balloon Clstr',x: '55%', y: '15%' },
//       { label: 'Floral Spray', x: '35%', y: '55%' },
//     ],
//   },
//   {
//     id: 'BP-003', name: 'Anniversary Grand', size: '16″ × 16″', complexity: 'Complex (7 items)', status: 'Active',
//     items: [
//       {  label: 'Red Roses ×18',x: '8%',  y: '10%' },
//       {label: 'Macarons',     x: '40%', y: '8%'  },
//       {  label: 'Candle',       x: '68%', y: '14%' },
//       {  label: 'Personal Card',x: '20%', y: '52%' },
//       {  label: 'Velvet Ribbon',x: '48%', y: '58%' },
//       {  label: 'Teddy Bear',   x: '70%', y: '50%' },
//       {  label: 'Foil Balloon', x: '12%', y: '72%' },
//     ],
//   },
//   {
//     id: 'BP-004', name: 'Eid Mubarak Set',  size: '14″ × 14″', complexity: 'Medium (4 items)', status: 'Pending',
//     items: [
//       {label: 'Crescent Deco',x: '12%', y: '15%' },
//       {  label: 'Sweets Box',   x: '50%', y: '12%' },
//       { label: 'Florals',      x: '25%', y: '55%' },
//       {  label: 'Fairy Lights',  x: '62%', y: '58%' },
//     ],
//   },
// ];

// const INITIAL_PRODUCTS = {
//   'Flowers': [
//     { id: 'F001', name: 'Pink Rose Bunch', desc: 'Fresh pink roses wrapped in luxury paper', price: 2200, color: '#F9A8D4', badge: 'Bestseller', img: '' },
//     { id: 'F002', name: 'White Lily Set',  desc: 'Elegant white lilies with ribbon tie',     price: 1800, color: '#FDE4EE', badge: '',          img: '' },
//   ],
//   'Balloons': [
//     { id: 'B001', name: 'Foil Heart Set', desc: 'Gold & pink foil hearts, pack of 5',        price: 900,  color: '#FBBF24', badge: 'New',       img: '' },
//     { id: 'B002', name: 'Pastel Cluster', desc: 'Soft pastel balloon bundle, 10 pieces',     price: 650,  color: '#C4B5FD', badge: '',          img: '' },
//   ],
//   'Gift Boxes': [
//     { id: 'G001', name: 'Luxury Gift Box', desc: 'Deep maroon magnetic closure box',         price: 1500, color: '#BE185D', badge: 'Premium',   img: '' },
//     { id: 'G002', name: 'Blush Mini Box',  desc: 'Small pink kraft box with satin bow',      price: 750,  color: '#FDE4EE', badge: '',          img: '' },
//   ],
//   'Chocolates': [
//     { id: 'C001', name: 'Belgian Assorted', desc: '12-piece Belgian chocolate selection',    price: 2800, color: '#92400E', badge: 'Imported',  img: '' },
//   ],
// };

// const STATUS_STYLES = {
//   New:     { background: 'rgba(236,72,153,0.12)', color: '#BE185D', border: '1px solid rgba(236,72,153,0.25)' },
//   Packed:  { background: 'rgba(34,197,94,0.10)',  color: '#15803D', border: '1px solid rgba(34,197,94,0.22)'  },
//   Pending: { background: 'rgba(249,115,22,0.10)', color: '#C2410C', border: '1px solid rgba(249,115,22,0.22)' },
//   Active:  { background: 'rgba(34,197,94,0.10)',  color: '#15803D', border: '1px solid rgba(34,197,94,0.22)'  },
//   Draft:   { background: 'rgba(148,163,184,0.12)',color: '#94A3B8', border: '1px solid rgba(148,163,184,0.22)'},
// };

// const NAV_ITEMS = [
//   { icon: '📋', label: 'Orders'     },
//   { icon: '📐', label: 'Blueprints' },
//   { icon: '🌸', label: 'Products'   },
//   { icon: '📊', label: 'Analytics'  },
//   { icon: '⚙️', label: 'Settings'   },
// ];

// const c = {
//   pageBg:    'linear-gradient(160deg,#3A0420 0%,#5A0832 38%,#8B1050 65%,#4A0428 100%)',
//   cardBg:    'rgba(255,255,255,0.06)',
//   cardBgHov: 'rgba(255,255,255,0.10)',
//   sidebarBg: 'rgba(255,255,255,0.05)',
//   activeBg:  'rgba(249,168,212,0.14)',
//   white:     '#FFFFFF',
//   cream:     '#FDE4EE',
//   muted:     'rgba(253,228,238,0.45)',
//   faint:     'rgba(253,228,238,0.22)',
//   pink:      '#EC4899',
//   pinkMid:   '#F9A8D4',
//   pinkDark:  '#BE185D',
//   pinkBorder:'rgba(249,168,212,0.18)',
//   pinkBgSoft:'rgba(236,72,153,0.10)',
//   // Light-pink button theme (new)
//   btnBg:     '#FDE4EE',
//   btnText:   '#7C1040',
//   btnBorder: 'rgba(124,16,64,0.22)',
//   btnHov:    '#FBCFE8',
// };

// const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

// // ─── Light-Pink Button ────────────────────────────────────────────────────────

// const LightBtn = ({ children, onClick, primary = false, small = false, style: extra = {} }) => {
//   const [hov, setHov] = useState(false);
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHov(true)}
//       onMouseLeave={() => setHov(false)}
//       style={{
//         padding: small ? '7px 16px' : '11px 22px',
//         borderRadius: '10px',
//         border: primary ? 'none' : `1px solid ${c.btnBorder}`,
//         background: primary
//           ? hov ? '#F9A8D4' : '#FDE4EE'
//           : hov ? '#FDE4EE' : 'rgba(253,228,238,0.10)',
//         color: primary ? '#7C1040' : c.cream,
//         fontFamily: "'Montserrat',sans-serif",
//         fontSize: small ? '10px' : '12px',
//         fontWeight: 700,
//         cursor: 'pointer',
//         transition: 'all .18s',
//         letterSpacing: '0.4px',
//         boxShadow: primary && hov ? '0 4px 14px rgba(249,168,212,0.40)' : 'none',
//         ...extra,
//       }}
//     >
//       {children}
//     </button>
//   );
// };

// // ─── Shared Components ────────────────────────────────────────────────────────

// const StatCard = ({ stat }) => {
//   const [hovered, setHovered] = useState(false);
//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         background: hovered ? c.cardBgHov : c.cardBg,
//         borderRadius: '16px', padding: '20px 18px',
//         border: `1px solid ${c.pinkBorder}`, transition: 'all .2s',
//         boxShadow: hovered ? '0 8px 28px rgba(236,72,153,0.12)' : 'none',
//       }}
//     >
//       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'12px' }}>{stat.label}</p>
//       <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'8px' }}>{stat.value}</p>
//       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:500, color: stat.up === true ? '#86EFAC' : stat.up === false ? '#FCA5A5' : c.muted }}>{stat.trend}</p>
//     </div>
//   );
// };

// const SectionLabel = ({ children }) => (
//   <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:c.faint, marginBottom:'12px' }}>{children}</p>
// );

// const BlueprintCanvas = ({ items }) => (
//   <div style={{ background:'rgba(255,255,255,0.03)', border:'1px dashed rgba(249,168,212,0.28)', borderRadius:'12px', height:'160px', position:'relative', overflow:'hidden', flexShrink:0 }}>
//     <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(249,168,212,0.10) 1px,transparent 1px)', backgroundSize:'18px 18px', pointerEvents:'none' }}/>
//     {items.map((item, i) => (
//       <div key={i} style={{ position:'absolute', left:item.x, top:item.y, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.28)', borderRadius:'8px', padding:'5px 10px', fontSize:'9.5px', color:c.pinkMid, fontWeight:600, whiteSpace:'nowrap', cursor:'pointer', transition:'background .18s', backdropFilter:'blur(4px)' }}
//         onMouseEnter={e => e.currentTarget.style.background='rgba(249,168,212,0.24)'}
//         onMouseLeave={e => e.currentTarget.style.background='rgba(249,168,212,0.12)'}
//       >
//         <span style={{ marginRight:'6px' }}>{item.emoji}</span>{item.label}
//       </div>
//     ))}
//   </div>
// );

// // ─── Add Product Modal ────────────────────────────────────────────────────────

// const CATEGORIES = ['Flowers', 'Balloons', 'Gift Boxes', 'Chocolates', 'Candles', 'Accessories'];
// const BADGE_OPTIONS = ['', 'Bestseller', 'New', 'Premium', 'Imported', 'Limited', 'Sale'];
// const SWATCH_COLORS = ['#F9A8D4','#FDE4EE','#FBBF24','#C4B5FD','#BE185D','#92400E','#86EFAC','#7DD3FC','#FCA5A5','#D9F99D'];

// const AddProductModal = ({ onClose, onAdd, existingCategories }) => {
//   const [focused, setFocused] = useState(null);
//   const [form, setForm] = useState({
//     name: '', category: existingCategories[0] || 'Flowers', newCategory: '',
//     price: '', desc: '', badge: '', color: '#F9A8D4', img: '',
//   });
//   const [useNewCat, setUseNewCat] = useState(false);
//   const [error, setError] = useState('');

//   const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setError(''); };

//   const handleAdd = () => {
//     if (!form.name.trim()) { setError('Product name is required.'); return; }
//     if (!form.price || isNaN(form.price) || Number(form.price) <= 0) { setError('Enter a valid price.'); return; }
//     if (!form.desc.trim()) { setError('Description is required.'); return; }
//     const cat = useNewCat ? form.newCategory.trim() : form.category;
//     if (!cat) { setError('Category is required.'); return; }
//     const newProduct = {
//       id: `P${Date.now()}`,
//       name: form.name.trim(),
//       desc: form.desc.trim(),
//       price: Number(form.price),
//       color: form.color,
//       badge: form.badge,
//       img: form.img.trim(),
//     };
//     onAdd(cat, newProduct);
//     onClose();
//   };

//   const inputStyle = (field) => ({
//     width: '100%',
//     padding: '11px 14px',
//     borderRadius: '10px',
//     border: `1px solid ${focused === field ? 'rgba(249,168,212,0.60)' : c.pinkBorder}`,
//     background: focused === field ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
//     color: c.cream,
//     fontFamily: "'Montserrat',sans-serif",
//     fontSize: '12px',
//     outline: 'none',
//     boxSizing: 'border-box',
//     backdropFilter: 'blur(8px)',
//     transition: 'all .18s',
//     boxShadow: focused === field ? '0 0 0 3px rgba(249,168,212,0.10)' : 'none',
//   });

//   const labelStyle = {
//     fontFamily: "'Montserrat',sans-serif",
//     fontSize: '9px', fontWeight: 700, letterSpacing: '1.6px',
//     textTransform: 'uppercase', color: c.faint, marginBottom: '7px', display: 'block',
//   };

//   return (
//     <div style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' }}>
//       {/* Backdrop */}
//       <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(30,0,15,0.72)', backdropFilter:'blur(6px)' }}/>

//       {/* Modal */}
//       <div style={{
//         position:'relative', zIndex:1,
//         width:'560px', maxWidth:'95vw', maxHeight:'90vh', overflowY:'auto',
//         background:'linear-gradient(160deg,#3A0420 0%,#5A0832 60%,#3A0420 100%)',
//         borderRadius:'24px',
//         border:`1px solid rgba(249,168,212,0.28)`,
//         boxShadow:'0 40px 80px rgba(0,0,0,0.60)',
//         padding:'36px',
//       }}>
//         {/* Header */}
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'28px' }}>
//           <div>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, letterSpacing:'2px', textTransform:'uppercase', marginBottom:'6px' }}>Admin · Products</p>
//             <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'26px', fontWeight:700, color:c.cream, margin:0 }}>
//               Add New <span style={{ fontStyle:'italic', color:c.pinkMid }}>Product</span>
//             </h3>
//           </div>
//           <button onClick={onClose} style={{ background:'rgba(255,255,255,0.07)', border:`1px solid ${c.pinkBorder}`, borderRadius:'10px', color:c.muted, fontSize:'18px', width:'38px', height:'38px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', transition:'all .18s' }}
//             onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.13)'}
//             onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.07)'}
//           >×</button>
//         </div>

//         <div style={{ display:'flex', flexDirection:'column', gap:'18px' }}>

//           {/* Product Name */}
//           <div>
//             <label style={labelStyle}>Product Name *</label>
//             <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Blush Peony Bunch"
//               style={inputStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}/>
//           </div>

//           {/* Category */}
//           <div>
//             <label style={labelStyle}>Category *</label>
//             <div style={{ display:'flex', gap:'8px', marginBottom:'8px', flexWrap:'wrap' }}>
//               {existingCategories.map(cat => (
//                 <button key={cat} onClick={() => { setUseNewCat(false); set('category', cat); }}
//                   style={{ padding:'6px 14px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .18s',
//                     background: !useNewCat && form.category === cat ? '#FDE4EE' : 'rgba(255,255,255,0.06)',
//                     color: !useNewCat && form.category === cat ? '#7C1040' : c.muted,
//                     border: !useNewCat && form.category === cat ? 'none' : `1px solid ${c.pinkBorder}`,
//                   }}>{cat}</button>
//               ))}
//               <button onClick={() => setUseNewCat(true)}
//                 style={{ padding:'6px 14px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .18s',
//                   background: useNewCat ? '#FDE4EE' : 'rgba(255,255,255,0.06)',
//                   color: useNewCat ? '#7C1040' : c.muted,
//                   border: useNewCat ? 'none' : `1px solid ${c.pinkBorder}`,
//                 }}>+ New Category</button>
//             </div>
//             {useNewCat && (
//               <input value={form.newCategory} onChange={e => set('newCategory', e.target.value)} placeholder="New category name"
//                 style={inputStyle('newcat')} onFocus={() => setFocused('newcat')} onBlur={() => setFocused(null)}/>
//             )}
//           </div>

//           {/* Price */}
//           <div>
//             <label style={labelStyle}>Price (Rs.) *</label>
//             <input type="number" value={form.price} onChange={e => set('price', e.target.value)} placeholder="e.g. 2200"
//               style={inputStyle('price')} onFocus={() => setFocused('price')} onBlur={() => setFocused(null)}/>
//           </div>

//           {/* Description */}
//           <div>
//             <label style={labelStyle}>Description *</label>
//             <textarea value={form.desc} onChange={e => set('desc', e.target.value)} placeholder="Brief product description..."
//               rows={3}
//               style={{ ...inputStyle('desc'), resize:'vertical', lineHeight:1.5 }}
//               onFocus={() => setFocused('desc')} onBlur={() => setFocused(null)}/>
//           </div>

//           {/* Badge */}
//           <div>
//             <label style={labelStyle}>Badge (optional)</label>
//             <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
//               {BADGE_OPTIONS.map(b => (
//                 <button key={b || 'none'} onClick={() => set('badge', b)}
//                   style={{ padding:'5px 13px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .18s',
//                     background: form.badge === b ? '#FDE4EE' : 'rgba(255,255,255,0.06)',
//                     color: form.badge === b ? '#7C1040' : c.muted,
//                     border: form.badge === b ? 'none' : `1px solid ${c.pinkBorder}`,
//                   }}>{b || 'None'}</button>
//               ))}
//             </div>
//           </div>

//           {/* Color Swatch */}
//           <div>
//             <label style={labelStyle}>Card Colour</label>
//             <div style={{ display:'flex', gap:'10px', flexWrap:'wrap', alignItems:'center' }}>
//               {SWATCH_COLORS.map(col => (
//                 <div key={col} onClick={() => set('color', col)}
//                   style={{ width:'28px', height:'28px', borderRadius:'50%', background:col, cursor:'pointer', transition:'transform .18s', border: form.color === col ? '3px solid #fff' : '2px solid rgba(255,255,255,0.18)', transform: form.color === col ? 'scale(1.25)' : 'scale(1)', boxShadow: form.color === col ? '0 0 0 2px rgba(249,168,212,0.50)' : 'none' }}/>
//               ))}
//               <input type="color" value={form.color} onChange={e => set('color', e.target.value)}
//                 style={{ width:'28px', height:'28px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.18)', cursor:'pointer', padding:0, background:'transparent' }}
//                 title="Custom colour"/>
//             </div>
//           </div>

//           {/* Image URL */}
//           <div>
//             <label style={labelStyle}>Image URL (optional)</label>
//             <input value={form.img} onChange={e => set('img', e.target.value)} placeholder="https://..."
//               style={inputStyle('img')} onFocus={() => setFocused('img')} onBlur={() => setFocused(null)}/>
//           </div>

//           {/* Error */}
//           {error && (
//             <div style={{ background:'rgba(194,24,91,0.12)', border:'1px solid rgba(194,24,91,0.28)', borderRadius:'10px', padding:'11px 14px', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:'#F9A8D4' }}>
//               ⚠ {error}
//             </div>
//           )}

//           {/* Preview */}
//           <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'14px', border:`1px solid ${c.pinkBorder}`, padding:'14px', display:'flex', gap:'14px', alignItems:'center' }}>
//             <div style={{ width:'60px', height:'60px', borderRadius:'10px', background:`linear-gradient(135deg,${form.color},${form.color}99)`, flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px' }}>🌸</div>
//             <div>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream, margin:'0 0 3px' }}>{form.name || 'Product Name'}</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'0 0 5px' }}>{form.desc || 'Description will appear here'}</p>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.pink, margin:0 }}>{form.price ? fmt(form.price) : 'Rs. 0'}</p>
//             </div>
//           </div>

//           {/* Actions */}
//           <div style={{ display:'flex', gap:'12px', paddingTop:'4px' }}>
//             <LightBtn onClick={onClose} style={{ flex:1 }}>Cancel</LightBtn>
//             <button onClick={handleAdd} style={{
//               flex:2, padding:'13px', borderRadius:'10px', border:'none',
//               background:'linear-gradient(135deg,#F9A8D4,#EC4899)',
//               color:'#fff', fontFamily:"'Montserrat',sans-serif",
//               fontSize:'12px', fontWeight:700, cursor:'pointer',
//               boxShadow:'0 6px 20px rgba(236,72,153,0.38)', letterSpacing:'0.5px',
//             }}>
//               ✦ Add Product
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── VIEWS ────────────────────────────────────────────────────────────────────

// const OrdersView = () => (
//   <div>
//     <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
//       {STATS.map(s => <StatCard key={s.label} stat={s}/>)}
//     </div>

//     <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'18px' }}>
//       <div style={{ background:c.cardBg, backdropFilter:'blur(12px)', borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}`, boxShadow:'0 8px 32px rgba(0,0,0,0.18)' }}>
//         <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>Recent Orders</h4>
//           <span style={{ fontSize:'8px', padding:'4px 10px', borderRadius:'6px', background:'rgba(236,72,153,0.15)', border:'1px solid rgba(236,72,153,0.28)', color:c.pinkMid, fontWeight:700, letterSpacing:'1.5px' }}>LIVE</span>
//         </div>
//         <table style={{ width:'100%', borderCollapse:'collapse' }}>
//           <thead>
//             <tr style={{ borderBottom:`1px solid ${c.pinkBorder}` }}>
//               {['ORDER','CUSTOMER','BUNDLE','DATE','TOTAL','STATUS'].map(h => (
//                 <th key={h} style={{ padding:'0 0 14px 0', textAlign:'left', fontSize:'9px', fontWeight:700, color:c.faint, letterSpacing:'1.5px' }}>{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {ORDERS.map((o, i) => (
//               <tr key={i} style={{ borderBottom: i === ORDERS.length-1 ? 'none' : '1px solid rgba(249,168,212,0.07)' }}>
//                 <td style={{ padding:'15px 0', fontSize:'12px', color:c.white, fontWeight:700 }}>{o.id}</td>
//                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.customer}</td>
//                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.bundle}</td>
//                 <td style={{ padding:'15px 0', fontSize:'12px', color:c.faint }}>{o.date}</td>
//                 <td style={{ padding:'15px 0', fontSize:'13px', color:c.cream, fontWeight:600 }}>{o.total}</td>
//                 <td style={{ padding:'15px 0' }}>
//                   <span style={{ padding:'5px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[o.status] }}>{o.status}</span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div style={{ background:'rgba(249,168,212,0.06)', backdropFilter:'blur(12px)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column', boxShadow:'0 8px 32px rgba(0,0,0,0.18)' }}>
//         <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'18px' }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:0 }}>Active Blueprint</h4>
//           <LightBtn small>Export PDF</LightBtn>
//         </div>
//         <BlueprintCanvas items={BLUEPRINTS[0].items} />
//         <div style={{ marginTop:'18px', paddingTop:'16px', borderTop:'1px solid rgba(249,168,212,0.14)' }}>
//           <SectionLabel>Blueprint Info</SectionLabel>
//           <div style={{ display:'flex', gap:'24px' }}>
//             <div>
//               <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Canvas Size</p>
//               <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].size}</p>
//             </div>
//             <div>
//               <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Complexity</p>
//               <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].complexity}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div style={{ display:'flex', gap:'12px', marginTop:'18px', flexWrap:'wrap' }}>
//       {[
//         { label:'+ New Order',   primary: true },
//         { label:'Print Packing', primary: false },
//         { label:'Export Report', primary: false },
//         { label:'Restock Alert', primary: false },
//       ].map((btn, i) => (
//         <LightBtn key={i} primary={btn.primary}>{btn.label}</LightBtn>
//       ))}
//     </div>
//   </div>
// );

// const BlueprintsView = () => {
//   const [selected, setSelected] = useState(BLUEPRINTS[0]);
//   return (
//     <div>
//       <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px' }}>
//         <div>
//           <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Blueprint Library</h3>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>{BLUEPRINTS.length} blueprints · {BLUEPRINTS.filter(b=>b.status==='Active').length} active</p>
//         </div>
//         <LightBtn primary>+ New Blueprint</LightBtn>
//       </div>

//       <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:'20px' }}>
//         <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
//           {BLUEPRINTS.map(bp => (
//             <div key={bp.id} onClick={() => setSelected(bp)} style={{ background: selected.id===bp.id ? 'rgba(249,168,212,0.12)' : c.cardBg, borderRadius:'14px', padding:'16px 18px', border: selected.id===bp.id ? '1px solid rgba(249,168,212,0.40)' : `1px solid ${c.pinkBorder}`, cursor:'pointer', transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
//               <div>
//                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{bp.name}</p>
//                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:0 }}>{bp.id} · {bp.size} · {bp.complexity}</p>
//               </div>
//               <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'9px', fontWeight:700, flexShrink:0, ...STATUS_STYLES[bp.status] }}>{bp.status}</span>
//             </div>
//           ))}
//         </div>

//         <div style={{ background:'rgba(249,168,212,0.06)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column', gap:'18px' }}>
//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//             <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>{selected.name}</h4>
//             <div style={{ display:'flex', gap:'8px' }}>
//               <LightBtn small>Edit</LightBtn>
//               <LightBtn small>Export PDF</LightBtn>
//             </div>
//           </div>
//           <BlueprintCanvas items={selected.items} />
//           <div style={{ paddingTop:'14px', borderTop:'1px solid rgba(249,168,212,0.14)' }}>
//             <SectionLabel>Blueprint Info</SectionLabel>
//             <div style={{ display:'flex', gap:'32px' }}>
//               <div>
//                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Canvas Size</p>
//                 <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{selected.size}</p>
//               </div>
//               <div>
//                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Complexity</p>
//                 <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{selected.complexity}</p>
//               </div>
//               <div>
//                 <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Status</p>
//                 <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[selected.status] }}>{selected.status}</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <SectionLabel>Items ({selected.items.length})</SectionLabel>
//             <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
//               {selected.items.map((item, i) => (
//                 <div key={i} style={{ background:'rgba(249,168,212,0.10)', border:'1px solid rgba(249,168,212,0.22)', borderRadius:'8px', padding:'6px 12px', fontSize:'11px', color:c.pinkMid, fontWeight:600 }}>
//                   {item.emoji} {item.label}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Products View — with Add Product
// const ProductsView = ({ products, setProducts }) => {
//   const categories = Object.keys(products);
//   const [activeCat, setActiveCat] = useState(categories[0]);
//   const [search, setSearch] = useState('');
//   const [showModal, setShowModal] = useState(false);

//   const allProducts = products[activeCat] || [];
//   const filtered = allProducts.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.desc.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleAdd = (cat, newProduct) => {
//     setProducts(prev => ({
//       ...prev,
//       [cat]: [...(prev[cat] || []), newProduct],
//     }));
//     if (!categories.includes(cat)) setActiveCat(cat);
//   };

//   return (
//     <div>
//       {showModal && (
//         <AddProductModal
//           onClose={() => setShowModal(false)}
//           onAdd={handleAdd}
//           existingCategories={Object.keys(products)}
//         />
//       )}

//       {/* Header */}
//       <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'24px', flexWrap:'wrap', gap:'12px' }}>
//         <div>
//           <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Product Catalogue</h3>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>
//             {Object.values(products).reduce((a, b) => a + b.length, 0)} products across {categories.length} categories
//           </p>
//         </div>
//         <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
//           <input
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//             placeholder="Search products…"
//             style={{ padding:'10px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', outline:'none', width:'200px', backdropFilter:'blur(8px)' }}
//           />
//           <button
//             onClick={() => setShowModal(true)}
//             style={{ padding:'11px 22px', borderRadius:'10px', border:'none', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 20px rgba(236,72,153,0.38)', whiteSpace:'nowrap', letterSpacing:'0.4px' }}
//           >
//             ✦ Add Product
//           </button>
//         </div>
//       </div>

//       {/* Category tabs */}
//       <div style={{ display:'flex', gap:'8px', marginBottom:'22px', flexWrap:'wrap' }}>
//         {Object.keys(products).map(cat => (
//           <button key={cat} onClick={() => { setActiveCat(cat); setSearch(''); }}
//             style={{ padding:'8px 18px', borderRadius:'20px', border: activeCat===cat ? 'none' : `1px solid ${c.pinkBorder}`, background: activeCat===cat ? '#FDE4EE' : 'rgba(255,255,255,0.06)', color: activeCat===cat ? '#7C1040' : c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, cursor:'pointer', transition:'all .2s' }}>
//             {cat}
//             <span style={{ marginLeft:'6px', fontSize:'10px', opacity:0.7 }}>({products[cat].length})</span>
//           </button>
//         ))}
//       </div>

//       {/* Products grid */}
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'14px' }}>
//         {filtered.map(product => (
//           <div key={product.id} style={{ background:c.cardBg, borderRadius:'16px', border:`1px solid ${c.pinkBorder}`, overflow:'hidden', transition:'all .2s', cursor:'pointer' }}
//             onMouseEnter={e => { e.currentTarget.style.background=c.cardBgHov; e.currentTarget.style.boxShadow='0 8px 28px rgba(236,72,153,0.12)'; e.currentTarget.style.transform='translateY(-3px)'; }}
//             onMouseLeave={e => { e.currentTarget.style.background=c.cardBg; e.currentTarget.style.boxShadow='none'; e.currentTarget.style.transform='translateY(0)'; }}
//           >
//             <div style={{ height:'80px', background:`linear-gradient(135deg,${product.color},${product.color}99)`, position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
//               {product.img && <img src={product.img} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e => { e.target.style.display='none'; }}/>}
//               {product.badge && (
//                 <span style={{ position:'absolute', top:'8px', left:'8px', padding:'3px 10px', borderRadius:'20px', fontSize:'8px', fontWeight:700, fontStyle:'italic', background:'#FDE4EE', color:'#7C1040', letterSpacing:'1.2px', textTransform:'uppercase' }}>{product.badge}</span>
//               )}
//             </div>
//             <div style={{ padding:'14px' }}>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{product.name}</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'0 0 10px', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{product.desc}</p>
//               <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
//                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:c.pink, margin:0 }}>{fmt(product.price)}</p>
//                 <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:c.faint }}>ID #{product.id}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//         {filtered.length === 0 && (
//           <div style={{ gridColumn:'1/-1', textAlign:'center', padding:'48px', color:c.muted, fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontStyle:'italic' }}>
//             {search ? `No products found for "${search}"` : 'No products in this category yet.'}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const AnalyticsView = ({ products }) => {
//   const totalProducts = Object.values(products).reduce((a, b) => a + b.length, 0);
//   const categoryData = Object.entries(products).map(([cat, prods]) => ({
//     cat, count: prods.length, avgPrice: prods.length ? Math.round(prods.reduce((s,p)=>s+p.price,0)/prods.length) : 0,
//   }));
//   const maxCount = Math.max(...categoryData.map(d => d.count), 1);

//   return (
//     <div>
//       <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Analytics Overview</h3>
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
//         {[
//           { label:'TOTAL PRODUCTS', value: totalProducts, sub:'Across all categories' },
//           { label:'BLUEPRINTS',     value: BLUEPRINTS.length, sub:`${BLUEPRINTS.filter(b=>b.status==='Active').length} currently active` },
//           { label:'RECENT ORDERS',  value: ORDERS.length, sub:'Last recorded orders' },
//           { label:'CATEGORIES',     value: Object.keys(products).length, sub:'Product categories' },
//         ].map(k => (
//           <div key={k.label} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px 18px', border:`1px solid ${c.pinkBorder}` }}>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'10px' }}>{k.label}</p>
//             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'6px' }}>{k.value}</p>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted }}>{k.sub}</p>
//           </div>
//         ))}
//       </div>
//       <div style={{ background:c.cardBg, borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}`, marginBottom:'18px' }}>
//         <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Products by Category</h4>
//         <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
//           {categoryData.map(d => (
//             <div key={d.cat}>
//               <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
//                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:c.cream, margin:0 }}>{d.cat}</p>
//                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, margin:0 }}>{d.count} items · avg {fmt(d.avgPrice)}</p>
//               </div>
//               <div style={{ height:'8px', borderRadius:'4px', background:'rgba(255,255,255,0.06)', overflow:'hidden' }}>
//                 <div style={{ height:'100%', borderRadius:'4px', background:'linear-gradient(90deg,#F9A8D4,#EC4899)', width:`${(d.count/maxCount)*100}%`, transition:'width .6s cubic-bezier(.4,0,.2,1)' }}/>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px' }}>
//         {['New','Packed','Pending'].map(status => {
//           const count = ORDERS.filter(o=>o.status===status).length;
//           return (
//             <div key={status} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px', border:`1px solid ${c.pinkBorder}`, textAlign:'center' }}>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:700, color:c.white, margin:'0 0 6px' }}>{count}</p>
//               <span style={{ padding:'4px 14px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[status] }}>{status}</span>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'10px 0 0' }}>orders</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const SettingsView = ({ adminUser, onLogout, products }) => {
//   const [storeName, setStoreName] = useState('Wrapping Happiness');
//   const [currency, setCurrency] = useState('PKR (Rs.)');
//   const [notif, setNotif] = useState(true);
//   const [saved, setSaved] = useState(false);
//   const save = () => { setSaved(true); setTimeout(() => setSaved(false), 1800); };

//   const Field = ({ label, children }) => (
//     <div style={{ marginBottom:'20px' }}>
//       <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:c.faint, marginBottom:'8px' }}>{label}</p>
//       {children}
//     </div>
//   );
//   const inputStyle = { padding:'12px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'13px', outline:'none', width:'100%', boxSizing:'border-box', backdropFilter:'blur(8px)' };

//   return (
//     <div>
//       <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 28px' }}>Settings</h3>

//       {/* Admin info card */}
//       <div style={{ background:'rgba(249,168,212,0.08)', borderRadius:'16px', padding:'18px 22px', border:'1px solid rgba(249,168,212,0.22)', marginBottom:'24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
//         <div style={{ display:'flex', alignItems:'center', gap:'14px' }}>
//           <div style={{ width:'44px', height:'44px', borderRadius:'12px', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'20px' }}>👑</div>
//           <div>
//             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:c.cream, margin:'0 0 2px' }}>{adminUser?.name || 'Admin'}</p>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:0 }}>{adminUser?.email} · <span style={{ color:'#86EFAC' }}>● Admin role</span></p>
//           </div>
//         </div>
//         <button onClick={onLogout} style={{ padding:'9px 20px', borderRadius:'10px', border:'1px solid rgba(249,168,212,0.28)', background:'rgba(255,255,255,0.05)', color:c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, cursor:'pointer', transition:'all .18s' }}
//           onMouseEnter={e => { e.currentTarget.style.background='rgba(253,228,238,0.12)'; e.currentTarget.style.color=c.cream; }}
//           onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.color=c.muted; }}
//         >Sign Out</button>
//       </div>

//       <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
//         <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Store Settings</h4>
//           <Field label="Store Name">
//             <input value={storeName} onChange={e=>setStoreName(e.target.value)} style={inputStyle}/>
//           </Field>
//           <Field label="Currency">
//             <select value={currency} onChange={e=>setCurrency(e.target.value)} style={{ ...inputStyle, cursor:'pointer' }}>
//               <option value="PKR (Rs.)">PKR (Rs.)</option>
//               <option value="USD ($)">USD ($)</option>
//               <option value="GBP (£)">GBP (£)</option>
//             </select>
//           </Field>
//           <Field label="Notifications">
//             <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
//               <div onClick={() => setNotif(n=>!n)} style={{ width:'44px', height:'24px', borderRadius:'12px', background: notif ? '#FDE4EE' : 'rgba(255,255,255,0.12)', cursor:'pointer', position:'relative', transition:'background .2s' }}>
//                 <div style={{ position:'absolute', top:'3px', left: notif ? '23px' : '3px', width:'18px', height:'18px', borderRadius:'50%', background: notif ? '#7C1040' : '#fff', transition:'left .2s', boxShadow:'0 2px 6px rgba(0,0,0,0.2)' }}/>
//               </div>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>New order notifications</p>
//             </div>
//           </Field>
//           <button onClick={save} style={{ marginTop:'8px', padding:'12px 28px', borderRadius:'10px', border:'none', background: saved ? 'linear-gradient(135deg,#22c55e,#15803d)' : '#FDE4EE', color: saved ? '#fff' : '#7C1040', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, cursor:'pointer', transition:'all .3s', boxShadow: saved ? '0 6px 20px rgba(34,197,94,0.35)' : '0 4px 14px rgba(249,168,212,0.30)' }}>
//             {saved ? '✓ Saved!' : 'Save Changes'}
//           </button>
//         </div>

//         <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Product Summary</h4>
//           {Object.entries(products).map(([cat, prods]) => (
//             <div key={cat} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 0', borderBottom:'1px solid rgba(249,168,212,0.08)' }}>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>{cat}</p>
//               <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream }}>{prods.length} items</span>
//             </div>
//           ))}
//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0 0' }}>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, color:c.pinkMid, margin:0 }}>Total</p>
//             <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.pink }}>{Object.values(products).reduce((a,b)=>a+b.length,0)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── Admin Login Gate ─────────────────────────────────────────────────────────

// const FloralMark = () => (
//   <svg width="48" height="48" viewBox="0 0 56 56" fill="none">
//     <circle cx="28" cy="28" r="26" stroke="rgba(240,180,200,0.35)" strokeWidth="0.75"/>
//     <path d="M28 8 C20 8 12 16 12 28 C12 40 20 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
//     <path d="M28 8 C36 8 44 16 44 28 C44 40 36 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
//     <path d="M8 28 L48 28" stroke="rgba(240,180,200,0.25)" strokeWidth="0.75"/>
//     <circle cx="28" cy="28" r="4" fill="rgba(240,180,200,0.40)"/>
//     <circle cx="28" cy="28" r="1.5" fill="rgba(255,255,255,0.70)"/>
//   </svg>
// );

// const AdminLoginGate = ({ onLoginSuccess }) => {
//   const [focused, setFocused]   = useState(null);
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading]   = useState(false);
//   const [error, setError]       = useState('');
//   const [form, setForm]         = useState({ email: '', password: '' });

//   const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setError(''); };

//   const handleLogin = async () => {
//     if (!form.email || !form.password) { setError('Please enter your email and password.'); return; }
//     setLoading(true);
//     setError('');
//     try {
//       const res = await fetch('http://localhost:5000/api/users/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: form.email, password: form.password }),
//       });
//       const data = await res.json();
//       if (!res.ok) { setError(data.message || 'Login failed.'); return; }
//       if (data.user?.role !== 'admin') {
//         setError('Access denied. This portal is for admins only.');
//         return;
//       }
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       onLoginSuccess(data.user);
//     } catch {
//       setError('Unable to connect to server. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputStyle = (field) => ({
//     width: '100%', padding: '13px 16px 13px 48px',
//     borderRadius: '10px',
//     border: `1px solid ${focused === field ? 'rgba(124,16,64,0.55)' : 'rgba(124,16,64,0.18)'}`,
//     background: focused === field ? '#FFF5F8' : '#FDF0F4',
//     color: '#1C0A10', fontFamily: "'Montserrat',sans-serif", fontSize: '13px',
//     outline: 'none', boxSizing: 'border-box',
//     boxShadow: focused === field ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none',
//     transition: 'all .18s',
//   });

//   return (
//     <div style={{ minHeight:'100vh', display:'grid', gridTemplateColumns:'1fr 1.15fr', fontFamily:"'Montserrat',sans-serif" }}>

//       {/* Left — dark brand panel */}
//       <div style={{ background:'linear-gradient(160deg,#4A0A1E 0%,#7C1040 55%,#5C0A2A 100%)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'80px 64px', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,192,212,0.06) 1px,transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', top:'-80px', right:'-80px', width:'350px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle,rgba(255,192,212,0.10),transparent 70%)', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'320px', height:'320px', borderRadius:'50%', background:'radial-gradient(circle,rgba(255,150,180,0.08),transparent 70%)', pointerEvents:'none' }}/>
//         <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,192,212,0.50),transparent)' }}/>

//         <div style={{ position:'relative', zIndex:1 }}>
//           <div style={{ display:'flex', justifyContent:'center', marginBottom:'28px' }}><FloralMark/></div>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'4px', color:'rgba(255,210,225,0.60)', marginBottom:'20px', textTransform:'uppercase' }}>Admin Portal · Wrapping Happiness</p>
//           <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:700, lineHeight:0.96, color:'#FFF0F5', marginBottom:'8px' }}>Admin</h1>
//           <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:400, fontStyle:'italic', color:'rgba(255,192,212,0.85)', marginBottom:'36px' }}>Dashboard</h1>
//           <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontStyle:'italic', color:'rgba(255,210,225,0.65)', lineHeight:1.7, maxWidth:'280px' }}>
//             "Manage orders, blueprints, and products — all in one place."
//           </p>
//           <div style={{ marginTop:'48px', display:'flex', flexDirection:'column', gap:'12px' }}>
//             {[{ icon:'📋', text:'Order Management' },{ icon:'📐', text:'Blueprint Library' },{ icon:'🌸', text:'Product Catalogue' }].map((f,i) => (
//               <div key={i} style={{ display:'flex', alignItems:'center', gap:'12px', background:'rgba(255,255,255,0.06)', borderRadius:'10px', padding:'12px 18px', border:'1px solid rgba(249,168,212,0.14)' }}>
//                 <span style={{ fontSize:'16px' }}>{f.icon}</span>
//                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,210,225,0.70)', margin:0, fontWeight:500 }}>{f.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right — login form */}
//       <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'60px 10%', background:'linear-gradient(160deg,#FDF0F4 0%,#FAE4EC 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', bottom:'-40px', right:'-40px', opacity:0.06, pointerEvents:'none' }}>
//           <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
//             <circle cx="160" cy="160" r="150" stroke="#C2185B" strokeWidth="1"/>
//             <circle cx="160" cy="160" r="110" stroke="#C2185B" strokeWidth="0.5"/>
//             <circle cx="160" cy="160" r="70"  stroke="#C2185B" strokeWidth="0.5"/>
//           </svg>
//         </div>

//         <div style={{ width:'100%', maxWidth:'420px', position:'relative', zIndex:1 }}>
//           <div style={{ marginBottom:'40px' }}>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'3px', color:'#C2185B', marginBottom:'14px', textTransform:'uppercase' }}>✦ &nbsp; Admin Access Only</p>
//             <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:700, color:'#1C0A10', lineHeight:1, marginBottom:'4px' }}>Sign in to your</h2>
//             <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:400, fontStyle:'italic', color:'#C2185B', lineHeight:1, marginBottom:'24px' }}>admin panel</h2>
//             <svg width="80" height="14" viewBox="0 0 80 14" fill="none">
//               <line x1="0" y1="7" x2="28" y2="7" stroke="rgba(194,24,91,0.22)" strokeWidth="0.75"/>
//               <circle cx="40" cy="7" r="4" stroke="rgba(194,24,91,0.22)" strokeWidth="0.75" fill="none"/>
//               <circle cx="40" cy="7" r="1.5" fill="rgba(194,24,91,0.22)"/>
//               <line x1="52" y1="7" x2="80" y2="7" stroke="rgba(194,24,91,0.22)" strokeWidth="0.75"/>
//             </svg>
//           </div>

//           {/* Role badge */}
//           <div style={{ display:'flex', alignItems:'center', gap:'10px', background:'rgba(124,16,64,0.08)', border:'1px solid rgba(124,16,64,0.16)', borderRadius:'10px', padding:'12px 16px', marginBottom:'24px' }}>
//             <span style={{ fontSize:'18px' }}>👑</span>
//             <div>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, color:'#7C1040', margin:0 }}>Administrator Login</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:'rgba(124,16,64,0.55)', margin:0 }}>Only accounts with admin role can access this panel</p>
//             </div>
//           </div>

//           {error && (
//             <div style={{ background:'rgba(194,24,91,0.08)', border:'1px solid rgba(194,24,91,0.22)', borderRadius:'10px', padding:'12px 16px', marginBottom:'18px', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:'#C2185B' }}>
//               ⚠ {error}
//             </div>
//           )}

//           <div style={{ display:'flex', flexDirection:'column', gap:'14px', marginBottom:'24px' }}>
//             <div style={{ position:'relative' }}>
//               <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', fontSize:'14px', pointerEvents:'none' }}>✉</span>
//               <input type="email" placeholder="Admin Email" value={form.email} onChange={e => set('email', e.target.value)}
//                 style={inputStyle('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
//                 onKeyDown={e => e.key === 'Enter' && handleLogin()}/>
//             </div>
//             <div style={{ position:'relative' }}>
//               <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', fontSize:'14px', pointerEvents:'none' }}>🔒</span>
//               <input type={showPass ? 'text' : 'password'} placeholder="Password" value={form.password} onChange={e => set('password', e.target.value)}
//                 style={{ ...inputStyle('pass'), paddingRight:'56px' }}
//                 onFocus={() => setFocused('pass')} onBlur={() => setFocused(null)}
//                 onKeyDown={e => e.key === 'Enter' && handleLogin()}/>
//               <button onClick={() => setShowPass(s => !s)} style={{ position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:600, color:'rgba(194,24,91,0.45)' }}>{showPass ? 'Hide' : 'Show'}</button>
//             </div>
//           </div>

//           <button onClick={handleLogin} disabled={loading}
//             style={{ width:'100%', padding:'17px', borderRadius:'10px', border:'none', background: loading ? 'rgba(124,16,64,0.50)' : 'linear-gradient(135deg,#7C1040 0%,#AD1457 100%)', color:'#FFF0F5', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', cursor: loading ? 'not-allowed' : 'pointer', boxShadow:'0 10px 32px rgba(124,16,64,0.28)', transition:'all .22s', marginBottom:'16px' }}>
//             {loading ? 'Verifying…' : 'Enter Admin Panel ✦'}
//           </button>

//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', textAlign:'center', color:'rgba(124,16,64,0.45)', lineHeight:1.6 }}>
//             This portal is restricted to authorised administrators.<br/>Unauthorised access attempts are logged.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── Main AdminDashboard ──────────────────────────────────────────────────────

// const AdminDashboard = () => {
//   const [activeNav, setActiveNav]   = useState('Orders');
//   const [adminUser, setAdminUser]   = useState(null);
//   const [products, setProducts]     = useState(INITIAL_PRODUCTS);
//   const [authChecked, setAuthChecked] = useState(false);

//   // Check localStorage on mount (so page refresh keeps session)
//   useEffect(() => {
//     try {
//       const stored = localStorage.getItem('user');
//       const token  = localStorage.getItem('token');
//       if (stored && token) {
//         const user = JSON.parse(stored);
//         if (user.role === 'admin') setAdminUser(user);
//       }
//     } catch {}
//     setAuthChecked(true);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     setAdminUser(null);
//   };

//   if (!authChecked) return null; // brief flash prevention

//   if (!adminUser) {
//     return <AdminLoginGate onLoginSuccess={(user) => setAdminUser(user)} />;
//   }

//   const renderView = () => {
//     switch (activeNav) {
//       case 'Orders':     return <OrdersView />;
//       case 'Blueprints': return <BlueprintsView />;
//       case 'Products':   return <ProductsView products={products} setProducts={setProducts} />;
//       case 'Analytics':  return <AnalyticsView products={products} />;
//       case 'Settings':   return <SettingsView adminUser={adminUser} onLogout={handleLogout} products={products} />;
//       default:           return <OrdersView />;
//     }
//   };

//   return (
//     <section style={{ padding:'110px 8% 120px', background:c.pageBg, position:'relative', overflow:'hidden', fontFamily:"'Montserrat',sans-serif", minHeight:'100vh' }}>
//       {/* Background glows */}
//       <div style={{ position:'absolute', top:'-200px', right:'-180px', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.16),transparent 65%)', pointerEvents:'none' }}/>
//       <div style={{ position:'absolute', bottom:'-140px', left:'-120px', width:'440px', height:'440px', borderRadius:'50%', background:'radial-gradient(circle,rgba(190,24,93,0.12),transparent 65%)', pointerEvents:'none' }}/>
//       <div style={{ position:'absolute', top:'40%', left:'50%', transform:'translate(-50%,-50%)', width:'700px', height:'700px', borderRadius:'50%', background:'radial-gradient(circle,rgba(249,168,212,0.05),transparent 65%)', pointerEvents:'none' }}/>
//       <div style={{ position:'absolute', top:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.28),transparent)' }}/>

//       {/* Page header */}
//       <div style={{ position:'relative', zIndex:1, marginBottom:'48px' }}>
//         <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
//           <div style={{ width:'24px', height:'1.5px', background:c.pinkMid, borderRadius:'2px', opacity:0.6 }}/>
//           <span style={{ fontSize:'9px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:c.pinkMid, opacity:0.70 }}>Admin Dashboard</span>
//         </div>
//         <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,3.5vw,52px)', fontWeight:700, color:c.cream, letterSpacing:'-0.02em', lineHeight:1.05 }}>
//           Manage orders &amp;{' '}
//           <span style={{ fontStyle:'italic', fontWeight:400, color:c.pinkMid }}>blueprints</span>
//         </h2>
//       </div>

//       {/* Layout */}
//       <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:'32px', position:'relative', zIndex:1 }}>
//         {/* Sidebar */}
//         <div style={{ background:c.sidebarBg, borderRadius:'20px', padding:'16px', border:`1px solid ${c.pinkBorder}`, alignSelf:'start', backdropFilter:'blur(12px)', position:'sticky', top:'24px' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px 20px', borderBottom:`1px solid ${c.pinkBorder}`, marginBottom:'12px' }}>
//             <div style={{ width:'40px', height:'40px', borderRadius:'12px', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px', boxShadow:'0 4px 12px rgba(236,72,153,0.35)' }}>🌸</div>
//             <div>
//               <p style={{ fontSize:'13px', fontWeight:700, color:c.white, margin:0 }}>Admin Panel</p>
//               <p style={{ fontSize:'10px', color:c.muted, margin:0 }}>Wrapping Happiness</p>
//             </div>
//           </div>

//           {NAV_ITEMS.map(item => (
//             <button key={item.label} onClick={() => setActiveNav(item.label)} style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', padding:'13px 16px', borderRadius:'12px', border:'none', background: activeNav===item.label ? c.activeBg : 'transparent', color: activeNav===item.label ? c.cream : c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'13px', fontWeight:600, cursor:'pointer', transition:'all .2s', marginBottom:'4px', borderLeft: activeNav===item.label ? `3px solid ${c.pink}` : '3px solid transparent' }}>
//               <span style={{ fontSize:'16px', filter: activeNav===item.label ? 'none' : 'grayscale(0.6)' }}>{item.icon}</span>
//               {item.label}
//               {activeNav===item.label && <div style={{ marginLeft:'auto', width:'5px', height:'5px', borderRadius:'50%', background:c.pink, boxShadow:`0 0 8px ${c.pink}` }}/>}
//             </button>
//           ))}

//           {/* Sidebar logout */}
//           <div style={{ paddingTop:'12px', marginTop:'8px', borderTop:`1px solid ${c.pinkBorder}` }}>
//             <button onClick={handleLogout} style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', padding:'11px 16px', borderRadius:'12px', border:'none', background:'transparent', color:c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, cursor:'pointer', transition:'all .18s' }}
//               onMouseEnter={e => { e.currentTarget.style.background='rgba(249,168,212,0.08)'; e.currentTarget.style.color=c.cream; }}
//               onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color=c.muted; }}>
//               <span>🚪</span> Sign Out
//             </button>
//           </div>
//         </div>

//         {/* Content area */}
//         <div>{renderView()}</div>
//       </div>

//       <div style={{ position:'absolute', bottom:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.18),transparent)' }}/>
//     </section>
//   );
// };

// export default AdminDashboard;





// ─── AdminDashboard.jsx ───────────────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { PRODUCTS as IMPORTED_PRODUCTS } from './ProductGallery';

// ─── Colour tokens ────────────────────────────────────────────────────────────
const c = {
  pageBg:     'linear-gradient(160deg,#3A0420 0%,#5A0832 38%,#8B1050 65%,#4A0428 100%)',
  cardBg:     'rgba(255,255,255,0.06)',
  cardBgHov:  'rgba(255,255,255,0.10)',
  sidebarBg:  'rgba(255,255,255,0.05)',
  activeBg:   'rgba(249,168,212,0.14)',
  white:      '#FFFFFF',
  cream:      '#FDE4EE',
  muted:      'rgba(253,228,238,0.45)',
  faint:      'rgba(253,228,238,0.22)',
  pink:       '#EC4899',
  pinkMid:    '#F9A8D4',
  pinkBorder: 'rgba(249,168,212,0.18)',
  // Light-pink button theme
  btnBg:      '#FDE4EE',
  btnText:    '#7C1040',
  btnHov:     '#FBCFE8',
};

const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

// ─── Static data ──────────────────────────────────────────────────────────────
const STATS = [
  { label: 'NEW ORDERS',  value: '24',      trend: '↑ 18% today',        up: true  },
  { label: 'REVENUE',     value: 'Rs. 58k', trend: '↑ 12% vs yesterday', up: true  },
  { label: 'BLUEPRINTS',  value: '18',      trend: '6 pending pack',      up: null  },
  { label: 'LOW STOCK',   value: '3',       trend: '⚠ Restock needed',   up: false },
];

const ORDERS = [
  { id: '#WH-024', customer: 'Sana Malik',  bundle: 'Pink Romance ×2',   date: 'Apr 12', total: 'Rs. 4,840', status: 'New'     },
  { id: '#WH-023', customer: 'Fatima Raza', bundle: 'Birthday Joy',       date: 'Apr 12', total: 'Rs. 2,100', status: 'Packed'  },
  { id: '#WH-022', customer: 'Hana Sheikh', bundle: 'Balloon Bundle',     date: 'Apr 11', total: 'Rs. 1,350', status: 'Pending' },
  { id: '#WH-021', customer: 'Zara Ahmed',  bundle: 'Wedding Flower Box', date: 'Apr 11', total: 'Rs. 6,200', status: 'Packed'  },
  { id: '#WH-020', customer: 'Nida Khan',   bundle: 'Blush Peony Bunch',  date: 'Apr 10', total: 'Rs. 2,200', status: 'New'     },
];

const BLUEPRINTS = [
  { id:'BP-001', name:'Pink Romance Box',   size:'12″ × 12″', complexity:'Medium (5 items)', status:'Active',
    items:[{emoji:'🌸',label:'Pink Roses',x:'9%',y:'14%'},{emoji:'🎀',label:'Blush Ribbon',x:'40%',y:'24%'},{emoji:'🎈',label:'Balloons ×5',x:'63%',y:'10%'},{emoji:'🎂',label:'Cake',x:'26%',y:'58%'},{emoji:'💌',label:'Card',x:'58%',y:'56%'}] },
  { id:'BP-002', name:'Birthday Joy Kit',   size:'10″ × 10″', complexity:'Simple (3 items)', status:'Pending',
    items:[{emoji:'🎂',label:'Mini Cake',x:'15%',y:'20%'},{emoji:'🎈',label:'Balloon Clstr',x:'55%',y:'15%'},{emoji:'🌸',label:'Floral Spray',x:'35%',y:'55%'}] },
  { id:'BP-003', name:'Anniversary Grand', size:'16″ × 16″', complexity:'Complex (7 items)', status:'Active',
    items:[{emoji:'🌹',label:'Red Roses ×18',x:'8%',y:'10%'},{emoji:'🍫',label:'Macarons',x:'40%',y:'8%'},{emoji:'🕯️',label:'Candle',x:'68%',y:'14%'},{emoji:'💌',label:'Personal Card',x:'20%',y:'52%'},{emoji:'🎀',label:'Velvet Ribbon',x:'48%',y:'58%'},{emoji:'🧸',label:'Teddy Bear',x:'70%',y:'50%'},{emoji:'🎈',label:'Foil Balloon',x:'12%',y:'72%'}] },
  { id:'BP-004', name:'Eid Mubarak Set',   size:'14″ × 14″', complexity:'Medium (4 items)', status:'Pending',
    items:[{emoji:'🌙',label:'Crescent Deco',x:'12%',y:'15%'},{emoji:'🍬',label:'Sweets Box',x:'50%',y:'12%'},{emoji:'🌸',label:'Florals',x:'25%',y:'55%'},{emoji:'✨',label:'Fairy Lights',x:'62%',y:'58%'}] },
];

const STATUS_STYLES = {
  New:     { background:'rgba(236,72,153,0.12)',  color:'#BE185D', border:'1px solid rgba(236,72,153,0.25)' },
  Packed:  { background:'rgba(34,197,94,0.10)',   color:'#15803D', border:'1px solid rgba(34,197,94,0.22)'  },
  Pending: { background:'rgba(249,115,22,0.10)',  color:'#C2410C', border:'1px solid rgba(249,115,22,0.22)' },
  Active:  { background:'rgba(34,197,94,0.10)',   color:'#15803D', border:'1px solid rgba(34,197,94,0.22)'  },
  Draft:   { background:'rgba(148,163,184,0.12)', color:'#94A3B8', border:'1px solid rgba(148,163,184,0.22)'},
};

const NAV_ITEMS = [
  { icon:'📋', label:'Orders'     },
  { icon:'📐', label:'Blueprints' },
  { icon:'🌸', label:'Products'   },
  { icon:'📊', label:'Analytics'  },
  { icon:'⚙️', label:'Settings'   },
];

const BADGE_OPTIONS  = ['', 'Bestseller', 'New', 'Popular', 'Luxury', 'Trending', 'Seasonal', 'Custom'];
const SWATCH_COLORS  = ['#F9D0E0','#FADADD','#FDE8D0','#EDD8F5','#D8EDF5','#F5EDD0','#D8EDD8','#F9A8D4'];

// ─── Reusable light-pink button ───────────────────────────────────────────────
const Btn = ({ children, onClick, accent = false, small = false, style: sx = {} }) => {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding:     small ? '6px 14px' : '10px 20px',
        borderRadius: '10px',
        border:       accent ? 'none' : `1px solid rgba(124,16,64,0.20)`,
        background:   accent
          ? (hov ? '#FBCFE8' : '#FDE4EE')
          : (hov ? '#FDE4EE' : 'rgba(253,228,238,0.08)'),
        color:        accent ? '#7C1040' : c.cream,
        fontFamily:   "'Montserrat',sans-serif",
        fontSize:     small ? '10px' : '12px',
        fontWeight:   700,
        cursor:       'pointer',
        transition:   'all .18s',
        letterSpacing:'0.3px',
        whiteSpace:   'nowrap',
        ...sx,
      }}
    >{children}</button>
  );
};

// ─── Shared small components ──────────────────────────────────────────────────
const Label = ({ children }) => (
  <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase', color:c.faint, marginBottom:'10px' }}>{children}</p>
);

const StatCard = ({ stat }) => {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: hov ? c.cardBgHov : c.cardBg, borderRadius:'16px', padding:'20px 18px', border:`1px solid ${c.pinkBorder}`, transition:'all .2s', boxShadow: hov ? '0 8px 28px rgba(236,72,153,0.12)' : 'none' }}>
      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'12px' }}>{stat.label}</p>
      <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'32px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'8px' }}>{stat.value}</p>
      <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:500, color: stat.up === true ? '#86EFAC' : stat.up === false ? '#FCA5A5' : c.muted }}>{stat.trend}</p>
    </div>
  );
};

const BlueprintCanvas = ({ items }) => (
  <div style={{ background:'rgba(255,255,255,0.03)', border:'1px dashed rgba(249,168,212,0.28)', borderRadius:'12px', height:'160px', position:'relative', overflow:'hidden' }}>
    <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(249,168,212,0.10) 1px,transparent 1px)', backgroundSize:'18px 18px', pointerEvents:'none' }}/>
    {items.map((item, i) => (
      <div key={i} style={{ position:'absolute', left:item.x, top:item.y, background:'rgba(249,168,212,0.12)', border:'1px solid rgba(249,168,212,0.28)', borderRadius:'8px', padding:'5px 10px', fontSize:'9.5px', color:c.pinkMid, fontWeight:600, whiteSpace:'nowrap', backdropFilter:'blur(4px)' }}
        onMouseEnter={e => e.currentTarget.style.background='rgba(249,168,212,0.24)'}
        onMouseLeave={e => e.currentTarget.style.background='rgba(249,168,212,0.12)'}>
        {item.emoji} {item.label}
      </div>
    ))}
  </div>
);

// ─── Add Product modal ────────────────────────────────────────────────────────
const AddProductModal = ({ onClose, onAdd, existingCategories }) => {
  const [form, setForm]     = useState({ name:'', category: existingCategories[0], newCategory:'', price:'', desc:'', badge:'', color:'#F9D0E0', img:'' });
  const [useNew, setUseNew] = useState(false);
  const [focused, setFoc]   = useState(null);
  const [error, setError]   = useState('');

  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setError(''); };

  const inputSty = (f) => ({
    width:'100%', padding:'11px 14px', borderRadius:'10px', boxSizing:'border-box',
    border:`1px solid ${focused === f ? 'rgba(249,168,212,0.60)' : c.pinkBorder}`,
    background: focused === f ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)',
    color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'12px',
    outline:'none', transition:'all .18s',
  });

  const fieldLabel = { fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'1.6px', textTransform:'uppercase', color:c.faint, marginBottom:'7px', display:'block' };

  const handleAdd = () => {
    if (!form.name.trim())                         { setError('Product name is required.');        return; }
    if (!form.price || Number(form.price) <= 0)    { setError('Enter a valid price.');             return; }
    if (!form.desc.trim())                         { setError('Description is required.');         return; }
    const cat = useNew ? form.newCategory.trim() : form.category;
    if (!cat)                                      { setError('Choose or create a category.');     return; }

    onAdd(cat, { id:`P${Date.now()}`, name:form.name.trim(), desc:form.desc.trim(), price:Number(form.price), color:form.color, badge:form.badge, img:form.img.trim() });
    onClose();
  };

  return (
    <div style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' }}>
      {/* Backdrop */}
      <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(30,0,15,0.75)', backdropFilter:'blur(6px)' }}/>

      {/* Panel */}
      <div style={{ position:'relative', zIndex:1, width:'540px', maxWidth:'95vw', maxHeight:'90vh', overflowY:'auto', background:'linear-gradient(160deg,#3A0420,#5A0832)', borderRadius:'24px', border:'1px solid rgba(249,168,212,0.28)', boxShadow:'0 40px 80px rgba(0,0,0,0.60)', padding:'32px' }}>

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px' }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'24px', fontWeight:700, color:c.cream, margin:0 }}>
            Add New <span style={{ fontStyle:'italic', color:c.pinkMid }}>Product</span>
          </h3>
          <button onClick={onClose} style={{ width:'34px', height:'34px', borderRadius:'8px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.muted, fontSize:'18px', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>

          {/* Name */}
          <div>
            <label style={fieldLabel}>Product Name *</label>
            <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Blush Peony Bunch" style={inputSty('name')} onFocus={() => setFoc('name')} onBlur={() => setFoc(null)}/>
          </div>

          {/* Category */}
          <div>
            <label style={fieldLabel}>Category *</label>
            <div style={{ display:'flex', gap:'7px', flexWrap:'wrap', marginBottom: useNew ? '8px' : 0 }}>
              {existingCategories.map(cat => (
                <button key={cat} onClick={() => { setUseNew(false); set('category', cat); }}
                  style={{ padding:'5px 13px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .15s', background: !useNew && form.category === cat ? '#FDE4EE' : 'rgba(255,255,255,0.06)', color: !useNew && form.category === cat ? '#7C1040' : c.muted, border: !useNew && form.category === cat ? 'none' : `1px solid ${c.pinkBorder}` }}>{cat}</button>
              ))}
              <button onClick={() => setUseNew(true)}
                style={{ padding:'5px 13px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .15s', background: useNew ? '#FDE4EE' : 'rgba(255,255,255,0.06)', color: useNew ? '#7C1040' : c.muted, border: useNew ? 'none' : `1px solid ${c.pinkBorder}` }}>+ New</button>
            </div>
            {useNew && <input value={form.newCategory} onChange={e => set('newCategory', e.target.value)} placeholder="New category name" style={inputSty('newcat')} onFocus={() => setFoc('newcat')} onBlur={() => setFoc(null)}/>}
          </div>

          {/* Price */}
          <div>
            <label style={fieldLabel}>Price (Rs.) *</label>
            <input type="number" value={form.price} onChange={e => set('price', e.target.value)} placeholder="e.g. 2400" style={inputSty('price')} onFocus={() => setFoc('price')} onBlur={() => setFoc(null)}/>
          </div>

          {/* Description */}
          <div>
            <label style={fieldLabel}>Description *</label>
            <textarea value={form.desc} onChange={e => set('desc', e.target.value)} placeholder="Short product description..." rows={3}
              style={{ ...inputSty('desc'), resize:'vertical', lineHeight:1.6 }} onFocus={() => setFoc('desc')} onBlur={() => setFoc(null)}/>
          </div>

          {/* Badge */}
          <div>
            <label style={fieldLabel}>Badge (optional)</label>
            <div style={{ display:'flex', gap:'7px', flexWrap:'wrap' }}>
              {BADGE_OPTIONS.map(b => (
                <button key={b || 'none'} onClick={() => set('badge', b)}
                  style={{ padding:'5px 13px', borderRadius:'20px', fontSize:'10px', fontWeight:700, cursor:'pointer', fontFamily:"'Montserrat',sans-serif", transition:'all .15s', background: form.badge === b ? '#FDE4EE' : 'rgba(255,255,255,0.06)', color: form.badge === b ? '#7C1040' : c.muted, border: form.badge === b ? 'none' : `1px solid ${c.pinkBorder}` }}>{b || 'None'}</button>
              ))}
            </div>
          </div>

          {/* Colour */}
          <div>
            <label style={fieldLabel}>Card Colour</label>
            <div style={{ display:'flex', gap:'10px', alignItems:'center', flexWrap:'wrap' }}>
              {SWATCH_COLORS.map(col => (
                <div key={col} onClick={() => set('color', col)}
                  style={{ width:'26px', height:'26px', borderRadius:'50%', background:col, cursor:'pointer', transition:'transform .15s', border: form.color === col ? '3px solid #fff' : '2px solid rgba(255,255,255,0.18)', transform: form.color === col ? 'scale(1.25)' : 'scale(1)' }}/>
              ))}
              <input type="color" value={form.color} onChange={e => set('color', e.target.value)}
                style={{ width:'26px', height:'26px', borderRadius:'50%', border:'2px solid rgba(255,255,255,0.18)', cursor:'pointer', padding:0, background:'transparent' }}/>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label style={fieldLabel}>Image URL (optional)</label>
            <input value={form.img} onChange={e => set('img', e.target.value)} placeholder="/img/bouquet-1.jpg or https://..." style={inputSty('img')} onFocus={() => setFoc('img')} onBlur={() => setFoc(null)}/>
          </div>

          {/* Live preview */}
          <div style={{ background:'rgba(255,255,255,0.04)', borderRadius:'12px', border:`1px solid ${c.pinkBorder}`, padding:'12px', display:'flex', gap:'12px', alignItems:'center' }}>
            <div style={{ width:'56px', height:'56px', borderRadius:'10px', background:`linear-gradient(135deg,${form.color},${form.color}99)`, flexShrink:0 }}/>
            <div>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontWeight:700, color:c.cream, margin:'0 0 3px' }}>{form.name || 'Product Name'}</p>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'0 0 4px' }}>{form.desc || 'Description here'}</p>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'15px', fontWeight:700, color:c.pink, margin:0 }}>{form.price ? fmt(form.price) : 'Rs. 0'}</p>
            </div>
          </div>

          {/* Error */}
          {error && <div style={{ background:'rgba(194,24,91,0.10)', border:'1px solid rgba(194,24,91,0.28)', borderRadius:'10px', padding:'10px 14px', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:'#F9A8D4' }}>⚠ {error}</div>}

          {/* Actions */}
          <div style={{ display:'flex', gap:'10px', paddingTop:'4px' }}>
            <Btn onClick={onClose} sx={{ flex:1 }}>Cancel</Btn>
            <button onClick={handleAdd} style={{ flex:2, padding:'12px', borderRadius:'10px', border:'none', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 20px rgba(236,72,153,0.38)' }}>
              ✦ Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── ORDERS VIEW ──────────────────────────────────────────────────────────────
const OrdersView = () => (
  <div>
    {/* Stat cards */}
    <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
      {STATS.map(s => <StatCard key={s.label} stat={s}/>)}
    </div>

    <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:'18px' }}>
      {/* Orders table */}
      <div style={{ background:c.cardBg, backdropFilter:'blur(12px)', borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}` }}>
        <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'24px' }}>
          <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>Recent Orders</h4>
          <span style={{ fontSize:'8px', padding:'4px 10px', borderRadius:'6px', background:'rgba(236,72,153,0.15)', border:'1px solid rgba(236,72,153,0.28)', color:c.pinkMid, fontWeight:700, letterSpacing:'1.5px' }}>LIVE</span>
        </div>
        <table style={{ width:'100%', borderCollapse:'collapse' }}>
          <thead>
            <tr style={{ borderBottom:`1px solid ${c.pinkBorder}` }}>
              {['ORDER','CUSTOMER','BUNDLE','DATE','TOTAL','STATUS'].map(h => (
                <th key={h} style={{ padding:'0 0 14px', textAlign:'left', fontSize:'9px', fontWeight:700, color:c.faint, letterSpacing:'1.5px' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ORDERS.map((o, i) => (
              <tr key={i} style={{ borderBottom: i < ORDERS.length-1 ? '1px solid rgba(249,168,212,0.07)' : 'none' }}>
                <td style={{ padding:'15px 0', fontSize:'12px', color:c.white, fontWeight:700 }}>{o.id}</td>
                <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.customer}</td>
                <td style={{ padding:'15px 0', fontSize:'13px', color:c.muted }}>{o.bundle}</td>
                <td style={{ padding:'15px 0', fontSize:'12px', color:c.faint }}>{o.date}</td>
                <td style={{ padding:'15px 0', fontSize:'13px', color:c.cream, fontWeight:600 }}>{o.total}</td>
                <td style={{ padding:'15px 0' }}>
                  <span style={{ padding:'5px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[o.status] }}>{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Active blueprint preview */}
      <div style={{ background:'rgba(249,168,212,0.06)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'18px' }}>
          <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:0 }}>Active Blueprint</h4>
          <Btn small accent>Export PDF</Btn>
        </div>
        <BlueprintCanvas items={BLUEPRINTS[0].items}/>
        <div style={{ marginTop:'18px', paddingTop:'16px', borderTop:`1px solid rgba(249,168,212,0.14)` }}>
          <Label>Blueprint Info</Label>
          <div style={{ display:'flex', gap:'24px' }}>
            <div>
              <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Canvas Size</p>
              <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].size}</p>
            </div>
            <div>
              <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Complexity</p>
              <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{BLUEPRINTS[0].complexity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Quick actions */}
    <div style={{ display:'flex', gap:'10px', marginTop:'18px', flexWrap:'wrap' }}>
      <Btn accent>+ New Order</Btn>
      <Btn>Print Packing</Btn>
      <Btn>Export Report</Btn>
      <Btn>Restock Alert</Btn>
    </div>
  </div>
);

// ─── BLUEPRINTS VIEW ──────────────────────────────────────────────────────────
const BlueprintsView = () => {
  const [selected, setSelected] = useState(BLUEPRINTS[0]);
  return (
    <div>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px' }}>
        <div>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Blueprint Library</h3>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>{BLUEPRINTS.length} blueprints · {BLUEPRINTS.filter(b=>b.status==='Active').length} active</p>
        </div>
        <Btn accent>+ New Blueprint</Btn>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:'20px' }}>
        {/* List */}
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          {BLUEPRINTS.map(bp => (
            <div key={bp.id} onClick={() => setSelected(bp)}
              style={{ background: selected.id===bp.id ? 'rgba(249,168,212,0.12)' : c.cardBg, borderRadius:'14px', padding:'16px 18px', border: selected.id===bp.id ? '1px solid rgba(249,168,212,0.40)' : `1px solid ${c.pinkBorder}`, cursor:'pointer', transition:'all .2s', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
              <div>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{bp.name}</p>
                <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:0 }}>{bp.id} · {bp.size} · {bp.complexity}</p>
              </div>
              <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'9px', fontWeight:700, flexShrink:0, ...STATUS_STYLES[bp.status] }}>{bp.status}</span>
            </div>
          ))}
        </div>

        {/* Detail */}
        <div style={{ background:'rgba(249,168,212,0.06)', borderRadius:'20px', padding:'24px', border:'1px solid rgba(249,168,212,0.20)', display:'flex', flexDirection:'column', gap:'18px' }}>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:0 }}>{selected.name}</h4>
            <div style={{ display:'flex', gap:'8px' }}>
              <Btn small accent>Edit</Btn>
              <Btn small>Export PDF</Btn>
            </div>
          </div>
          <BlueprintCanvas items={selected.items}/>
          <div style={{ paddingTop:'14px', borderTop:`1px solid rgba(249,168,212,0.14)` }}>
            <Label>Blueprint Info</Label>
            <div style={{ display:'flex', gap:'32px' }}>
              {[['Canvas Size', selected.size],['Complexity', selected.complexity]].map(([l,v]) => (
                <div key={l}>
                  <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>{l}</p>
                  <p style={{ fontSize:'15px', color:c.white, fontWeight:600, fontFamily:"'Cormorant Garamond',serif" }}>{v}</p>
                </div>
              ))}
              <div>
                <p style={{ fontSize:'11px', color:c.faint, marginBottom:'4px' }}>Status</p>
                <span style={{ padding:'4px 12px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[selected.status] }}>{selected.status}</span>
              </div>
            </div>
          </div>
          <div>
            <Label>Items ({selected.items.length})</Label>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
              {selected.items.map((item, i) => (
                <div key={i} style={{ background:'rgba(249,168,212,0.10)', border:'1px solid rgba(249,168,212,0.22)', borderRadius:'8px', padding:'6px 12px', fontSize:'11px', color:c.pinkMid, fontWeight:600 }}>
                  {item.emoji} {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── PRODUCTS VIEW ────────────────────────────────────────────────────────────
const ProductsView = ({ products, setProducts }) => {
  const categories  = Object.keys(products);
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [search, setSearch]       = useState('');
  const [showModal, setShowModal] = useState(false);

  const filtered = (products[activeCat] || []).filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.desc.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (cat, product) => {
    setProducts(prev => ({ ...prev, [cat]: [...(prev[cat] || []), product] }));
    setActiveCat(cat);
  };

  return (
    <div>
      {showModal && <AddProductModal onClose={() => setShowModal(false)} onAdd={handleAdd} existingCategories={Object.keys(products)}/>}

      {/* Header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'24px', flexWrap:'wrap', gap:'12px' }}>
        <div>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:0 }}>Product Catalogue</h3>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, marginTop:'4px' }}>
            {Object.values(products).reduce((a,b) => a+b.length, 0)} products · {categories.length} categories
          </p>
        </div>
        <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products…"
            style={{ padding:'10px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', outline:'none', width:'190px' }}/>
          {/* Add Product — accent pink-gradient CTA */}
          <button onClick={() => setShowModal(true)}
            style={{ padding:'10px 20px', borderRadius:'10px', border:'none', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', color:'#fff', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 20px rgba(236,72,153,0.35)', whiteSpace:'nowrap' }}>
            ✦ Add Product
          </button>
        </div>
      </div>

      {/* Category tabs — light pink active */}
      <div style={{ display:'flex', gap:'8px', marginBottom:'22px', flexWrap:'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => { setActiveCat(cat); setSearch(''); }}
            style={{ padding:'8px 18px', borderRadius:'20px', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, cursor:'pointer', transition:'all .2s',
              background: activeCat===cat ? '#FDE4EE' : 'rgba(255,255,255,0.06)',
              color:       activeCat===cat ? '#7C1040' : c.muted,
              border:      activeCat===cat ? 'none'    : `1px solid ${c.pinkBorder}`,
            }}>
            {cat} <span style={{ opacity:0.65, fontSize:'10px' }}>({products[cat].length})</span>
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(210px,1fr))', gap:'14px' }}>
        {filtered.map(p => (
          <div key={p.id}
            style={{ background:c.cardBg, borderRadius:'16px', border:`1px solid ${c.pinkBorder}`, overflow:'hidden', transition:'all .2s', cursor:'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background=c.cardBgHov; e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 28px rgba(236,72,153,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.background=c.cardBg;    e.currentTarget.style.transform='translateY(0)';    e.currentTarget.style.boxShadow='none'; }}>

            {/* Image / colour header */}
            <div style={{ height:'80px', background:`linear-gradient(135deg,${p.color},${p.color}99)`, position:'relative' }}>
              {p.img && <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e => e.target.style.display='none'}/>}
              {p.badge && (
                <span style={{ position:'absolute', top:'8px', left:'8px', padding:'3px 10px', borderRadius:'20px', fontSize:'8px', fontWeight:700,
                  background:'#FDE4EE', color:'#7C1040',  // ← light pink badge
                  letterSpacing:'1px', textTransform:'uppercase' }}>{p.badge}</span>
              )}
            </div>

            <div style={{ padding:'14px' }}>
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream, margin:'0 0 4px' }}>{p.name}</p>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'0 0 10px', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{p.desc}</p>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:c.pink, margin:0 }}>{fmt(p.price)}</p>
                <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', color:c.faint }}>#{p.id}</span>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn:'1/-1', textAlign:'center', padding:'48px', color:c.muted, fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontStyle:'italic' }}>
            {search ? `No results for "${search}"` : 'No products in this category yet.'}
          </div>
        )}
      </div>
    </div>
  );
};

// ─── ANALYTICS VIEW ───────────────────────────────────────────────────────────
const AnalyticsView = ({ products }) => {
  const cats     = Object.entries(products);
  const maxCount = Math.max(...cats.map(([,p]) => p.length), 1);
  return (
    <div>
      <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Analytics Overview</h3>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'14px', marginBottom:'28px' }}>
        {[
          { label:'TOTAL PRODUCTS', value: Object.values(products).reduce((a,b)=>a+b.length,0), sub:'Across all categories' },
          { label:'BLUEPRINTS',     value: BLUEPRINTS.length, sub:`${BLUEPRINTS.filter(b=>b.status==='Active').length} active` },
          { label:'RECENT ORDERS',  value: ORDERS.length,     sub:'Last recorded' },
          { label:'CATEGORIES',     value: Object.keys(products).length, sub:'Product categories' },
        ].map(k => (
          <div key={k.label} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px 18px', border:`1px solid ${c.pinkBorder}` }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, color:c.faint, textTransform:'uppercase', letterSpacing:'1.8px', marginBottom:'10px' }}>{k.label}</p>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'36px', fontWeight:700, color:c.white, lineHeight:1, marginBottom:'6px' }}>{k.value}</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted }}>{k.sub}</p>
          </div>
        ))}
      </div>

      <div style={{ background:c.cardBg, borderRadius:'20px', padding:'26px', border:`1px solid ${c.pinkBorder}`, marginBottom:'18px' }}>
        <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'22px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Products by Category</h4>
        {cats.map(([cat, prods]) => (
          <div key={cat} style={{ marginBottom:'14px' }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'6px' }}>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:600, color:c.cream, margin:0 }}>{cat}</p>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:c.muted, margin:0 }}>{prods.length} items · avg {fmt(Math.round(prods.reduce((s,p)=>s+p.price,0)/prods.length))}</p>
            </div>
            <div style={{ height:'8px', borderRadius:'4px', background:'rgba(255,255,255,0.06)' }}>
              <div style={{ height:'100%', borderRadius:'4px', background:'linear-gradient(90deg,#F9A8D4,#EC4899)', width:`${(prods.length/maxCount)*100}%`, transition:'width .6s' }}/>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'14px' }}>
        {['New','Packed','Pending'].map(status => (
          <div key={status} style={{ background:c.cardBg, borderRadius:'16px', padding:'20px', border:`1px solid ${c.pinkBorder}`, textAlign:'center' }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:700, color:c.white, margin:'0 0 6px' }}>{ORDERS.filter(o=>o.status===status).length}</p>
            <span style={{ padding:'4px 14px', borderRadius:'8px', fontSize:'10px', fontWeight:700, ...STATUS_STYLES[status] }}>{status}</span>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:'10px 0 0' }}>orders</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── SETTINGS VIEW ────────────────────────────────────────────────────────────
const SettingsView = ({ adminUser, onLogout, products }) => {
  const [storeName, setStoreName] = useState('Wrapping Happiness');
  const [currency,  setCurrency]  = useState('PKR (Rs.)');
  const [notif,     setNotif]     = useState(true);
  const [saved,     setSaved]     = useState(false);

  const inputSty = { padding:'12px 16px', borderRadius:'10px', border:`1px solid ${c.pinkBorder}`, background:'rgba(255,255,255,0.06)', color:c.cream, fontFamily:"'Montserrat',sans-serif", fontSize:'13px', outline:'none', width:'100%', boxSizing:'border-box' };

  return (
    <div>
      <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'28px', fontWeight:700, color:c.cream, margin:'0 0 24px' }}>Settings</h3>

      {/* Admin info */}
      <div style={{ background:'rgba(249,168,212,0.08)', borderRadius:'16px', padding:'16px 20px', border:'1px solid rgba(249,168,212,0.22)', marginBottom:'24px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'18px', fontWeight:700, color:c.cream, margin:'0 0 2px' }}>{adminUser?.name || 'Admin'}</p>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:c.muted, margin:0 }}>{adminUser?.email} · <span style={{ color:'#86EFAC' }}>● Admin</span></p>
        </div>
        <Btn onClick={onLogout}>Sign Out</Btn>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'24px' }}>
        {/* Store settings */}
        <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
          <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Store Settings</h4>

          {[{ label:'Store Name', children: <input value={storeName} onChange={e=>setStoreName(e.target.value)} style={inputSty}/> },
            { label:'Currency',   children: <select value={currency} onChange={e=>setCurrency(e.target.value)} style={{ ...inputSty, cursor:'pointer' }}><option>PKR (Rs.)</option><option>USD ($)</option><option>GBP (£)</option></select> },
          ].map(({ label, children }) => (
            <div key={label} style={{ marginBottom:'18px' }}>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:c.faint, marginBottom:'8px' }}>{label}</p>
              {children}
            </div>
          ))}

          {/* Notification toggle */}
          <div style={{ marginBottom:'24px' }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, letterSpacing:'1.5px', textTransform:'uppercase', color:c.faint, marginBottom:'8px' }}>Notifications</p>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <div onClick={() => setNotif(n=>!n)}
                style={{ width:'44px', height:'24px', borderRadius:'12px', cursor:'pointer', position:'relative', transition:'background .2s',
                  background: notif ? '#FDE4EE' : 'rgba(255,255,255,0.12)' }}>
                <div style={{ position:'absolute', top:'3px', left: notif ? '23px' : '3px', width:'18px', height:'18px', borderRadius:'50%', background: notif ? '#7C1040' : '#fff', transition:'left .2s' }}/>
              </div>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>New order notifications</p>
            </div>
          </div>

          <Btn accent onClick={() => { setSaved(true); setTimeout(()=>setSaved(false),1800); }}>
            {saved ? '✓ Saved!' : 'Save Changes'}
          </Btn>
        </div>

        {/* Product summary */}
        <div style={{ background:c.cardBg, borderRadius:'20px', padding:'28px', border:`1px solid ${c.pinkBorder}` }}>
          <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.cream, margin:'0 0 22px' }}>Product Summary</h4>
          {Object.entries(products).map(([cat, prods]) => (
            <div key={cat} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:'1px solid rgba(249,168,212,0.08)' }}>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:c.muted, margin:0 }}>{cat}</p>
              <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'16px', fontWeight:700, color:c.cream }}>{prods.length} items</span>
            </div>
          ))}
          <div style={{ display:'flex', justifyContent:'space-between', padding:'12px 0 0' }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:700, color:c.pinkMid, margin:0 }}>Total</p>
            <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'20px', fontWeight:700, color:c.pink }}>{Object.values(products).reduce((a,b)=>a+b.length,0)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── ADMIN LOGIN GATE ─────────────────────────────────────────────────────────
const AdminLoginGate = ({ onSuccess }) => {
  const [form, setForm]     = useState({ email:'', password:'' });
  const [showPass, setSP]   = useState(false);
  const [focused, setFoc]   = useState(null);
  const [loading, setLoad]  = useState(false);
  const [error, setError]   = useState('');

  const set = (k,v) => { setForm(p=>({...p,[k]:v})); setError(''); };

  const handleLogin = async () => {
    if (!form.email || !form.password) { setError('Please enter your email and password.'); return; }
    setLoad(true);
    try {
      const res  = await fetch('http://localhost:5000/api/users/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok)                     { setError(data.message || 'Login failed.');                          return; }
      if (data.user?.role !== 'admin') { setError('Access denied. This portal is for admins only.');        return; }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user',  JSON.stringify(data.user));
      onSuccess(data.user);
    } catch {
      setError('Unable to connect to server.');
    } finally {
      setLoad(false);
    }
  };

  const inputSty = (f) => ({
    width:'100%', padding:'13px 16px 13px 46px', borderRadius:'10px', boxSizing:'border-box',
    border:`1px solid ${focused===f ? 'rgba(124,16,64,0.55)' : 'rgba(124,16,64,0.18)'}`,
    background: focused===f ? '#FFF5F8' : '#FDF0F4',
    color:'#1C0A10', fontFamily:"'Montserrat',sans-serif", fontSize:'13px', outline:'none',
    boxShadow: focused===f ? '0 0 0 3px rgba(194,24,91,0.08)' : 'none', transition:'all .18s',
  });

  return (
    <div style={{ minHeight:'100vh', display:'grid', gridTemplateColumns:'1fr 1.15fr', fontFamily:"'Montserrat',sans-serif" }}>

      {/* Left — dark brand panel */}
      <div style={{ background:'linear-gradient(160deg,#4A0A1E 0%,#7C1040 55%,#5C0A2A 100%)', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'80px 64px', position:'relative', overflow:'hidden', textAlign:'center' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,192,212,0.06) 1px,transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }}/>
        <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,192,212,0.50),transparent)' }}/>

        <div style={{ position:'relative', zIndex:1 }}>
          {/* Floral SVG mark — no emoji */}
          <svg width="52" height="52" viewBox="0 0 56 56" fill="none" style={{ marginBottom:'24px' }}>
            <circle cx="28" cy="28" r="26" stroke="rgba(240,180,200,0.35)" strokeWidth="0.75"/>
            <path d="M28 8 C20 8 12 16 12 28 C12 40 20 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
            <path d="M28 8 C36 8 44 16 44 28 C44 40 36 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
            <path d="M8 28 L48 28" stroke="rgba(240,180,200,0.25)" strokeWidth="0.75"/>
            <circle cx="28" cy="28" r="4" fill="rgba(240,180,200,0.40)"/>
            <circle cx="28" cy="28" r="1.5" fill="rgba(255,255,255,0.70)"/>
          </svg>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'8px', fontWeight:700, letterSpacing:'4px', color:'rgba(255,210,225,0.55)', marginBottom:'18px', textTransform:'uppercase' }}>Admin Portal · Wrapping Happiness</p>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:700, color:'#FFF0F5', lineHeight:0.96, marginBottom:'6px' }}>Admin</h1>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'48px', fontWeight:400, fontStyle:'italic', color:'rgba(255,192,212,0.85)', marginBottom:'36px' }}>Dashboard</h1>
          <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'17px', fontStyle:'italic', color:'rgba(255,210,225,0.65)', lineHeight:1.7, maxWidth:'280px', marginBottom:'40px' }}>
            "Manage orders, blueprints &amp; products — all in one place."
          </p>
          {/* Feature list */}
          {[['📋','Order Management'],['📐','Blueprint Library'],['🌸','Product Catalogue']].map(([icon,text]) => (
            <div key={text} style={{ display:'flex', alignItems:'center', gap:'12px', background:'rgba(255,255,255,0.06)', borderRadius:'10px', padding:'11px 16px', border:'1px solid rgba(249,168,212,0.12)', marginBottom:'8px' }}>
              <span style={{ fontSize:'15px' }}>{icon}</span>
              <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', color:'rgba(255,210,225,0.65)', margin:0 }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'60px 10%', background:'linear-gradient(160deg,#FDF0F4 0%,#FAE4EC 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', bottom:'-40px', right:'-40px', opacity:0.05, pointerEvents:'none' }}>
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
            <circle cx="150" cy="150" r="140" stroke="#C2185B" strokeWidth="1"/>
            <circle cx="150" cy="150" r="100" stroke="#C2185B" strokeWidth="0.5"/>
            <circle cx="150" cy="150" r="60"  stroke="#C2185B" strokeWidth="0.5"/>
          </svg>
        </div>

        <div style={{ width:'100%', maxWidth:'420px', position:'relative', zIndex:1 }}>
          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'9px', fontWeight:700, letterSpacing:'3px', color:'#C2185B', marginBottom:'14px', textTransform:'uppercase' }}>✦  Admin Access Only</p>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:700, color:'#1C0A10', lineHeight:1, marginBottom:'4px' }}>Sign in to your</h2>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'40px', fontWeight:400, fontStyle:'italic', color:'#C2185B', marginBottom:'28px' }}>admin panel</h2>

          {/* Role note — no crown icon */}
          <div style={{ background:'rgba(124,16,64,0.07)', border:'1px solid rgba(124,16,64,0.16)', borderRadius:'10px', padding:'12px 16px', marginBottom:'22px' }}>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:700, color:'#7C1040', margin:'0 0 2px' }}>Administrator Login</p>
            <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'10px', color:'rgba(124,16,64,0.55)', margin:0 }}>Only accounts with admin role can access this panel</p>
          </div>

          {error && (
            <div style={{ background:'rgba(194,24,91,0.08)', border:'1px solid rgba(194,24,91,0.22)', borderRadius:'10px', padding:'12px 16px', marginBottom:'16px', fontFamily:"'Montserrat',sans-serif", fontSize:'12px', color:'#C2185B' }}>
              ⚠ {error}
            </div>
          )}

          <div style={{ display:'flex', flexDirection:'column', gap:'12px', marginBottom:'22px' }}>
            <div style={{ position:'relative' }}>
              <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', fontSize:'13px', pointerEvents:'none' }}>✉</span>
              <input type="email" placeholder="Admin Email" value={form.email} onChange={e=>set('email',e.target.value)}
                style={inputSty('email')} onFocus={()=>setFoc('email')} onBlur={()=>setFoc(null)} onKeyDown={e=>e.key==='Enter'&&handleLogin()}/>
            </div>
            <div style={{ position:'relative' }}>
              <span style={{ position:'absolute', left:'16px', top:'50%', transform:'translateY(-50%)', fontSize:'13px', pointerEvents:'none' }}>🔒</span>
              <input type={showPass?'text':'password'} placeholder="Password" value={form.password} onChange={e=>set('password',e.target.value)}
                style={{ ...inputSty('pass'), paddingRight:'56px' }}
                onFocus={()=>setFoc('pass')} onBlur={()=>setFoc(null)} onKeyDown={e=>e.key==='Enter'&&handleLogin()}/>
              <button onClick={()=>setSP(s=>!s)} style={{ position:'absolute', right:'16px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontFamily:"'Montserrat',sans-serif", fontSize:'10px', fontWeight:600, color:'rgba(194,24,91,0.45)' }}>{showPass?'Hide':'Show'}</button>
            </div>
          </div>

          <button onClick={handleLogin} disabled={loading}
            style={{ width:'100%', padding:'16px', borderRadius:'10px', border:'none', background: loading ? 'rgba(124,16,64,0.45)' : 'linear-gradient(135deg,#7C1040,#AD1457)', color:'#FFF0F5', fontFamily:"'Montserrat',sans-serif", fontSize:'11px', fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase', cursor: loading?'not-allowed':'pointer', boxShadow:'0 10px 32px rgba(124,16,64,0.28)', transition:'all .22s', marginBottom:'14px' }}>
            {loading ? 'Verifying…' : 'Enter Admin Panel ✦'}
          </button>

          <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:'11px', textAlign:'center', color:'rgba(124,16,64,0.40)', lineHeight:1.6 }}>
            Restricted to authorised administrators only.<br/>Unauthorised access attempts are logged.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const [activeNav,    setActiveNav]    = useState('Orders');
  const [adminUser,    setAdminUser]    = useState(null);
  const [authChecked,  setAuthChecked]  = useState(false);
  // Products live in state so Add Product updates the UI instantly
  const [products,     setProducts]     = useState(IMPORTED_PRODUCTS);

  // On mount: restore session from localStorage
  useEffect(() => {
    try {
      const user  = JSON.parse(localStorage.getItem('user') || 'null');
      const token = localStorage.getItem('token');
      if (user?.role === 'admin' && token) setAdminUser(user);
    } catch {}
    setAuthChecked(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAdminUser(null);
  };

  // Prevent flash before auth check completes
  if (!authChecked) return null;

  // Show login gate if not authenticated
  if (!adminUser) return <AdminLoginGate onSuccess={setAdminUser}/>;

  const renderView = () => {
    switch (activeNav) {
      case 'Orders':     return <OrdersView/>;
      case 'Blueprints': return <BlueprintsView/>;
      case 'Products':   return <ProductsView products={products} setProducts={setProducts}/>;
      case 'Analytics':  return <AnalyticsView products={products}/>;
      case 'Settings':   return <SettingsView adminUser={adminUser} onLogout={handleLogout} products={products}/>;
      default:           return <OrdersView/>;
    }
  };

  return (
    <section style={{ padding:'110px 8% 120px', background:c.pageBg, position:'relative', overflow:'hidden', fontFamily:"'Montserrat',sans-serif", minHeight:'100vh' }}>
      {/* Background glows */}
      <div style={{ position:'absolute', top:'-200px', right:'-180px', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle,rgba(236,72,153,0.16),transparent 65%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', bottom:'-140px', left:'-120px', width:'440px', height:'440px', borderRadius:'50%', background:'radial-gradient(circle,rgba(190,24,93,0.12),transparent 65%)', pointerEvents:'none' }}/>
      <div style={{ position:'absolute', top:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.28),transparent)' }}/>

      {/* Page title */}
      <div style={{ position:'relative', zIndex:1, marginBottom:'48px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
          <div style={{ width:'24px', height:'1.5px', background:c.pinkMid, opacity:0.6 }}/>
          <span style={{ fontSize:'9px', fontWeight:700, letterSpacing:'3px', textTransform:'uppercase', color:c.pinkMid, opacity:0.70 }}>Admin Dashboard</span>
        </div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(32px,3.5vw,52px)', fontWeight:700, color:c.cream, letterSpacing:'-0.02em', lineHeight:1.05 }}>
          Manage orders &amp; <span style={{ fontStyle:'italic', fontWeight:400, color:c.pinkMid }}>blueprints</span>
        </h2>
      </div>

      {/* Sidebar + content */}
      <div style={{ display:'grid', gridTemplateColumns:'240px 1fr', gap:'32px', position:'relative', zIndex:1 }}>

        {/* Sidebar */}
        <div style={{ background:c.sidebarBg, borderRadius:'20px', padding:'16px', border:`1px solid ${c.pinkBorder}`, alignSelf:'start', backdropFilter:'blur(12px)', position:'sticky', top:'24px' }}>
          {/* Logo area */}
          <div style={{ display:'flex', alignItems:'center', gap:'12px', padding:'12px 16px 20px', borderBottom:`1px solid ${c.pinkBorder}`, marginBottom:'12px' }}>
            <div style={{ width:'40px', height:'40px', borderRadius:'12px', background:'linear-gradient(135deg,#F9A8D4,#EC4899)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>🌸</div>
            <div>
              <p style={{ fontSize:'13px', fontWeight:700, color:c.white, margin:0 }}>Admin Panel</p>
              <p style={{ fontSize:'10px', color:c.muted, margin:0 }}>Wrapping Happiness</p>
            </div>
          </div>

          {/* Nav items */}
          {NAV_ITEMS.map(item => (
            <button key={item.label} onClick={() => setActiveNav(item.label)}
              style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', padding:'13px 16px', borderRadius:'12px', border:'none', marginBottom:'4px', cursor:'pointer', transition:'all .2s', fontFamily:"'Montserrat',sans-serif", fontSize:'13px', fontWeight:600,
                background:  activeNav===item.label ? c.activeBg   : 'transparent',
                color:       activeNav===item.label ? c.cream       : c.muted,
                borderLeft:  activeNav===item.label ? `3px solid ${c.pink}` : '3px solid transparent',
              }}>
              <span style={{ fontSize:'16px', filter: activeNav===item.label ? 'none' : 'grayscale(0.5)' }}>{item.icon}</span>
              {item.label}
              {activeNav===item.label && <div style={{ marginLeft:'auto', width:'5px', height:'5px', borderRadius:'50%', background:c.pink, boxShadow:`0 0 8px ${c.pink}` }}/>}
            </button>
          ))}

          {/* Sign out */}
          <div style={{ paddingTop:'12px', marginTop:'8px', borderTop:`1px solid ${c.pinkBorder}` }}>
            <button onClick={handleLogout}
              style={{ width:'100%', display:'flex', alignItems:'center', gap:'12px', padding:'11px 16px', borderRadius:'12px', border:'none', background:'transparent', color:c.muted, fontFamily:"'Montserrat',sans-serif", fontSize:'12px', fontWeight:600, cursor:'pointer', transition:'all .18s' }}
              onMouseEnter={e => { e.currentTarget.style.background='rgba(249,168,212,0.08)'; e.currentTarget.style.color=c.cream; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color=c.muted; }}>
              🚪 Sign Out
            </button>
          </div>
        </div>

        {/* Main content */}
        <div>{renderView()}</div>
      </div>

      <div style={{ position:'absolute', bottom:0, left:'6%', right:'6%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(249,168,212,0.18),transparent)' }}/>
    </section>
  );
};

export default AdminDashboard;

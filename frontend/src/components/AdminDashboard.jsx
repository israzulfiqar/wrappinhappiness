
// // ─── AdminDashboard.jsx ───────────────────────────────────────────────────────
// // Theme: soft pink page bg + white cards + dark maroon buttons/accents
// // The dashboard renders as its own full-page layout (no site navbar shown)
// import { useState, useEffect } from 'react';
// import { PRODUCTS as GALLERY_PRODUCTS } from './ProductGallery';

// // ─── Colour tokens (from image 2 palette) ────────────────────────────────────
// const T = {
//   pageBg:    '#FDF0F4',            // soft pink page background
//   cardBg:    '#FFFFFF',            // white cards
//   sidebar:   'linear-gradient(160deg,#4A0A1E 0%,#7C1040 100%)', // dark maroon sidebar
//   rose:      '#7C1040',            // dark maroon — primary buttons, headings
//   roseMid:   '#C2185B',            // medium rose — prices, highlights
//   roseLight: '#FDE4EE',            // blush — tab active bg, badges
//   border:    'rgba(124,16,64,0.12)',
//   muted:     '#9B7080',
//   text:      '#1C0A10',            // near-black text
// };

// const fmt = n => `Rs. ${Number(n).toLocaleString()}`;

// // ─── Reusable atoms ───────────────────────────────────────────────────────────

// const DarkBtn = ({ children, onClick, small, style: sx = {} }) => (
//   <button onClick={onClick} style={{
//     padding: small ? '6px 14px' : '10px 22px', borderRadius: 8, border: 'none',
//     background: T.rose, color: '#fff',
//     fontFamily: "'Montserrat',sans-serif", fontSize: small ? 10 : 12, fontWeight: 700,
//     cursor: 'pointer', whiteSpace: 'nowrap', ...sx,
//   }}>{children}</button>
// );

// const GhostBtn = ({ children, onClick, small }) => (
//   <button onClick={onClick} style={{
//     padding: small ? '6px 14px' : '10px 22px', borderRadius: 8,
//     border: `1px solid ${T.border}`, background: T.roseLight, color: T.rose,
//     fontFamily: "'Montserrat',sans-serif", fontSize: small ? 10 : 12, fontWeight: 600,
//     cursor: 'pointer', whiteSpace: 'nowrap',
//   }}>{children}</button>
// );

// const Card = ({ children, style = {} }) => (
//   <div style={{
//     background: T.cardBg, borderRadius: 16, padding: 24,
//     border: `1px solid ${T.border}`, boxShadow: '0 2px 16px rgba(124,16,64,0.07)', ...style,
//   }}>{children}</div>
// );

// const SectionTitle = ({ children, sub }) => (
//   <div style={{ marginBottom: 24 }}>
//     <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize: 26, fontWeight: 700, color: T.text, margin: '0 0 4px' }}>{children}</h3>
//     {sub && <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize: 11, color: T.muted, margin: 0 }}>{sub}</p>}
//   </div>
// );

// const STATUS_STYLE = {
//   New:     { bg: '#FDE4EE', color: '#BE185D' },
//   Packed:  { bg: '#DCFCE7', color: '#15803D' },
//   Pending: { bg: '#FEF3C7', color: '#92400E' },
//   Active:  { bg: '#DCFCE7', color: '#15803D' },
//   Draft:   { bg: '#F3F4F6', color: '#6B7280' },
// };
// const Badge = ({ status }) => (
//   <span style={{
//     padding: '4px 12px', borderRadius: 20, fontSize: 10, fontWeight: 700,
//     background: STATUS_STYLE[status]?.bg || '#F3F4F6',
//     color:      STATUS_STYLE[status]?.color || T.muted,
//   }}>{status}</span>
// );

// const FieldLabel = ({ children }) => (
//   <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize: 9, fontWeight: 700,
//     color: T.muted, textTransform:'uppercase', letterSpacing:'1.5px', marginBottom: 7 }}>{children}</p>
// );

// // ─── Static data ──────────────────────────────────────────────────────────────
// const STATS = [
//   { label:'New Orders',  value:'24',      trend:'↑ 18% today',     good:true  },
//   { label:'Revenue',     value:'Rs. 58k', trend:'↑ 12% yesterday', good:true  },
//   { label:'Blueprints',  value:'18',      trend:'6 pending',        good:null  },
//   { label:'Low Stock',   value:'3 items', trend:'Restock needed',   good:false },
// ];

// const ORDERS = [
//   { id:'#WH-024', customer:'Sana Malik',  bundle:'Pink Romance ×2',   date:'Apr 12', total:'Rs. 4,840', status:'New'     },
//   { id:'#WH-023', customer:'Fatima Raza', bundle:'Birthday Joy',       date:'Apr 12', total:'Rs. 2,100', status:'Packed'  },
//   { id:'#WH-022', customer:'Hana Sheikh', bundle:'Balloon Bundle',     date:'Apr 11', total:'Rs. 1,350', status:'Pending' },
//   { id:'#WH-021', customer:'Zara Ahmed',  bundle:'Wedding Flower Box', date:'Apr 11', total:'Rs. 6,200', status:'Packed'  },
//   { id:'#WH-020', customer:'Nida Khan',   bundle:'Blush Peony Bunch',  date:'Apr 10', total:'Rs. 2,200', status:'New'     },
// ];

// const BLUEPRINTS = [
//   { id:'BP-001', name:'Pink Romance Box',  size:'12″×12″', complexity:'Medium · 5 items', status:'Active',
//     items:[{e:'🌸',l:'Pink Roses',x:'8%',y:'12%'},{e:'🎀',l:'Ribbon',x:'42%',y:'22%'},{e:'🎈',l:'Balloons ×5',x:'64%',y:'9%'},{e:'🎂',l:'Cake',x:'26%',y:'56%'},{e:'💌',l:'Card',x:'58%',y:'54%'}] },
//   { id:'BP-002', name:'Birthday Joy Kit', size:'10″×10″', complexity:'Simple · 3 items',  status:'Pending',
//     items:[{e:'🎂',l:'Mini Cake',x:'14%',y:'18%'},{e:'🎈',l:'Balloons',x:'55%',y:'14%'},{e:'🌸',l:'Floral Spray',x:'35%',y:'55%'}] },
//   { id:'BP-003', name:'Anniversary Grand',size:'16″×16″', complexity:'Complex · 7 items', status:'Active',
//     items:[{e:'🌹',l:'Roses ×18',x:'8%',y:'10%'},{e:'🍫',l:'Macarons',x:'40%',y:'8%'},{e:'🕯️',l:'Candle',x:'68%',y:'14%'},{e:'💌',l:'Card',x:'20%',y:'52%'},{e:'🎀',l:'Ribbon',x:'48%',y:'58%'},{e:'🧸',l:'Teddy',x:'70%',y:'50%'},{e:'🎈',l:'Foil Balloon',x:'12%',y:'72%'}] },
//   { id:'BP-004', name:'Eid Mubarak Set',  size:'14″×14″', complexity:'Medium · 4 items',  status:'Draft',
//     items:[{e:'🌙',l:'Crescent',x:'12%',y:'15%'},{e:'🍬',l:'Sweets Box',x:'50%',y:'12%'},{e:'🌸',l:'Florals',x:'25%',y:'55%'},{e:'✨',l:'Fairy Lights',x:'62%',y:'58%'}] },
// ];

// const BADGE_OPTIONS = ['', 'Bestseller', 'New', 'Popular', 'Luxury', 'Trending', 'Seasonal', 'Custom'];
// const SWATCHES      = ['#F9D0E0','#FADADD','#FDE8D0','#EDD8F5','#D8EDF5','#F5EDD0','#D8EDD8','#F9A8D4'];
// const NAV_ITEMS     = ['Orders','Blueprints','Products','Analytics','Settings'];

// // ─── Blueprint canvas ─────────────────────────────────────────────────────────
// const BlueprintCanvas = ({ items }) => (
//   <div style={{ background:'#FFF8FB', border:`1.5px dashed ${T.border}`, borderRadius:12, height:160, position:'relative', overflow:'hidden' }}>
//     <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle,rgba(124,16,64,0.07) 1px,transparent 1px)', backgroundSize:'18px 18px', pointerEvents:'none' }}/>
//     {items.map((item, i) => (
//       <div key={i} style={{ position:'absolute', left:item.x, top:item.y,
//         background: T.roseLight, border:`1px solid ${T.border}`,
//         borderRadius:8, padding:'4px 10px', fontSize:10, color:T.rose, fontWeight:600, whiteSpace:'nowrap' }}>
//         {item.e} {item.l}
//       </div>
//     ))}
//   </div>
// );

// // ─── Add Product modal ────────────────────────────────────────────────────────
// const AddProductModal = ({ onClose, onAdd, existingCategories }) => {
//   const [form, setForm] = useState({ name:'', category:existingCategories[0], newCat:'', price:'', desc:'', badge:'', color:'#F9D0E0', img:'' });
//   const [useNew, setNew] = useState(false);
//   const [error, setError] = useState('');
//   const set = (k,v) => { setForm(p=>({...p,[k]:v})); setError(''); };

//   const submit = () => {
//     if (!form.name.trim())            { setError('Name required.');      return; }
//     if (!form.price || form.price<=0) { setError('Enter valid price.');  return; }
//     if (!form.desc.trim())            { setError('Description required.');return; }
//     const cat = useNew ? form.newCat.trim() : form.category;
//     if (!cat)                         { setError('Pick a category.');    return; }
//     onAdd(cat, { id:`P${Date.now()}`, name:form.name.trim(), desc:form.desc.trim(), price:Number(form.price), color:form.color, badge:form.badge, img:form.img.trim() });
//     onClose();
//   };

//   const inp = { width:'100%', padding:'10px 14px', borderRadius:8, border:`1px solid ${T.border}`,
//     background:'#FFF8FB', color:T.text, fontFamily:"'Montserrat',sans-serif", fontSize:12,
//     outline:'none', boxSizing:'border-box' };

//   const PillBtn = ({ label, active, onClick }) => (
//     <button onClick={onClick} style={{ padding:'5px 12px', borderRadius:20, fontSize:10, fontWeight:700,
//       cursor:'pointer', fontFamily:"'Montserrat',sans-serif", border:'none',
//       background: active ? T.rose : T.roseLight, color: active ? '#fff' : T.rose }}>{label}</button>
//   );

//   return (
//     <div style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center' }}>
//       <div onClick={onClose} style={{ position:'absolute', inset:0, background:'rgba(28,10,16,0.40)', backdropFilter:'blur(4px)' }}/>
//       <div style={{ position:'relative', zIndex:1, width:520, maxWidth:'95vw', maxHeight:'90vh', overflowY:'auto',
//         background:T.cardBg, borderRadius:20, border:`1px solid ${T.border}`,
//         boxShadow:'0 32px 64px rgba(124,16,64,0.18)', padding:32 }}>

//         <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24 }}>
//           <h3 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:24, fontWeight:700, color:T.text, margin:0 }}>Add New Product</h3>
//           <button onClick={onClose} style={{ width:32, height:32, borderRadius:8, border:`1px solid ${T.border}`,
//             background:T.pageBg, color:T.muted, fontSize:18, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>×</button>
//         </div>

//         <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
//           <div><FieldLabel>Name *</FieldLabel><input value={form.name} onChange={e=>set('name',e.target.value)} placeholder="e.g. Blush Peony Bunch" style={inp}/></div>

//           <div>
//             <FieldLabel>Category *</FieldLabel>
//             <div style={{ display:'flex', gap:6, flexWrap:'wrap', marginBottom: useNew ? 8 : 0 }}>
//               {existingCategories.map(cat => <PillBtn key={cat} label={cat} active={!useNew && form.category===cat} onClick={()=>{ setNew(false); set('category',cat); }}/>)}
//               <PillBtn label="+ New" active={useNew} onClick={()=>setNew(true)}/>
//             </div>
//             {useNew && <input value={form.newCat} onChange={e=>set('newCat',e.target.value)} placeholder="New category name" style={inp}/>}
//           </div>

//           <div><FieldLabel>Price (Rs.) *</FieldLabel><input type="number" value={form.price} onChange={e=>set('price',e.target.value)} placeholder="e.g. 2400" style={inp}/></div>

//           <div><FieldLabel>Description *</FieldLabel>
//             <textarea value={form.desc} onChange={e=>set('desc',e.target.value)} placeholder="Short description…" rows={3} style={{ ...inp, resize:'vertical', lineHeight:1.6 }}/></div>

//           <div>
//             <FieldLabel>Badge</FieldLabel>
//             <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
//               {BADGE_OPTIONS.map(b => <PillBtn key={b||'none'} label={b||'None'} active={form.badge===b} onClick={()=>set('badge',b)}/>)}
//             </div>
//           </div>

//           <div>
//             <FieldLabel>Card Colour</FieldLabel>
//             <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignItems:'center' }}>
//               {SWATCHES.map(col => (
//                 <div key={col} onClick={()=>set('color',col)} style={{ width:24, height:24, borderRadius:'50%', background:col, cursor:'pointer',
//                   border: form.color===col ? `3px solid ${T.rose}` : '2px solid rgba(124,16,64,0.15)',
//                   transform: form.color===col ? 'scale(1.22)' : 'scale(1)', transition:'transform .15s' }}/>
//               ))}
//               <input type="color" value={form.color} onChange={e=>set('color',e.target.value)} style={{ width:24, height:24, borderRadius:'50%', border:'none', cursor:'pointer', padding:0 }}/>
//             </div>
//           </div>

//           <div><FieldLabel>Image path (optional)</FieldLabel><input value={form.img} onChange={e=>set('img',e.target.value)} placeholder="/img/bouquet-1.jpg" style={inp}/></div>

//           {/* Live preview */}
//           <div style={{ background:T.pageBg, borderRadius:12, border:`1px solid ${T.border}`, padding:12, display:'flex', gap:12, alignItems:'center' }}>
//             <div style={{ width:52, height:52, borderRadius:10, background:`linear-gradient(135deg,${form.color},${form.color}88)`, flexShrink:0 }}/>
//             <div>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:700, color:T.text, margin:'0 0 2px' }}>{form.name||'Product Name'}</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.muted, margin:'0 0 3px' }}>{form.desc||'Description here'}</p>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:700, color:T.roseMid, margin:0 }}>{form.price ? fmt(form.price) : 'Rs. 0'}</p>
//             </div>
//           </div>

//           {error && <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color:T.roseMid, margin:0 }}>⚠ {error}</p>}

//           <div style={{ display:'flex', gap:10 }}>
//             <GhostBtn onClick={onClose}>Cancel</GhostBtn>
//             <button onClick={submit} style={{ flex:1, padding:12, borderRadius:8, border:'none', background:T.rose, color:'#fff',
//               fontFamily:"'Montserrat',sans-serif", fontSize:12, fontWeight:700, cursor:'pointer' }}>✦ Add Product</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── ORDERS VIEW ──────────────────────────────────────────────────────────────
// const OrdersView = () => (
//   <div>
//     {/* Stats */}
//     <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24 }}>
//       {STATS.map(s => (
//         <Card key={s.label}>
//           <FieldLabel>{s.label}</FieldLabel>
//           <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:32, fontWeight:700, color:T.text, lineHeight:1, margin:'0 0 6px' }}>{s.value}</p>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color: s.good===true ? '#15803D' : s.good===false ? T.roseMid : T.muted, margin:0 }}>{s.trend}</p>
//         </Card>
//       ))}
//     </div>

//     <div style={{ display:'grid', gridTemplateColumns:'1.6fr 1fr', gap:18, marginBottom:18 }}>
//       {/* Orders table */}
//       <Card>
//         <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:0 }}>Recent Orders</h4>
//           <span style={{ fontSize:8, padding:'3px 8px', borderRadius:6, background:T.roseLight, color:T.rose, fontWeight:700, letterSpacing:'1.2px' }}>LIVE</span>
//         </div>
//         <table style={{ width:'100%', borderCollapse:'collapse' }}>
//           <thead>
//             <tr style={{ borderBottom:`1px solid ${T.border}` }}>
//               {['Order','Customer','Bundle','Date','Total','Status'].map(h => (
//                 <th key={h} style={{ padding:'0 0 12px', textAlign:'left', fontSize:9, fontWeight:700, color:T.muted, letterSpacing:'1.2px', textTransform:'uppercase' }}>{h}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {ORDERS.map((o,i) => (
//               <tr key={i} style={{ borderBottom: i<ORDERS.length-1 ? `1px solid ${T.border}` : 'none' }}>
//                 <td style={{ padding:'13px 0', fontSize:12, color:T.text, fontWeight:700 }}>{o.id}</td>
//                 <td style={{ padding:'13px 0', fontSize:13, color:T.text }}>{o.customer}</td>
//                 <td style={{ padding:'13px 0', fontSize:12, color:T.muted }}>{o.bundle}</td>
//                 <td style={{ padding:'13px 0', fontSize:11, color:T.muted }}>{o.date}</td>
//                 <td style={{ padding:'13px 0', fontSize:13, color:T.text, fontWeight:600 }}>{o.total}</td>
//                 <td style={{ padding:'13px 0' }}><Badge status={o.status}/></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>

//       {/* Blueprint preview */}
//       <Card style={{ display:'flex', flexDirection:'column', gap:16 }}>
//         <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700, color:T.text, margin:0 }}>Active Blueprint</h4>
//           <GhostBtn small>Export PDF</GhostBtn>
//         </div>
//         <BlueprintCanvas items={BLUEPRINTS[0].items}/>
//         <div style={{ display:'flex', gap:28, paddingTop:14, borderTop:`1px solid ${T.border}` }}>
//           {[['Size', BLUEPRINTS[0].size],['Complexity', BLUEPRINTS[0].complexity]].map(([l,v]) => (
//             <div key={l}>
//               <p style={{ fontSize:10, color:T.muted, marginBottom:3 }}>{l}</p>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:700, color:T.text, margin:0 }}>{v}</p>
//             </div>
//           ))}
//         </div>
//       </Card>
//     </div>

//     <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
//       <DarkBtn>+ New Order</DarkBtn>
//       <GhostBtn>Print Packing</GhostBtn>
//       <GhostBtn>Export Report</GhostBtn>
//       <GhostBtn>Restock Alert</GhostBtn>
//     </div>
//   </div>
// );

// // ─── BLUEPRINTS VIEW ──────────────────────────────────────────────────────────
// const BlueprintsView = () => {
//   const [sel, setSel] = useState(BLUEPRINTS[0]);
//   return (
//     <div>
//       <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24 }}>
//         <SectionTitle sub={`${BLUEPRINTS.length} blueprints · ${BLUEPRINTS.filter(b=>b.status==='Active').length} active`}>Blueprint Library</SectionTitle>
//         <DarkBtn>+ New Blueprint</DarkBtn>
//       </div>
//       <div style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:18 }}>
//         <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
//           {BLUEPRINTS.map(bp => (
//             <div key={bp.id} onClick={()=>setSel(bp)} style={{
//               background: sel.id===bp.id ? T.roseLight : T.cardBg, borderRadius:14, padding:'16px 18px',
//               border: sel.id===bp.id ? `1.5px solid rgba(124,16,64,0.30)` : `1px solid ${T.border}`,
//               cursor:'pointer', transition:'all .18s', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
//               <div>
//                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontWeight:700, color:T.text, margin:'0 0 4px' }}>{bp.name}</p>
//                 <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.muted, margin:0 }}>{bp.id} · {bp.size} · {bp.complexity}</p>
//               </div>
//               <Badge status={bp.status}/>
//             </div>
//           ))}
//         </div>
//         <Card style={{ display:'flex', flexDirection:'column', gap:16 }}>
//           <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//             <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:0 }}>{sel.name}</h4>
//             <div style={{ display:'flex', gap:8 }}><GhostBtn small>Edit</GhostBtn><GhostBtn small>Export PDF</GhostBtn></div>
//           </div>
//           <BlueprintCanvas items={sel.items}/>
//           <div style={{ paddingTop:14, borderTop:`1px solid ${T.border}` }}>
//             <div style={{ display:'flex', gap:28, marginBottom:14 }}>
//               {[['Size',sel.size],['Complexity',sel.complexity]].map(([l,v])=>(
//                 <div key={l}><p style={{ fontSize:10, color:T.muted, marginBottom:3 }}>{l}</p><p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:15, fontWeight:700, color:T.text, margin:0 }}>{v}</p></div>
//               ))}
//               <div><p style={{ fontSize:10, color:T.muted, marginBottom:3 }}>Status</p><Badge status={sel.status}/></div>
//             </div>
//             <FieldLabel>Items ({sel.items.length})</FieldLabel>
//             <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
//               {sel.items.map((item,i) => (
//                 <span key={i} style={{ background:T.roseLight, border:`1px solid ${T.border}`, borderRadius:8, padding:'5px 11px', fontSize:11, color:T.rose, fontWeight:600 }}>{item.e} {item.l}</span>
//               ))}
//             </div>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // ─── PRODUCTS VIEW ────────────────────────────────────────────────────────────
// const ProductsView = ({ products, setProducts }) => {
//   const cats = Object.keys(products);
//   const [cat, setCat]     = useState(cats[0]);
//   const [search, setSearch] = useState('');
//   const [showModal, setModal] = useState(false);

//   const filtered = (products[cat] || []).filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase()) ||
//     p.desc.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleAdd = (category, product) => {
//     setProducts(prev => ({ ...prev, [category]: [...(prev[category] || []), product] }));
//     setCat(category);
//   };

//   return (
//     <div>
//       {showModal && <AddProductModal onClose={()=>setModal(false)} onAdd={handleAdd} existingCategories={Object.keys(products)}/>}

//       <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:24, flexWrap:'wrap', gap:12 }}>
//         <SectionTitle sub={`${Object.values(products).reduce((a,b)=>a+b.length,0)} products · ${cats.length} categories`}>Product Catalogue</SectionTitle>
//         <div style={{ display:'flex', gap:10, alignItems:'center' }}>
//           <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search…"
//             style={{ padding:'9px 14px', borderRadius:8, border:`1px solid ${T.border}`, background:'#FFF8FB', color:T.text, fontFamily:"'Montserrat',sans-serif", fontSize:12, outline:'none', width:170 }}/>
//           <DarkBtn onClick={()=>setModal(true)}>+ Add Product</DarkBtn>
//         </div>
//       </div>

//       {/* Category tabs */}
//       <div style={{ display:'flex', gap:8, marginBottom:20, flexWrap:'wrap' }}>
//         {Object.keys(products).map(c => (
//           <button key={c} onClick={()=>{ setCat(c); setSearch(''); }}
//             style={{ padding:'7px 16px', borderRadius:20, fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:700, cursor:'pointer', border:'none', transition:'all .18s',
//               background: cat===c ? T.rose : T.roseLight, color: cat===c ? '#fff' : T.rose }}>
//             {c} <span style={{ opacity:0.65 }}>({products[c].length})</span>
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:14 }}>
//         {filtered.map(p => (
//           <div key={p.id} style={{ background:T.cardBg, borderRadius:16, border:`1px solid ${T.border}`, overflow:'hidden', transition:'all .2s', cursor:'pointer' }}
//             onMouseEnter={e=>{ e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 24px rgba(124,16,64,0.13)'; }}
//             onMouseLeave={e=>{ e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
//             <div style={{ height:90, background:`linear-gradient(135deg,${p.color},${p.color}88)`, position:'relative' }}>
//               {p.img && <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'}/>}
//               {p.badge && <span style={{ position:'absolute', top:8, left:8, padding:'3px 10px', borderRadius:20, fontSize:8, fontWeight:700, background:T.rose, color:'#fff', textTransform:'uppercase', letterSpacing:'0.8px' }}>{p.badge}</span>}
//             </div>
//             <div style={{ padding:14 }}>
//               <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, color:T.text, margin:'0 0 4px' }}>{p.name}</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.muted, margin:'0 0 10px', lineHeight:1.5, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{p.desc}</p>
//               <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//                 <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:18, fontWeight:700, color:T.roseMid, margin:0 }}>{fmt(p.price)}</p>
//                 <span style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, color:T.muted }}>#{p.id}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//         {filtered.length===0 && (
//           <p style={{ gridColumn:'1/-1', textAlign:'center', padding:48, color:T.muted, fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontStyle:'italic' }}>
//             {search ? `No results for "${search}"` : 'No products yet.'}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// // ─── ANALYTICS VIEW ───────────────────────────────────────────────────────────
// const AnalyticsView = ({ products }) => {
//   const cats = Object.entries(products);
//   const max  = Math.max(...cats.map(([,p])=>p.length), 1);
//   return (
//     <div>
//       <SectionTitle>Analytics Overview</SectionTitle>
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24 }}>
//         {[
//           { label:'Total Products', value: Object.values(products).reduce((a,b)=>a+b.length,0), sub:'All categories' },
//           { label:'Blueprints',     value: BLUEPRINTS.length, sub:`${BLUEPRINTS.filter(b=>b.status==='Active').length} active` },
//           { label:'Recent Orders',  value: ORDERS.length, sub:'Last recorded' },
//           { label:'Categories',     value: Object.keys(products).length, sub:'Product categories' },
//         ].map(k => (
//           <Card key={k.label}>
//             <FieldLabel>{k.label}</FieldLabel>
//             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:36, fontWeight:700, color:T.text, lineHeight:1, margin:'0 0 4px' }}>{k.value}</p>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.muted, margin:0 }}>{k.sub}</p>
//           </Card>
//         ))}
//       </div>
//       <Card style={{ marginBottom:16 }}>
//         <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:'0 0 20px' }}>Products by Category</h4>
//         {cats.map(([c, prods]) => (
//           <div key={c} style={{ marginBottom:14 }}>
//             <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, fontWeight:600, color:T.text, margin:0 }}>{c}</p>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color:T.muted, margin:0 }}>{prods.length} items · avg {fmt(Math.round(prods.reduce((s,p)=>s+p.price,0)/prods.length))}</p>
//             </div>
//             <div style={{ height:8, borderRadius:4, background:'#F3E8EE' }}>
//               <div style={{ height:'100%', borderRadius:4, background:`linear-gradient(90deg,${T.roseLight},${T.roseMid})`, width:`${(prods.length/max)*100}%`, transition:'width .6s' }}/>
//             </div>
//           </div>
//         ))}
//       </Card>
//       <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:14 }}>
//         {['New','Packed','Pending'].map(status => (
//           <Card key={status} style={{ textAlign:'center' }}>
//             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:40, fontWeight:700, color:T.text, margin:'0 0 8px' }}>{ORDERS.filter(o=>o.status===status).length}</p>
//             <Badge status={status}/>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.muted, margin:'8px 0 0' }}>orders</p>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// // ─── SETTINGS VIEW ────────────────────────────────────────────────────────────
// const SettingsView = ({ adminUser, onLogout, products }) => {
//   const [storeName, set_sn] = useState('Wrapping Happiness');
//   const [currency,  set_c]  = useState('PKR (Rs.)');
//   const [notif,     setN]   = useState(true);
//   const [saved,     setSaved] = useState(false);

//   const inp = { padding:'11px 14px', borderRadius:8, border:`1px solid ${T.border}`, background:'#FFF8FB', color:T.text, fontFamily:"'Montserrat',sans-serif", fontSize:13, outline:'none', width:'100%', boxSizing:'border-box' };

//   return (
//     <div>
//       <SectionTitle>Settings</SectionTitle>
//       <Card style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:24 }}>
//         <div>
//           <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:'0 0 3px' }}>{adminUser?.name || 'Admin'}</p>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color:T.muted, margin:0 }}>
//             {adminUser?.email} · <span style={{ color:'#15803D', fontWeight:600 }}>● Admin</span>
//           </p>
//         </div>
//         <DarkBtn onClick={onLogout}>Sign Out</DarkBtn>
//       </Card>

//       <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }}>
//         <Card>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:'0 0 20px' }}>Store Settings</h4>
//           <div style={{ marginBottom:16 }}><FieldLabel>Store Name</FieldLabel><input value={storeName} onChange={e=>set_sn(e.target.value)} style={inp}/></div>
//           <div style={{ marginBottom:16 }}><FieldLabel>Currency</FieldLabel>
//             <select value={currency} onChange={e=>set_c(e.target.value)} style={{ ...inp, cursor:'pointer' }}>
//               <option>PKR (Rs.)</option><option>USD ($)</option><option>GBP (£)</option>
//             </select>
//           </div>
//           <div style={{ marginBottom:22 }}>
//             <FieldLabel>Notifications</FieldLabel>
//             <div style={{ display:'flex', alignItems:'center', gap:12 }}>
//               <div onClick={()=>setN(n=>!n)} style={{ width:44, height:24, borderRadius:12, cursor:'pointer', position:'relative', transition:'background .2s', background: notif ? T.rose : '#E5E7EB' }}>
//                 <div style={{ position:'absolute', top:3, left: notif ? 23 : 3, width:18, height:18, borderRadius:'50%', background:'#fff', transition:'left .2s', boxShadow:'0 1px 4px rgba(0,0,0,0.18)' }}/>
//               </div>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, color:T.muted, margin:0 }}>New order notifications</p>
//             </div>
//           </div>
//           <DarkBtn onClick={()=>{ setSaved(true); setTimeout(()=>setSaved(false),1800); }}>{saved ? '✓ Saved!' : 'Save Changes'}</DarkBtn>
//         </Card>

//         <Card>
//           <h4 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:20, fontWeight:700, color:T.text, margin:'0 0 20px' }}>Product Summary</h4>
//           {Object.entries(products).map(([c, prods]) => (
//             <div key={c} style={{ display:'flex', justifyContent:'space-between', padding:'10px 0', borderBottom:`1px solid ${T.border}` }}>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, color:T.muted, margin:0 }}>{c}</p>
//               <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, color:T.text }}>{prods.length} items</span>
//             </div>
//           ))}
//           <div style={{ display:'flex', justifyContent:'space-between', padding:'12px 0 0' }}>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, fontWeight:700, color:T.rose, margin:0 }}>Total</p>
//             <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:22, fontWeight:700, color:T.roseMid }}>{Object.values(products).reduce((a,b)=>a+b.length,0)}</span>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // ─── ADMIN LOGIN GATE ─────────────────────────────────────────────────────────
// const AdminLoginGate = ({ onSuccess }) => {
//   const [form, setForm] = useState({ email:'', password:'' });
//   const [showPass, setSP] = useState(false);
//   const [loading, setL]   = useState(false);
//   const [error, setError] = useState('');
//   const set = (k,v) => { setForm(p=>({...p,[k]:v})); setError(''); };

//   const login = async () => {
//     if (!form.email || !form.password) { setError('Please fill in both fields.'); return; }
//     setL(true);
//     try {
//       const res  = await fetch('http://localhost:5000/api/users/login', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(form) });
//       const data = await res.json();
//       if (!res.ok)                     { setError(data.message || 'Login failed.'); return; }
//       if (data.user?.role !== 'admin') { setError('Access denied. Admin accounts only.'); return; }
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user',  JSON.stringify(data.user));
//       onSuccess(data.user);
//     } catch { setError('Cannot reach server.'); }
//     finally  { setL(false); }
//   };

//   const inp = { width:'100%', padding:'13px 16px 13px 44px', borderRadius:10, boxSizing:'border-box',
//     border:`1px solid ${T.border}`, background:'#FFF8FB', color:T.text,
//     fontFamily:"'Montserrat',sans-serif", fontSize:13, outline:'none' };

//   return (
//     /* Full-page layout — takes over entire viewport */
//     <div style={{ minHeight:'100vh', display:'grid', gridTemplateColumns:'1fr 1.15fr', fontFamily:"'Montserrat',sans-serif", position:'fixed', inset:0, zIndex:9999, background:T.pageBg }}>

//       {/* Left — dark maroon brand panel (matches image 2) */}
//       <div style={{ background:T.sidebar, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'80px 64px', position:'relative', overflow:'hidden', textAlign:'center' }}>
//         <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,192,212,0.06) 1px,transparent 1px)', backgroundSize:'24px 24px', pointerEvents:'none' }}/>
//         <div style={{ position:'relative', zIndex:1 }}>
//           <svg width="52" height="52" viewBox="0 0 56 56" fill="none" style={{ marginBottom:20 }}>
//             <circle cx="28" cy="28" r="26" stroke="rgba(240,180,200,0.35)" strokeWidth="0.75"/>
//             <path d="M28 8 C20 8 12 16 12 28 C12 40 20 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
//             <path d="M28 8 C36 8 44 16 44 28 C44 40 36 48 28 48" stroke="rgba(240,180,200,0.45)" strokeWidth="0.75" fill="none"/>
//             <path d="M8 28 L48 28" stroke="rgba(240,180,200,0.25)" strokeWidth="0.75"/>
//             <circle cx="28" cy="28" r="4" fill="rgba(240,180,200,0.40)"/>
//             <circle cx="28" cy="28" r="1.5" fill="rgba(255,255,255,0.70)"/>
//           </svg>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:8, fontWeight:700, letterSpacing:'4px', color:'rgba(255,210,225,0.55)', marginBottom:16, textTransform:'uppercase' }}>Admin Portal · Wrapping Happiness</p>
//           <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:48, fontWeight:700, color:'#FFF0F5', lineHeight:0.96, marginBottom:6 }}>Admin</h1>
//           <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:48, fontWeight:400, fontStyle:'italic', color:'rgba(255,192,212,0.85)', marginBottom:36 }}>Dashboard</h1>
//           <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:17, fontStyle:'italic', color:'rgba(255,210,225,0.65)', lineHeight:1.7, maxWidth:280, marginBottom:36 }}>
//             "Manage orders, blueprints &amp; products — all in one place."
//           </p>
//           {['Orders','Blueprints','Products'].map(text => (
//             <div key={text} style={{ display:'flex', alignItems:'center', gap:12, background:'rgba(255,255,255,0.06)', borderRadius:10, padding:'10px 16px', border:'1px solid rgba(249,168,212,0.12)', marginBottom:8 }}>
//               <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color:'rgba(255,210,225,0.65)', margin:0 }}>{text}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right — soft pink form (matches image 2) */}
//       <div style={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'60px 10%', background:'linear-gradient(160deg,#FDF0F4 0%,#FAE4EC 100%)', position:'relative', overflow:'hidden' }}>
//         <div style={{ position:'absolute', bottom:'-40px', right:'-40px', opacity:0.05, pointerEvents:'none' }}>
//           <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
//             <circle cx="140" cy="140" r="130" stroke="#C2185B" strokeWidth="1"/>
//             <circle cx="140" cy="140" r="90"  stroke="#C2185B" strokeWidth="0.5"/>
//           </svg>
//         </div>
//         <div style={{ width:'100%', maxWidth:400, position:'relative', zIndex:1 }}>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:700, letterSpacing:'3px', color:T.roseMid, marginBottom:12, textTransform:'uppercase' }}>✦  Admin Access Only</p>
//           <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:38, fontWeight:700, color:T.text, lineHeight:1, marginBottom:4 }}>Sign in to your</h2>
//           <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:38, fontWeight:400, fontStyle:'italic', color:T.roseMid, marginBottom:28 }}>admin panel</h2>

//           <div style={{ background:T.roseLight, borderRadius:10, padding:'11px 16px', marginBottom:20 }}>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, fontWeight:700, color:T.rose, margin:'0 0 2px' }}>Administrator Login</p>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, color:T.roseMid, margin:0 }}>Only admin-role accounts can access this panel</p>
//           </div>

//           {error && <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:12, color:T.roseMid, marginBottom:14 }}>⚠ {error}</p>}

//           <div style={{ display:'flex', flexDirection:'column', gap:12, marginBottom:20 }}>
//             <div style={{ position:'relative' }}>
//               <span style={{ position:'absolute', left:15, top:'50%', transform:'translateY(-50%)', fontSize:13, pointerEvents:'none' }}>✉</span>
//               <input type="email" placeholder="Admin Email" value={form.email} onChange={e=>set('email',e.target.value)} style={inp} onKeyDown={e=>e.key==='Enter'&&login()}/>
//             </div>
//             <div style={{ position:'relative' }}>
//               <span style={{ position:'absolute', left:15, top:'50%', transform:'translateY(-50%)', fontSize:13, pointerEvents:'none' }}>🔒</span>
//               <input type={showPass?'text':'password'} placeholder="Password" value={form.password} onChange={e=>set('password',e.target.value)} style={{ ...inp, paddingRight:56 }} onKeyDown={e=>e.key==='Enter'&&login()}/>
//               <button onClick={()=>setSP(s=>!s)} style={{ position:'absolute', right:14, top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', fontSize:10, fontWeight:600, color:T.muted }}>{showPass?'Hide':'Show'}</button>
//             </div>
//           </div>

//           <button onClick={login} disabled={loading} style={{
//             width:'100%', padding:16, borderRadius:10, border:'none',
//             background: loading ? 'rgba(124,16,64,0.45)' : T.rose,
//             color:'#FFF0F5', fontFamily:"'Montserrat',sans-serif",
//             fontSize:11, fontWeight:700, letterSpacing:'2.5px', textTransform:'uppercase',
//             cursor: loading?'not-allowed':'pointer', boxShadow:'0 8px 24px rgba(124,16,64,0.28)', marginBottom:14 }}>
//             {loading ? 'Verifying…' : 'Enter Admin Panel ✦'}
//           </button>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:10, textAlign:'center', color:'rgba(124,16,64,0.40)', lineHeight:1.6 }}>Restricted to authorised administrators only.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
// const AdminDashboard = () => {
//   const [nav,         setNav]         = useState('Orders');
//   const [adminUser,   setAdminUser]   = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);
//   const [products,    setProducts]    = useState(GALLERY_PRODUCTS);

//   useEffect(() => {
//     try {
//       const user  = JSON.parse(localStorage.getItem('user') || 'null');
//       const token = localStorage.getItem('token');
//       if (user?.role === 'admin' && token) setAdminUser(user);
//     } catch {}
//     setAuthChecked(true);
//   }, []);

//   const logout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); setAdminUser(null); };

//   if (!authChecked) return null;
//   if (!adminUser)   return <AdminLoginGate onSuccess={setAdminUser}/>;

//   const views = {
//     Orders:     <OrdersView/>,
//     Blueprints: <BlueprintsView/>,
//     Products:   <ProductsView products={products} setProducts={setProducts}/>,
//     Analytics:  <AnalyticsView products={products}/>,
//     Settings:   <SettingsView adminUser={adminUser} onLogout={logout} products={products}/>,
//   };

//   return (
//     /*
//       position:fixed + inset:0 means the dashboard fills the whole screen
//       and sits on top of everything — the site navbar is completely hidden underneath.
//     */
//     <div style={{ position:'fixed', inset:0, zIndex:9999, display:'flex', flexDirection:'column', background:T.pageBg, fontFamily:"'Montserrat',sans-serif", overflow:'hidden' }}>

//       {/* ── Top nav bar ── */}
//       <div style={{ background:T.cardBg, borderBottom:`1px solid ${T.border}`, padding:'0 36px',
//         display:'flex', alignItems:'center', justifyContent:'space-between', height:62, flexShrink:0,
//         boxShadow:'0 2px 12px rgba(124,16,64,0.07)' }}>

//         {/* Logo */}
//         <div style={{ display:'flex', alignItems:'center', gap:12 }}>
//           <div style={{ width:34, height:34, borderRadius:9, background:T.sidebar, display:'flex', alignItems:'center', justifyContent:'center' }}>
//             <svg width="18" height="18" viewBox="0 0 56 56" fill="none">
//               <circle cx="28" cy="28" r="26" stroke="rgba(255,192,212,0.6)" strokeWidth="1.5"/>
//               <circle cx="28" cy="28" r="4" fill="rgba(255,192,212,0.8)"/>
//               <path d="M28 8 C20 8 12 16 12 28" stroke="rgba(255,192,212,0.6)" strokeWidth="1.5" fill="none"/>
//               <path d="M28 8 C36 8 44 16 44 28" stroke="rgba(255,192,212,0.6)" strokeWidth="1.5" fill="none"/>
//             </svg>
//           </div>
//           <div>
//             <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontWeight:700, color:T.text, margin:0, lineHeight:1 }}>Admin Panel</p>
//             <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, color:T.muted, margin:0 }}>Wrapping Happiness</p>
//           </div>
//         </div>

//         {/* Nav links — text only, no icons */}
//         <div style={{ display:'flex', gap:2 }}>
//           {NAV_ITEMS.map(item => (
//             <button key={item} onClick={()=>setNav(item)} style={{
//               padding:'8px 16px', borderRadius:8, border:'none',
//               background: nav===item ? T.roseLight : 'transparent',
//               color:       nav===item ? T.rose      : T.muted,
//               fontFamily: "'Montserrat',sans-serif", fontSize:12,
//               fontWeight:  nav===item ? 700 : 500,
//               cursor:'pointer', transition:'all .18s',
//             }}>{item}</button>
//           ))}
//         </div>

//         {/* User + sign out */}
//         <div style={{ display:'flex', alignItems:'center', gap:12 }}>
//           <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:11, color:T.muted, margin:0 }}>{adminUser?.name}</p>
//           <DarkBtn small onClick={logout}>Sign Out</DarkBtn>
//         </div>
//       </div>

//       {/* ── Scrollable content ── */}
//       <div style={{ flex:1, overflowY:'auto', padding:'36px 40px 80px' }}>
//         {/* Breadcrumb */}
//         <p style={{ fontFamily:"'Montserrat',sans-serif", fontSize:9, fontWeight:700, color:T.muted, textTransform:'uppercase', letterSpacing:'2px', marginBottom:6 }}>
//           Admin · {nav}
//         </p>
//         {views[nav]}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// ─── AdminDashboard.jsx ───────────────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { PRODUCTS as GALLERY_PRODUCTS } from './ProductGallery';

// ─── Theme: light background, white cards, dark text, one maroon accent ──────
const T = {
  pageBg: '#F7F2F4', card: '#FFFFFF', rose: '#8A1040', roseMid: '#B3124F', roseLight: '#FBE8EF',
  border: 'rgba(60,20,40,0.16)', muted: '#5E4A53', text: '#1F1218',
};
const F = "'Montserrat',sans-serif";
const HEAD = "'Cormorant Garamond',serif";
const fmt = n => `Rs. ${Number(n).toLocaleString()}`;
const now = () => new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });

// ─── Order tracking stages ────────────────────────────────────────────────────
const STAGES = ['New', 'Packed', 'Out for Delivery', 'Delivered'];
const NEXT_LABEL = { New: 'Mark as Packed', Packed: 'Send out for delivery', 'Out for Delivery': 'Mark as Delivered' };
const stageOf = o => o.history[o.history.length - 1].stage;
const hist = (...times) => STAGES.slice(0, times.length).map((stage, i) => ({ stage, time: times[i] }));

const ORDERS_INIT = [
  { id: 'WH-024', customer: 'Sana Malik',  phone: '0300 1112233', address: 'Latifabad, Hyderabad',  items: 'Pink Romance ×2',    date: 'Apr 12', total: 4840, payment: 'Card (Stripe)',    tracking: 'TRK-5024', history: hist('12 Apr, 09:10') },
  { id: 'WH-023', customer: 'Fatima Raza', phone: '0301 2223344', address: 'Qasimabad, Hyderabad',  items: 'Birthday Joy',       date: 'Apr 12', total: 2100, payment: 'Card (Stripe)',    tracking: 'TRK-5023', history: hist('12 Apr, 08:30', '12 Apr, 10:00') },
  { id: 'WH-022', customer: 'Hana Sheikh', phone: '0333 4445566', address: 'Hirabad, Hyderabad',    items: 'Balloon Bundle',     date: 'Apr 11', total: 1350, payment: 'Cash on Delivery', tracking: 'TRK-5022', history: hist('11 Apr, 16:00', '11 Apr, 17:20', '12 Apr, 09:00') },
  { id: 'WH-021', customer: 'Zara Ahmed',  phone: '0345 6667788', address: 'Latifabad, Hyderabad',  items: 'Wedding Flower Box', date: 'Apr 11', total: 6200, payment: 'JazzCash',         tracking: 'TRK-5021', history: hist('11 Apr, 11:00', '11 Apr, 12:30', '11 Apr, 14:00', '11 Apr, 15:10') },
  { id: 'WH-020', customer: 'Nida Khan',   phone: '0312 7778899', address: 'Autobahn Road, Hyderabad', items: 'Blush Peony Bunch', date: 'Apr 10', total: 2200, payment: 'EasyPaisa',      tracking: 'TRK-5020', history: hist('10 Apr, 18:45') },
];

const STOCK_INIT = [
  { id: 's1', name: 'Red roses (stems)', qty: 4,  min: 20 },
  { id: 's2', name: 'Foil balloons',     qty: 6,  min: 15 },
  { id: 's3', name: 'Ribbon rolls',      qty: 3,  min: 10 },
  { id: 's4', name: 'Gift cards',        qty: 40, min: 15 },
  { id: 's5', name: 'Cake boxes',        qty: 22, min: 10 },
  { id: 's6', name: 'Wrapping paper',    qty: 30, min: 10 },
];

const BLUEPRINTS = [
  { id: 'BP-001', name: 'Pink Romance Box',   size: '12″×12″', complexity: 'Medium · 5 items',  status: 'Active',
    items: [{ e: '🌸', l: 'Pink Roses', x: '8%', y: '12%' }, { e: '🎀', l: 'Ribbon', x: '42%', y: '22%' }, { e: '🎈', l: 'Balloons ×5', x: '64%', y: '9%' }, { e: '🎂', l: 'Cake', x: '26%', y: '56%' }, { e: '💌', l: 'Card', x: '58%', y: '54%' }] },
  { id: 'BP-002', name: 'Birthday Joy Kit',   size: '10″×10″', complexity: 'Simple · 3 items',  status: 'Pending',
    items: [{ e: '🎂', l: 'Mini Cake', x: '14%', y: '18%' }, { e: '🎈', l: 'Balloons', x: '55%', y: '14%' }, { e: '🌸', l: 'Floral Spray', x: '35%', y: '55%' }] },
  { id: 'BP-003', name: 'Anniversary Grand',  size: '16″×16″', complexity: 'Complex · 7 items', status: 'Active',
    items: [{ e: '🌹', l: 'Roses ×18', x: '8%', y: '10%' }, { e: '🍫', l: 'Macarons', x: '40%', y: '8%' }, { e: '🕯️', l: 'Candle', x: '68%', y: '14%' }, { e: '💌', l: 'Card', x: '20%', y: '52%' }, { e: '🎀', l: 'Ribbon', x: '48%', y: '58%' }, { e: '🧸', l: 'Teddy', x: '70%', y: '50%' }, { e: '🎈', l: 'Foil Balloon', x: '12%', y: '72%' }] },
  { id: 'BP-004', name: 'Eid Mubarak Set',    size: '14″×14″', complexity: 'Medium · 4 items',  status: 'Draft',
    items: [{ e: '🌙', l: 'Crescent', x: '12%', y: '15%' }, { e: '🍬', l: 'Sweets Box', x: '50%', y: '12%' }, { e: '🌸', l: 'Florals', x: '25%', y: '55%' }, { e: '✨', l: 'Fairy Lights', x: '62%', y: '58%' }] },
];

const BADGE_OPTIONS = ['', 'Bestseller', 'New', 'Popular', 'Luxury', 'Trending', 'Seasonal'];
const NAV_ITEMS = ['Orders', 'Blueprints', 'Products', 'Analytics', 'Settings'];

// ─── Print packing slips (opens a print window) ──────────────────────────────
const slipHTML = o => `
  <div class="slip">
    <h2>Wrapping Happiness · Packing Slip</h2>
    <p><b>Order:</b> ${o.id} &nbsp;&nbsp; <b>Tracking:</b> ${o.tracking}</p>
    <p><b>Customer:</b> ${o.customer} (${o.phone})</p>
    <p><b>Address:</b> ${o.address}</p>
    <p><b>Items:</b> ${o.items}</p>
    <p><b>Payment:</b> ${o.payment} · <b>${fmt(o.total)}</b></p>
    <p>☐ Items checked &nbsp;&nbsp; ☐ Gift note added &nbsp;&nbsp; ☐ Packed</p>
  </div>`;

const printSlips = (list) => {
  if (!list.length) { alert('No orders waiting to be packed.'); return; }
  const w = window.open('', '_blank');
  if (!w) { alert('Please allow pop-ups to print.'); return; }
  w.document.write(`<html><head><title>Packing slips</title><style>
    body{font-family:Arial,sans-serif;padding:20px}
    .slip{border:2px dashed #888;padding:16px;margin-bottom:16px;page-break-inside:avoid}
    h2{margin:0 0 10px;font-size:18px} p{margin:6px 0;font-size:14px}
  </style></head><body>${list.map(slipHTML).join('')}</body></html>`);
  w.document.close();
  w.focus();
  setTimeout(() => w.print(), 300);
};

// ─── Export report (downloads a CSV that opens in Excel) ─────────────────────
const exportCSV = (orders) => {
  const q = v => `"${String(v).replace(/"/g, '""')}"`;
  const rows = [['Order', 'Customer', 'Phone', 'Address', 'Items', 'Date', 'Total (Rs.)', 'Payment', 'Status', 'Tracking']]
    .concat(orders.map(o => [o.id, o.customer, o.phone, o.address, o.items, o.date, o.total, o.payment, stageOf(o), o.tracking]));
  const csv = '\uFEFF' + rows.map(r => r.map(q).join(',')).join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }));
  a.download = `orders-report-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
};

// ─── Small building blocks ────────────────────────────────────────────────────
const Btn = ({ children, onClick, ghost, small, disabled }) => (
  <button onClick={onClick} disabled={disabled} style={{
    padding: small ? '8px 14px' : '11px 20px', borderRadius: 8, fontFamily: F, fontSize: small ? 12 : 14, fontWeight: 700,
    border: ghost ? `1.5px solid ${T.rose}` : 'none', background: ghost ? '#fff' : T.rose, color: ghost ? T.rose : '#fff',
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
  }}>{children}</button>
);

const Card = ({ children, style = {} }) => (
  <div style={{ background: T.card, borderRadius: 14, padding: 22, border: `1px solid ${T.border}`, ...style }}>{children}</div>
);

const Label = ({ children }) => (
  <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: T.muted, margin: '0 0 6px' }}>{children}</p>
);

const PageTitle = ({ children, sub }) => (
  <div style={{ marginBottom: 20 }}>
    <h2 style={{ fontFamily: HEAD, fontSize: 32, fontWeight: 700, color: T.text, margin: '0 0 4px' }}>{children}</h2>
    {sub && <p style={{ fontFamily: F, fontSize: 14, color: T.muted, margin: 0 }}>{sub}</p>}
  </div>
);

const STATUS_STYLE = {
  New:                { bg: '#FCE7F3', color: '#9D174D' },
  Packed:             { bg: '#DBEAFE', color: '#1E40AF' },
  'Out for Delivery': { bg: '#FEF3C7', color: '#92400E' },
  Delivered:          { bg: '#DCFCE7', color: '#166534' },
  Active:             { bg: '#DCFCE7', color: '#166534' },
  Pending:            { bg: '#FEF3C7', color: '#92400E' },
  Draft:              { bg: '#E5E7EB', color: '#374151' },
  Low:                { bg: '#FEE2E2', color: '#991B1B' },
  OK:                 { bg: '#DCFCE7', color: '#166534' },
};
const Badge = ({ status }) => (
  <span style={{ padding: '5px 12px', borderRadius: 20, fontFamily: F, fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap',
    background: STATUS_STYLE[status]?.bg || '#E5E7EB', color: STATUS_STYLE[status]?.color || T.muted }}>{status}</span>
);

const Modal = ({ title, onClose, children, width = 520 }) => (
  <div style={{ position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(31,18,24,0.5)' }} />
    <div style={{ position: 'relative', width, maxWidth: '94vw', maxHeight: '90vh', overflowY: 'auto', background: T.card, borderRadius: 16, padding: 28, boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <h3 style={{ fontFamily: HEAD, fontSize: 26, fontWeight: 700, color: T.text, margin: 0 }}>{title}</h3>
        <button onClick={onClose} style={{ width: 34, height: 34, borderRadius: 8, border: `1px solid ${T.border}`, background: '#fff', color: T.text, fontSize: 20, cursor: 'pointer' }}>×</button>
      </div>
      {children}
    </div>
  </div>
);

const inputStyle = { width: '100%', padding: '11px 14px', borderRadius: 8, border: `1.5px solid ${T.border}`, background: '#fff', color: T.text, fontFamily: F, fontSize: 14, outline: 'none', boxSizing: 'border-box' };
const th = { padding: '0 10px 12px 0', textAlign: 'left', fontFamily: F, fontSize: 12, fontWeight: 700, color: T.muted };
const td = { padding: '14px 10px 14px 0', fontFamily: F, fontSize: 14, color: T.text, borderTop: `1px solid ${T.border}` };

// ─── Track an order (timeline + update status) ───────────────────────────────
const TrackModal = ({ order, onClose, onAdvance }) => {
  const stage = stageOf(order);
  const nextLabel = NEXT_LABEL[stage];
  return (
    <Modal title={`Track ${order.id}`} onClose={onClose} width={520}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 22 }}>
        {[['Customer', order.customer], ['Phone', order.phone], ['Address', order.address], ['Items', order.items], ['Payment', order.payment], ['Tracking no.', order.tracking]].map(([l, v]) => (
          <div key={l}><Label>{l}</Label><p style={{ fontFamily: F, fontSize: 14, color: T.text, margin: 0 }}>{v}</p></div>
        ))}
      </div>

      <Label>Delivery progress</Label>
      <div style={{ margin: '10px 0 24px' }}>
        {STAGES.map((s, i) => {
          const done = i < order.history.length;
          return (
            <div key={s} style={{ display: 'flex', gap: 14 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: done ? T.rose : '#E5E7EB', color: done ? '#fff' : T.muted, fontFamily: F, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{done ? '✓' : i + 1}</div>
                {i < STAGES.length - 1 && <div style={{ width: 2, height: 30, background: i < order.history.length - 1 ? T.rose : '#E5E7EB' }} />}
              </div>
              <div style={{ paddingBottom: 14 }}>
                <p style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: done ? T.text : T.muted, margin: 0 }}>{s}</p>
                <p style={{ fontFamily: F, fontSize: 12, color: T.muted, margin: '2px 0 0' }}>{done ? order.history[i].time : 'Not yet'}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        {nextLabel
          ? <Btn onClick={() => onAdvance(order.id)}>{nextLabel}</Btn>
          : <span style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: '#166534' }}>✓ This order has been delivered</span>}
        <Btn ghost onClick={() => printSlips([order])}>Print slip</Btn>
      </div>
    </Modal>
  );
};

// ─── Restock alert ────────────────────────────────────────────────────────────
const RestockModal = ({ stock, onClose, onRestock }) => {
  const [copied, setCopied] = useState(false);
  const low = stock.filter(s => s.qty < s.min);
  const message = low.length
    ? 'Restock needed (Wrapping Happiness):\n' + low.map(s => `- ${s.name}: ${s.qty} left (minimum ${s.min})`).join('\n')
    : 'All stock levels are fine.';
  const copy = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(message).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1800); });
  };
  return (
    <Modal title="Stock levels" onClose={onClose} width={560}>
      <p style={{ fontFamily: F, fontSize: 14, color: T.muted, margin: '0 0 16px' }}>
        {low.length ? `${low.length} item(s) are below the minimum and need restocking.` : 'Everything is above the minimum level.'}
      </p>
      {stock.map(s => {
        const isLow = s.qty < s.min;
        return (
          <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderTop: `1px solid ${T.border}` }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: T.text, margin: 0 }}>{s.name}</p>
              <p style={{ fontFamily: F, fontSize: 12, color: T.muted, margin: '2px 0 0' }}>{s.qty} in stock · minimum {s.min}</p>
            </div>
            <Badge status={isLow ? 'Low' : 'OK'} />
            {isLow && <Btn small ghost onClick={() => onRestock(s.id)}>+20 restocked</Btn>}
          </div>
        );
      })}
      <div style={{ marginTop: 18, display: 'flex', gap: 10 }}>
        <Btn onClick={copy} disabled={!low.length}>{copied ? '✓ Copied' : 'Copy alert message'}</Btn>
        <Btn ghost onClick={onClose}>Close</Btn>
      </div>
    </Modal>
  );
};

// ─── ORDERS ───────────────────────────────────────────────────────────────────
const OrdersView = ({ orders, stock, onTrack, onOpenRestock }) => {
  const [filter, setFilter] = useState('All');
  const [q, setQ] = useState('');
  const count = s => orders.filter(o => stageOf(o) === s).length;
  const lowCount = stock.filter(s => s.qty < s.min).length;
  const toPack = orders.filter(o => ['New', 'Packed'].includes(stageOf(o)));
  const list = orders.filter(o =>
    (filter === 'All' || stageOf(o) === filter) &&
    `${o.id} ${o.customer} ${o.tracking}`.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <PageTitle sub="See every order and where it is right now">Orders</PageTitle>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Btn onClick={() => printSlips(toPack)}>Print packing slips ({toPack.length})</Btn>
          <Btn ghost onClick={() => exportCSV(orders)}>Export report</Btn>
          <Btn ghost onClick={onOpenRestock}>Restock alert{lowCount ? ` (${lowCount})` : ''}</Btn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 22 }}>
        {[['New orders', count('New'), 'Waiting to be packed'], ['On the way', count('Out for Delivery'), 'Out for delivery'], ['Delivered', count('Delivered'), 'Completed'], ['Low stock', lowCount, lowCount ? 'Needs restocking' : 'All good']].map(([l, v, s]) => (
          <Card key={l}>
            <Label>{l}</Label>
            <p style={{ fontFamily: HEAD, fontSize: 38, fontWeight: 700, color: T.text, lineHeight: 1, margin: '0 0 4px' }}>{v}</p>
            <p style={{ fontFamily: F, fontSize: 13, color: T.muted, margin: 0 }}>{s}</p>
          </Card>
        ))}
      </div>

      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['All', ...STAGES].map(s => (
              <button key={s} onClick={() => setFilter(s)} style={{ padding: '8px 14px', borderRadius: 20, border: 'none', fontFamily: F, fontSize: 13, fontWeight: 700, cursor: 'pointer', background: filter === s ? T.rose : T.roseLight, color: filter === s ? '#fff' : T.rose }}>{s}</button>
            ))}
          </div>
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search order, name or tracking no." style={{ ...inputStyle, width: 260 }} />
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>{['Order', 'Customer', 'Items', 'Total', 'Status', ''].map(h => <th key={h} style={th}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {list.map(o => (
                <tr key={o.id}>
                  <td style={{ ...td, fontWeight: 700 }}>{o.id}<div style={{ fontSize: 12, fontWeight: 400, color: T.muted }}>{o.tracking}</div></td>
                  <td style={td}>{o.customer}</td>
                  <td style={td}>{o.items}</td>
                  <td style={{ ...td, fontWeight: 700 }}>{fmt(o.total)}</td>
                  <td style={td}><Badge status={stageOf(o)} /></td>
                  <td style={{ ...td, textAlign: 'right' }}><Btn small ghost onClick={() => onTrack(o.id)}>Track</Btn></td>
                </tr>
              ))}
            </tbody>
          </table>
          {list.length === 0 && <p style={{ textAlign: 'center', padding: 30, fontFamily: F, fontSize: 14, color: T.muted }}>No orders match.</p>}
        </div>
      </Card>
    </div>
  );
};

// ─── BLUEPRINTS ───────────────────────────────────────────────────────────────
const BlueprintCanvas = ({ items }) => (
  <div style={{ background: '#FFF8FB', border: `1.5px dashed ${T.border}`, borderRadius: 12, height: 170, position: 'relative', overflow: 'hidden' }}>
    {items.map((item, i) => (
      <div key={i} style={{ position: 'absolute', left: item.x, top: item.y, background: T.roseLight, border: `1px solid ${T.border}`, borderRadius: 8, padding: '5px 10px', fontFamily: F, fontSize: 12, color: T.rose, fontWeight: 700, whiteSpace: 'nowrap' }}>
        {item.e} {item.l}
      </div>
    ))}
  </div>
);

const BlueprintsView = () => {
  const [sel, setSel] = useState(BLUEPRINTS[0]);
  return (
    <div>
      <PageTitle sub="Gift layouts your team follows when packing">Blueprints</PageTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 18 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {BLUEPRINTS.map(bp => (
            <div key={bp.id} onClick={() => setSel(bp)} style={{ background: sel.id === bp.id ? T.roseLight : T.card, borderRadius: 12, padding: '14px 18px', border: sel.id === bp.id ? `2px solid ${T.rose}` : `1px solid ${T.border}`, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <div>
                <p style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: T.text, margin: '0 0 3px' }}>{bp.name}</p>
                <p style={{ fontFamily: F, fontSize: 12, color: T.muted, margin: 0 }}>{bp.size} · {bp.complexity}</p>
              </div>
              <Badge status={bp.status} />
            </div>
          ))}
        </div>
        <Card>
          <h4 style={{ fontFamily: F, fontSize: 17, fontWeight: 700, color: T.text, margin: '0 0 14px' }}>{sel.name}</h4>
          <BlueprintCanvas items={sel.items} />
          <div style={{ display: 'flex', gap: 28, margin: '16px 0' }}>
            <div><Label>Size</Label><p style={{ fontFamily: F, fontSize: 14, color: T.text, margin: 0 }}>{sel.size}</p></div>
            <div><Label>Complexity</Label><p style={{ fontFamily: F, fontSize: 14, color: T.text, margin: 0 }}>{sel.complexity}</p></div>
          </div>
          <Label>Items to pack ({sel.items.length})</Label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {sel.items.map((item, i) => (
              <span key={i} style={{ background: T.roseLight, borderRadius: 8, padding: '6px 12px', fontFamily: F, fontSize: 13, color: T.rose, fontWeight: 700 }}>{item.e} {item.l}</span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────
const AddProductModal = ({ onClose, onAdd, categories }) => {
  const [form, setForm] = useState({ name: '', category: categories[0], newCat: '', price: '', desc: '', badge: '', img: '' });
  const [error, setError] = useState('');
  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setError(''); };

  const submit = () => {
    const cat = form.newCat.trim() || form.category;
    if (!form.name.trim())            return setError('Please enter a name.');
    if (!form.price || form.price <= 0) return setError('Please enter a valid price.');
    if (!form.desc.trim())            return setError('Please enter a description.');
    onAdd(cat, { id: `P${Date.now()}`, name: form.name.trim(), desc: form.desc.trim(), price: Number(form.price), color: '#F9D0E0', badge: form.badge, img: form.img.trim() });
    onClose();
  };

  return (
    <Modal title="Add a product" onClose={onClose}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div><Label>Name</Label><input value={form.name} onChange={e => set('name', e.target.value)} placeholder="e.g. Blush Peony Bunch" style={inputStyle} /></div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div><Label>Category</Label>
            <select value={form.category} onChange={e => set('category', e.target.value)} style={inputStyle}>
              {categories.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div><Label>Or new category</Label><input value={form.newCat} onChange={e => set('newCat', e.target.value)} placeholder="Optional" style={inputStyle} /></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div><Label>Price (Rs.)</Label><input type="number" value={form.price} onChange={e => set('price', e.target.value)} placeholder="2400" style={inputStyle} /></div>
          <div><Label>Badge</Label>
            <select value={form.badge} onChange={e => set('badge', e.target.value)} style={inputStyle}>
              {BADGE_OPTIONS.map(b => <option key={b} value={b}>{b || 'None'}</option>)}
            </select>
          </div>
        </div>
        <div><Label>Description</Label><textarea value={form.desc} onChange={e => set('desc', e.target.value)} rows={3} placeholder="Short description" style={{ ...inputStyle, resize: 'vertical' }} /></div>
        <div><Label>Image path (optional)</Label><input value={form.img} onChange={e => set('img', e.target.value)} placeholder="/img/bouquet-1.jpg" style={inputStyle} /></div>
        {error && <p style={{ fontFamily: F, fontSize: 13, color: '#B91C1C', margin: 0 }}>⚠ {error}</p>}
        <div style={{ display: 'flex', gap: 10 }}><Btn onClick={submit}>Add product</Btn><Btn ghost onClick={onClose}>Cancel</Btn></div>
      </div>
    </Modal>
  );
};

const ProductsView = ({ products, setProducts }) => {
  const cats = Object.keys(products);
  const [cat, setCat] = useState(cats[0]);
  const [search, setSearch] = useState('');
  const [showModal, setModal] = useState(false);
  const total = Object.values(products).reduce((a, b) => a + b.length, 0);
  const filtered = (products[cat] || []).filter(p => `${p.name} ${p.desc}`.toLowerCase().includes(search.toLowerCase()));

  const handleAdd = (category, product) => {
    setProducts(prev => ({ ...prev, [category]: [...(prev[category] || []), product] }));
    setCat(category);
  };

  return (
    <div>
      {showModal && <AddProductModal onClose={() => setModal(false)} onAdd={handleAdd} categories={cats} />}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
        <PageTitle sub={`${total} products in ${cats.length} categories`}>Products</PageTitle>
        <div style={{ display: 'flex', gap: 10 }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products" style={{ ...inputStyle, width: 200 }} />
          <Btn onClick={() => setModal(true)}>+ Add product</Btn>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 18, flexWrap: 'wrap' }}>
        {cats.map(c => (
          <button key={c} onClick={() => { setCat(c); setSearch(''); }} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', fontFamily: F, fontSize: 13, fontWeight: 700, cursor: 'pointer', background: cat === c ? T.rose : T.roseLight, color: cat === c ? '#fff' : T.rose }}>
            {c} ({products[c].length})
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(210px,1fr))', gap: 14 }}>
        {filtered.map(p => (
          <div key={p.id} style={{ background: T.card, borderRadius: 14, border: `1px solid ${T.border}`, overflow: 'hidden' }}>
            <div style={{ height: 90, background: p.color || '#F9D0E0', position: 'relative' }}>
              {p.img && <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; }} />}
              {p.badge && <span style={{ position: 'absolute', top: 8, left: 8, padding: '3px 10px', borderRadius: 20, fontFamily: F, fontSize: 11, fontWeight: 700, background: T.rose, color: '#fff' }}>{p.badge}</span>}
            </div>
            <div style={{ padding: 14 }}>
              <p style={{ fontFamily: F, fontSize: 15, fontWeight: 700, color: T.text, margin: '0 0 4px' }}>{p.name}</p>
              <p style={{ fontFamily: F, fontSize: 13, color: T.muted, margin: '0 0 10px', lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</p>
              <p style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: T.roseMid, margin: 0 }}>{fmt(p.price)}</p>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, fontFamily: F, fontSize: 14, color: T.muted }}>{search ? `No results for "${search}"` : 'No products yet.'}</p>}
      </div>
    </div>
  );
};

// ─── ANALYTICS ────────────────────────────────────────────────────────────────
const AnalyticsView = ({ products, orders }) => {
  const cats = Object.entries(products);
  const max = Math.max(...cats.map(([, p]) => p.length), 1);
  const revenue = orders.reduce((s, o) => s + o.total, 0);
  return (
    <div>
      <PageTitle sub="A quick look at how the shop is doing">Analytics</PageTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14, marginBottom: 20 }}>
        {[['Products', Object.values(products).reduce((a, b) => a + b.length, 0)], ['Orders', orders.length], ['Delivered', orders.filter(o => stageOf(o) === 'Delivered').length], ['Order value', fmt(revenue)]].map(([l, v]) => (
          <Card key={l}><Label>{l}</Label><p style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 700, color: T.text, margin: 0 }}>{v}</p></Card>
        ))}
      </div>
      <Card style={{ marginBottom: 16 }}>
        <h4 style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: T.text, margin: '0 0 16px' }}>Products by category</h4>
        {cats.map(([c, prods]) => (
          <div key={c} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontFamily: F, fontSize: 14, fontWeight: 700, color: T.text }}>{c}</span>
              <span style={{ fontFamily: F, fontSize: 13, color: T.muted }}>{prods.length} items</span>
            </div>
            <div style={{ height: 10, borderRadius: 5, background: '#EDE3E8' }}>
              <div style={{ height: '100%', borderRadius: 5, background: T.rose, width: `${(prods.length / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </Card>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {STAGES.map(s => (
          <Card key={s} style={{ textAlign: 'center' }}>
            <p style={{ fontFamily: HEAD, fontSize: 38, fontWeight: 700, color: T.text, margin: '0 0 8px' }}>{orders.filter(o => stageOf(o) === s).length}</p>
            <Badge status={s} />
          </Card>
        ))}
      </div>
    </div>
  );
};

// ─── SETTINGS ─────────────────────────────────────────────────────────────────
const SettingsView = ({ adminUser, onLogout }) => {
  const [storeName, setStoreName] = useState('Wrapping Happiness');
  const [notif, setNotif] = useState(true);
  const [saved, setSaved] = useState(false);
  return (
    <div style={{ maxWidth: 640 }}>
      <PageTitle sub="Your account and store details">Settings</PageTitle>
      <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <p style={{ fontFamily: F, fontSize: 16, fontWeight: 700, color: T.text, margin: '0 0 3px' }}>{adminUser?.name || 'Admin'}</p>
          <p style={{ fontFamily: F, fontSize: 13, color: T.muted, margin: 0 }}>{adminUser?.email}</p>
        </div>
        <Btn ghost onClick={onLogout}>Sign out</Btn>
      </Card>
      <Card>
        <div style={{ marginBottom: 16 }}><Label>Store name</Label><input value={storeName} onChange={e => setStoreName(e.target.value)} style={inputStyle} /></div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <div onClick={() => setNotif(n => !n)} style={{ width: 46, height: 26, borderRadius: 13, cursor: 'pointer', position: 'relative', background: notif ? T.rose : '#9CA3AF' }}>
            <div style={{ position: 'absolute', top: 3, left: notif ? 23 : 3, width: 20, height: 20, borderRadius: '50%', background: '#fff', transition: 'left .2s' }} />
          </div>
          <span style={{ fontFamily: F, fontSize: 14, color: T.text }}>Notify me about new orders</span>
        </div>
        <Btn onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 1800); }}>{saved ? '✓ Saved' : 'Save changes'}</Btn>
      </Card>
    </div>
  );
};

// ─── ADMIN LOGIN ──────────────────────────────────────────────────────────────
const AdminLoginGate = ({ onSuccess }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setError(''); };

  const login = async () => {
    if (!form.email || !form.password) { setError('Please fill in both fields.'); return; }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Login failed.'); return; }
      if (data.user?.role !== 'admin') { setError('Access denied. Admin accounts only.'); return; }
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      onSuccess(data.user);
    } catch { setError('Cannot reach the server.'); }
    finally { setLoading(false); }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.pageBg, fontFamily: F }}>
      <div style={{ width: 400, maxWidth: '92vw', background: T.card, borderRadius: 16, padding: 36, border: `1px solid ${T.border}`, boxShadow: '0 20px 50px rgba(60,20,40,0.12)' }}>
        <p style={{ fontFamily: F, fontSize: 12, fontWeight: 700, color: T.roseMid, margin: '0 0 8px' }}>Wrapping Happiness · Admin</p>
        <h2 style={{ fontFamily: HEAD, fontSize: 34, fontWeight: 700, color: T.text, margin: '0 0 20px' }}>Sign in</h2>
        {error && <p style={{ fontFamily: F, fontSize: 13, color: '#B91C1C', margin: '0 0 12px' }}>⚠ {error}</p>}
        <div style={{ marginBottom: 14 }}><Label>Email</Label><input type="email" value={form.email} onChange={e => set('email', e.target.value)} onKeyDown={e => e.key === 'Enter' && login()} style={inputStyle} /></div>
        <div style={{ marginBottom: 22 }}>
          <Label>Password</Label>
          <div style={{ position: 'relative' }}>
            <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => set('password', e.target.value)} onKeyDown={e => e.key === 'Enter' && login()} style={{ ...inputStyle, paddingRight: 60 }} />
            <button onClick={() => setShowPass(s => !s)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: F, fontSize: 12, fontWeight: 700, color: T.rose }}>{showPass ? 'Hide' : 'Show'}</button>
          </div>
        </div>
        <button onClick={login} disabled={loading} style={{ width: '100%', padding: 14, borderRadius: 10, border: 'none', background: loading ? '#B98AA0' : T.rose, color: '#fff', fontFamily: F, fontSize: 15, fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Checking…' : 'Enter admin panel'}
        </button>
        <p style={{ fontFamily: F, fontSize: 12, textAlign: 'center', color: T.muted, margin: '14px 0 0' }}>Only administrator accounts can sign in.</p>
      </div>
    </div>
  );
};

// ─── MAIN DASHBOARD ───────────────────────────────────────────────────────────
const AdminDashboard = () => {
  const [nav, setNav] = useState('Orders');
  const [adminUser, setAdminUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [products, setProducts] = useState(GALLERY_PRODUCTS);
  const [orders, setOrders] = useState(ORDERS_INIT);
  const [stock, setStock] = useState(STOCK_INIT);
  const [trackId, setTrackId] = useState(null);
  const [showRestock, setShowRestock] = useState(false);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem('user') || 'null');
      const token = localStorage.getItem('token');
      if (user?.role === 'admin' && token) setAdminUser(user);
    } catch { /* ignore */ }
    setAuthChecked(true);
  }, []);

  const logout = () => { localStorage.removeItem('token'); localStorage.removeItem('user'); setAdminUser(null); };

  // Move an order to its next tracking stage
  const advanceOrder = (id) => setOrders(prev => prev.map(o => {
    if (o.id !== id || o.history.length >= STAGES.length) return o;
    return { ...o, history: [...o.history, { stage: STAGES[o.history.length], time: now() }] };
  }));

  const restockItem = (id) => setStock(prev => prev.map(s => s.id === id ? { ...s, qty: s.qty + 20 } : s));

  if (!authChecked) return null;
  if (!adminUser) return <AdminLoginGate onSuccess={setAdminUser} />;

  const views = {
    Orders:     <OrdersView orders={orders} stock={stock} onTrack={setTrackId} onOpenRestock={() => setShowRestock(true)} />,
    Blueprints: <BlueprintsView />,
    Products:   <ProductsView products={products} setProducts={setProducts} />,
    Analytics:  <AnalyticsView products={products} orders={orders} />,
    Settings:   <SettingsView adminUser={adminUser} onLogout={logout} />,
  };
  const trackedOrder = orders.find(o => o.id === trackId);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', flexDirection: 'column', background: T.pageBg, fontFamily: F, overflow: 'hidden' }}>

      {/* Top bar */}
      <div style={{ background: T.card, borderBottom: `1px solid ${T.border}`, padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, flexShrink: 0 }}>
        <p style={{ fontFamily: HEAD, fontSize: 22, fontWeight: 700, color: T.rose, margin: 0 }}>Wrapping Happiness <span style={{ fontFamily: F, fontSize: 13, fontWeight: 600, color: T.muted }}>· Admin</span></p>
        <div style={{ display: 'flex', gap: 4 }}>
          {NAV_ITEMS.map(item => (
            <button key={item} onClick={() => setNav(item)} style={{ padding: '9px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontFamily: F, fontSize: 14, fontWeight: 700, background: nav === item ? T.rose : 'transparent', color: nav === item ? '#fff' : T.text }}>{item}</button>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: F, fontSize: 13, color: T.muted }}>{adminUser?.name}</span>
          <Btn small ghost onClick={logout}>Sign out</Btn>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '32px 40px 80px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>{views[nav]}</div>
      </div>

      {trackedOrder && <TrackModal order={trackedOrder} onClose={() => setTrackId(null)} onAdvance={advanceOrder} />}
      {showRestock && <RestockModal stock={stock} onClose={() => setShowRestock(false)} onRestock={restockItem} />}
    </div>
  );
};

export default AdminDashboard;
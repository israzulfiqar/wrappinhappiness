
// const express = require('express');

// const router = express.Router();

// const str = (value, max) =>
//   typeof value === 'string' ? value.trim().slice(0, max) : '';

// function cleanCatalog(raw) {
//   if (!Array.isArray(raw)) return [];
//   return raw
//     .map((i) => ({ id: str(i && i.id, 40) }))
//     .filter((i) => i.id);
// }

// // Curated combos per theme. Edit this list to change what AI Stylist suggests.
// const CURATED_BUNDLES = {
//   birthday: [
//     { title: 'Sweet Blush Set',        reason: 'Soft pinks and playful bubblegum tones make this a cheerful birthday favorite.', flowers: 'f1',  balloons: 'b3',  cake: 'c3'  },
//     { title: 'Ocean Confetti Surprise', reason: 'Cool blues and a pop of confetti bring festive birthday energy.',                flowers: 'f10', balloons: 'b5',  cake: 'c9'  },
//     { title: 'Lilac Silver Dream',     reason: 'Lilac and silver tones create a dreamy, elegant birthday look.',                  flowers: 'f11', balloons: 'b9',  cake: 'c4'  },
//     { title: 'Ruby Blush Celebration', reason: 'Deep ruby roses paired with soft blush make a striking birthday gift.',           flowers: 'f12', balloons: 'b10', cake: 'c10' },
//   ],
//   anniversary: [
//     { title: 'Scarlet Gold Romance',   reason: 'Rich scarlet and gold hues set a romantic tone for anniversaries.',               flowers: 'f5', balloons: 'b8', cake: 'c1' },
//     { title: 'Sage Blush Elegance',    reason: 'Soft sage and blush tones bring a gentle, romantic anniversary feel.',            flowers: 'f6', balloons: 'b4', cake: 'c6' },
//     { title: 'Golden Kraft Charm',     reason: 'Warm golden tones and rustic kraft wrap create a charming anniversary set.',      flowers: 'f7', balloons: 'b8', cake: 'c8' },
//   ],
//   wedding: [
//     { title: 'Crimson Rose Romance',   reason: 'Classic crimson roses throughout make an elegant, timeless wedding choice.',      flowers: 'f2', balloons: 'b1', cake: 'c7' },
//     { title: 'Midnight Rose Affair',   reason: 'Deep reds and soft pinks combine for a romantic wedding gift.',                   flowers: 'f8', balloons: 'b2', cake: 'c5' },
//     { title: 'Blush Gladiolus Set',    reason: 'Blush and red tones bring warmth and romance to this wedding set.',               flowers: 'f9', balloons: 'b6', cake: 'c2' },
//   ],
// };

// // Swap this function out for a real AI call later — everything else stays the same.
// function getBundlesFor(occasion) {
//   return CURATED_BUNDLES[occasion.toLowerCase()] || [];
// }

// router.post('/', async (req, res) => {
//   const body = req.body || {};
//   const occasion = str(body.occasion, 100);
//   const catalog = cleanCatalog(body.catalog);

//   if (!occasion) return res.status(400).json({ message: 'occasion is required' });

//   const bundles = getBundlesFor(occasion);

//   // Only send back bundles whose ids actually exist in what the page sent us.
//   const validIds = new Set(catalog.map((i) => i.id));
//   const safeBundles = bundles.filter(
//     (b) => validIds.size === 0 || (validIds.has(b.flowers) && validIds.has(b.balloons) && validIds.has(b.cake))
//   );

//   // Brief delay so the loading spinner still shows, matching how a live AI call will feel.
//   await new Promise((resolve) => setTimeout(resolve, 700));

//   res.json({ occasion, bundles: safeBundles });
// });

// module.exports = router;

// AiPicks.jsx
// Renders the AI Stylist's 3 options inside the sidebar card.
// picks: [{ title, reason, items: [bouquet, balloons, cake] }]
// onAdd: (item) => void      onAddAll: (items) => void

const formatRs = (n) => `Rs. ${n.toLocaleString()}`;
const LABELS = ['Bouquet', 'Balloons', 'Cake'];

const AiPicks = ({ picks, error, onAdd, onAddAll }) => {
  if (error) {
    return (
      <p style={{
        fontFamily: "'Montserrat',sans-serif", fontSize: '11px',
        color: 'rgba(90,20,45,0.60)', textAlign: 'center',
        padding: '10px 0', fontStyle: 'italic',
      }}>{error}</p>
    );
  }

  if (picks.length === 0) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {picks.map((bundle, idx) => {
        const total = bundle.items.reduce((s, i) => s + i.price, 0);
        return (
          <div key={idx} style={{
            padding: '10px', borderRadius: '10px', background: '#fff',
            border: '1px solid rgba(212,83,126,0.18)',
            boxShadow: '0 2px 10px rgba(212,83,126,0.08)',
          }}>
            <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '2px', color: '#993556', textTransform: 'uppercase', opacity: 0.7, marginBottom: '2px' }}>
              Option {idx + 1}
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '16px', fontWeight: 700, color: '#2A0A18', marginBottom: '3px' }}>
              {bundle.title}
            </p>
            {bundle.reason && (
              <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '10px', color: 'rgba(90,20,45,0.60)', lineHeight: 1.4, marginBottom: '8px' }}>
                {bundle.reason}
              </p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {bundle.items.map((item, i) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <img
                    src={item.img} alt={item.name} draggable={false}
                    style={{ width: '38px', height: '38px', objectFit: 'contain', flexShrink: 0, mixBlendMode: 'multiply' }}
                  />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '8px', fontWeight: 700, letterSpacing: '1px', color: '#993556', textTransform: 'uppercase', opacity: 0.7 }}>
                      {LABELS[i]}
                    </p>
                    <p style={{ fontFamily: "'Montserrat',sans-serif", fontSize: '11px', fontWeight: 700, color: '#2A0A18', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.name}
                    </p>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '12px', fontWeight: 700, color: '#8A1A40' }}>
                      {formatRs(item.price)}
                    </p>
                  </div>
                  <button
                    onClick={() => onAdd(item)} title="Add just this item"
                    style={{
                      width: '24px', height: '24px', flexShrink: 0, borderRadius: '50%',
                      border: '1px solid rgba(192,58,106,0.35)', background: 'transparent',
                      cursor: 'pointer', color: '#C03A6A', fontSize: '16px', lineHeight: 1,
                    }}
                  >+</button>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', gap: '8px' }}>
              <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '14px', fontWeight: 700, color: '#2A0A18' }}>
                {formatRs(total)}
              </span>
              <button
                onClick={() => onAddAll(bundle.items)}
                style={{
                  padding: '7px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  background: 'linear-gradient(135deg,#C03A6A,#8A1A40)', color: '#fff',
                  fontFamily: "'Montserrat',sans-serif", fontSize: '9px', fontWeight: 700,
                  letterSpacing: '1px', textTransform: 'uppercase',
                  boxShadow: '0 4px 12px rgba(192,58,106,0.30)',
                }}
              >Add all</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AiPicks;
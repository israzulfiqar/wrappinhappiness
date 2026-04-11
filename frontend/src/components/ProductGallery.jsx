import { useState } from 'react';
import styles from '../theme';
import HoverCard from './HoverCard';

const CATEGORIES = ['Fresh Flowers', 'Pintresty Cakes', 'Balloons Arrangements', "Quick Surprise Bundles", "Add on's"];

const PRODUCTS = {
  'Fresh Flowers': [
    { id: 101, name: 'Red Velvet Roses', price: '2,500', icon: '🌹', cat: 'Fresh Flowers' },
    { id: 102, name: 'Sunbeam Lilies',   price: '3,200', icon: '🌸', cat: 'Fresh Flowers' },
    { id: 103, name: 'White Tulip Box',  price: '4,500', icon: '🌷', cat: 'Fresh Flowers' },
    { id: 104, name: 'Lavender Bunch',   price: '2,800', icon: '🪻', cat: 'Fresh Flowers' },
  ],
  'Pintresty Cakes': [
    { id: 201, name: 'Bento Love Cake',  price: '1,500', icon: '🎂', cat: 'Pintresty Cakes' },
    { id: 202, name: 'Vintage Lambeth',  price: '3,500', icon: '🍰', cat: 'Pintresty Cakes' },
  ],
  'Balloons Arrangements': [{ id: 301, name: 'Helium Cluster',     price: '1,200', icon: '🎈', cat: 'Balloons' }],
  'Quick Surprise Bundles': [{ id: 401, name: 'The Anniversary Box', price: '6,500', icon: '💍', cat: 'Bundles' }],
  "Add on's":               [{ id: 501, name: 'Teddy Bear',          price: '1,200', icon: '🧸', cat: 'Add-on' }],
};

const ProductGallery = () => {
  const [activeCat, setActiveCat] = useState('Fresh Flowers');

  return (
    <section id="gallery" style={{ padding: '80px 8%', background: styles.colors.cream }}>
      <h2 style={{ ...styles.headline, fontSize: '42px', textAlign: 'center', marginBottom: '40px' }}>
        Explore <span style={styles.italicText}>Collections</span>
      </h2>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '50px' }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            style={{
              ...styles.bodyText, padding: '10px 22px', borderRadius: '50px', border: '1px solid',
              borderColor: activeCat === cat ? styles.colors.deepRed : styles.colors.logoPink,
              background:   activeCat === cat ? styles.colors.deepRed : styles.colors.white,
              color:        activeCat === cat ? styles.colors.white   : styles.colors.deepRed,
              cursor: 'pointer', fontWeight: '700', fontSize: '13px', transition: '0.3s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {PRODUCTS[activeCat]?.map((p) => (
          <HoverCard key={p.id} style={styles.productCard}>
            <p style={{ ...styles.bodyText, color: styles.colors.logoPink, fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', marginBottom: '10px' }}>{p.cat}</p>
            <div style={{ height: '120px', fontSize: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p.icon}</div>
            <h3 style={{ ...styles.headline, fontSize: '20px', marginBottom: '8px' }}>{p.name}</h3>
            <p style={{ ...styles.bodyText, color: styles.colors.logoPink, fontWeight: '700', marginBottom: '15px' }}>Rs. {p.price}</p>
            <button style={{ background: 'none', border: `1px solid ${styles.colors.deepRed}`, color: styles.colors.deepRed, padding: '12px', width: '100%', borderRadius: '12px', cursor: 'pointer', fontWeight: '700', fontFamily: 'Montserrat' }}>
              View Details
            </button>
          </HoverCard>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
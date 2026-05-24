const mongoose = require('mongoose');
const Product  = require('../models/Product');   // adjust path to where you put Product.js

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/wrappinghappiness';

// ── STUDIO PRODUCTS ───────────────────────────────────────────────────────────
const studioProducts = [
  // Flowersgi
  { name: 'Pink Roses',    price: 840,  img: '/img/Studiobouquet_01.png', desc: '×12 stems', studioCategory: 'Flowers' },
  { name: 'White Lilies',  price: 660,  img: '/img/Studiobouquet_02.png', desc: '×8 stems',  studioCategory: 'Flowers' },
  { name: 'Red Roses',     price: 960,  img: '/img/Studiobouquet_03.png', desc: '×12 stems', studioCategory: 'Flowers' },
  { name: 'Blush Peonies', price: 1080, img: '/img/Studiobouquet_04.png', desc: '×6 stems',  studioCategory: 'Flowers' },
  { name: 'Sunflowers',    price: 720,  img: '/img/Studiobouquet_05.png', desc: '×10 stems', studioCategory: 'Flowers' },
  { name: 'Lavender',      price: 540,  img: '/img/Studiobouquet_06.png', desc: 'Bunch',     studioCategory: 'Flowers' },
  { name: 'Pink Roses',    price: 840,  img: '/img/Studiobouquet_07.png', desc: '×12 stems', studioCategory: 'Flowers' },
  { name: 'White Lilies',  price: 660,  img: '/img/Studiobouquet_08.png', desc: '×8 stems',  studioCategory: 'Flowers' },
  { name: 'Red Roses',     price: 960,  img: '/img/Studiobouquet_09.png', desc: '×12 stems', studioCategory: 'Flowers' },
  { name: 'Blush Peonies', price: 1080, img: '/img/Studiobouquet_10.png', desc: '×6 stems',  studioCategory: 'Flowers' },
  { name: 'Sunflowers',    price: 720,  img: '/img/Studiobouquet_11.png', desc: '×10 stems', studioCategory: 'Flowers' },
  { name: 'Lavender',      price: 540,  img: '/img/Studiobouquet_12.png', desc: 'Bunch',     studioCategory: 'Flowers' },

  // Balloons
  { name: 'Helium Cluster', price: 1200, img: '/img/Studiobaloons_01.png', desc: '×12 pcs',   studioCategory: 'Balloons' },
  { name: 'Foil Numbers',   price: 800,  img: '/img/Studiobaloons_02.png', desc: 'Per digit',  studioCategory: 'Balloons' },
  { name: 'Heart Balloons', price: 600,  img: '/img/Studiobaloons_03.png', desc: '×10 pcs',   studioCategory: 'Balloons' },
  { name: 'Confetti Fill',  price: 900,  img: '/img/Studiobaloons_04.png', desc: '×5 pcs',    studioCategory: 'Balloons' },
  { name: 'Balloon Arch',   price: 4800, img: '/img/Studiobaloons_05.png', desc: 'Full setup', studioCategory: 'Balloons' },
  { name: 'Cloud Column',   price: 2200, img: '/img/Studiobaloons_06.png', desc: '4ft tall',   studioCategory: 'Balloons' },
  { name: 'Heart Balloons', price: 600,  img: '/img/Studiobaloons_07.png', desc: '×10 pcs',   studioCategory: 'Balloons' },
  { name: 'Confetti Fill',  price: 900,  img: '/img/Studiobaloons_08.png', desc: '×5 pcs',    studioCategory: 'Balloons' },
  { name: 'Balloon Arch',   price: 4800, img: '/img/Studiobaloons_09.png', desc: 'Full setup', studioCategory: 'Balloons' },
  { name: 'Cloud Column',   price: 2200, img: '/img/Studiobaloons_10.png', desc: '4ft tall',   studioCategory: 'Balloons' },

  // Cakes
  { name: 'Bento Cake',      price: 1400, img: '/img/Studiocakes_01.png', desc: 'Mini',         studioCategory: 'Cakes' },
  { name: 'Rose Petal',      price: 2800, img: '/img/Studiocakes_02.png', desc: '2-tier',       studioCategory: 'Cakes' },
  { name: 'Naked Rustic',    price: 2600, img: '/img/Studiocakes_03.png', desc: '2-tier',       studioCategory: 'Cakes' },
  { name: 'Pink Ombré',      price: 3000, img: '/img/Studiocakes_04.png', desc: '3-tier',       studioCategory: 'Cakes' },
  { name: 'Vintage Lambeth', price: 3500, img: '/img/Studiocakes_05.png', desc: 'Custom',       studioCategory: 'Cakes' },
  { name: 'Floral Drip',     price: 3200, img: '/img/Studiocakes_06.png', desc: 'With florals', studioCategory: 'Cakes' },
  { name: 'Naked Rustic',    price: 2600, img: '/img/Studiocakes_07.png', desc: '2-tier',       studioCategory: 'Cakes' },
  { name: 'Pink Ombré',      price: 3000, img: '/img/Studiocakes_08.png', desc: '3-tier',       studioCategory: 'Cakes' },
  { name: 'Vintage Lambeth', price: 3500, img: '/img/Studiocakes_09.png', desc: 'Custom',       studioCategory: 'Cakes' },
  { name: 'Floral Drip',     price: 3200, img: '/img/Studiocakes_10.png', desc: 'With florals', studioCategory: 'Cakes' },
].map(p => ({ ...p, type: 'studio', badge: null, color: null, galleryCategory: null }));


// ── GALLERY PRODUCTS ──────────────────────────────────────────────────────────
const galleryProducts = [
  // Fresh Bouquets
  { name: 'Pink Romance',       price: 2400, img: '/img/bouquet-1.jpg', badge: 'Bestseller', desc: '24 long-stemmed roses in blush & magenta, satin ribbon.',  color: '#F9D0E0', galleryCategory: 'Fresh Bouquets' },
  { name: 'White Elegance',     price: 1800, img: '/img/bouquet-2.jpg', badge: null,         desc: 'Crisp white lilies & eucalyptus in kraft wrap.',             color: '#F5E6EE', galleryCategory: 'Fresh Bouquets' },
  { name: 'Blush Peony Bunch',  price: 2200, img: '/img/bouquet-3.jpg', badge: 'New',        desc: 'Seasonal peonies in soft blush tones, hand-tied.',           color: '#FADADD', galleryCategory: 'Fresh Bouquets' },
  { name: 'Sunflower Bliss',    price: 1600, img: '/img/bouquet-4.jpg', badge: null,         desc: 'Bright sunflowers with dried pampas accents.',               color: '#FDE8D0', galleryCategory: 'Fresh Bouquets' },
  { name: 'Lavender Dreams',    price: 1900, img: '/img/bouquet-5.jpg', badge: null,         desc: "Fresh lavender bundles with baby's breath.",                 color: '#EDD8F5', galleryCategory: 'Fresh Bouquets' },
  { name: 'Red Velvet Roses',   price: 2800, img: '/img/bouquet-6.jpg', badge: 'Luxury',     desc: '18 deep red roses with gold leaf wrap.',                     color: '#F5D0D8', galleryCategory: 'Fresh Bouquets' },
  { name: 'Tulip Garden',       price: 2100, img: '/img/bouquet-7.jpg', badge: null,         desc: 'Mixed tulips in soft pastels, seasonal selection.',          color: '#F9D8E8', galleryCategory: 'Fresh Bouquets' },
  { name: 'Garden Wildflowers', price: 1500, img: '/img/bouquet-8.jpg', badge: 'Popular',    desc: 'Loose, garden-gathered wildflower collection.',              color: '#F0E8F5', galleryCategory: 'Fresh Bouquets' },

  // Pintresty Cakes
  { name: 'Rose Petal Cake',   price: 2800, img: '/img/cake-1.jpg', badge: null,       desc: 'Two-tier buttercream with edible rose petals.',    color: '#FADADD', galleryCategory: 'Pintresty Cakes' },
  { name: 'Vintage Lambeth',   price: 3500, img: '/img/cake-2.jpg', badge: 'Popular',  desc: 'Classic Lambeth piping on ivory fondant.',         color: '#F9D0E0', galleryCategory: 'Pintresty Cakes' },
  { name: 'Bento Love Cake',   price: 1400, img: '/img/cake-3.jpg', badge: 'Trending', desc: 'Mini bento cake with personalised message stamp.', color: '#FDE8D0', galleryCategory: 'Pintresty Cakes' },
  { name: 'Floral Drip Cake',  price: 3200, img: '/img/cake-4.jpg', badge: null,       desc: 'Ganache drip with fresh florals & gold dust.',     color: '#F5D8E8', galleryCategory: 'Pintresty Cakes' },
  { name: 'Naked Rustic Cake', price: 2600, img: '/img/cake-5.jpg', badge: null,       desc: 'Exposed sponge layers with seasonal fruit.',       color: '#F0DDD8', galleryCategory: 'Pintresty Cakes' },
  { name: 'Pink Ombré Cake',   price: 3000, img: '/img/cake-6.jpg', badge: 'New',      desc: 'Three-tier ombre in blush to deep rose.',          color: '#F9D0E0', galleryCategory: 'Pintresty Cakes' },
  { name: 'Matcha Bento',      price: 1600, img: '/img/cake-7.jpg', badge: null,       desc: 'Matcha sponge in an aesthetic bento box.',         color: '#D8EDD8', galleryCategory: 'Pintresty Cakes' },
  { name: 'Carousel Cake',     price: 4500, img: '/img/cake-8.jpg', badge: 'Luxury',   desc: 'Three-tier sculpted carousel with sugar details.', color: '#EDD8F5', galleryCategory: 'Pintresty Cakes' },

  // Aesthetic Ballons Arrangements
  { name: 'Blush Balloon Arch', price: 4800, img: '/img/balloon-1.jpg', badge: 'Custom',  desc: 'Organic arch in rose, magenta & blush. Setup included.', color: '#FADADD', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Helium Cluster',     price: 1200, img: '/img/balloon-2.jpg', badge: null,      desc: 'Set of 12 helium balloons with personalised ribbon.',    color: '#F9D0E0', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Cloud Column',       price: 2200, img: '/img/balloon-3.jpg', badge: 'New',     desc: 'Dreamy white & nude balloon column, 4ft tall.',          color: '#E8EDF5', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Foil Number Set',    price: 1800, img: '/img/balloon-4.jpg', badge: null,      desc: 'Giant foil number balloons in gold or rose-gold.',       color: '#F5EDD0', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Balloon Garland',    price: 3600, img: '/img/balloon-5.jpg', badge: 'Popular', desc: '10ft garland in custom palette, self-install kit.',      color: '#F5D8E8', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Heart Balloon Box',  price: 2800, img: '/img/balloon-6.jpg', badge: null,      desc: 'Box of 30 mini hearts that float out on opening.',       color: '#F9D0E0', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Marquee Letter Set', price: 5500, img: '/img/balloon-7.jpg', badge: 'Luxury',  desc: 'LED marquee letters in blush or gold, any word.',        color: '#F5E0D8', galleryCategory: 'Aesthetic Ballons Arrangements' },
  { name: 'Confetti Balloons',  price: 900,  img: '/img/balloon-8.jpg', badge: null,      desc: 'Clear balloons filled with rose-gold confetti.',         color: '#EDD8F5', galleryCategory: 'Aesthetic Ballons Arrangements' },

  // Surprise Bundles
  { name: 'The Anniversary Box', price: 6500, img: '/img/bundle-1.jpg', badge: 'New',      desc: 'Roses, macarons, a personal card & velvet ribbon.',   color: '#F9D0E0', galleryCategory: 'Surprise Bundles' },
  { name: 'Birthday Joy',        price: 3200, img: '/img/bundle-2.jpg', badge: null,       desc: 'Balloon cluster, mini cake & floral spray.',          color: '#FADADD', galleryCategory: 'Surprise Bundles' },
  { name: 'Just Because Box',    price: 2800, img: '/img/bundle-3.jpg', badge: 'Popular',  desc: 'Surprise for no reason — florals, treats & a note.',  color: '#F5D8E8', galleryCategory: 'Surprise Bundles' },
  { name: 'New Baby Bundle',     price: 4200, img: '/img/bundle-4.jpg', badge: null,       desc: 'Soft florals, plush toy & personalised card.',         color: '#D8EDF5', galleryCategory: 'Surprise Bundles' },
  { name: 'Graduation Glory',    price: 3800, img: '/img/bundle-5.jpg', badge: null,       desc: 'Flowers, balloons & a framed memory box.',             color: '#F5EDD0', galleryCategory: 'Surprise Bundles' },
  { name: 'Eid Mubarak Set',     price: 5200, img: '/img/bundle-6.jpg', badge: 'Seasonal', desc: 'Curated Eid hamper with sweets, florals & lights.',    color: '#EDD8F5', galleryCategory: 'Surprise Bundles' },
  { name: 'Self-Love Bundle',    price: 2600, img: '/img/bundle-7.jpg', badge: null,       desc: 'Skincare, candle, chocolate & a pampering note.',      color: '#F0EDD8', galleryCategory: 'Surprise Bundles' },
  { name: 'Grand Proposal Kit',  price: 9800, img: '/img/bundle-8.jpg', badge: 'Luxury',   desc: 'Roses, ring box display, foil balloons & setup.',      color: '#F9D0E0', galleryCategory: 'Surprise Bundles' },

  // Add On's
  { name: 'Teddy Bear',         price: 1200, img: '/img/addon-1.jpg', badge: null,      desc: 'Classic plush in blush. Pairs with any bundle.',    color: '#F5E0D8', galleryCategory: "Add On's" },
  { name: 'Personalised Card',  price: 350,  img: '/img/addon-2.jpg', badge: null,      desc: 'Hand-lettered message card, printed to order.',     color: '#F9D0E0', galleryCategory: "Add On's" },
  { name: 'Shimmer Wrap Sheet', price: 120,  img: '/img/addon-3.jpg', badge: null,      desc: 'Holographic rose-gold wrapping paper, 50×70cm.',    color: '#F5EDD0', galleryCategory: "Add On's" },
  { name: 'Scented Candle',     price: 900,  img: '/img/addon-4.jpg', badge: 'Popular', desc: 'Rose & oud soy candle in frosted glass jar.',       color: '#F0EDD8', galleryCategory: "Add On's" },
  { name: 'Premium Chocolates', price: 1100, img: '/img/addon-5.jpg', badge: null,      desc: 'Box of 12 Belgian truffles in signature flavours.', color: '#F5E0D8', galleryCategory: "Add On's" },
  { name: 'Satin Ribbon Bow',   price: 180,  img: '/img/addon-6.jpg', badge: null,      desc: 'Oversized blush satin bow for wrapping.',           color: '#FADADD', galleryCategory: "Add On's" },
  { name: 'Photo Frame',        price: 800,  img: '/img/addon-7.jpg', badge: null,      desc: 'Acrylic easel frame for a printed photo memory.',   color: '#EDD8F5', galleryCategory: "Add On's" },
  { name: 'Balloon Weight Set', price: 250,  img: '/img/addon-8.jpg', badge: null,      desc: 'Decorative weights to anchor helium bundles.',      color: '#E8EDF5', galleryCategory: "Add On's" },
].map(p => ({ ...p, type: 'gallery', studioCategory: null }));


// ── SEED ─────────────────────────────────────────────────────────────────────
const seed = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Product.deleteMany({});
    console.log('🗑  Cleared existing products');

    const all = [...studioProducts, ...galleryProducts];
    await Product.insertMany(all);

    console.log(`🌱 Seeded ${studioProducts.length} studio products`);
    console.log(`🌱 Seeded ${galleryProducts.length} gallery products`);
    console.log(`✨ Total: ${all.length} products inserted`);
  } catch (err) {
    console.error('❌ Seed failed:', err);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected');
    process.exit(0);
  }
};

seed();

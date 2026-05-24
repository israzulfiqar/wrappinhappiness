
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: { 
//     type: String, 
//     required: [true, 'Product name is required'],
//     trim: true 
//   },
//   category: { 
//     type: String, 
//     required: [true, 'Product category is required'],
//     // Restricts values to your exact frontend category keys to prevent spelling mistakes
//     enum: [
//       'Fresh Bouquets', 
//       'Pintresty Cakes', 
//       'Aesthetic Ballons Arrangements', 
//       'Surprise Bundles', 
//       "Add On's"
//     ] 
//   },
//   price: { 
//     type: Number, 
//     required: [true, 'Product price is required'],
//     min: [0, 'Price cannot be negative']
//   },
//   img: { 
//     type: String, 
//     required: [true, 'Product image path or URL is required'] 
//   },
//   badge: { 
//     type: String, 
//     default: null // Can be 'Bestseller', 'Trending', 'New', 'Luxury', etc.
//   },
//   desc: { 
//     type: String, 
//     required: [true, 'Product description is required'] 
//   },
//   color: { 
//     type: String, 
//     default: '#FFFFFF' // Fallback to clean white if no pastel background hex code is given
//   },
//   isAvailable: { 
//     type: Boolean, 
//     default: true 
//   }
// }, { 
//   timestamps: true // Automatically creates 'createdAt' and 'updatedAt' tracking fields
// });

// module.exports = mongoose.model('Product', productSchema);



const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    // ── Shared fields (both types) ──────────────────────────────
    name:     { type: String, required: true, trim: true },
    price:    { type: Number, required: true },
    img:      { type: String, required: true },   // public-folder path e.g. /img/bouquet-1.jpg
    desc:     { type: String, default: '' },
    type:     { type: String, enum: ['studio', 'gallery'], required: true },

    // ── Studio-only fields ──────────────────────────────────────
    // category: 'Flowers' | 'Balloons' | 'Cakes'
    studioCategory: { type: String, default: null },

    // ── Gallery-only fields ─────────────────────────────────────
    // category: 'Fresh Bouquets' | 'Pintresty Cakes' | etc.
    galleryCategory: { type: String, default: null },
    badge:           { type: String, default: null },   // 'Bestseller' | 'New' | 'Luxury' | null
    color:           { type: String, default: null },   // card background hex
  },
  { timestamps: true }
);

// Handy index so the frontend can query by type + category fast
productSchema.index({ type: 1, studioCategory: 1 });
productSchema.index({ type: 1, galleryCategory: 1 });

module.exports = mongoose.model('Product', productSchema);

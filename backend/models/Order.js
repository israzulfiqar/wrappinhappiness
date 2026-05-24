const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Links the purchase to a logged-in user (optional if you want guest checkouts later)
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // This is where your entire frontend cart array gets saved!
  items: [
    {
      // If it's a standard bouquet/cake from your catalog
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product'
      },
      // If it's a uniquely compiled creation from your Digital Studio
      customGift: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Studio'
      },
      name: { type: String, required: true },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true }
    }
  ],
  shippingDetails: {
    address: { type: String, required: true },
    city: { type: String, required: true, default: 'Hyderabad' }, // Handy fallback setting
    phone: { type: String, required: true },
    deliveryDate: { type: String, required: true }, // Crucial for pre-scheduled gifts!
    specialInstructions: { type: String }
  },
  paymentMethod: { 
    type: String, 
    required: true, 
    enum: ['COD', 'Bank Transfer'], 
    default: 'COD' 
  },
  totalPrice: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
  status: { 
    type: String, 
    enum: ['Pending', 'Processing', 'Out for Delivery', 'Delivered', 'Cancelled'], 
    default: 'Pending' 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Order', orderSchema);
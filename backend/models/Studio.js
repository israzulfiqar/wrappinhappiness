
const mongoose = require('mongoose');

const studioSchema = new mongoose.Schema({
  // Links the custom gift to a specific customer account
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // Tracks the primary container selected (e.g., a specific box or premium wrapping)
  baseContainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  // An array of all custom elements added inside the studio builder
  selectedItems: [
    {
      product: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product' 
      },
      quantity: { 
        type: Number, 
        default: 1,
        min: [1, 'Quantity cannot be less than 1']
      }
    }
  ],
  totalPrice: { 
    type: Number, 
    required: true,
    min: [0, 'Total price cannot be negative']
  },
  customNotes: { 
    type: String, 
    trim: true,
    maxLength: [500, 'Notes cannot exceed 500 characters']
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Studio', studioSchema);
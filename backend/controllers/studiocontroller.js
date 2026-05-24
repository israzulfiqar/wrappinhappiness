const Studio = require('../models/studio');

// @desc    Saves a customer's custom digital studio creation
// @route   POST /api/studio/save
exports.saveCustomGift = async (req, res) => {
  const { userId, baseContainer, selectedItems, totalPrice, customNotes } = req.body;
  try {
    const newCustomGift = new Studio({ userId, baseContainer, selectedItems, totalPrice, customNotes });
    const savedGift = await newCustomGift.save();
    res.status(201).json({ message: 'Custom masterpiece saved successfully!', customGift: savedGift });
  } catch (err) {
    res.status(400).json({ message: 'Failed to save arrangement.', error: err.message });
  }
};

// @desc    Get all custom gifts saved by a specific user
// @route   GET /api/studio/user/:userId
exports.getUserCustomGifts = async (req, res) => {
  try {
    const userGifts = await Studio.find({ userId: req.params.userId })
      .populate('baseContainer', 'name price img')
      .populate('selectedItems.product', 'name price img');
    res.json(userGifts);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving studio designs.', error: err.message });
  }
};
const Order = require('../models/order');


exports.checkoutOrder = async (req, res) => {
  const { userId, items, shippingDetails, paymentMethod, totalPrice } = req.body;

  try {
    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Your checkout payload cart cannot be empty.' });
    }

    const newOrder = new Order({
      userId,
      items,
      shippingDetails,
      paymentMethod,
      totalPrice
    });

    const createdOrder = await newOrder.save();
    res.status(201).json({ 
      message: 'Order received! We are prepping your delivery.', 
      order: createdOrder 
    });
  } catch (err) {
    res.status(500).json({ message: 'Checkout execution failed.', error: err.message });
  }
};


exports.getUserOrderHistory = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to pull order logs.', error: err.message });
  }
};
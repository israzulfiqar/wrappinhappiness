const Product = require('../models/product');

// @desc    Get all available products formatted into categories
// @route   GET /api/products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isAvailable: true });
    
    const groupedProducts = {
      'Fresh Bouquets': [],
      'Pintresty Cakes': [],
      'Aesthetic Ballons Arrangements': [],
      'Surprise Bundles': [],
      "Add On's": []
    };

    products.forEach(product => {
      if (groupedProducts[product.category]) {
        groupedProducts[product.category].push({
          id: product._id,
          name: product.name,
          price: product.price,
          img: product.img,
          badge: product.badge,
          desc: product.desc,
          color: product.color
        });
      }
    });

    res.json(groupedProducts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error fetching products', error: err.message });
  }
};

// @desc    Add a new product
// @route   POST /api/products/add
exports.addProduct = async (req, res) => {
  const { name, category, price, img, badge, desc, color } = req.body;
  try {
    const newProduct = new Product({ name, category, price, img, badge, desc, color });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully!', product: newProduct });
  } catch (err) {
    res.status(400).json({ message: 'Failed to add product', error: err.message });
  }
};
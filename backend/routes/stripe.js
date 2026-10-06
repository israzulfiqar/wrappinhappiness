const express = require('express');
const Stripe = require('stripe');
const router = express.Router();

// Created lazily so the server still boots if the key is missing
let _stripe;
const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY is not set in .env');
  return (_stripe ||= new Stripe(process.env.STRIPE_SECRET_KEY));
};

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';
const CURRENCY   = (process.env.STRIPE_CURRENCY || 'pkr').toLowerCase();
// If your Stripe account can't use PKR, set STRIPE_CURRENCY=usd and STRIPE_RATE=280 (PKR per 1 USD)
const RATE       = Number(process.env.STRIPE_RATE || 1);
const toMinor    = (rs) => Math.round((rs / RATE) * 100);

// Delivery prices live on the server so the client can't change them
const DELIVERY = {
  std:   { label: 'Standard delivery (3-5 hrs)',  price: 250 },
  expr:  { label: 'Express delivery (1-2 hrs)',   price: 480 },
  sched: { label: 'Scheduled delivery',           price: 350 },
};

// POST /api/stripe/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
  try {
    const { items, delivery = 'std', note = '', customer = {} } = req.body;

    if (!Array.isArray(items) || items.length === 0)
      return res.status(400).json({ message: 'Cart is empty' });

    const line_items = items.map((i) => {
      const qty = Number(i.qty), price = Number(i.price);
      if (!i.name || !Number.isInteger(qty) || qty < 1 || qty > 99 || !(price > 0) || price > 1_000_000)
        throw new Error(`Invalid cart item: ${i.name || i.id}`);
      return {
        quantity: qty,
        price_data: {
          currency: CURRENCY,
          unit_amount: toMinor(price),
          product_data: { name: String(i.name).slice(0, 120) },
        },
      };
    });

    const d = DELIVERY[delivery] || DELIVERY.std;
    line_items.push({
      quantity: 1,
      price_data: { currency: CURRENCY, unit_amount: toMinor(d.price), product_data: { name: d.label } },
    });

    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${CLIENT_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${CLIENT_URL}/checkout/cancel`,
      metadata: {
        delivery,
        note: String(note).slice(0, 450),
        name: String(customer.name || '').slice(0, 100),
        phone: String(customer.phone || '').slice(0, 40),
        address: String(customer.address || '').slice(0, 300),
      },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(400).json({ message: err.message });
  }
});

// GET /api/stripe/session/:id  (used by the success page)
router.get('/session/:id', async (req, res) => {
  try {
    if (!req.params.id.startsWith('cs_')) return res.status(400).json({ message: 'Bad session id' });
    const s = await getStripe().checkout.sessions.retrieve(req.params.id);
    res.json({
      payment_status: s.payment_status,
      amount_total: s.amount_total / 100 * RATE, // back to Rs.
      metadata: s.metadata,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
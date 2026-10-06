const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Sends the cart to the backend, then redirects the browser to Stripe's hosted checkout.
export async function startStripeCheckout({ items, delivery = 'std', note = '', customer = {} }) {
  const res = await fetch(`${API}/api/stripe/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: items.map(({ id, name, price, qty }) => ({ id, name, price, qty })),
      delivery, note, customer,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.url) throw new Error(data.message || 'Could not start checkout');
  window.location.href = data.url;
}

export const API_URL = API;


import { useState, useRef, useCallback } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function useAiStylist() {
  const [loading, setLoading] = useState(false);
  const [picks,   setPicks]   = useState([]);
  const [error,   setError]   = useState('');
  const latest = useRef(0); // lets us ignore responses from outdated requests

  // Clear everything (call this when the theme changes).
  const reset = useCallback(() => {
    latest.current += 1;
    setLoading(false);
    setPicks([]);
    setError('');
  }, []);

  // occasion: theme label, items: the catalog for that theme (with img, price, etc.)
  const run = useCallback(async (occasion, items) => {
    const reqId = ++latest.current;
    setLoading(true);
    setPicks([]);
    setError('');
    try {
      const { data } = await axios.post(`${API_URL}/api/recommend`, {
        occasion,
        catalog: items.map(({ id, name, price, desc, category }) => ({ id, name, price, desc, category })),
      });
      if (reqId !== latest.current) return;

      const found = (data.bundles || [])
        .map((b) => {
          const flowers  = items.find((i) => i.id === b.flowers);
          const balloons = items.find((i) => i.id === b.balloons);
          const cake     = items.find((i) => i.id === b.cake);
          if (!flowers || !balloons || !cake) return null;
          return { title: b.title, reason: b.reason, items: [flowers, balloons, cake] };
        })
        .filter(Boolean);

      setPicks(found);
      if (found.length === 0) setError('No matching picks found. Try another theme.');
    } catch {
      if (reqId !== latest.current) return;
      setError('AI Stylist is unavailable right now. Please try again.');
    } finally {
      if (reqId === latest.current) setLoading(false);
    }
  }, []);

  return { loading, picks, error, run, reset };
}
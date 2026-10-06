
import { Routes, Route, useLocation } from 'react-router-dom';
import styles from './theme';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import AdminDashboard from './components/AdminDashboard';
import AuthPage from './components/Authpage';
import Studio from './components/Studio';
import PaymentPage from './components/PaymentPage';
import Footer from './components/Footer';
import OurStory from './components/OurStory';
import WhatDefinesUs from './components/WhatDefinesUs';
import ProductGallery from './components/ProductGallery';
import CartPage from './components/Cartpage';
import CheckoutSuccess, { CheckoutCancel } from './components/CheckoutResult';
import ReviewOrder from './components/ReviewOrder';


const HIDE_CHROME = ['/studio', '/payment', '/review'];

export default function App() {
  const { pathname } = useLocation();
  const hideChrome = HIDE_CHROME.includes(pathname);

  return (
    <div style={styles.page}>
      {!hideChrome && <Nav />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/what-defines-us" element={<WhatDefinesUs />} />
        <Route path="/gallery" element={<ProductGallery />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout/success" element={<CheckoutSuccess />} />
        <Route path="/checkout/cancel" element={<CheckoutCancel />} />
        <Route path="/review" element={<ReviewOrder />} />
      </Routes>

      {!hideChrome && <Footer />}
    </div>
  );
}

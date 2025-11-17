import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Contact from './pages/Contact';

const parseHash = () => {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash || hash === '/') return { route: 'home' };
  const parts = hash.split('/').filter(Boolean);
  if (parts[0] === 'product' && parts[1]) return { route: 'product', id: parts[1] };
  if (parts[0] === 'about') return { route: 'about' };
  if (parts[0] === 'contact') return { route: 'contact' };
  return { route: 'home' };
};

const App = () => {
  const [route, setRoute] = useState(parseHash());

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="app-root">
      <Header />

      {route.route === 'home' && <Home />}
      {route.route === 'product' && <ProductPage productId={route.id} />}
      {route.route === 'about' && <About />}
      {route.route === 'contact' && <Contact />}

      <Footer />
    </div>
  );
};

export default App;
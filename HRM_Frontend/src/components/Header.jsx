import React, { useEffect, useRef, useState } from 'react';
import products from '../data/products';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const goHome = (e) => {
    e?.preventDefault();
    window.location.hash = '';
    setOpen(false);
  };

  const goHash = (hash) => {
    window.location.hash = hash;
    setOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 shadow-md' : 'bg-black/30 backdrop-blur-sm'} text-white`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" onClick={goHome} className="text-xl font-extrabold tracking-tight drop-shadow">EnergyHub</a>

        <nav className="flex items-center gap-3">
          <button
            onClick={() => goHash('#/')}
            className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Home
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition flex items-center gap-2"
            >
              Products
              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-lg z-20 ring-1 ring-black/5">
                <ul className="py-1 max-h-56 overflow-auto">
                  {products.map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => goHash(`#/product/${p.id}`)}
                        className="w-full text-left px-4 py-2 hover:bg-slate-100 transition"
                      >
                        {p.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={() => goHash('#/about')}
            className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            About
          </button>
          <button
            onClick={() => goHash('#/contact')}
            className="px-3 py-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

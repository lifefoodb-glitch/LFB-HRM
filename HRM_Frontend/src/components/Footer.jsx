import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-slate-600">
        <div>© {new Date().getFullYear()} EnergyHub</div>
        <div>Made with care • Contact: info@example.com</div>
      </div>
    </footer>
  );
};

export default Footer;

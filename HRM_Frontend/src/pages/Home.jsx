import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ProductCarousel from '../components/ProductCarousel';
import heroImages from '../assets/hero_image';
import productImages from '../assets/product_image';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <main className="pt-0">
      <div className="w-full">
        <HeroCarousel images={heroImages} />
      </div>

      {/* Product Carousel Section */}
      <ProductCarousel />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">All Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productImages.map((img, idx) => {
              const src = img && typeof img === 'object' ? img.src : img;
              const name = img && typeof img === 'object' ? img.name : `Product ${idx + 1}`;
              return (
                <div key={idx} className="bg-white rounded-lg shadow p-3">
                  <div className="w-full h-48 flex items-center justify-center bg-gray-50 overflow-hidden rounded">
                    <img src={src} alt={name} className="max-h-full w-auto object-contain hover:scale-110 hover:-translate-y-2 transition-all duration-300" />
                  </div>
                  <div className="mt-3 text-sm font-medium text-slate-800 flex items-center justify-between">
                    <span>{name}</span>
                    <button className="bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold px-4 py-2 rounded-full transition shadow-sm hover:shadow-md">
                      See
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section */}
        <div className="max-w-6xl mx-auto px-4">
          <About />
        </div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto px-4">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Home;

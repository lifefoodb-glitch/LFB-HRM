import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Home = () => {
  const heroImages = products.flatMap((p) => p.images || []).slice(0, 5);

  return (
    <main className="pt-6 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <HeroCarousel images={heroImages} />

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
          <div className="space-y-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

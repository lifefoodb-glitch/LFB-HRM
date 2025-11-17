import React from 'react';
import products from '../data/products';
import HeroCarousel from '../components/HeroCarousel';

const ProductPage = ({ productId }) => {
  const product = products.find((p) => p.id === productId);
  if (!product)
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">Product not found.</div>
    );

  return (
    <main className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-6 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <HeroCarousel images={product.images} interval={4000} />
          </div>

          <div className="lg:w-1/2">
            <p className="text-slate-500">{product.short}</p>
            <p className="mt-4 text-slate-700">{product.description}</p>
            <div className="mt-6 text-2xl font-bold">{product.price}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductPage;

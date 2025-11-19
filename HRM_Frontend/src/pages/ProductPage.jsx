import React from 'react';
import products from '../data/products';

const ProductPage = ({ productId }) => {
  const product = products.find((p) => p.id === productId);
  if (!product)
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">Product not found.</div>
    );

  return (
    <main className="py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="mt-6 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            {(() => {
              const imgObj = product.images?.[0];
              const src = imgObj && typeof imgObj === 'object' ? imgObj.src : imgObj;
              const imgName = imgObj && typeof imgObj === 'object' ? imgObj.name : '';
              return (
                <div className="w-full h-80 rounded-lg overflow-hidden relative">
                  <img src={src} alt={product.name} className="w-full h-full object-cover block" />
                  {imgName && (
                    <div className="absolute left-4 bottom-4 bg-black/60 text-white text-sm px-3 py-1 rounded">{imgName}</div>
                  )}
                </div>
              );
            })()}
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

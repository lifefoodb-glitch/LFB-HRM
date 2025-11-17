import React from 'react';

const ProductCard = ({ product }) => {
  const openProduct = () => {
    window.location.hash = `#/product/${product.id}`;
  };

  return (
    <button
      onClick={openProduct}
      className="w-full flex text-left bg-white rounded-lg shadow hover:shadow-lg overflow-hidden focus:outline-none transition"
    >
      <div
        className="w-1/3 flex-shrink-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${product.images?.[0]})` }}
        aria-hidden
      />
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-sm text-slate-500 mt-2">{product.short}</p>
          <p className="text-slate-700 mt-3">{product.description}</p>
        </div>
        <div className="mt-4 text-lg font-bold text-rose-600">{product.price}</div>
      </div>
    </button>
  );
};

export default ProductCard;

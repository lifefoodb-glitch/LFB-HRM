import React from 'react';

const ProductCard = ({ product }) => {
  const openProduct = () => {
    window.location.hash = `#/product/${product.id}`;
  };

  return (
    <button
      onClick={openProduct}
      className="w-full bg-white rounded-lg shadow hover:shadow-lg overflow-hidden focus:outline-none transition"
    >
      {(() => {
        const imgObj = product.images?.[0];
        const src = imgObj && typeof imgObj === 'object' ? imgObj.src : imgObj;
        const imgName = imgObj && typeof imgObj === 'object' ? imgObj.name : '';
        return (
          <div className="w-full h-48 sm:h-64 bg-white flex items-center justify-center">
            <img src={src} alt={product.name} className="max-h-full w-auto object-contain block" />
            {imgName && (
              <div className="absolute left-3 bottom-3 bg-black/60 text-white text-xs px-2 py-1 rounded">{imgName}</div>
            )}
          </div>
        );
      })()}

      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-slate-500">{product.short}</p>
          <div className="text-sm font-bold text-rose-600">{product.price}</div>
        </div>
        <p className="text-slate-700 text-sm mt-3">{product.description}</p>
      </div>
    </button>
  );
};

export default ProductCard;

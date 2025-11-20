import React, { useState, useRef, useEffect } from 'react';
import productImages from '../assets/product_image';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  const products = [
    {
      id: 1,
      name: 'KIBU',
      tagline: 'Energize Your Day',
      description: 'Experience pure energy with KIBU. Packed with natural ingredients to fuel your performance and keep you going all day long.',
      image: productImages[4]?.src, // KIBU_180
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      name: 'ARNA',
      tagline: 'Peak Performance',
      description: 'ARNA delivers premium energy with a perfect blend of taste and power. Designed for champions who demand the best.',
      image: productImages[0]?.src, // ARNA_CAN330
      bgColor: 'bg-red-50',
    },
    {
      id: 3,
      name: 'REBOOST',
      tagline: 'Recharge & Conquer',
      description: 'REBOOST your energy levels instantly. Perfect for when you need that extra push to tackle any challenge.',
      image: productImages[13]?.src, // fizzy_litchi
      bgColor: 'bg-yellow-50',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Check if section is in or near viewport
      if (rect.top <= 0 && rect.bottom > 0) {
        // Section is at top or scrolled past it - lock scroll here
        const scrolledIntoView = -rect.top;
        const totalScrollHeight = rect.height;
        const progress = Math.min(1, scrolledIntoView / (totalScrollHeight * 0.5)); // Adjust for full carousel scroll
        
        // Calculate which product should be shown based on scroll progress
        const productCount = products.length;
        const indexFloat = progress * (productCount - 1);
        const newIndex = Math.floor(indexFloat);
        const slideProgress = indexFloat - newIndex;
        
        setCurrentIndex(Math.min(newIndex, productCount - 1));
        setScrollProgress(slideProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [products.length]);

  // Get product at index with proper wrapping
  const getProduct = (index) => {
    const product = products[index % products.length];
    return product || products[0];
  };

  const activeProduct = getProduct(currentIndex);
  const nextProduct = getProduct(currentIndex + 1);

  // Safe image getter
  const getSafeImage = (product) => {
    return product?.image || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%23e2e8f0" width="400" height="600"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23475569" font-size="20"%3ENo Image%3C/text%3E%3C/svg%3E';
  };

  // Interpolate between current and next product based on scroll
  const currentProduct = activeProduct;
  const displayProduct = scrollProgress > 0.5 ? nextProduct : currentProduct;
  const transitionOpacity = Math.abs(scrollProgress - (scrollProgress > 0.5 ? 1 : 0));

  return (
    <div
      ref={sectionRef}
      className="relative w-screen h-screen bg-white overflow-hidden"
    >
      {/* Current Product Display */}
      <div
        className={`w-full h-full flex transition-colors duration-300 ${displayProduct?.bgColor || 'bg-slate-50'}`}
        style={{
          opacity: 1,
        }}
      >
        {/* Left Side - Product Image */}
        <div className="w-1/2 h-full flex items-center justify-center bg-gradient-to-r from-slate-100 to-slate-50 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center px-8">
            <img
              src={getSafeImage(displayProduct)}
              alt={displayProduct?.name || 'Product'}
              className="h-5/6 w-auto object-contain"
              draggable={false}
            />
          </div>
        </div>

        {/* Right Side - Product Content */}
        <div className="w-1/2 h-full flex flex-col justify-center px-12 py-12 overflow-auto">
          <div>
            <h2 className="text-6xl font-black text-slate-900 mb-4 leading-tight">
              {displayProduct?.name || 'Product'}
            </h2>
            <p className="text-2xl font-bold text-slate-700 mb-6">
              {displayProduct?.tagline || ''}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">
              {displayProduct?.description || ''}
            </p>
            <button className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-10 rounded-full transition-colors shadow-lg mb-12">
              See product
            </button>
          </div>

          {/* Product Indicator
          <div className="flex gap-3 mt-auto">
            {products.map((_, idx) => (
              <div
                key={idx}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-rose-600 w-12 h-3'
                    : 'bg-slate-300 w-3 h-3'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;

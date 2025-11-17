import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ images = [], interval = 3500 }) => {
  const [index, setIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    // Filter images: accept URLs from image CDNs (unsplash, pexels, etc.) or with image extensions
    const filtered = (images || []).filter((u) => {
      if (typeof u !== 'string') return false;
      // Accept unsplash, pexels, pixabay, or any URL with image extension
      return /unsplash|pexels|pixabay|images\.|\.(?:png|jpe?g|gif|webp|avif)/i.test(u);
    });
    setValidImages(filtered);
  }, [images]);

  useEffect(() => {
    if (!validImages || validImages.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % validImages.length), interval);
    return () => clearInterval(t);
  }, [validImages, interval]);

  if (!validImages || validImages.length === 0) return (
    <div className="w-full h-64 sm:h-80 rounded-lg bg-gradient-to-r from-rose-100 to-rose-50 flex items-center justify-center text-slate-600">No images available</div>
  );

  return (
    <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-lg shadow-sm">
      <div
        className="w-full h-full bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${validImages[index]})` }}
      />

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {validImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-rose-500' : 'bg-white/70'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

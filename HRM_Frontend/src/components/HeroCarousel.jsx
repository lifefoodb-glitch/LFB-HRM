import React, { useState, useEffect } from 'react';

const HeroCarousel = ({ images = [], interval = 3500 }) => {
  const [index, setIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    // Accept all truthy image values (local paths from imports, or URLs)
    const filtered = (images || []).filter((u) => u && (typeof u === 'string' || typeof u === 'object'));
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
    <div className="relative w-screen h-[66vh] overflow-hidden">
      <div
        className="w-full h-full bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${typeof validImages[index] === 'object' ? validImages[index].src : validImages[index]})` }}
      />

      {typeof validImages[index] === 'object' && validImages[index].name && (
        <div className="absolute inset-x-0 top-4 text-center text-white drop-shadow-lg">
          <h2 className="text-2xl font-bold">{validImages[index].name}</h2>
        </div>
      )}

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

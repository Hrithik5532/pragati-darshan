import React, { useEffect, useRef } from "react";

/* ---------- helper to generate images ---------- */
const generateImages = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => {
    const index = start + i;
    return {
      id: index,
      url: `/assets/gallery/gallery_${String(index).padStart(3, "0")}.jpg`,
      alt: `Gallery image ${index}`,
      height: ["h-64", "h-72", "h-80", "h-96"][index % 4], // varied heights
    };
  });
};

const CollageGallery = () => {
  const scrollRef = useRef(null);

  // 👇 gallery_001.jpg → gallery_047.jpg
  const images = generateImages(1, 47);
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const speed = 1;
    const maxScroll = container.scrollWidth / 2;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition >= maxScroll) scrollPosition = 0;
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Gallery
        </h2>
        <p className="text-gray-600 mt-2">
          A glimpse into our journey and achievements
        </p>
      </div>

      {/* ---------- FIRST ROW ---------- */}
      <div ref={scrollRef} className="flex gap-4 overflow-x-hidden">
        {duplicatedImages.map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-64 ${img.height} rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/assets/11.png"; // fallback
              }}
            />
          </div>
        ))}
      </div>

      {/* ---------- SECOND ROW ---------- */}
      <div className="mt-8">
        <SecondRow />
      </div>
    </section>
  );
};

/* ---------- SECOND ROW (reverse direction) ---------- */
const SecondRow = () => {
  const scrollRef = useRef(null);

  // use same images or different range if you want
  const images = generateImages(1, 47);
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollPosition = container.scrollWidth / 2;
    container.scrollLeft = scrollPosition;

    const speed = -0.8;
    const maxScroll = container.scrollWidth / 2;

    const animate = () => {
      scrollPosition += speed;
      if (scrollPosition <= 0) scrollPosition = maxScroll;
      container.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div ref={scrollRef} className="flex gap-4 overflow-x-hidden">
      {duplicatedImages.map((img, i) => (
        <div
          key={i}
          className={`flex-shrink-0 w-64 ${img.height} rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105`}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default CollageGallery;

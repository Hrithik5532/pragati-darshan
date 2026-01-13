import React, { useEffect, useRef } from 'react';

const CollageGallery = () => {
  const scrollRef = useRef(null);

  // Sample images - Replace these with your actual image URLs
  // You can add images to your public folder or use direct URLs
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1517817748493-49ec54a32465?w=800', alt: 'Gallery image 1', height: 'h-64' },
    { id: 2, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', alt: 'Gallery image 2', height: 'h-80' },
    { id: 3, url: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800', alt: 'Gallery image 3', height: 'h-72' },
    { id: 4, url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800', alt: 'Gallery image 4', height: 'h-96' },
    { id: 5, url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800', alt: 'Gallery image 5', height: 'h-64' },
    { id: 6, url: 'https://images.unsplash.com/photo-1557425955-df376b5903c8?w=800', alt: 'Gallery image 6', height: 'h-80' },
    { id: 7, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800', alt: 'Gallery image 7', height: 'h-72' },
    { id: 8, url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', alt: 'Gallery image 8', height: 'h-64' },
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // Adjust speed (pixels per frame)
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to beginning when we've scrolled through the first set
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Our Gallery
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          A glimpse into our journey and achievements
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden"
        style={{ 
          scrollBehavior: 'auto',
          cursor: 'grab'
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className={`flex-shrink-0 w-64 ${image.height} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Optional: Second row scrolling left to right */}
      <div className="mt-8">
        <SecondRow />
      </div>
    </section>
  );
};

// Second row that scrolls in opposite direction
const SecondRow = () => {
  const scrollRef = useRef(null);

  const images = [
    { id: 9, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800', alt: 'Gallery image 9', height: 'h-72' },
    { id: 10, url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800', alt: 'Gallery image 10', height: 'h-64' },
    { id: 11, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800', alt: 'Gallery image 11', height: 'h-80' },
    { id: 12, url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', alt: 'Gallery image 12', height: 'h-96' },
    { id: 13, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Gallery image 13', height: 'h-64' },
    { id: 14, url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800', alt: 'Gallery image 14', height: 'h-72' },
  ];

  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Start from the end for left-to-right effect
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2;
    let scrollPosition = scrollContainer.scrollWidth / 2;
    const scrollSpeed = -0.8; // Negative for reverse direction
    const maxScroll = scrollContainer.scrollWidth / 2;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when scrolled to the beginning
      if (scrollPosition <= 0) {
        scrollPosition = maxScroll;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden"
      style={{ 
        scrollBehavior: 'auto',
        cursor: 'grab'
      }}
    >
      {duplicatedImages.map((image, index) => (
        <div
          key={`${image.id}-${index}`}
          className={`flex-shrink-0 w-64 ${image.height} rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default CollageGallery;
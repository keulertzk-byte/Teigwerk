'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const backgrounds = [
  { src: '/Background 1.png', alt: 'Artisanal bakery background 1' },
  { src: '/Background 2.jpg', alt: 'Artisanal bakery background 2' },
  { src: '/Background 3.png', alt: 'Artisanal bakery background 3' },
  { src: '/Background 4.png', alt: 'Artisanal bakery background 4' }
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-bg-slideshow w-full h-full">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
}
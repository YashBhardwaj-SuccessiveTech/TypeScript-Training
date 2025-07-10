// 9.Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

'use client';

import { useEffect, useState } from 'react';

export default function SlideshowPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [intervalTime, setIntervalTime] = useState(2000); // 3 seconds

  // Longer version of the image array creation
  const images = [];
  for (let i = 1; i <= 10; i++) {
    const imagePath = `/slides/img${i}.jpg`;
    images.push(imagePath);
  }

  // Slideshow logic
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, intervalTime]);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Simple Slideshow</h1>

      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{
          width: '600px',
          height: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
      />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <label style={{ marginLeft: '1rem' }}>
          Interval (ms):
          <input
            type="number"
            value={intervalTime}
            onChange={(e) => setIntervalTime(Number(e.target.value))}
            min="500"
            step="500"
            style={{ marginLeft: '0.5rem', width: '80px' }}
          />
        </label>
      </div>

      <p style={{ marginTop: '0.5rem' }}>
        Slide {currentIndex + 1} of {images.length}
      </p>
    </div>
  );
}

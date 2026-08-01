import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
  {
    imgSrc: "aditi_5.jpg",
    title: "Maximum Chimp Mode 🐒",
    caption: "Proof that we belong in a comedy show. That big-eyes filter fits you a bit too well! Bows and all. 😂🎀",
    angle: "-3deg"
  },
  {
    imgSrc: "aditi_1.jpg",
    title: "Stepwell Explorers 🕌",
    caption: "Checking out ancient architecture, but mostly just posing and trying to look cool.",
    angle: "2deg"
  },
  {
    imgSrc: "aditi_2.jpg",
    title: "The Retro Vibe 🎞️",
    caption: "Throwback to our classic aesthetic moments. (Yes, the CAM filter makes us look like 80s movie stars).",
    angle: "-2deg"
  },
  {
    imgSrc: "aditi_3.jpg",
    title: "The Smile Archive 😁",
    caption: "Smiling bright and hiding the absolute chaos that goes on inside our heads on a daily basis.",
    angle: "4deg"
  },
  {
    imgSrc: "aditi_4.jpg",
    title: "The Sass Queen 😎",
    caption: "Aditi's official mood: 'I don't care'. Pouting and sporting those classy custom glasses.",
    angle: "-1deg"
  }
];

export default function MemoryLane() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', overflow: 'hidden' }}>
      <div className="badge badge-green">
        <Camera size={14} /> Scrapbook
      </div>

      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
        Our Memory Lane 📸
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
        Here's a digital collage of the goofy, crazy, and supportive moments that define our daily shenanigans.
      </p>

      {/* Slide Carousel wrapper */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '420px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '1rem 0'
      }}>
        {memories.map((memory, index) => {
          // Calculate offset relative to active index
          const offset = index - activeIndex;
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + memories.length) % memories.length;
          const isNext = index === (activeIndex + 1) % memories.length;
          
          let opacity = 0;
          let transform = 'scale(0.6) translateY(50px)';
          let zIndex = 0;

          if (isActive) {
            opacity = 1;
            transform = `scale(1) rotate(${memory.angle})`;
            zIndex = 5;
          } else if (isPrev) {
            opacity = 0.5;
            transform = 'scale(0.8) translateX(-180px) rotate(-8deg)';
            zIndex = 3;
          } else if (isNext) {
            opacity = 0.5;
            transform = 'scale(0.8) translateX(180px) rotate(8deg)';
            zIndex = 3;
          }

          return (
            <div
              key={index}
              className="polaroid-card"
              style={{
                position: 'absolute',
                opacity,
                transform,
                zIndex,
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                pointerEvents: isActive ? 'auto' : 'none',
                '--angle': memory.angle
              }}
            >
              <div className="polaroid-image-placeholder">
                <img 
                  src={memory.imgSrc} 
                  alt={memory.title} 
                  className="polaroid-image"
                />
              </div>
              
              <h3 style={{ 
                fontFamily: 'var(--font-fun)', 
                color: '#0f172a',
                fontSize: '1.2rem',
                marginTop: '1rem',
                textAlign: 'center'
              }}>
                {memory.title}
              </h3>
              
              <p className="polaroid-caption" style={{ fontSize: '0.9rem', color: '#475569', height: '50px', overflow: 'hidden' }}>
                {memory.caption}
              </p>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <button 
          className="btn btn-secondary" 
          onClick={prev}
          style={{ borderRadius: '50%', padding: '0.8rem', width: '48px', height: '48px' }}
        >
          <ChevronLeft size={20} />
        </button>
        
        <span style={{ fontWeight: '600', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
          Card {activeIndex + 1} of {memories.length}
        </span>

        <button 
          className="btn btn-secondary" 
          onClick={next}
          style={{ borderRadius: '50%', padding: '0.8rem', width: '48px', height: '48px' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

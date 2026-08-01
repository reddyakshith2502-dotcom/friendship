import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

const getImageUrl = (path) => {
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const separator = base.endsWith('/') ? '' : '/';
  return `${base}${separator}${cleanPath}`;
};

const memories = [
  {
    imgSrc: "aditi_5.jpg",
    title: "Maximum Chimp Mode 🐒",
    caption: "Proof that we belong in a comedy show. That big-eyes filter fits you a bit too well! 😂🎀",
    detail: "Remember when we took this picture and couldn't stop laughing for 10 minutes? You looked like a literal cute cartoon chimpanzee! Honestly, this filter is your true form. Keep chimping out, Aditi! 🍌🐒",
    angle: "-3deg"
  },
  {
    imgSrc: "aditi_1.jpg",
    title: "Stepwell Explorers 🕌",
    caption: "Checking out ancient architecture, but mostly just posing and trying to look cool.",
    detail: "Our adventure to the stepwell! The history was nice, but the highlight was definitely us spending 30 minutes trying to get the perfect selfie angle without falling in. Always a fun trip with you! 🗺️🚶‍♀️",
    angle: "2deg"
  },
  {
    imgSrc: "aditi_2.jpg",
    title: "The Retro Vibe 🎞️",
    caption: "Throwback to our classic aesthetic moments with the CAM filter.",
    detail: "This retro filter photo is gold. We look like we're in a classic 80s movie, but in reality, we were just chilling outside talking about the most random things. Love our deep, goofy conversations! 📼✨",
    angle: "-2deg"
  },
  {
    imgSrc: "aditi_3.jpg",
    title: "The Smile Archive 😁",
    caption: "Smiling bright and hiding the absolute chaos that goes on in our heads.",
    detail: "This collage shows your three moods: cute, cuter, and planning-something-mischievous. No matter how much drama is going on, you always bring a smile and laugh to my day. Thanks for being you! ☀️💛",
    angle: "4deg"
  },
  {
    imgSrc: "aditi_4.jpg",
    title: "The Sass Queen 😎",
    caption: "Aditi's official mood: 'I don't care'. Pouting and sporting those classy glasses.",
    detail: "The absolute sass in this photo is unmatched. Your 'I don't care' glasses define our combined attitude towards all the drama in the world. Always keep that fire and attitude, bestie! 🔥💅",
    angle: "-1deg"
  }
];

export default function MemoryLane() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % memories.length);
    setIsFlipped(false);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + memories.length) % memories.length);
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="glass-panel text-center scrapbook-bg" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', overflow: 'hidden' }}>
      <div className="badge badge-green">
        <Camera size={14} /> Scrapbook
      </div>

      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
        Our Memory Lane 📸
      </h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '0.95rem' }}>
        Here's a digital collage of our goofy moments. <strong>Click the active card to flip it and read the story behind it!</strong> 📝
      </p>

      {/* Slide Carousel wrapper */}
      <div style={{ 
        position: 'relative', 
        width: '100%', 
        height: '440px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: '1.5rem 0'
      }}>
        {memories.map((memory, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + memories.length) % memories.length;
          const isNext = index === (activeIndex + 1) % memories.length;
          
          let cardClass = '';
          if (isActive) cardClass = 'active';
          else if (isPrev) cardClass = 'prev';
          else if (isNext) cardClass = 'next';

          return (
            <div
              key={index}
              className={`polaroid-card ${cardClass} ${isActive && isFlipped ? 'flipped' : ''}`}
              onClick={isActive ? handleCardClick : undefined}
              style={{
                '--angle': memory.angle
              }}
            >
              <div className="polaroid-card-inner">
                {/* Front Side */}
                <div className="polaroid-front">
                  <div className="polaroid-image-placeholder">
                    <img 
                      src={getImageUrl(memory.imgSrc)} 
                      alt={memory.title} 
                      className="polaroid-image"
                    />
                  </div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-fun)', 
                    color: '#0f172a',
                    fontSize: '1.15rem',
                    marginTop: '1.2rem',
                    textAlign: 'center'
                  }}>
                    {memory.title}
                  </h3>
                  <p className="polaroid-caption" style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem' }}>
                    {memory.caption}
                  </p>
                  <div style={{ marginTop: '0.8rem', fontSize: '0.75rem', color: 'var(--accent-emerald-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', fontWeight: '600' }}>
                    <HelpCircle size={12} /> Click to Flip Card
                  </div>
                </div>

                {/* Back Side */}
                <div className="polaroid-back">
                  <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✍️</span>
                  <h3 style={{ 
                    fontFamily: 'var(--font-fun)', 
                    color: '#0f172a',
                    fontSize: '1.2rem',
                    marginBottom: '1rem'
                  }}>
                    The Story Behind
                  </h3>
                  <p style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '0.95rem', 
                    color: '#334155', 
                    lineHeight: '1.6',
                    textAlign: 'center'
                  }}>
                    {memory.detail}
                  </p>
                  <div style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold' }}>
                    🔄 Click to see photo
                  </div>
                </div>
              </div>
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

import React, { useState } from 'react';
import { Smile, Flame, RefreshCw } from 'lucide-react';

const roasts = [
  "I called the zookeeper to ask if they lost a chimpanzee. They said no, but if I find you, I can keep you. 🙊",
  "You have a unique talent for talking for two hours straight and saying absolutely nothing of substance. 🗣️",
  "If drama was a currency, you'd be a billionaire by now. 💅💸",
  "I'm sending this website link to the jungle conservation team so they can relocate you back to your tree. 🌳🐒",
  "You are like a cloud. When you disappear, it becomes a bright and beautiful day. ☁️✨",
  "Honestly, I wonder how you function on a daily basis with only two brain cells fighting for third place. 🧠🥊",
  "If laziness was an Olympic sport, you'd win a gold medal and ask someone else to go receive it for you. 🥇🛌",
  "You're my best friend because you know too much... and because no one else would tolerate your crazy antics. 🤪🔒"
];

const compliments = [
  "You're the kind of friend who makes the good times twice as fun and the hard times infinitely easier. Thank you. 🥰",
  "Even when I am being completely dramatic, you listen, validate, and support me. You're an absolute gem. 💎❤️",
  "You make me laugh so hard my stomach hurts. I cherish every single inside joke and stupid memory we share! 😂✨",
  "You are the most genuine, loyal person I know. I always know I can count on you, no matter what happens. 🤝🌟",
  "I don't say it enough, but I am incredibly grateful that you are in my life. You make everything brighter. ☀️💛",
  "You have the unique ability to make anyone feel valued and comfortable. Your kindness is unmatched! 🥺🌱",
  "Our friendship is one of the best things that ever happened to me. Thank you for being my constant partner-in-crime. 🥂🔐",
  "You're not just my best friend, you're family. No matter where life takes us, we're locked in for life! ♾️❤️"
];

export default function RoastCompliment() {
  const [mode, setMode] = useState('compliment'); // 'roast' or 'compliment'
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const getNewItem = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);

    const list = mode === 'roast' ? roasts : compliments;
    let nextIndex = Math.floor(Math.random() * list.length);
    // Avoid showing the exact same thing twice in a row if possible
    while (nextIndex === currentIndex && list.length > 1) {
      nextIndex = Math.floor(Math.random() * list.length);
    }
    setCurrentIndex(nextIndex);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setCurrentIndex(0); // reset index
  };

  const activeText = mode === 'roast' ? roasts[currentIndex] : compliments[currentIndex];

  return (
    <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)' }}>
        The Mood Machine ⚙️
      </h2>
      
      <p style={{ color: 'var(--text-secondary)' }}>
        Feeling brave? Switch between funny teasing and sweet, heartfelt appreciation.
      </p>

      {/* Toggle Selector */}
      <div className="toggle-container">
        <button 
          className={`toggle-btn ${mode === 'compliment' ? 'active' : ''}`}
          onClick={() => handleModeChange('compliment')}
        >
          <Smile size={16} style={{ marginRight: '5px', display: 'inline' }} /> Bestie Mode ❤️
        </button>
        
        <button 
          className={`toggle-btn ${mode === 'roast' ? 'active' : ''}`}
          onClick={() => handleModeChange('roast')}
          style={{
            background: mode === 'roast' ? 'var(--accent-rose)' : 'transparent',
            color: mode === 'roast' ? 'white' : 'var(--text-secondary)'
          }}
        >
          <Flame size={16} style={{ marginRight: '5px', display: 'inline' }} /> Tease Mode 🐒
        </button>
      </div>

      {/* Message Box */}
      <div 
        className="retro-screen"
        style={{
          width: '100%',
          minHeight: '140px',
          padding: '2rem',
          borderRadius: '20px',
          border: '2px solid',
          borderColor: mode === 'roast' ? 'var(--accent-rose)' : 'var(--accent-emerald)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: '600',
          lineHeight: '1.6',
          transition: 'all 0.3s ease',
          transform: isRotating ? 'scale(0.95) rotateY(180deg)' : 'scale(1) rotateY(0deg)',
          boxShadow: mode === 'roast' ? '0 0 20px rgba(244, 63, 94, 0.25)' : '0 0 20px rgba(16, 185, 129, 0.25)'
        }}
      >
        <span style={{ 
          color: mode === 'roast' ? '#ffe4e6' : '#ecfdf5',
          textShadow: mode === 'roast' ? '0 0 8px var(--accent-rose)' : '0 0 8px var(--accent-emerald)',
          zIndex: 3,
          position: 'relative'
        }}>
          {activeText}
        </span>
      </div>

      {/* Refresh Button */}
      <button 
        className="btn btn-secondary" 
        onClick={getNewItem}
        style={{ gap: '0.5rem' }}
      >
        <RefreshCw size={16} className={isRotating ? 'animate-spin' : ''} />
        Give Me Another!
      </button>
    </div>
  );
}

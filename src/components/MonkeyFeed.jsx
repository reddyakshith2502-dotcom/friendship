import React, { useState } from 'react';
import { Award, Zap, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const getImageUrl = (path) => {
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const separator = base.endsWith('/') ? '' : '/';
  return `${base}${separator}${cleanPath}`;
};

export default function MonkeyFeed({ bananas, setBananas, onFeed }) {
  const [activeMessage, setActiveMessage] = useState(
    "Click the banana below to feed your bestie chimp! 🍌"
  );
  const [feedState, setFeedState] = useState(false); // for animation

  const milestones = {
    5: {
      message: "Unlocked: Scientific Fact 🐒\nScientists say monkeys are super intelligent. While that claim is debatable in your case, you're definitely the smartest, funniest, and most supportive friend I could ever ask for! ❤️",
      type: "fact"
    },
    10: {
      message: "Unlocked: Secret File 📂\nThank you for listening to my endless gossip, stupid complaints, and late-night thoughts without throwing a banana at me. You're the best listener! 🤫⭐",
      type: "note"
    },
    15: {
      message: "Unlocked: Premium Certificate 🏆\nYou have now unlocked the Golden Banana Tier. Even though you act like a wild monkey half the time, you have a 24k gold heart. I value our friendship more than anything!",
      type: "gold"
    },
    25: {
      message: "Banana Overload! 🌋\nYou've fed me too many bananas! I'm officially full of joy and love. You are the ultimate partner-in-crime. BFFs forever! ♾️❤️",
      type: "max"
    }
  };

  const handleFeed = () => {
    const nextBananas = bananas + 1;
    setBananas(nextBananas);
    setFeedState(true);
    setTimeout(() => setFeedState(false), 200);

    // Call floating banana callback
    if (onFeed) onFeed();

    // Check milestones
    if (milestones[nextBananas]) {
      setActiveMessage(milestones[nextBananas].message);
      // Fire confetti!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f4c430', '#10b981', '#ffffff']
      });
    } else if (nextBananas > 25 && nextBananas % 5 === 0) {
      setActiveMessage(`Chimp is highly energetic! Total bananas consumed: ${nextBananas} 🍌🔥`);
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }
  };

  const getProgressPercentage = () => {
    return Math.min((bananas / 25) * 100, 100);
  };

  return (
    <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
      <div className="badge badge-yellow">
        <Zap size={14} /> Banana Power Feed
      </div>

      <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-yellow)' }}>
        Feed Aditi 🍌
      </h2>

      {/* Interactive Avatar Container */}
      <div 
        style={{ 
          position: 'relative', 
          width: '180px', 
          height: '180px', 
          borderRadius: '50%',
          border: '4px solid var(--accent-yellow)',
          padding: '8px',
          background: 'rgba(16, 185, 129, 0.05)',
          overflow: 'hidden',
          transition: 'all 0.2s ease',
          transform: feedState ? 'scale(1.1) rotate(5deg)' : 'scale(1)'
        }}
      >
        <img 
          src={getImageUrl("aditi_5.jpg")} 
          alt="Aditi Chimp Mascot" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            borderRadius: '50%'
          }} 
        />
      </div>

      {/* Score and meter */}
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold' }}>
          <span>Bananas Fed: {bananas}</span>
          <span>Goal: 25 🏆</span>
        </div>
        <div style={{ width: '100%', height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
          <div style={{ 
            height: '100%', 
            width: `${getProgressPercentage()}%`, 
            background: 'linear-gradient(90deg, var(--accent-yellow) 0%, var(--accent-green) 100%)',
            transition: 'width 0.4s ease',
            borderRadius: '6px'
          }} />
        </div>
      </div>

      {/* Dynamic Display Panel for Unlocked Content */}
      <div style={{ 
        width: '100%', 
        background: 'rgba(0,0,0,0.25)', 
        border: '1px solid var(--border-glass)', 
        borderRadius: '16px', 
        padding: '1.2rem',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '1rem',
        lineHeight: '1.5',
        color: 'var(--text-primary)',
        whiteSpace: 'pre-line',
        transition: 'all 0.3s ease'
      }}>
        {activeMessage}
      </div>

      <button 
        className="btn btn-primary animate-pulse-glow" 
        onClick={handleFeed}
        style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', gap: '0.8rem' }}
      >
        <span>🍌</span> Toss Banana!
      </button>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
        <span className={`badge ${bananas >= 5 ? 'badge-green' : 'badge-rose'}`} style={{ opacity: bananas >= 5 ? 1 : 0.5 }}>
          🔓 5 Bananas Fact
        </span>
        <span className={`badge ${bananas >= 10 ? 'badge-green' : 'badge-rose'}`} style={{ opacity: bananas >= 10 ? 1 : 0.5 }}>
          🔓 10 Bananas Secret
        </span>
        <span className={`badge ${bananas >= 15 ? 'badge-green' : 'badge-rose'}`} style={{ opacity: bananas >= 15 ? 1 : 0.5 }}>
          🔓 15 Bananas Premium
        </span>
        <span className={`badge ${bananas >= 25 ? 'badge-green' : 'badge-rose'}`} style={{ opacity: bananas >= 25 ? 1 : 0.5 }}>
          🔓 25 Ultimate BFF
        </span>
      </div>
    </div>
  );
}

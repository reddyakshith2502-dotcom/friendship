import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import MonkeyFeed from './components/MonkeyFeed';
import RoastCompliment from './components/RoastCompliment';
import MemoryLane from './components/MemoryLane';
import Certificate from './components/Certificate';
import HeartfeltLetter from './components/HeartfeltLetter';
import { Heart, Sparkles, AlertCircle } from 'lucide-react';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [bananasFed, setBananasFed] = useState(0);
  const [floatingBananas, setFloatingBananas] = useState([]);

  // Spawn a floating banana that floats down the screen
  const spawnBanana = () => {
    const id = Date.now() + Math.random();
    const left = Math.random() * 95; // Random horizontal placement
    const rotation = Math.random() * 360; // Random rotation angle
    const duration = 3 + Math.random() * 2; // Random speed (3s to 5s)
    const fontSize = 1.5 + Math.random() * 2.5; // Random size

    const newBanana = {
      id,
      left: `${left}%`,
      rotate: `${rotation}deg`,
      animationDuration: `${duration}s`,
      fontSize: `${fontSize}rem`
    };

    setFloatingBananas(prev => [...prev, newBanana]);

    // Clean up banana after animation finishes to prevent DOM bloat
    setTimeout(() => {
      setFloatingBananas(prev => prev.filter(b => b.id !== id));
    }, duration * 1000);
  };

  // Optionally trigger initial mild floating banana shower on unlock
  useEffect(() => {
    if (isUnlocked) {
      for (let i = 0; i < 8; i++) {
        setTimeout(spawnBanana, i * 400);
      }
    }
  }, [isUnlocked]);

  if (!isUnlocked) {
    return <WelcomeScreen onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <>
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="container fade-in" style={{ paddingBottom: '5rem' }}>
      {/* Floating Bananas Overlay */}
      <div className="banana-rain-container">
        {floatingBananas.map(banana => (
          <span
            key={banana.id}
            className="floating-banana"
            style={{
              left: banana.left,
              transform: `rotate(${banana.rotate})`,
              animationDuration: banana.animationDuration,
              fontSize: banana.fontSize
            }}
          >
            🍌
          </span>
        ))}
      </div>

      {/* Header / Navbar area */}
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '3rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-glass)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span style={{ fontSize: '2.2rem' }} className="animate-bounce-slow">🐒</span>
          <div>
            <h1 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--accent-yellow)', fontFamily: 'var(--font-fun)' }}>
              Monkey Sanctuary
            </h1>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Special Bestie Edition
            </span>
          </div>
        </div>
        
        <div className="badge badge-green" style={{ gap: '0.4rem', fontWeight: 'bold' }}>
          <Heart size={14} fill="currentColor" style={{ color: 'var(--accent-rose)' }} /> BFFs Forever
        </div>
      </header>

      {/* Main Grid: Profile, Feed and Compliment machine */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Profile Card & Feeding Game Section */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {/* Profile Card */}
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', justifyContent: 'center' }}>
            <div className="badge badge-rose" style={{ alignSelf: 'center' }}>
              🔬 Profile Subject: Aditi
            </div>

            <div style={{ 
              alignSelf: 'center',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid var(--accent-rose)',
              boxShadow: '0 0 15px rgba(244, 63, 94, 0.2)'
            }}>
              <img 
                src="/aditi_4.jpg" 
                alt="Aditi Profile" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '0.2rem' }}>
                Aditi
              </h2>
              <span style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Pan troglodytes (Certified Chimp) 🐒
              </span>
            </div>

            {/* Profile stats */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '0.8rem', 
              background: 'rgba(0,0,0,0.15)', 
              padding: '1.2rem', 
              borderRadius: '16px',
              border: '1px solid var(--border-glass)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Species Type:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-yellow)' }}>Certified Monkey 🐒</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Active Brain Cells:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-green)' }}>2 (Peak capacity) 🧠</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Silliness Meter:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-yellow)' }}>99.9% ⚡</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Appetite for Bananas:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-yellow)' }}>Infinite 🍌</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>Golden Heart Rating:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent-rose)' }}>10/10 (Pure Gold) 💛</span>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              background: 'rgba(244, 196, 48, 0.05)', 
              border: '1px solid rgba(244, 196, 48, 0.1)', 
              padding: '0.8rem', 
              borderRadius: '12px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.4'
            }}>
              <AlertCircle size={18} style={{ color: 'var(--accent-yellow)', flexShrink: 0 }} />
              <span>Subject tends to complain about everything but is highly affectionate and acts as an amazing, top-tier supporter. Handle with care (and feed regularly).</span>
            </div>
          </div>

          {/* Interactive Feeding Game */}
          <MonkeyFeed 
            bananas={bananasFed} 
            setBananas={setBananasFed} 
            onFeed={spawnBanana} 
          />
        </section>

        {/* Roast/Compliment Toggle Machine Section */}
        <section>
          <RoastCompliment />
        </section>

        {/* Polaroid Scrapbook Section */}
        <section>
          <MemoryLane />
        </section>

        {/* Certificate Section */}
        <section>
          <Certificate />
        </section>

        {/* Heartfelt Scroll Letter Section */}
        <section>
          <HeartfeltLetter />
        </section>

      </main>

      {/* Footer */}
      <footer style={{ 
        marginTop: '5rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid var(--border-glass)', 
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.9rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <span>Made with</span>
          <Heart size={14} fill="currentColor" style={{ color: 'var(--accent-rose)' }} />
          <span>and plenty of 🍌 by Akshith for Aditi.</span>
        </div>
        <div>
          <span>© {new Date().getFullYear()} Monkey Sanctuary. All rights reserved.</span>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;

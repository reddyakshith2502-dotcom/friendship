import React, { useState } from 'react';
import { Award, Check, Share2, Printer } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Certificate() {
  const [signed, setSigned] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setSigned(true);
    setClaimed(true);
    
    // Massive confetti burst
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 }
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="text-center">
        <div className="badge badge-yellow" style={{ marginBottom: '0.8rem' }}>
          <Award size={14} /> Official BFF Award
        </div>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--accent-yellow)' }}>
          Claim Your Bestie Award 🏆
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
          Sign and unlock your official status in the Sanctuary.
        </p>
      </div>

      {/* The Digital Certificate */}
      <div className="certificate-border shadow-lg" id="printable-certificate">
        <div style={{
          border: '2px solid rgba(244, 196, 48, 0.2)',
          padding: '2rem 1.5rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          {/* Header */}
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.5rem' }}>🏆</span>
          <h3 style={{ 
            fontSize: '1.6rem', 
            color: 'var(--accent-yellow)', 
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            margin: '0.5rem 0'
          }}>
            Certificate of Chimp Excellence
          </h3>
          <p style={{ 
            fontStyle: 'italic', 
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '1.5rem'
          }}>
            This officially unofficial document certifies that
          </p>

          {/* Recipient */}
          <div style={{ margin: '1.5rem 0' }}>
            <h2 style={{ 
              fontSize: '2.2rem', 
              color: '#ffffff',
              borderBottom: '2px solid var(--accent-yellow)',
              display: 'inline-block',
              padding: '0 2rem 0.5rem 2rem',
              fontFamily: 'var(--font-fun)'
            }}>
              Aditi 🐒
            </h2>
          </div>

          {/* Description */}
          <p style={{ 
            maxWidth: '500px', 
            margin: '0 auto 2rem auto', 
            lineHeight: '1.6',
            color: 'var(--text-primary)',
            fontSize: '1rem'
          }}>
            Has successfully achieved the rank of <strong>"Certified Chimp of the Year"</strong> for outstanding behavior in acting goofy, talking nonsense, eating my snacks, and being the most wonderful, loyal, and supportive best friend in the universe.
          </p>

          {/* Signatures */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            marginTop: '3rem',
            padding: '0 1rem'
          }}>
            {/* Left signature */}
            <div style={{ width: '40%', textAlign: 'center' }}>
              <div style={{ 
                fontFamily: 'Fredoka', 
                fontSize: '1.3rem', 
                color: 'var(--accent-yellow)',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontStyle: 'italic'
              }}>
                {signed ? "Akshith ❤️" : ""}
              </div>
              <div style={{ borderTop: '1px solid var(--text-muted)', paddingTop: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Signature of Giver
              </div>
            </div>

            {/* Middle emblem */}
            <div style={{ fontSize: '2.5rem', opacity: claimed ? 1 : 0.2, transition: 'all 0.5s ease' }}>
              🎖️
            </div>

            {/* Right signature */}
            <div style={{ width: '40%', textAlign: 'center' }}>
              <div style={{ 
                fontFamily: 'Fredoka', 
                fontSize: '1.3rem', 
                color: 'var(--accent-green)',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {signed ? "🍌 Banana Committee" : ""}
              </div>
              <div style={{ borderTop: '1px solid var(--text-muted)', paddingTop: '0.3rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Approved by the Zoo
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {!claimed ? (
          <button 
            className="btn btn-primary animate-pulse-glow" 
            onClick={handleClaim}
            style={{ width: '220px' }}
          >
            <Check size={18} /> Sign & Claim Award!
          </button>
        ) : (
          <>
            <button 
              className="btn btn-success" 
              onClick={handleClaim} 
              style={{ width: '220px' }}
            >
              🎉 Award Claimed!
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={handlePrint}
              style={{ width: '150px', gap: '0.5rem' }}
            >
              <Printer size={16} /> Print Certificate
            </button>
          </>
        )}
      </div>
    </div>
  );
}

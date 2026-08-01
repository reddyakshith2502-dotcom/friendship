import React, { useState } from 'react';
import { ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WelcomeScreen({ onUnlock }) {
  const [attempts, setAttempts] = useState(0);
  const [shake, setShake] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeny = () => {
    setAttempts(prev => prev + 1);
    setShake(true);
    setTimeout(() => setShake(false), 500);

    const roasts = [
      "Access Denied. Humans cannot decode monkey wisdom. ❌",
      "Liar! The banana detectors are off the charts. 🍌",
      "Who are you kidding? Go back to your tree. 🐒",
      "Error 404: Brain cell not found. Only monkeys allowed. 🧠",
      "Okay, chimpanzee, click the OTHER button. 🙄"
    ];
    setErrorMessage(roasts[Math.min(attempts, roasts.length - 1)]);
  };

  const handleAccept = () => {
    onUnlock();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" 
         style={{ 
           background: 'radial-gradient(circle at center, #0e1e14 0%, #040806 100%)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center'
         }}>
      <div className={`glass-panel max-w-md w-full text-center ${shake ? 'animate-shake' : ''}`}
           style={{ border: '1px solid rgba(244, 196, 48, 0.2)' }}>
        
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '5rem', display: 'block' }} className="animate-bounce-slow">🐵</span>
          <div style={{ position: 'absolute', bottom: 0, right: 0 }} className="badge badge-yellow">
            <ShieldAlert size={14} /> SECURITY
          </div>
        </div>

        <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--accent-yellow)' }}>
          Security Verification
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
          This sector is reserved strictly for my absolute best friend, <strong>Aditi</strong> (who happens to be a certified chimpanzee). 
          Please confirm your species to proceed.
        </p>

        {errorMessage && (
          <div style={{ 
            background: 'rgba(244, 63, 94, 0.1)', 
            border: '1px solid rgba(244, 63, 94, 0.3)', 
            color: 'var(--accent-rose)',
            padding: '0.8rem 1rem',
            borderRadius: '12px',
            marginBottom: '1.5rem',
            fontSize: '0.95rem',
            fontWeight: '600'
          }}>
            {errorMessage}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <button 
            className="btn btn-primary animate-pulse-glow"
            onClick={handleAccept}
            style={{ width: '100%' }}
          >
            <CheckCircle2 size={18} /> Yes, I am Aditi the Monkey 🐵
          </button>
          
          <button 
            className="btn btn-secondary"
            onClick={handleDeny}
            style={{ width: '100%' }}
          >
            No, I am a Human 🙄
          </button>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1.5rem' }}>
          Warning: Lie detectors are active. Bananas may be hurled.
        </p>
      </div>
    </div>
  );
}

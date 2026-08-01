import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function HeartfeltLetter() {
  return (
    <div className="glass-panel letter-paper" style={{ 
      padding: '3.5rem 2rem', 
      position: 'relative'
    }}>
      {/* Decorative stars */}
      <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', color: 'var(--accent-yellow)', opacity: 0.5 }}>
        <Sparkles size={20} />
      </div>
      <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', color: 'var(--accent-yellow)', opacity: 0.5 }}>
        <Sparkles size={20} />
      </div>

      <div className="text-center" style={{ marginBottom: '2.5rem' }}>
        <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>💌</span>
        <h2 style={{ fontSize: '2rem', color: '#ffffff', fontFamily: 'var(--font-fun)' }}>
          A Note For My Favorite Chimp ❤️
        </h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--accent-yellow)', margin: '1rem auto' }}></div>
      </div>

      <div style={{ 
        maxWidth: '650px', 
        margin: '0 auto', 
        lineHeight: '1.8', 
        color: '#e2e8f0', 
        fontSize: '1.1rem',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.2rem',
        fontFamily: 'var(--font-body)'
      }}>
        <p><strong>Dear Bestie,</strong></p>

        <p>
          I wanted to make this website to tell you how incredibly special you are to me, and to remind you (as if you could ever forget) that you are officially my favorite monkey in the entire jungle. 🐒
        </p>

        <p>
          In all seriousness, finding a friend who is as crazy, dramatic, and weird as I am is a rare miracle. You are the only person who can match my silliness, tolerate my mood swings, and join in on my dumbest plans without hesitation. We've laughed until our stomachs hurt, made fools of ourselves in public, and accumulated more inside jokes than our two brain cells can comfortably store.
        </p>

        <p>
          But behind all the monkey business and teasing, I want you to know how deeply grateful I am for your presence in my life. You have one of the kindest and most generous hearts I have ever known. Thank you for being my rock when things get heavy, for always listening without judgment, and for being the loyal supporter I can always count on.
        </p>

        <p>
          No matter how busy life gets, where we end up, or how many bananas you consume, you're locked in for life. You are stuck in this sanctuary with me, and I wouldn't have it any other way. 
        </p>

        <p>
          Thanks for being the best friend in the universe. Keep shining, keep chimping out, and never change!
        </p>

        <div style={{ 
          marginTop: '2rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-end',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '1.5rem'
        }}>
          <span style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>With tons of love and bananas,</span>
          <span style={{ 
            fontFamily: 'Fredoka', 
            fontSize: '1.4rem', 
            color: 'var(--accent-yellow)',
            marginTop: '0.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem'
          }}>
            Your Best Friend <Heart size={18} fill="currentColor" style={{ color: 'var(--accent-rose)' }} />
          </span>
        </div>
      </div>
    </div>
  );
}

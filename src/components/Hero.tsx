'use client'
import { useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const [showHint, setShowHint] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(!muted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      playing ? videoRef.current.pause() : videoRef.current.play()
      setPlaying(!playing)
    }
  }

  return (
    <section style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      padding: '8rem 3rem 4rem',
      position: 'relative',
      zIndex: 2,
      gap: '4rem',
    }}>
      {/* Left — Text */}
      <div style={{ animation: 'fadeUp 0.8s ease forwards' }}>
        <style>{`
          @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
          @keyframes fadeUp2 { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        `}</style>

        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          color: '#39ff14',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          opacity: 0,
          animation: 'fadeUp 0.8s 0.1s ease forwards',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#39ff14', boxShadow: '0 0 8px #39ff14' }} />
          Open to opportunities
        </div>

        <h1 style={{
          fontSize: 'clamp(52px, 8vw, 90px)',
          fontWeight: 800,
          lineHeight: 0.9,
          letterSpacing: '-2px',
          marginBottom: '1.5rem',
          opacity: 0,
          animation: 'fadeUp 0.8s 0.2s ease forwards',
        }}>
          <div style={{ color: '#e8f5e8' }}>ALOK</div>
          <div style={{ color: '#39ff14' }}>KUMAR</div>
        </h1>

        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '13px',
          color: '#7a9e7a',
          lineHeight: 2,
          maxWidth: '440px',
          marginBottom: '2.5rem',
          opacity: 0,
          animation: 'fadeUp 0.8s 0.35s ease forwards',
        }}>
          Engineering Student @ Chandigarh University<br />
          Learning AI · Psychology · Robotics<br />
          IEEE Member · Documenting the journey in public
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          opacity: 0,
          animation: 'fadeUp 0.8s 0.5s ease forwards',
        }}>
          <a href="https://www.linkedin.com/in/alokumar05" target="_blank" rel="noreferrer" style={{
            background: '#39ff14',
            color: '#080a08',
            border: 'none',
            padding: '0.8rem 2rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#39ff14'; e.currentTarget.style.outline = '1px solid #39ff14' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#39ff14'; e.currentTarget.style.color = '#080a08'; e.currentTarget.style.outline = 'none' }}
          >
            LinkedIn →
          </a>
          <a href="#about" style={{
            background: 'transparent',
            color: '#7a9e7a',
            border: '1px solid rgba(122,158,122,0.3)',
            padding: '0.8rem 2rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#39ff14'; e.currentTarget.style.borderColor = '#39ff14' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#7a9e7a'; e.currentTarget.style.borderColor = 'rgba(122,158,122,0.3)' }}
          >
            About Me
          </a>
        </div>
      </div>

      {/* Right — Cinematic Video */}
      <div style={{
        position: 'relative',
        opacity: 0,
        animation: 'fadeUp 0.8s 0.3s ease forwards',
      }}>
        {/* Blurred ambient background */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          overflow: 'hidden',
          filter: 'blur(20px)',
          opacity: 0.4,
          borderRadius: '4px',
        }}>
          <video ref={bgVideoRef} autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src="https://res.cloudinary.com/dsdpvrgco/video/upload/v1780292969/hero.mp4_rkve1v.mp4"
          />
        </div>

        {/* Main video frame */}
        <div style={{
          position: 'relative',
          border: '1px solid rgba(57,255,20,0.3)',
          overflow: 'hidden',
          aspectRatio: '9/16',
          maxHeight: '520px',
        }}>
          {/* Corner brackets */}
          {['tl','tr','bl','br'].map(c => (
            <div key={c} style={{
              position: 'absolute',
              width: 20, height: 20,
              ...(c.includes('t') ? { top: -1 } : { bottom: -1 }),
              ...(c.includes('l') ? { left: -1 } : { right: -1 }),
              borderTop: c.includes('t') ? '2px solid #39ff14' : 'none',
              borderBottom: c.includes('b') ? '2px solid #39ff14' : 'none',
              borderLeft: c.includes('l') ? '2px solid #39ff14' : 'none',
              borderRight: c.includes('r') ? '2px solid #39ff14' : 'none',
              zIndex: 10,
            }} />
          ))}

          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dsdpvrgco/video/upload/v1780292969/hero.mp4_rkve1v.mp4"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8,10,8,0.6) 0%, transparent 50%)',
          }} />

          {/* Controls */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 10,
          }}>
            <button onClick={togglePlay} style={{
              background: 'rgba(8,10,8,0.7)',
              border: '1px solid rgba(57,255,20,0.4)',
              color: '#39ff14',
              width: 36, height: 36,
              cursor: 'pointer',
              fontSize: '14px',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {playing ? '⏸' : '▶'}
            </button>
            <button onClick={toggleMute} style={{
              background: 'rgba(8,10,8,0.7)',
              border: '1px solid rgba(57,255,20,0.4)',
              color: '#39ff14',
              width: 36, height: 36,
              cursor: 'pointer',
              fontSize: '14px',
              backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {muted ? '🔇' : '🔊'}
            </button>
          </div>

          {/* Sound hint */}
          {showHint && (
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              fontFamily: "'Space Mono', monospace",
              fontSize: '10px',
              color: '#7a9e7a',
              letterSpacing: '1px',
              background: 'rgba(8,10,8,0.7)',
              padding: '4px 10px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(57,255,20,0.2)',
              animation: 'fadeUp 0.5s ease',
            }}>
              TAP FOR SOUND
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <div style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '9px',
          color: '#7a9e7a',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>Scroll</div>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, #39ff14, transparent)',
          animation: 'scrollPulse 1.5s infinite',
        }} />
        <style>{`@keyframes scrollPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
      </div>
    </section>
  )
}

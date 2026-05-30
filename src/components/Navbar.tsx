'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '1.2rem 3rem',
      borderBottom: '1px solid rgba(57,255,20,0.18)',
      background: scrolled ? 'rgba(8,10,8,0.95)' : 'rgba(8,10,8,0.7)',
      backdropFilter: 'blur(12px)',
      transition: 'background 0.3s',
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '13px',
        color: '#39ff14',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <span style={{
          width: '8px', height: '8px', borderRadius: '50%',
          background: '#39ff14', display: 'inline-block',
          boxShadow: '0 0 8px #39ff14',
          animation: 'pulse 2s infinite',
        }} />
        Alok.Kumar
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px #39ff14} 50%{opacity:0.4;box-shadow:none} }`}</style>
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {['About', 'Skills', 'Experience', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '11px',
              color: '#7a9e7a',
              textDecoration: 'none',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#39ff14')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7a9e7a')}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

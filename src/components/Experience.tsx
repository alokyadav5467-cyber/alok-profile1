const experiences = [
  {
    date: 'Jul 2025 — Jan 2026 · 7 months',
    role: 'IEEE Member',
    org: 'IEEE · Chandigarh, India',
    desc: 'Active member of IEEE CIS student branch. Organized and promoted technical events, workshops, and open source contribution sessions.',
  },
  {
    date: 'Mar 2025 — Jul 2025 · 5 months',
    role: 'Psychology Learner',
    org: 'Yale University · Online',
    desc: "Completed Yale's science-backed psychology course. Explored focus, motivation, habit formation, and cognitive reframing — applying these directly to AI and robotics learning.",
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: '6rem 3rem',
      background: '#0d110d',
      borderTop: '1px solid rgba(57,255,20,0.18)',
      borderBottom: '1px solid rgba(57,255,20,0.18)',
      position: 'relative', zIndex: 2,
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: '10px',
        color: '#39ff14', letterSpacing: '4px', textTransform: 'uppercase',
        marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        Experience
        <span style={{ flex: 1, height: 1, background: 'rgba(57,255,20,0.18)', maxWidth: 200 }} />
      </div>

      <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '2.5rem' }}>
        Where I&apos;ve <span style={{ color: '#39ff14' }}>Been</span>
      </h2>

      <div style={{
        display: 'flex', flexDirection: 'column', gap: '1px',
        background: 'rgba(57,255,20,0.18)', border: '1px solid rgba(57,255,20,0.18)',
      }}>
        {experiences.map(e => (
          <div key={e.role} style={{
            background: '#080a08', padding: '2rem',
            display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem',
            transition: 'background 0.2s',
          }}
            onMouseEnter={ev => (ev.currentTarget.style.background = '#0d110d')}
            onMouseLeave={ev => (ev.currentTarget.style.background = '#080a08')}
          >
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '11px',
              color: '#7a9e7a', letterSpacing: '1px', paddingTop: 4, lineHeight: 1.8,
            }}>{e.date}</div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '0.3rem' }}>{e.role}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: '12px',
                color: '#39ff14', letterSpacing: '1px', marginBottom: '0.8rem',
              }}>{e.org}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: '12px',
                color: '#7a9e7a', lineHeight: 1.8,
              }}>{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  const stats = [
    { num: 'B.Tech', label: 'Information Technology' },
    { num: 'IEEE', label: 'Active Member' },
    { num: 'Yale', label: 'Psychology Course' },
    { num: '2029', label: 'Graduation Year' },
  ]

  return (
    <section id="about" style={{
      padding: '6rem 3rem',
      background: '#0d110d',
      borderTop: '1px solid rgba(57,255,20,0.18)',
      borderBottom: '1px solid rgba(57,255,20,0.18)',
      position: 'relative',
      zIndex: 2,
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        color: '#39ff14',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        marginBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        About Me
        <span style={{ flex: 1, height: 1, background: 'rgba(57,255,20,0.18)', maxWidth: 200 }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        <div>
          <h2 style={{
            fontSize: '42px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
          }}>
            Building at the edge of{' '}
            <span style={{ color: '#39ff14' }}>AI & Mind</span>
          </h2>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: '13px',
            color: '#7a9e7a',
            lineHeight: 2,
          }}>
            I&apos;m <strong style={{ color: '#39ff14' }}>Alok Kumar</strong>, an IT engineering
            student passionate about the intersection of{' '}
            <strong style={{ color: '#39ff14' }}>Artificial Intelligence</strong> and{' '}
            <strong style={{ color: '#39ff14' }}>Human Psychology</strong>.
            <br /><br />
            I believe the future of intelligent systems lies not just in better algorithms —
            but in understanding how humans think, learn, and make decisions.
            <br /><br />
            Currently learning Python, ML fundamentals, and cognitive science.
            I document everything publicly — the wins, the confusion, and the breakthroughs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: '#080a08',
              border: '1px solid rgba(57,255,20,0.18)',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                background: '#39ff14',
              }} />
              <div style={{
                fontSize: '32px', fontWeight: 800,
                color: '#39ff14', lineHeight: 1, marginBottom: '0.3rem',
              }}>{s.num}</div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '10px', color: '#7a9e7a',
                letterSpacing: '1px', textTransform: 'uppercase',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

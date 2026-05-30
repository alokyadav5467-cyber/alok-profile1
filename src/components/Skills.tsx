const skills = [
  { icon: '🐍', name: 'Python', level: 'Learning', pct: 45 },
  { icon: '🧠', name: 'Machine Learning', level: 'Beginner', pct: 25 },
  { icon: '🔢', name: 'Data Structures', level: 'Learning', pct: 35 },
  { icon: '🤖', name: 'Robotics', level: 'Exploring', pct: 20 },
  { icon: '🧬', name: 'AI Psychology', level: 'Exploring', pct: 30 },
  { icon: '📊', name: 'Data Science', level: 'Beginner', pct: 25 },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '6rem 3rem', position: 'relative', zIndex: 2 }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: '10px',
        color: '#39ff14', letterSpacing: '4px', textTransform: 'uppercase',
        marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        Skills
        <span style={{ flex: 1, height: 1, background: 'rgba(57,255,20,0.18)', maxWidth: 200 }} />
      </div>

      <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '2.5rem' }}>
        Current <span style={{ color: '#39ff14' }}>Stack</span>
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'rgba(57,255,20,0.18)',
        border: '1px solid rgba(57,255,20,0.18)',
      }}>
        {skills.map(s => (
          <div key={s.name} style={{
            background: '#080a08',
            padding: '2rem 1.5rem',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = '#0d110d')}
            onMouseLeave={e => (e.currentTarget.style.background = '#080a08')}
          >
            <span style={{ fontSize: '28px', marginBottom: '1rem', display: 'block' }}>{s.icon}</span>
            <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '0.3rem' }}>{s.name}</div>
            <div style={{
              fontFamily: "'Space Mono', monospace", fontSize: '10px',
              color: '#39ff14', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem',
            }}>{s.level}</div>
            <div style={{ height: 2, background: 'rgba(57,255,20,0.1)' }}>
              <div style={{ height: '100%', width: `${s.pct}%`, background: '#39ff14' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

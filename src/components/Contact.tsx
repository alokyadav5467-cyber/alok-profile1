export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 3rem', position: 'relative', zIndex: 2 }}>
      <div style={{
        fontFamily: "'Space Mono', monospace", fontSize: '10px',
        color: '#39ff14', letterSpacing: '4px', textTransform: 'uppercase',
        marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '12px',
      }}>
        Contact
        <span style={{ flex: 1, height: 1, background: 'rgba(57,255,20,0.18)', maxWidth: 200 }} />
      </div>

      <div style={{
        border: '1px solid rgba(57,255,20,0.18)',
        padding: '3rem',
        background: '#0d110d',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '3rem',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(90deg, #39ff14, transparent)',
        }} />

        <div>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '0.5rem' }}>
            Let&apos;s <span style={{ color: '#39ff14' }}>Connect</span>
          </h2>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: '12px',
            color: '#7a9e7a', lineHeight: 1.8,
          }}>
            Open to collaborations, internships,<br />
            and conversations about AI + Psychology.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { label: 'linkedin.com/in/alokumar05', href: 'https://www.linkedin.com/in/alokumar05' },
            { label: '+91 91225 63740', href: 'tel:9122563740' },
          ].map(link => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              fontFamily: "'Space Mono', monospace", fontSize: '12px',
              color: '#7a9e7a', textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: '8px',
              transition: 'color 0.2s', letterSpacing: '1px',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#39ff14')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7a9e7a')}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#39ff14', flexShrink: 0 }} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

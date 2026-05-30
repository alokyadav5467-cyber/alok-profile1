export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 3rem',
      borderTop: '1px solid rgba(57,255,20,0.18)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    }}>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', color: '#7a9e7a',
        letterSpacing: '2px', textTransform: 'uppercase',
      }}>
        © 2026 <span style={{ color: '#39ff14' }}>Alok Kumar</span>
      </div>
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px', color: '#7a9e7a',
        letterSpacing: '2px', textTransform: 'uppercase',
      }}>
        Built with AI · Deployed with intention
      </div>
    </footer>
  )
}

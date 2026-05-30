import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Alok Kumar — AI, Psychology & Robotics',
  description: 'Engineering Student at Chandigarh University. Learning AI, Psychology & Robotics. IEEE Member.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

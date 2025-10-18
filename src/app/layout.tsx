import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agentic Login',
  description: 'Login and dashboard demo deployed on Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

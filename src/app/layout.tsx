import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'TejaDev — Ship the Feature. Not the Setup.',
  description:
    'A production-ready Turborepo monorepo template. Auth, database, UI, logging, and tooling — wired and working before you start.',
  metadataBase: new URL('https://teja-reddy.me'),
  openGraph: {
    title: 'TejaDev — Ship the Feature. Not the Setup.',
    description:
      'A production-ready Turborepo monorepo template. Auth, database, UI, logging, and tooling — wired and working before you start.',
    url: 'https://teja-reddy.me',
    siteName: 'TejaDev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TejaDev — Ship the Feature. Not the Setup.'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TejaDev — Ship the Feature. Not the Setup.',
    description:
      'A production-ready Turborepo monorepo template. Auth, database, UI, logging, and tooling — wired and working before you start.',
    images: ['/og-image.png']
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning className="dark" lang="en">
      <body>{children}</body>
    </html>
  )
}

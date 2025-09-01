import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Precision Design in 3D | Engineering Portfolio',
  description: 'Professional 3D modeling, engineering renders, and simulation-ready models for modern engineering teams.',
  keywords: '3D modeling, engineering, CAD, rendering, simulation, design, prototyping',
  authors: [{ name: 'Engineering Portfolio' }],
  openGraph: {
    title: 'Precision Design in 3D | Engineering Portfolio',
    description: 'Professional 3D modeling, engineering renders, and simulation-ready models for modern engineering teams.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precision Design in 3D | Engineering Portfolio',
    description: 'Professional 3D modeling, engineering renders, and simulation-ready models for modern engineering teams.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

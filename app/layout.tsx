import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prashant Gahlot | Senior Mobile & Multiplatform Engineer',
  description: '11+ years of experience in Android, iOS, Desktop, and Web applications. Kotlin Multiplatform expert.',
  icons: {
    icon: [
      { url: '/portfolio-main/icon.png', type: 'image/png', sizes: '460x460' },
      { url: '/portfolio-main/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/portfolio-main/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/portfolio-main/icon.png" as="image" />
        <link rel="icon" type="image/x-icon" href="/portfolio-main/favicon.ico" />
        <link rel="icon" type="image/png" sizes="460x460" href="/portfolio-main/icon.png" />
        <link rel="shortcut icon" href="/portfolio-main/favicon.ico" />
        <link rel="apple-touch-icon" sizes="460x460" href="/portfolio-main/icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


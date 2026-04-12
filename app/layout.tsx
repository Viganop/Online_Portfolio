import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-context'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucca Viganon | Full-Stack Developer',
  description: 'Desenvolvedor Full-Stack especializado em criar experiências digitais modernas e eficientes. React, Next.js, TypeScript e mais.',
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'typescript', 'portfólio', 'web developer'],
  authors: [{ name: 'Lucca Viganon Periotto' }],
  openGraph: {
    title: 'Lucca Viganon | Full-Stack Developer',
    description: 'Desenvolvedor Full-Stack especializado em criar experiências digitais modernas e eficientes.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-background">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduTrade',
  description: 'EduTrade is an innovative SaaS platform that combines educational technology with personal finance management to help small businesses and e-commerce professionals learn financial literacy and automate their payment processes for smarter, data-driven decision-making.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

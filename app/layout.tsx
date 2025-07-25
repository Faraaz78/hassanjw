import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hassan Jewellers - Luxury Jewelry & Fine Craftsmanship',
  description: 'Discover exquisite jewelry collections at Hassan Jewellers. Premium gold, diamond, and precious gemstone jewelry with over 30 years of craftsmanship excellence.',
  keywords: 'jewelry, gold, diamond, necklace, rings, bracelets, luxury jewelry, Hassan Jewellers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  )
}

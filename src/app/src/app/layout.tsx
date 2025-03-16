import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< HEAD
=======
import { ThemeProvider } from 'next-themes'
>>>>>>> 3c3d2c0ef41328227e7e3a0f0b1c84634d691567

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jamal Clair - Software Engineer',
  description: 'Portfolio website of Jamal Clair, Software Engineer based in Charlotte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
=======
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
>>>>>>> 3c3d2c0ef41328227e7e3a0f0b1c84634d691567
      </body>
    </html>
  )
}
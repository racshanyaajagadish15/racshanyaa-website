import './globals.css'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Racshanyaa Jagadish Portfolio',
  description: 'Personal website of Racshanyaa Jagadish',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-black text-white`}>{children}</body>
    </html>
  )
}


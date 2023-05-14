import { Kanit } from 'next/font/google'

import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'

// const inter = Inter({ subsets: ['latin'] })

const kanits = Kanit({
  weight: ["300", "400"],
  subsets: ['thai']
})

export const metadata = {
  title: 'Title Media',
  description: 'Web create by next.js 13.3',
  keyword: 'next.js, tailwind'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={kanits.className}>
        <Header/>
        <main className='text-xl'>{children}</main>
      </body>
    </html>
  )
}

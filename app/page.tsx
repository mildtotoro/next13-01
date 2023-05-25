import { Inter } from 'next/font/google'
import Link from 'next/link'
import Peoples from './components/Peoples'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello</h1>
      <Link href="/about">Link to About Page</Link>
      <div className="w-full">
        <Peoples />
        </div>
    </main>
  )
}

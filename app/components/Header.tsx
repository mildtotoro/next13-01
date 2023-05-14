import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-blue-200 p-3">
      <div className='flex text-2xl gap-3 justify-between'>
        <div className="logo">
          <Link href="/">Home</Link>
        </div> 
        <div className="flex gap-2">
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
    
  )
}

export default Header
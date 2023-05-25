import React, { ReactNode } from 'react'

export default function AboutLayout({children}: {children: ReactNode}) {
  return (
    <div className='px-10 bg-red-400'>
      AboutLayout
      {children}
    </div>
  )
}


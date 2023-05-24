import RepoDetail from '@/app/components/RepoDetail'
import RepoDirs from '@/app/components/RepoDirs'
import Link from 'next/link'
import React, { Suspense } from 'react'

const RepoPage = ({params: {name}}) => {
  return (
    <div className=''>
      <Link href={'/code/repos'}>Back To Repositories</Link>
      <Suspense fallback={<>Loading Repo detail...</>}>
        <RepoDetail name={name}></RepoDetail>
      </Suspense>
      <Suspense fallback={<>Loading Repo directories...</>}>
        <RepoDirs name={name}></RepoDirs>
        </Suspense>
    </div>
  )
}

export default RepoPage
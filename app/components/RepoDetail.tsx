import Link from 'next/link'
import React from 'react'
import { FaEye,FaStar, FaCodeBranch } from 'react-icons/fa'

async function fetchRepo(name: string) {
  const res = await fetch(`https://api.github.com/repos/mildtotoro/${name}`,
  {
    next: {
      revalidate: 60//seconds
    }
  })
  const repo = await res.json()
  return repo
}

const RepoDetail = async({ name }: { name: string }) => {
  const repo = await fetchRepo(name)
  console.log({repo})
  return (
    <div className='bg-white rounded-lg border border-solid border-red-700 pt-4 px-3 pb-5'>
      <h2 className='h2 py-3'>{name} Detail</h2>
      <p className='py-2'>
        {repo.description}
      </p>
      <div className=" text-slate-400 flex align-bottom gap-8">
        <div className="flex align-baseline gap-2" >
          <FaStar/> {repo.stargazers_count}
        </div>
        <div className="flex align-baseline gap-2">
          <FaCodeBranch/> {repo.forks_count}
        </div>
        <div className="flex align-baseline gap-2">
          <FaEye/> {repo.watchers_count}
        </div>      
      </div>
    </div>
  
  )
}

export default RepoDetail
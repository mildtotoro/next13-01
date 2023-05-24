import Link from 'next/link'
import React from 'react'

async function fetchRepoContents(name: string) {
  const res = await fetch(`https://api.github.com/repos/mildtotoro/${name}/contents`,{
    next: {
      revalidate: 60//seconds
    }
  })
  const contents = await res.json()
  return contents
}

const RepoDirs = async({ name }: { name: string }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')
  
  return (
    <div>
      <h3>Directories</h3>
      {dirs.map((dir) => (<Link key={name} href={`code/repos/${name}/${dir.path}`}>
        {dir.path}</Link>))}
    </div>
  )
}

export default RepoDirs
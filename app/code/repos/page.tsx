/**NOTE - Server Component */
import Link from "next/link"
import React from "react"
import {FaStar, FaCodeBranch, FaEye} from "react-icons/fa"

async function fetchRepos() {
  const response = await fetch("https://api.github.com/users/mildtotoro/repos")

  const repos = await response.json()
  console.log("repos", repos)
  return repos
}

const ReposPage = async() => {
  const repos = await fetchRepos()
  console.log(repos)
  return (
    <div className="repos-container">
      <h2 className="text-2xl">Repositories</h2>
      {repos[0].name}
      <ul className="repos-list bg-white-900 flex flex-wrap gap-4 justify-center">
        {repos.map((repo) => (
          <li key={repo.id} className="bg-white p-3 rounded-md h-[300px] basis-[500px] border-solid border-1 border-gray-900">
            <Link href={`/code/repos/${repo.name}`} className="flex flex-col h-full">
              <h3 className="">{repo.name}</h3>
              <p className="py-3 flex h-full items-stretch">{repo.description}</p>
              
              <div className="repo-details text-slate-400 flex justify-around align-bottom">
                <div className="flex">
                  <FaStar/> {repos.stargazers_count}
                </div>
                <div className="shrink-1">
                  <FaCodeBranch/> {repos.forks_count}
                </div>
                <div className="flex align-baseline">
                  <FaEye/> {repo.watchers_count}
                </div>
                
              </div>
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default ReposPage
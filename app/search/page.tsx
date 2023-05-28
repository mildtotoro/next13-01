'use client'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'
import PeopleSearch from '../components/PeopleSearch'
import PeopleCard from '../components/PeopleCard'

const SearchPeoplePage = () => {
  const [peoples, setPeoples] = useState<Record<string, any>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPeoples = async () => {
      const response = await fetch('http://localhost:3000/api/starwars')
      const res = await response.json()
      console.log({ res })
      setPeoples(res)
      setLoading(false)
    }
    fetchPeoples()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <PeopleSearch onSearch={(data) => setPeoples(data)} />
      <div className="flex flex-wrap">
        {peoples.length > 0 &&
          peoples.map((data) => <PeopleCard key={data.name} data={data} />)}
      </div>
    </div>
  )
}

export default SearchPeoplePage

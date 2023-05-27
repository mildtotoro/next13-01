'use client'
import { useState, useEffect } from 'react'
import LoadingPage from '../loading'
import PeopleSearch from '../components/PeopleSearch'

const CardPeople = ({ data }: Record<string, any>) => {
  return <div>{data.name}</div>
}

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
      {peoples.length > 0 &&
        peoples.map((data) => <CardPeople key={data.name} data={data} />)}
    </div>
  )
}

export default SearchPeoplePage

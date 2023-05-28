import React from 'react'
import Link from 'next/link'
import PeopleCard from './PeopleCard'

async function fetchPeoples() {
  const response = await fetch('http://localhost:3000/api/starwars')
  const peoples = response.json()
  return peoples
}

const Peoples = async () => {
  const peoples = await fetchPeoples()
  return (
    <div className="flex flex-wrap">
      {peoples.map((people) => {
        return <PeopleCard key={people.name} data={people} />
      })}
    </div>
  )
}

export default Peoples

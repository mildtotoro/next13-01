import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

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
        return (
          <div
            key={people.name}
            className="border border-solid border-gray-300 w-[250px] m-3 p-4"
          >
            <h2>{people.name}</h2>
            <h3>Birth Year: {people.birth_year}</h3>
            <div>
              {/* <Image
                                width={200}
                                height={100}
                                src={people.homeworld ?? ''}
                                alt="home world"
                            /> */}
            </div>
            <Link href={people.url} target="_blank">
              Read more
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Peoples

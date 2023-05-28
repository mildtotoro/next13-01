import Link from 'next/link'
import React from 'react'

const PeopleCard = ({ data }: Record<string, any>) => {
  return (
    <div
      key={data.name}
      className="border border-solid border-gray-300 w-[250px] m-3 p-4"
    >
      <h2 data-testid="name">{data.name}</h2>
      <h3>Birth Year: {data.birth_year}</h3>
      <Link href={data.homeworld} target="_blank">
        Home world
      </Link>
      <div></div>
      <Link href={data.url} target="_blank">
        Read more
      </Link>
    </div>
  )
}

export default PeopleCard

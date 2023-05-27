'use client'
import React, { useState } from 'react'

const PeopleSearch = ({
  onSearch,
}: {
  onSearch: (data: Record<string, any>[]) => void
}) => {
  const [search, setSearch] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ e })

    const res = await fetch(`/api/starwars/search?name=${search}`)
    const data = await res.json()
    onSearch(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id=""
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search text"
        />
        <button type="submit">search</button>
      </form>
    </div>
  )
}

export default PeopleSearch

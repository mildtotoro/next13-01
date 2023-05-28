import { render, screen } from '@testing-library/react'
import PeopleCard from '../PeopleCard'
import '@testing-library/jest-dom'

describe('PeopleCard', () => {
  it('renders a card', () => {
    render(
      <PeopleCard
        data={{
          id: 'b66231c5-3f2c-4997-91ca-49aa42b8781f',
          name: 'jendi asa',
          height: '150',
          mass: '49',
          hair_color: 'brown',
          skin_color: 'light',
          eye_color: 'brown',
          birth_year: '19BBY',
          gender: 'female',
          homeworld: 'https://swapi.dev/api/planets/2/',
          films: [
            'https://swapi.dev/api/films/1/',
            'https://swapi.dev/api/films/2/',
            'https://swapi.dev/api/films/3/',
            'https://swapi.dev/api/films/6/',
          ],
          species: [],
          vehicles: ['https://swapi.dev/api/vehicles/30/'],
          starships: [],
          created: '2014-12-10T15:20:09.791000Z',
          edited: '2014-12-20T21:17:50.315000Z',
          url: 'https://swapi.dev/api/people/5/',
        }}
      />
    )

    const name = screen.getByTestId('name').textContent
    expect(name).toEqual('jendi asa')
  })
})

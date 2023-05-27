import peoples from './data.json'
import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuid } from 'uuid'

export async function GET(request: Request) {
  return NextResponse.json(peoples)
}


export async function POST(request: NextRequest) {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created ,
    edited,
    url,
  } = await request.json()
  // console.log("request", await request.json())

  const newPeople = {
    id: uuid(),
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    films,
    species,
    vehicles,
    starships,
    created ,
    edited,
    url,
  }

  
  peoples.push(newPeople)

  return NextResponse.json({message: "People created", data: peoples});

}
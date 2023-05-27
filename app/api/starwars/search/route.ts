import { NextResponse, NextRequest } from "next/server";
import peoples from "../data.json"


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')
  let result = peoples
  if (name) {
     result = peoples.filter((people) => people.name.toLowerCase().includes(name.toLowerCase()))  
  }
  
  return NextResponse.json(result);
}

import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ message: 'ok', status: 200 })
}
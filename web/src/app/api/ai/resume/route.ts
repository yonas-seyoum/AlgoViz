import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { summary } = await req.json();
  return NextResponse.json({ suggestions: [`Quantify impact in: ${summary ?? "your summary"}.`] });
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { jobTitle } = await req.json();
  const questions = [
    `Tell me about your experience relevant to ${jobTitle ?? "this role"}.`,
    "Describe a challenging problem you solved.",
    "How do you collaborate across functions?",
  ];
  return NextResponse.json({ questions, score: null });
}

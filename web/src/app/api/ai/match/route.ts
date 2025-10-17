import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });
  const jobs = await prisma.job.findMany({ take: 10 });
  // Placeholder ATS scoring
  const results = jobs.map((j) => ({ job: j, atsScore: Math.floor(Math.random() * 40) + 60 }));
  return NextResponse.json(results);
}

import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const job = await prisma.job.findUnique({ where: { id: params.id } });
  if (!job) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(job);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const data = await req.json();
  const job = await prisma.job.update({ where: { id: params.id }, data });
  return NextResponse.json(job);
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  await prisma.job.delete({ where: { id: params.id } });
  return NextResponse.json({ ok: true });
}

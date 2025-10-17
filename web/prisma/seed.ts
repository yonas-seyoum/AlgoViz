import { PrismaClient } from "../src/generated/prisma";
const prisma = new PrismaClient();
import bcrypt from "bcryptjs";

async function main() {
  const passwordHash = await bcrypt.hash("password123", 10);

  const [admin, recruiter, seeker] = await Promise.all([
    prisma.user.upsert({
      where: { email: "admin@careerscaleup.com" },
      create: { email: "admin@careerscaleup.com", role: "ADMIN", name: "Admin" },
      update: {},
    }),
    prisma.user.upsert({
      where: { email: "recruiter@careerscaleup.com" },
      create: {
        email: "recruiter@careerscaleup.com",
        role: "RECRUITER",
        name: "Recruiter",
        passwordHash,
      },
      update: {},
    }),
    prisma.user.upsert({
      where: { email: "seeker@careerscaleup.com" },
      create: {
        email: "seeker@careerscaleup.com",
        role: "JOB_SEEKER",
        name: "Job Seeker",
        passwordHash,
      },
      update: {},
    }),
  ]);

  const company = await prisma.company.upsert({
    where: { id: "seed-company" },
    create: { id: "seed-company", name: "Acme Inc", ownerUserId: recruiter.id },
    update: {},
  });

  // createMany + skipDuplicates can be flaky with SQLite enums; create individually
  await prisma.job.create({
    data: {
      title: "Frontend Engineer",
      description: "Build beautiful UIs in React/Next.js",
      location: "Remote - US",
      employmentType: "Full-time",
      companyId: company.id,
      postedByUserId: recruiter.id,
    },
  });
  await prisma.job.create({
    data: {
      title: "Backend Engineer",
      description: "Design scalable APIs with Node/Prisma",
      location: "Remote - US",
      employmentType: "Full-time",
      companyId: company.id,
      postedByUserId: recruiter.id,
    },
  });
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });

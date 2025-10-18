export default function Home() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-muted/20">
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">CareerScaleUp</h1>
          <p className="mt-4 text-muted-foreground">
            AI-powered job platform for seekers and recruiters. Explore jobs,
            get matched, build ATS-optimized resumes, and run mock interviews.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="/seek/home"
              className="rounded-md bg-foreground px-4 py-2 text-background"
            >
              Job Seeker
            </a>
            <a
              href="/recruiter/home"
              className="rounded-md border px-4 py-2"
            >
              Recruiter
            </a>
            <a
              href="/admin"
              className="rounded-md border px-4 py-2"
            >
              Admin
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

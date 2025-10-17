export default function MyJobs() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Jobs</h1>
        <a className="rounded-md bg-foreground px-4 py-2 text-background" href="/recruiter/jobs/new">Post Job</a>
      </div>
      <div className="rounded-lg border p-4">Jobs list placeholder</div>
    </div>
  );
}

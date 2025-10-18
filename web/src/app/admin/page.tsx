export default function AdminDashboard() {
  return (
    <div className="min-h-dvh p-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Job Seekers</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Recruiters</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Jobs Posted</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-sm text-muted-foreground">Successful Hires</div>
          <div className="text-2xl font-bold">0</div>
        </div>
      </div>
    </div>
  );
}

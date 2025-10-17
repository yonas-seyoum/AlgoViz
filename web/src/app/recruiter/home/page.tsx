export default function RecruiterHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Home</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Posted Jobs</h2>
          <p className="text-sm text-muted-foreground">Total: 0</p>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Applications</h2>
          <p className="text-sm text-muted-foreground">Total: 0</p>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Active Postings</h2>
          <p className="text-sm text-muted-foreground">0 active</p>
        </section>
      </div>
    </div>
  );
}

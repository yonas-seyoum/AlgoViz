export default function MyApplications() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">My Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Applied</h2>
          <ul className="mt-2 text-sm text-muted-foreground">Placeholder</ul>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">In Review</h2>
          <ul className="mt-2 text-sm text-muted-foreground">Placeholder</ul>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Interview</h2>
          <ul className="mt-2 text-sm text-muted-foreground">Placeholder</ul>
        </section>
      </div>
    </div>
  );
}

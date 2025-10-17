export default function SeekHome() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Home</h1>
      <div className="grid md:grid-cols-3 gap-4">
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Personalized job analysis</h2>
          <p className="text-sm text-muted-foreground">Coming soon</p>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Resume performance insights</h2>
          <p className="text-sm text-muted-foreground">Coming soon</p>
        </section>
        <section className="rounded-lg border p-4">
          <h2 className="font-medium">Job feed preview</h2>
          <p className="text-sm text-muted-foreground">Coming soon</p>
        </section>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="container-padding mx-auto space-y-6 py-10">
      <section className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="mb-3 text-3xl">Our mission</h1>
          <p>
            We are building a modern, accessible platform that connects ambitious professionals with forward-thinking companies. Our focus is on clarity, fairness, and outcomes.
          </p>
        </div>
        <div className="card-base p-6">
          <h2 className="mb-2 text-xl">Values</h2>
          <ul className="list-disc space-y-1 pl-6">
            <li>Transparency and trust</li>
            <li>Accessible design</li>
            <li>Continuous learning</li>
          </ul>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="card-base p-4">
            <h3 className="text-lg">Team member {i}</h3>
            <p className="text-sm text-muted-foreground">Product, Engineering, or Design</p>
          </div>
        ))}
      </section>
    </div>
  );
}

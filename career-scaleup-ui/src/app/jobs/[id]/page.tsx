import { useMockData } from '@/hooks/useMockData';
import { notFound } from 'next/navigation';

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  const { jobById } = useMockData();
  const job = jobById(params.id);
  if (!job) return notFound();

  return (
    <div className="container-padding mx-auto grid gap-6 py-8 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-3xl">{job.title}</h1>
        <div className="text-sm text-muted-foreground">{job.company} • {job.location} • {job.type}</div>
        <div className="card-base p-4">
          <h2 className="mb-2 text-xl">Description</h2>
          <p className="leading-relaxed">{job.description}</p>
        </div>
        <div className="card-base p-4">
          <h2 className="mb-2 text-xl">Responsibilities</h2>
          <ul className="list-disc space-y-1 pl-6">
            {job.responsibilities.map((r: string) => (<li key={r}>{r}</li>))}
          </ul>
        </div>
        <div className="card-base p-4">
          <h2 className="mb-2 text-xl">Requirements</h2>
          <ul className="list-disc space-y-1 pl-6">
            {job.requirements.map((r: string) => (<li key={r}>{r}</li>))}
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <div className="card-base p-4">
          <h3 className="text-lg">Compensation</h3>
          <p className="text-sm text-muted-foreground">${"" + job.salaryMin.toLocaleString()} - ${"" + job.salaryMax.toLocaleString()}</p>
        </div>
        <div className="card-base p-4">
          <h3 className="text-lg">Type</h3>
          <p className="text-sm text-muted-foreground">{job.type}</p>
        </div>
      </div>
    </div>
  );
}

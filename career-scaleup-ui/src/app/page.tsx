import { SearchBar } from '@/components/shared/SearchBar';
import { JobCard } from '@/components/shared/JobCard';
import { AnalyticsCard } from '@/components/shared/AnalyticsCard';
import Link from 'next/link';
import { useMockData } from '@/hooks/useMockData';

export default function HomePage() {
  const { featuredJobs } = useMockData();
  return (
    <div>
      <section className="border-b border-border bg-white py-12 dark:bg-zinc-900">
        <div className="container-padding mx-auto grid gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h1 className="text-4xl">Find your next opportunity</h1>
            <p className="text-muted-foreground">
              Career Scaleup helps professionals and teams connect. Explore roles, match with AI, and accelerate your career.
            </p>
            <div className="max-w-xl">
              <SearchBar />
            </div>
            <div className="flex gap-3">
              <Link className="underline underline-offset-4" href="/jobs">Browse all jobs</Link>
              <Link className="underline underline-offset-4" href="/about">About us</Link>
            </div>
          </div>
          <AnalyticsCard title="Weekly Applications" />
        </div>
      </section>
      <section className="container-padding mx-auto py-10">
        <h2 className="mb-4 text-2xl">Featured Jobs</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((j) => (
            <JobCard key={j.id} title={j.title} company={j.company} location={j.location} salary={`$${j.salaryMin.toLocaleString()} - $${j.salaryMax.toLocaleString()}`} jobType={j.type} />
          ))}
        </div>
      </section>
    </div>
  );
}

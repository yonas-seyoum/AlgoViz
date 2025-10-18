import { FilterPanel } from '@/components/shared/FilterPanel';
import { JobCard } from '@/components/shared/JobCard';
import { SearchBar } from '@/components/shared/SearchBar';
import { useMockData } from '@/hooks/useMockData';

export default function JobsPage() {
  const { jobs } = useMockData();
  return (
    <div className="container-padding mx-auto grid gap-6 py-8 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <FilterPanel />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <SearchBar />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {jobs.map((j) => (
            <JobCard key={j.id} title={j.title} company={j.company} location={j.location} salary={`$${j.salaryMin.toLocaleString()} - $${j.salaryMax.toLocaleString()}`} jobType={j.type} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Sidebar } from '@/components/shared/Sidebar';
import { JobCard } from '@/components/shared/JobCard';

const items = [
  { href: '/seeker/home', label: 'Home' },
  { href: '/seeker/explore', label: 'Explore Jobs' },
  { href: '/seeker/match', label: 'AI Job Matching' },
  { href: '/seeker/applications', label: 'My Applications' },
  { href: '/seeker/resume', label: 'Create Resume' },
  { href: '/seeker/interview', label: 'AI Interview' },
  { href: '/seeker/saved', label: 'Saved Jobs' },
  { href: '/seeker/settings', label: 'Settings' },
];

export default function SeekerSavedPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Saved Jobs</h1>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {[1,2,3].map((i) => (
            <JobCard key={i} title={`Saved Role ${i}`} company="Example Co" location="Remote" salary="$100,000 - $140,000" jobType="Full-time" />
          ))}
        </div>
      </div>
    </div>
  );
}

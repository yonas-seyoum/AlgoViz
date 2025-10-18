import { Sidebar } from '@/components/shared/Sidebar';
import { AIResultCard } from '@/components/shared/AIResultCard';
import { useMockData } from '@/hooks/useMockData';

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

export default function SeekerMatchPage() {
  const { aiResults } = useMockData();
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">AI Job Matching</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {aiResults.map((r) => (
            <AIResultCard key={r.jobId} score={r.matchScore} explanation={r.explanation} />
          ))}
        </div>
      </div>
    </div>
  );
}

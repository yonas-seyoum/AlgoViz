import { Sidebar } from '@/components/shared/Sidebar';
import { ResumeCard } from '@/components/shared/ResumeCard';
import { Button } from '@/components/ui/Button';
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

export default function SeekerResumePage() {
  const { resumes } = useMockData();
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Resume Builder</h1>
        <div className="flex gap-2">
          <Button variant="outline">Upload Resume</Button>
          <Button>Generate with AI</Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {resumes.map((r) => (
            <ResumeCard key={r.id} title={r.title} date={r.date} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Sidebar } from '@/components/shared/Sidebar';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { useState } from 'react';

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

export default function SeekerInterviewPage() {
  const [resume, setResume] = useState('');
  const [job, setJob] = useState('');

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">AI Interview</h1>
        <div className="grid gap-3 sm:grid-cols-3">
          <Select value={resume} onChange={(e) => setResume(e.target.value)}>
            <option value="">Select Resume</option>
            <option value="r1">Software Engineer Resume</option>
            <option value="r2">Data Analyst Resume</option>
          </Select>
          <Select value={job} onChange={(e) => setJob(e.target.value)}>
            <option value="">Select Job</option>
            <option value="j1">Senior Frontend Engineer</option>
            <option value="j2">Data Analyst</option>
          </Select>
          <Button>Start Mock Interview</Button>
        </div>
        <div className="card-base p-4">
          <p className="text-sm text-muted-foreground">Questions and feedback will appear here.</p>
        </div>
      </div>
    </div>
  );
}

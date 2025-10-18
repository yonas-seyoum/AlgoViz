import { Sidebar } from '@/components/shared/Sidebar';
import { Button } from '@/components/ui/Button';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterJobsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl">My Jobs</h1>
          <Button>Post New Job</Button>
        </div>
        <div className="space-y-2">
          {[1,2,3,4].map((i) => (
            <div key={i} className="flex items-center justify-between border border-border p-3">
              <div>
                <p className="font-medium">Role #{i}</p>
                <p className="text-xs text-muted-foreground">Open • Remote</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Edit</Button>
                <Button variant="secondary">Close</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

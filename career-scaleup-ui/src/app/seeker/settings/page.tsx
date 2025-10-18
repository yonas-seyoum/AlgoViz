import { Sidebar } from '@/components/shared/Sidebar';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

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

export default function SeekerSettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Settings</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-base p-4 space-y-2">
            <h2 className="text-lg">Personal Info</h2>
            <Input placeholder="Full name" />
            <Input placeholder="Phone" />
          </div>
          <div className="card-base p-4 space-y-2">
            <h2 className="text-lg">Account</h2>
            <Input placeholder="Password" type="password" />
            <Button>Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

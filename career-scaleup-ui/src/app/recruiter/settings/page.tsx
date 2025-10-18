import { Sidebar } from '@/components/shared/Sidebar';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterSettingsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Settings</h1>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-base p-4 space-y-2">
            <h2 className="text-lg">Account</h2>
            <Input placeholder="Email" />
            <Input placeholder="Password" type="password" />
            <Button>Update</Button>
          </div>
          <div className="card-base p-4 space-y-2">
            <h2 className="text-lg">Notifications</h2>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Application updates</label>
            <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> New candidates</label>
          </div>
        </div>
      </div>
    </div>
  );
}

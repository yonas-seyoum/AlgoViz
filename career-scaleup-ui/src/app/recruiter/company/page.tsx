import { Sidebar } from '@/components/shared/Sidebar';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterCompanyPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Company Profile</h1>
        <div className="card-base p-4 space-y-2">
          <Input placeholder="Company name" />
          <Textarea placeholder="Description" />
          <div>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

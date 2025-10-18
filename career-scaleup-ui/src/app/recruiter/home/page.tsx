import { Sidebar } from '@/components/shared/Sidebar';
import { KPIWidget } from '@/components/shared/KPIWidget';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterHomePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Overview</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KPIWidget label="Total Jobs" value={8} />
          <KPIWidget label="Applications" value={124} />
          <KPIWidget label="Interviews" value={22} />
          <KPIWidget label="Hires" value={5} />
        </div>
      </div>
    </div>
  );
}

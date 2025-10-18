import { Sidebar } from '@/components/shared/Sidebar';
import { KPIWidget } from '@/components/shared/KPIWidget';
import { AnalyticsCard } from '@/components/shared/AnalyticsCard';

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

export default function SeekerHomePage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Overview</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <KPIWidget label="Applications" value={12} subtext="This month" />
          <KPIWidget label="Resume Score" value="86%" />
          <KPIWidget label="New Matches" value={5} />
        </div>
        <AnalyticsCard title="Application Trend" />
      </div>
    </div>
  );
}

import { Sidebar } from '@/components/shared/Sidebar';

const items = [
  { href: '/recruiter/home', label: 'Home' },
  { href: '/recruiter/jobs', label: 'My Jobs' },
  { href: '/recruiter/candidates', label: 'Candidates' },
  { href: '/recruiter/messages', label: 'Messages' },
  { href: '/recruiter/company', label: 'My Company' },
  { href: '/recruiter/settings', label: 'Settings' },
];

export default function RecruiterCandidatesPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1"><Sidebar items={items} /></div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">Candidates</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { name: 'Alex Johnson', fit: 85, highlights: 'React, TypeScript, Accessibility' },
            { name: 'Taylor Lee', fit: 78, highlights: 'SQL, Python, BI Dashboards' },
            { name: 'Sam Torres', fit: 92, highlights: 'Node, GraphQL, AWS' },
            { name: 'Riley Chen', fit: 74, highlights: 'UX, Prototyping, Research' },
          ].map((c) => (
            <div key={c.name} className="card-base p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{c.name}</p>
                <span className="text-accent font-semibold">{c.fit}% fit</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.highlights}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

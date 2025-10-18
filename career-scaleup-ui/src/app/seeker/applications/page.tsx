import { Sidebar } from '@/components/shared/Sidebar';
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/Table';
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

export default function SeekerApplicationsPage() {
  const { applications, jobs } = useMockData();
  const jobById = (id: string) => jobs.find((j) => j.id === id);

  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-1">
        <Sidebar items={items} />
      </div>
      <div className="lg:col-span-3 space-y-4">
        <h1 className="text-2xl">My Applications</h1>
        <div className="card-base">
          <Table>
            <THead>
              <TR>
                <TH>Job</TH>
                <TH>Company</TH>
                <TH>Status</TH>
              </TR>
            </THead>
            <TBody>
              {applications.map((a) => {
                const job = jobById(a.jobId);
                return (
                  <TR key={a.id}>
                    <TD>{job?.title}</TD>
                    <TD>{job?.company}</TD>
                    <TD>{a.status}</TD>
                  </TR>
                );
              })}
            </TBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

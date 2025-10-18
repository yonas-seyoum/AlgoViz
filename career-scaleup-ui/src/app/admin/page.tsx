import { KPIWidget } from '@/components/shared/KPIWidget';
import { Table, THead, TBody, TR, TH, TD } from '@/components/ui/Table';
import { AnalyticsCard } from '@/components/shared/AnalyticsCard';

export default function AdminPage() {
  return (
    <div className="container-padding mx-auto space-y-6 py-8">
      <h1 className="text-2xl">Admin Overview</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPIWidget label="Total Seekers" value={1204} />
        <KPIWidget label="Total Recruiters" value={238} />
        <KPIWidget label="Total Jobs" value={356} />
        <KPIWidget label="Successful Hires" value={91} />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 card-base p-0">
          <Table>
            <THead>
              <TR>
                <TH>User</TH>
                <TH>Role</TH>
                <TH>Email</TH>
              </TR>
            </THead>
            <TBody>
              {[
                { user: 'Alex Johnson', role: 'seeker', email: 'alex@example.com' },
                { user: 'Taylor Lee', role: 'recruiter', email: 'taylor@acme.io' },
              ].map((u) => (
                <TR key={u.email}>
                  <TD>{u.user}</TD>
                  <TD>{u.role}</TD>
                  <TD>{u.email}</TD>
                </TR>
              ))}
            </TBody>
          </Table>
        </div>
        <AnalyticsCard title="Activity" />
      </div>
    </div>
  );
}

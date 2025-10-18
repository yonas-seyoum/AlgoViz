import users from '@/data/fixtures/users.json';
import jobs from '@/data/fixtures/jobs.json';
import applications from '@/data/fixtures/applications.json';
import resumes from '@/data/fixtures/resumes.json';
import aiResults from '@/data/fixtures/aiResults.json';
import type { Job, User } from '@/types';

export function useMockData() {
  const featuredJobs = (jobs as unknown as Job[]).slice(0, 3);
  return {
    users: users as unknown as User[],
    jobs: jobs as unknown as Job[],
    applications,
    resumes,
    aiResults,
    featuredJobs,
    jobById: (id: string) => (jobs as any as Job[]).find((j) => j.id === id),
  };
}

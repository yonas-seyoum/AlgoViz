export type Role = 'seeker' | 'recruiter' | 'admin';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  skills: string[];
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  salaryMin: number;
  salaryMax: number;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export type Application = {
  id: string;
  jobId: string;
  seekerId: string;
  status: 'Applied' | 'Withdrawn' | 'ShortListed' | 'Accepted';
};

export type Resume = {
  id: string;
  userId: string;
  title: string;
  date: string; // ISO date
};

export type AIResult = {
  jobId: string;
  matchScore: number;
  explanation: string;
};

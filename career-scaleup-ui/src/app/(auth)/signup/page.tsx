"use client";

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { useState } from 'react';
import type { Role } from '@/types';

export default function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('seeker');

  return (
    <div className="container-padding mx-auto grid min-h-[calc(100vh-160px)] place-items-center py-8">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl">Create account</h1>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="space-y-3">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Select value={role} onChange={(e) => setRole(e.target.value as Role)} aria-label="Role">
            <option value="seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </Select>
          <Button className="w-full">Sign up</Button>
          <Button className="w-full" variant="secondary">Continue with Google</Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Role } from '@/types';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<Role>('seeker');
  const router = useRouter();

  return (
    <div className="container-padding mx-auto grid min-h-[calc(100vh-160px)] place-items-center py-8">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl">Sign in</h1>
        <div className="space-y-3">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Select value={role} onChange={(e) => setRole(e.target.value as Role)} aria-label="Role">
            <option value="seeker">Job Seeker</option>
            <option value="recruiter">Recruiter</option>
            <option value="admin">Admin</option>
          </Select>
          <div className="flex gap-2">
            <input id="remember" type="checkbox" className="h-4 w-4" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <Button
            onClick={() => {
              if (role === 'seeker') router.push('/seeker/home');
              else if (role === 'recruiter') router.push('/recruiter/home');
              else router.push('/admin');
            }}
          >
            Sign in
          </Button>
          <Button variant="secondary">Sign in with Google</Button>
          <a className="block text-sm underline underline-offset-4" href="/auth/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  return (
    <div className="container-padding mx-auto grid min-h-[calc(100vh-160px)] place-items-center py-8">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl">Reset password</h1>
        <p className="text-sm text-muted-foreground">Enter your email and we will send a reset link.</p>
        <div className="space-y-3">
          <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Button className="w-full">Send reset link</Button>
        </div>
      </div>
    </div>
  );
}

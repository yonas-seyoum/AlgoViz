"use client";

import { useState } from 'react';
import type { Role } from '@/types';

export function useMockAuth() {
  const [role, setRole] = useState<Role | null>(null);
  const [userId, setUserId] = useState<string | null>('u1');

  return {
    role,
    userId,
    signIn: (nextRole: Role) => setRole(nextRole),
    signOut: () => setRole(null),
    setUserId,
  } as const;
}

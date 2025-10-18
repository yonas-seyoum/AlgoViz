"use client";

import * as React from 'react';
import { Button } from '@/components/ui/Button';

export function Modal({
  open,
  title,
  children,
  onClose,
  actions,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  actions?: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-lg border border-border bg-white p-4 shadow-sm dark:bg-zinc-900">
        <div className="mb-3 flex items-center justify-between border-b border-border pb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button variant="ghost" onClick={onClose} aria-label="Close">Close</Button>
        </div>
        <div className="space-y-3">{children}</div>
        {actions && <div className="mt-4 flex justify-end gap-2">{actions}</div>}
      </div>
    </div>
  );
}

"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

export function Sidebar({ items }: { items: Array<{ href: string; label: string }> }) {
  const pathname = usePathname();
  return (
    <aside className="card-base p-3">
      <nav className="space-y-1">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className={cn(
              'block rounded-none px-3 py-2 text-sm hover:bg-muted',
              pathname === i.href ? 'bg-muted font-medium' : 'text-foreground/80'
            )}
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

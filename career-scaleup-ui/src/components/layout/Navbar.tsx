"use client";

import Link from 'next/link';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { SearchBar } from '@/components/shared/SearchBar';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/about', label: 'About' },
  { href: '/profile/1', label: 'Profile' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="appbar">
      <div className="container-padding mx-auto flex w-full items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl tracking-tight">Career Scaleup</Link>
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium hover:text-accent-foreground/90 hover:underline underline-offset-8',
                  pathname === item.href ? 'text-accent' : 'text-foreground/80'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden lg:block w-[400px]">
            <SearchBar compact placeholder="Search jobs, companies..." />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

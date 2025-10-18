"use client";

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Search } from 'lucide-react';
import { useState } from 'react';

export function SearchBar({ compact = false, placeholder = 'Job title, keyword...', className = '' }: { compact?: boolean; placeholder?: string; className?: string }) {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  if (compact) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="relative flex-1">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={placeholder} aria-label="Search" />
          <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <Button variant="secondary">Search</Button>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-3 md:grid-cols-5 ${className}`} role="search">
      <div className="md:col-span-2">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={placeholder} aria-label="Job title" />
      </div>
      <div>
        <Input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" aria-label="Location" />
      </div>
      <div>
        <Select value={salary} onChange={(e) => setSalary(e.target.value)} aria-label="Salary range">
          <option value="">Salary Range</option>
          <option value="0-50k">0 - 50k</option>
          <option value="50k-100k">50k - 100k</option>
          <option value="100k-200k">100k - 200k</option>
        </Select>
      </div>
      <div>
        <Button className="w-full h-10">Search Jobs</Button>
      </div>
    </div>
  );
}

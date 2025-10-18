"use client";

import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';

export function FilterPanel() {
  const [industry, setIndustry] = useState('');
  const [level, setLevel] = useState('');
  const [minSalary, setMinSalary] = useState('');

  return (
    <aside className="card-base p-4 space-y-3" aria-label="Filters">
      <div>
        <label className="mb-1 block text-sm font-medium">Industry</label>
        <Select value={industry} onChange={(e) => setIndustry(e.target.value)}>
          <option value="">All</option>
          <option value="software">Software</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </Select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Experience Level</label>
        <Select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Any</option>
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </Select>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Minimum Salary</label>
        <Input value={minSalary} onChange={(e) => setMinSalary(e.target.value)} placeholder="e.g. 80000" />
      </div>
      <Button className="w-full">Apply Filters</Button>
    </aside>
  );
}

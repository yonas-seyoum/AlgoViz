import * as React from 'react';
import { cn } from '@/utils/cn';

export function Table({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) {
  return <table className={cn('w-full border-collapse text-sm', className)} {...props} />;
}
export function THead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn('', className)} {...props} />;
}
export function TBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn('', className)} {...props} />;
}
export function TR({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn('border-b border-border', className)} {...props} />;
}
export function TH({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn('bg-muted text-left font-medium px-3 py-2 border-b border-border', className)} {...props} />;
}
export function TD({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn('px-3 py-2 align-top', className)} {...props} />;
}

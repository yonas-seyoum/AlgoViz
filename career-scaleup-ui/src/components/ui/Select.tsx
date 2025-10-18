import * as React from 'react';
import { cn } from '@/utils/cn';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={cn('h-10 w-full rounded-none border border-border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent', className)}
      {...props}
    >
      {children}
    </select>
  );
});
Select.displayName = 'Select';

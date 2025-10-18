import * as React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'h-10 w-full rounded-none border border-border bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent',
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

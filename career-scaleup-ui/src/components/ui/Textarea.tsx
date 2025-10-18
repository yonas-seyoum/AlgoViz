import * as React from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn('min-h-[120px] w-full rounded-none border border-border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent', className)}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

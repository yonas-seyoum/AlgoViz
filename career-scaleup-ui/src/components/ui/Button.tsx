import * as React from 'react';
import { cn } from '@/utils/cn';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'icon';
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  default:
    'bg-primary text-primary-foreground hover:bg-primary/90 border border-border',
  secondary:
    'bg-muted text-foreground hover:bg-muted/80 border border-border',
  outline:
    'bg-transparent text-foreground border border-border hover:bg-muted',
  ghost:
    'bg-transparent hover:bg-muted text-foreground',
  link: 'bg-transparent underline underline-offset-4 text-accent hover:text-accent/80',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
  icon: 'h-10 w-10 p-0',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn('rounded-none transition-colors', variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

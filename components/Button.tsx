import React from 'react';
import { cn } from '../src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/20',
    secondary: 'bg-brand-accent text-brand-black hover:bg-yellow-400',
    outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10',
    ghost: 'text-white hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-bold',
    xl: 'px-10 py-5 text-xl font-extrabold uppercase tracking-tight',
  };

  return (
    <button 
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

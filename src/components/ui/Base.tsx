import { LucideIcon } from 'lucide-react';
import React, { ReactNode, ButtonHTMLAttributes } from 'react';

export interface CardProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  icon?: LucideIcon;
}

export function Card({ title, description, children, className = '', footer, icon: Icon }: CardProps) {
  return (
    <div className={`bg-[#111] border border-[#262626] flex flex-col ${className}`}>
      {(title || description || Icon) && (
        <div className="px-6 py-4 border-b border-[#262626] flex items-center justify-between">
          <div>
            {title && <h3 className="text-xl font-serif italic text-white">{title}</h3>}
            {description && <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">{description}</p>}
          </div>
          {Icon && <Icon className="w-5 h-5 text-[#333]" />}
        </div>
      )}
      <div className="p-6 flex-1">{children}</div>
      {footer && <div className="px-6 py-4 bg-[#0d0d0d] border-t border-[#262626]">{footer}</div>}
    </div>
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  loading?: boolean;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  loading, 
  disabled, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200',
    secondary: 'bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#222]',
    outline: 'border border-[#262626] bg-transparent hover:bg-[#111] text-[#e5e5e5]',
    ghost: 'bg-transparent hover:bg-white/5 text-[#e5e5e5] opacity-60 hover:opacity-100',
    danger: 'bg-red-900/50 text-red-200 border border-red-800/50 hover:bg-red-800/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px]',
    md: 'px-6 py-3 text-[11px]',
    lg: 'px-8 py-4 text-xs',
    icon: 'p-2',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
}



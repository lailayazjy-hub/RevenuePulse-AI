
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon,
  className = '',
  style,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  // Note: We are using Tailwind for layout but inline styles/CSS vars for dynamic theme colors where applicable
  let variantStyles = "";
  let customStyle = { ...style };

  switch (variant) {
    case 'primary':
      variantStyles = "text-white focus:ring-opacity-50";
      // We apply the background color via style to use the CSS variable dynamically
      customStyle = { 
        ...customStyle, 
        backgroundColor: 'var(--theme-primary)',
        borderColor: 'var(--theme-primary)'
      };
      break;
    case 'secondary':
      variantStyles = "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500";
      break;
    case 'outline':
      variantStyles = "border bg-transparent hover:bg-slate-50 focus:ring-opacity-50";
      customStyle = {
        ...customStyle,
        borderColor: 'var(--theme-text)', // Using text color for outline border to match theme
        color: 'var(--theme-text)'
      };
      break;
    case 'ghost':
      variantStyles = "hover:bg-slate-100 text-slate-600 hover:text-slate-900";
      break;
  }

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${sizes[size]} ${className}`}
      style={customStyle}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

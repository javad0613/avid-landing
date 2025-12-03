import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, className, variant = 'primary', icon: Icon, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-sm";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-primary/30 hover:shadow-primary/40",
    secondary: "bg-secondary text-white hover:bg-secondary-light shadow-secondary/30",
    outline: "border-2 border-primary text-primary hover:bg-primary/10",
    white: "bg-white text-secondary hover:bg-gray-50"
  };

  return (
    <button 
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
    </button>
  );
};

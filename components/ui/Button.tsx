import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden transition-all duration-400 font-bold rounded-full py-4 px-8 text-lg md:text-xl";
  
  const variants = {
    primary: "bg-gradient-to-br from-[#D1FE17] to-[#E2FF5E] text-[#0F1113] shadow-[0_0_30px_rgba(209,254,23,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(209,254,23,0.4)]",
    secondary: "bg-[rgba(209,254,23,0.05)] border-2 border-[#D1FE17] text-[#D1FE17] shadow-[0_0_20px_rgba(209,254,23,0.1)] hover:bg-[#D1FE17] hover:text-[#0F1113] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(209,254,23,0.3)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
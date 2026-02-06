import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]
        rounded-3xl p-8 transition-all duration-300
        ${hoverEffect ? 'hover:bg-white/10 hover:border-[#D1FE17]/20 hover:shadow-[0_8px_32px_rgba(209,254,23,0.1)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
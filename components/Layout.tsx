import React from 'react';

// Leaf SVG Components
const Leaf1 = () => (
  <svg width="200" height="200" viewBox="0 0 100 100" className="absolute top-[10%] left-[5%] opacity-[0.03] animate-[spin_30s_linear_infinite]">
    <path d="M50 10 Q 70 30 75 50 Q 70 70 50 85 Q 30 70 25 50 Q 30 30 50 10" fill="#4A7C3A"/>
  </svg>
);

const Leaf2 = () => (
  <svg width="250" height="250" viewBox="0 0 100 100" className="absolute top-[60%] right-[10%] opacity-[0.03] animate-[spin_25s_linear_infinite_reverse]">
    <path d="M50 10 Q 70 30 75 50 Q 70 70 50 85 Q 30 70 25 50 Q 30 30 50 10" fill="#2D5016"/>
  </svg>
);

const Leaf3 = () => (
  <svg width="180" height="180" viewBox="0 0 100 100" className="absolute top-[30%] right-[5%] opacity-[0.03] animate-[spin_35s_linear_infinite]">
    <path d="M50 10 Q 70 30 75 50 Q 70 70 50 85 Q 30 70 25 50 Q 30 30 50 10" fill="#4A7C3A"/>
  </svg>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-[#0A0E0F] min-h-screen text-[#E5E7EB] font-sans overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
         <Leaf1 />
         <Leaf2 />
         <Leaf3 />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
import React from 'react';

const brands = [
  "SUNMED", "ENDOCA", "ELIXIR", "COLORADO", "MUSH", "brelixi", "Cheech", "Kerklaan", "LAURICIDIN", "DABTECH"
];

const LogoCard: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-white w-[180px] h-[100px] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 mx-3">
    <span className="text-gray-800 font-bold text-xl uppercase tracking-wider">{name}</span>
  </div>
);

export const Carousel: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden bg-[#0F1113]">
      <div className="max-w-7xl mx-auto mb-10 text-center">
         <h2 className="text-3xl font-bold text-white">Brands We've Scaled</h2>
      </div>

      <div className="relative w-full">
        {/* Row 1 - Scroll Left */}
        <div className="flex w-max animate-[scroll_40s_linear_infinite] mb-8 hover:pause">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <LogoCard key={`row1-${idx}`} name={brand} />
          ))}
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex w-max animate-[scroll-reverse_45s_linear_infinite] hover:pause">
           {[...brands].reverse().concat([...brands].reverse()).concat([...brands].reverse()).map((brand, idx) => (
            <LogoCard key={`row2-${idx}`} name={brand} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
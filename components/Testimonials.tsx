import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "John Smith",
    role: "Founder, Premium Topicals",
    text: "CBD Sutra saved us from shutdowns. Their compliance-first approach is game-changing. $0 to $1.2M in 12 months with zero compliance issues.",
    stats: "Revenue: $1.2M | ROAS: 2.72X"
  },
  {
    name: "Sarah Johnson",
    role: "CEO, Gummies Co",
    text: "They focus on profit, not vanity metrics. Understanding our COGS and optimizing for actual profitability changed everything regarding our bottom line.",
    stats: "Revenue: $800K | ROAS: 3.1X"
  },
  {
    name: "Mike Chen",
    role: "Founder, Wellness Tinctures",
    text: "After 3 shutdowns, CBD Sutra rebuilt us safely. Now scaling to $450K with zero compliance issues. Worth every penny for the peace of mind.",
    stats: "Revenue: $450K | Shutdowns: 0"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <GlassCard key={i} className="border-l-4 border-l-[#D1FE17]" hoverEffect>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D1FE17] to-[#4A7C3A] flex items-center justify-center text-[#0F1113] font-bold text-xl">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                 </div>
               </div>
               <p className="text-gray-300 mb-6 italic">"{t.text}"</p>
               <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} size={16} className="fill-[#D1FE17] text-[#D1FE17]" />)}
               </div>
               <div className="text-xs text-gray-500 font-mono border-t border-white/10 pt-4">
                  📊 {t.stats}
               </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
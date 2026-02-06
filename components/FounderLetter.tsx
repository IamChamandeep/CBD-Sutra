import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const FounderLetter: React.FC = () => (
  <section className="py-32 px-6 md:px-12 relative z-10">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
        A Letter from the Founder
      </h2>
      <GlassCard className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-center md:items-start">
           <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D1FE17] to-[#4A7C3A] flex items-center justify-center text-4xl shadow-xl">
             👨‍💼
           </div>
           <div>
              <p className="text-xl font-bold text-white">Founder & CEO, CBD Sutra</p>
              <p className="text-sm text-gray-400">Building the agency CBD brands deserve</p>
           </div>
        </div>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            I spent 7 years watching CBD brands get banned. Accounts shut down at 2am. Revenue streams vanishing overnight. Brand owners calling in panic, unsure what went wrong.
          </p>
          <p>
            The problem? Most agencies treating CBD like any other DTC category. They didn't understand compliance. They didn't respect the regulations. They didn't think long-term about account sustainability.
          </p>
          <p>
             So I made myself a promise: <span className="text-[#D1FE17] font-bold">build the agency I always wished existed.</span>
          </p>
          <p>
             Not just another team running ads. But a real partner that thinks with you, works beside you, and treats your CBD brand like their own.
          </p>
        </div>
      </GlassCard>
    </div>
  </section>
);
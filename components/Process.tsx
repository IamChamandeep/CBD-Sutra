import React from 'react';
import { GlassCard } from './ui/GlassCard';

const steps = [
  {
    number: "01",
    title: "Audit & Compliance Roadmap",
    duration: "Week 1",
    description: "We dive deep into your past ad accounts, landing pages, and creative assets. Our legal team flags risks and creates a remediation plan to ensure 100% compliance before we spend a dollar."
  },
  {
    number: "02",
    title: "Infrastructure & Whitelisting",
    duration: "Week 2",
    description: "We set up your 'Safe Mode' infrastructure. This includes dedicated IPs, whitelisted ad accounts through our agency partnerships, and compliance-wrapped landing pages."
  },
  {
    number: "03",
    title: "Creative Production",
    duration: "Week 3-4",
    description: "Our studio scripts, shoots, and edits high-converting creatives. We focus on UGC, educational angles, and lifestyle content that passes moderation bots while hooking humans."
  },
  {
    number: "04",
    title: "Launch & Scale",
    duration: "Month 2+",
    description: "We launch with our 'Testing Grid' strategy. Once winners are identified, we scale budgets aggressively while monitoring account health metrics daily."
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="process">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#D1FE17] font-bold tracking-wider uppercase text-sm mb-2 block">The Blueprint</span>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
            Our 4-Step Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <GlassCard key={index} className="relative group overflow-hidden" hoverEffect>
              <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/5 group-hover:text-[#D1FE17]/10 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="text-[#D1FE17] font-mono text-sm mb-4 border border-[#D1FE17]/30 inline-block px-3 py-1 rounded-full bg-[#D1FE17]/5">
                  {step.duration}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
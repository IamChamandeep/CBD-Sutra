import React from 'react';
import { GlassCard } from './ui/GlassCard';

export const WhyChoose: React.FC = () => (
    <section className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">Why CBD Sutra Wins</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-16">
                {[
                    { icon: "🛡️", val: "99.7%", label: "Account Health", sub: "Zero shutdowns in 18 months" },
                    { icon: "📚", val: "500+", label: "Pre-Vetted Creatives", sub: "Compliance library ready" },
                    { icon: "⚡", val: "6-Key", label: "Compliance Guarantee", sub: "Legal review on every asset" }
                ].map((item, idx) => (
                    <GlassCard key={idx} className="text-center">
                        <p className="text-4xl mb-4">{item.icon}</p>
                        <p className="text-3xl font-bold text-[#D1FE17] mb-2">{item.val}</p>
                        <p className="text-gray-200 font-bold">{item.label}</p>
                        <p className="text-sm text-gray-500 mt-2">{item.sub}</p>
                    </GlassCard>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                 {[
                    { title: "Pre-Vetted Claim Library", desc: "500+ compliance-approved claims. No FDA violations. Legal review before launch." },
                    { title: "Whitelisted Infrastructure", desc: "Whitelisted on Meta & Google. Approved domains. Protected account status." },
                    { title: "CBD Native Media Buyers", desc: "10+ years CBD-only specialization. Understand platform policies inside out." },
                    { title: "Profit-Focused Strategy", desc: "COGS-aware optimization. Contribution margin focus. We optimize for profit, not just ROAS." }
                 ].map((feat, idx) => (
                    <GlassCard key={idx} className="flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-4 text-[#D1FE17] flex items-center gap-2">
                             ✅ {feat.title}
                        </h3>
                        <p className="text-gray-300">{feat.desc}</p>
                    </GlassCard>
                 ))}
            </div>
        </div>
    </section>
);
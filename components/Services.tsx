import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Shield, Clapperboard, BarChart3, Wrench, Mail, DollarSign } from 'lucide-react';

const services = [
  {
    icon: <Shield className="w-8 h-8 text-[#D1FE17]" />,
    title: "Compliance-Ready Meta & Google Ads",
    description: "Pre-vetted claim library, legal review on every ad, whitelisted domains. Zero compliance issues guaranteed.",
    highlight: "✓ 500+ compliant ads | Legal pre-approval"
  },
  {
    icon: <Clapperboard className="w-8 h-8 text-[#D1FE17]" />,
    title: "Scroll-Stopping CBD Creatives",
    description: "UGC from verified users, before/after visuals, lifestyle content. 50+ creative variations monthly.",
    highlight: "✓ 50+ variations/month | High-octane production"
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#D1FE17]" />,
    title: "Vertical-Specific Funnels",
    description: "Different strategies for gummies vs topicals vs tinctures. Age-gate compliance, mobile-first checkout.",
    highlight: "✓ CBD-native funnels | 73% mobile optimization"
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#D1FE17]" />,
    title: "Account Resurrection",
    description: "Previous shutdowns? We rebuild from scratch. New whitelisted infrastructure, approved claims database.",
    highlight: "✓ 15+ accounts restored | Zero downtime"
  },
  {
    icon: <Mail className="w-8 h-8 text-[#D1FE17]" />,
    title: "Retention Marketing",
    description: "Email, SMS, WhatsApp automation. Drip campaigns, re-engagement sequences, VIP retention funnels.",
    highlight: "✓ 35-40% repeat rate | Lifetime value focus"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-[#D1FE17]" />,
    title: "Profit Optimization (CRO)",
    description: "COGS-aware optimization, AOV improvement. We optimize for contribution margin, not vanity metrics.",
    highlight: "✓ +34% AOV | 3.8:1 LTV:CAC ratio"
  }
];

export const Services: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="services">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
          Our Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <GlassCard key={index} hoverEffect={true} className="flex flex-col h-full">
              <div className="mb-6 bg-[#D1FE17]/10 w-16 h-16 rounded-2xl flex items-center justify-center border border-[#D1FE17]/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#D1FE17] mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="bg-[#D1FE17]/5 border-l-2 border-[#D1FE17] p-3 text-sm text-[#D1FE17] rounded-r-md">
                {service.highlight}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
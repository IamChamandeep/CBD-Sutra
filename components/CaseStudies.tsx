import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { ArrowUpRight, TrendingUp, Users, DollarSign, ShieldCheck, RefreshCw } from 'lucide-react';

const cases = [
  {
    title: "Scaling Premium Tinctures from $20k to $150k/mo",
    videoId: "LXb3EKWsInQ", // Placeholder
    description: "We pivoted their strategy from 'health claims' (which got them banned) to 'founder story' and 'educational mechanisms'. This completely bypassed the algorithm flags while building massive trust.",
    stats: [
      { label: "ROAS", value: "4.2x", icon: <TrendingUp size={16} /> },
      { label: "Monthly Rev", value: "$150k+", icon: <DollarSign size={16} /> },
      { label: "CPA", value: "-22%", icon: <Users size={16} /> }
    ]
  },
  {
    title: "The 'Gummies' Funnel: 0 to 7-Figures",
    videoId: "t4h206rX_9w", // Placeholder
    description: "Launched a new gummy brand using our pre-vetted UGC network. We flooded the account with 50+ creative variations in month 1, finding 3 winners that scaled to cold traffic immediately.",
    stats: [
      { label: "ROAS", value: "3.8x", icon: <TrendingUp size={16} /> },
      { label: "First Yr Rev", value: "$1.2M", icon: <DollarSign size={16} /> },
      { label: "AOV", value: "$85", icon: <Users size={16} /> }
    ]
  },
  {
    title: "Resurrecting a Banned Topicals Brand",
    videoId: "9xwazD5SyVg", // Placeholder
    description: "Client came to us with 3 disabled ad accounts due to 'medical claims'. We implemented our Safe Mode infrastructure, moved them to whitelisted domains, and launched compliant 'soothing' creative angles.",
    stats: [
      { label: "Shutdowns", value: "0", icon: <ShieldCheck size={16} /> },
      { label: "Recovery", value: "14 Days", icon: <RefreshCw size={16} /> },
      { label: "Current ROAS", value: "3.5x", icon: <TrendingUp size={16} /> }
    ]
  },
  {
    title: "Subscription Engine for CBD Sleep Drops",
    videoId: "ScMzIvxBSi4", // Placeholder
    description: "Acquisition was expensive, so we focused on LTV. We built a '30-Day Sleep Challenge' funnel that prioritized subscriptions, increasing their recurring revenue percentage from 15% to 42%.",
    stats: [
      { label: "Sub Rate", value: "42%", icon: <RefreshCw size={16} /> },
      { label: "LTV Lift", value: "+140%", icon: <TrendingUp size={16} /> },
      { label: "CPA", value: "$45", icon: <Users size={16} /> }
    ]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="case-studies">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <span className="text-[#D1FE17] font-bold tracking-wider uppercase text-sm mb-2 block">Proven Results</span>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
                Video Case Studies
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Don't just take our word for it. Watch deep dives into how we scale CBD brands safely.
              </p>
           </div>
           <button className="flex items-center gap-2 text-[#D1FE17] font-bold hover:text-white transition-colors group">
              View All Case Studies 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((study, index) => (
            <GlassCard key={index} className="!p-0 overflow-hidden flex flex-col h-full group" hoverEffect>
              {/* Video Container */}
              <div className="relative aspect-video w-full bg-black/50 border-b border-white/10">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${study.videoId}?controls=1&modestbranding=1&rel=0`} 
                  title={study.title} 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D1FE17] transition-colors">
                  {study.title}
                </h3>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/10">
                   {study.stats.map((stat, i) => (
                     <div key={i} className="text-center">
                        <div className="text-[#D1FE17] font-bold text-xl mb-1 flex justify-center items-center gap-1">
                           {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wide flex justify-center items-center gap-1">
                           {stat.label}
                        </div>
                     </div>
                   ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                <div className="mt-auto">
                   <button className="text-sm font-bold text-white bg-white/5 hover:bg-[#D1FE17] hover:text-black py-3 px-6 rounded-lg w-full transition-all border border-white/10 hover:border-[#D1FE17]">
                      Read Full Breakdown
                   </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
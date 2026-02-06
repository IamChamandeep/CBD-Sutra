import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6 md:px-12 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Abstract Background Blurs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#4A7C3A]/20 rounded-full blur-[100px]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D1FE17]/10 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D1FE17] text-sm font-semibold backdrop-blur-md">
            🚀 Trusted by 40+ 7-8 Figure CBD Brands
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]"
        >
          The <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">Revenue Engine</span> for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">CBD Brands</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          We don't run ads. We architect <span className="font-bold text-[#D1FE17]">profit systems.</span>
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Compliance-ready creatives + Strategic account management + Vertical-specific funnels = Sustainable scaling without the ban risk
        </motion.p>
      </div>

      {/* Video Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-5xl mx-auto mt-6 mb-12 relative z-10 w-full"
      >
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group bg-black/50">
           <img 
            src="https://images.unsplash.com/photo-1603960814983-5c544320875e?q=80&w=2670&auto=format&fit=crop" 
            alt="Dashboard Preview" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-[#D1FE17]/90 rounded-full flex items-center justify-center pl-1 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(209,254,23,0.5)]">
                <Play fill="#0F1113" stroke="none" size={32} />
             </div>
          </div>
        </div>
      </motion.div>

      {/* CTAs */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E] text-[#0F1113] px-6 py-3 rounded-lg font-bold mb-8 inline-block shadow-lg"
        >
          ⏰ ONLY 3 SPOTS AVAILABLE THIS QUARTER | Next Onboarding: March 15, 2026
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          <Button>Get Your Compliant Ads Audit</Button>
          <Button variant="secondary">Schedule Strategy Call</Button>
        </motion.div>
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8 }}
        >
            <p className="text-sm text-gray-500 mb-4">Brands we've helped scale to 7-figures:</p>
            <div className="flex justify-center gap-4 flex-wrap">
                {['Premium Topicals', 'Gummies Leaders', 'Tincture Masters', 'Wellness Brands'].map((tag) => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-[#D1FE17]">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};
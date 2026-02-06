import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const faqs = [
  {
    question: "What's your compliance track record?",
    answer: "99.7% account health with zero shutdowns in 18 months. Every ad, landing page, and claim is pre-vetted by our legal team before launch. We have a dedicated compliance officer reviewing all assets."
  },
  {
    question: "How quickly can we see results?",
    answer: "Week 1-3: Compliance audit & funnel setup. Week 4: Campaigns launch. Within 2 weeks of launch we typically see initial performance data, with significant scaling (2-3X revenue lift) happening in Months 2-3."
  },
  {
    question: "What if we've had accounts shut down before?",
    answer: "We specialize in account resurrection. Full infrastructure rebuild with whitelisted domains, approved claims, and compliance-first strategy. We've successfully resurrected 15+ accounts."
  },
  {
    question: "Do you work with subscription models?",
    answer: "Yes, we specialize in subscription optimization. Our average subscription retention is 6.2 months with 34% repeat purchase rate. We employ specific strategies for LTV maximization."
  },
  {
    question: "What's your minimum contract & budget?",
    answer: "Minimum Revenue: $15-20K/month. Minimum Ad Budget: $3-5K/month. Contract Length: 3 months minimum to ensure we have time to implement our infrastructure properly."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 md:px-12 relative z-10" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E]">
          FAQ
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="!p-0 overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Plus className="text-[#D1FE17] w-6 h-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-300 border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
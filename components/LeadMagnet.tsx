import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/Button';

export const LeadMagnet: React.FC = () => (
    <section className="py-32 px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
            <GlassCard className="text-center p-12 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Get Free CBD Compliance Resources</h2>
                <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
                    Download our compliance checklist, ad policy guide, and creative compliance framework. Used by 40+ brands to stay safe.
                </p>
                <div className="text-left max-w-lg mx-auto space-y-3 mb-10 bg-black/20 p-6 rounded-2xl">
                    <p className="text-gray-300">✅ CBD Compliance Checklist</p>
                    <p className="text-gray-300">✅ Meta & Google Ad Policy Guide</p>
                    <p className="text-gray-300">✅ Pre-Vetted Claims Library Sample</p>
                    <p className="text-gray-300">✅ Account Resurrection Playbook</p>
                </div>
                <Button>Download Free Resources</Button>
            </GlassCard>
        </div>
    </section>
);
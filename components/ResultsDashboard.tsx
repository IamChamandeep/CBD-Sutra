import React from 'react';

export const ResultsDashboard: React.FC = () => (
    <section className="py-20 px-4 md:px-8 relative z-10 bg-[#0A0E0F]/50" id="results">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Clients Have Been Featured On</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {['USA Today', 'People', 'FOX', 'Forbes', 'CBS', "Men's Journal"].map((media, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-6 flex items-center justify-center min-h-[100px] shadow-md hover:scale-105 transition-transform duration-300">
                        <span className="text-gray-800 font-bold text-lg">{media}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
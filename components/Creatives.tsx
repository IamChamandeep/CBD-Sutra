import React, { useRef } from 'react';
import { GlassCard } from './ui/GlassCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// ==========================================
// HOW TO ADD YOUR OWN MEDIA:
// 1. Upload your photos/videos to a hosting platform (AWS S3, Cloudinary, etc.)
// 2. Replace the URLs below with your own links.
// 3. Ensure images are 9:16 aspect ratio for best fit.
// ==========================================

// Data for Top Performing Creatives (Clean - No Text)
const topCreatives = [
  {
    id: 1,
    // Replace with your image URL
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2669&auto=format&fit=crop",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
  }
];

// Data for UGC Vault (Videos - Auto Play, Loop, Muted, No Text)
const ugcVideos = [
  {
    id: 101,
    // Replace 'video' with your .mp4 URL
    video: "https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4",
    // Replace 'poster' with a thumbnail image URL (loads before video)
    poster: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 102,
    video: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
    poster: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 103,
    video: "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4",
    poster: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47b?q=80&w=2666&auto=format&fit=crop"
  },
  {
    id: 104,
    video: "https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4",
    poster: "https://images.unsplash.com/photo-1599447421405-0e5a106d8803?q=80&w=2535&auto=format&fit=crop"
  },
  {
    id: 105,
    video: "https://assets.mixkit.co/videos/preview/mixkit-forest-stream-in-the-sunlight-529-large.mp4",
    poster: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2592&auto=format&fit=crop"
  }
];

export const Creatives: React.FC = () => {
    // Refs for scrolling logic
    const topCreativesRef = useRef<HTMLDivElement>(null);
    const ugcRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
        if (ref.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 px-6 md:px-12 relative z-10 overflow-hidden" id="creatives">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <span className="text-[#D1FE17] font-bold tracking-wider uppercase text-sm mb-2 block">Creative Strategy</span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D1FE17] to-[#E2FF5E] mb-6">
                        Creative That Converts
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl">
                        We don't just make "ads". We build compliance-approved creative assets engineered to stop the scroll and drive contribution margin.
                    </p>
                </div>

                {/* Section 1: Top Performing Creatives (Images Only) */}
                <div className="mb-20">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">🔥 Top Performing Formats</h3>
                            <p className="text-gray-400 text-sm">High-fidelity assets for cold traffic and retargeting.</p>
                        </div>
                        <div className="flex gap-2">
                             <button onClick={() => scroll(topCreativesRef, 'left')} className="p-2 rounded-full bg-white/5 hover:bg-[#D1FE17] hover:text-black transition-colors border border-white/10">
                                <ChevronLeft size={20} />
                             </button>
                             <button onClick={() => scroll(topCreativesRef, 'right')} className="p-2 rounded-full bg-white/5 hover:bg-[#D1FE17] hover:text-black transition-colors border border-white/10">
                                <ChevronRight size={20} />
                             </button>
                        </div>
                    </div>
                    
                    <div 
                        ref={topCreativesRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {topCreatives.map((item) => (
                            <div key={item.id} className="min-w-[280px] snap-start">
                                <GlassCard className="!p-0 overflow-hidden h-full group cursor-pointer border-none" hoverEffect>
                                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl">
                                        <img 
                                            src={item.image} 
                                            alt="Creative" 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Section 2: UGC Vault (Videos - Auto Play) */}
                <div>
                     <div className="flex justify-between items-end mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">📱 The UGC Vault</h3>
                            <p className="text-gray-400 text-sm">Native, authentic content. No music, just visuals.</p>
                        </div>
                        <div className="flex gap-2">
                             <button onClick={() => scroll(ugcRef, 'left')} className="p-2 rounded-full bg-white/5 hover:bg-[#D1FE17] hover:text-black transition-colors border border-white/10">
                                <ChevronLeft size={20} />
                             </button>
                             <button onClick={() => scroll(ugcRef, 'right')} className="p-2 rounded-full bg-white/5 hover:bg-[#D1FE17] hover:text-black transition-colors border border-white/10">
                                <ChevronRight size={20} />
                             </button>
                        </div>
                    </div>

                    <div 
                        ref={ugcRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                         {ugcVideos.map((item) => (
                            <div key={item.id} className="min-w-[240px] snap-start">
                                <div className="relative rounded-2xl overflow-hidden aspect-[9/16] group cursor-pointer border border-white/10 shadow-lg hover:shadow-[#D1FE17]/10 transition-all bg-black">
                                    <video 
                                        src={item.video}
                                        poster={item.poster}
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Subtle gradient at bottom for depth only, no text */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
                                </div>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
            
            {/* Inline styles for hiding scrollbar cross-browser */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};
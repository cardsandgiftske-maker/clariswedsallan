import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Quote } from 'lucide-react';
import { WEDDING_DETAILS } from '../data';

export default function LoveStory() {
  return (
    <section
      className="relative py-20 bg-gradient-to-b from-[#FFFFFF] via-[#F7F3E8] to-[#FFFFFF] text-[#2A2218] overflow-hidden"
      id="love-story-section"
    >
      {/* Soft champagne gold ambient lights */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#E8CF75]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D9C28B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#65785C] text-xs font-semibold tracking-widest uppercase font-sans flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D9C28B]" />
            <span>How Our Journey Began</span>
            <Sparkles className="w-3.5 h-3.5 text-[#D9C28B]" />
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-light text-[#2A2218] mt-2 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#D9C28B] to-transparent mx-auto" />
        </div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/95 backdrop-blur-md border border-[#D9D0BC] rounded-3xl p-8 sm:p-12 shadow-[0_18px_45px_rgba(138,102,33,0.08)] overflow-hidden"
        >
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            {/* Romantic Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F7F3E8] to-[#F6EFD9] border border-[#E8CF75]/60 flex items-center justify-center text-[#65785C] shadow-sm">
              <Heart className="w-7 h-7 fill-[#E8CF75]/30 text-[#65785C]" />
            </div>

            {/* Love Story Text */}
            <div className="max-w-2xl mx-auto">
              <Quote className="w-8 h-8 text-[#D9C28B]/40 mx-auto mb-3 rotate-180" />

              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#2A2218] leading-relaxed italic">
                “Some stories are beautifully written by God, unfolding in His perfect time. Ours has been a journey of friendship, love, growth and grace. Through every season, we have been reminded that His plans are always beautiful. We are grateful for the gift of finding each other and excited to begin forever together”.
              </p>

              <div className="my-5 w-16 h-px bg-gradient-to-r from-transparent via-[#E8CF75] to-transparent mx-auto" />


            </div>

            {/* Couple Signature Line */}
            <div className="pt-4 border-t border-[#E5D7BC] flex flex-col items-center">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#65785C]">
                {WEDDING_DETAILS.couple.brideShort} &amp; {WEDDING_DETAILS.couple.groomShort}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-[#65785C] font-semibold mt-1">
                December 5, 2026 · Diani, Kenya
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

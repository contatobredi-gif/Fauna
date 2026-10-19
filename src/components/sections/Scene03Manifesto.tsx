import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

export const Scene03Manifesto: React.FC = () => {
  return (
    <section className="relative py-32 lg:py-40 bg-[#06150E] text-white overflow-hidden">
      {/* Subtle organic Amazonian background texture & glow */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#123524_1px,transparent_1px)] [background-size:32px_32px]" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#123524]/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Chapter Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#C9A44C] uppercase">
          <Compass className="w-4 h-4" />
          <span>03 / MANIFESTO FAUNA</span>
        </div>

        {/* Monumental Quote */}
        <blockquote className="space-y-6">
          <p className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.18] text-[#FAF8F5] tracking-tight text-balance">
            “Nascemos na Amazônia.
            <br />
            Para formar quem vai{' '}
            <span className="italic text-[#E5C879] underline decoration-[#C9A44C]/40 underline-offset-8">
              transformar o mundo.
            </span>”
          </p>
        </blockquote>

        {/* Narrative Expansion */}
        <div className="max-w-2xl mx-auto space-y-4 pt-4 border-t border-[#163A2B]/80 text-[#C1D4CA]">
          <p className="text-base sm:text-lg font-light leading-relaxed">
            Somos daqui. Conhecemos este território. Temos raízes firmes na terra e nas águas do Pará. E nossa ambição acadêmica não reconhece barreiras geográficas.
          </p>
          <p className="text-xs sm:text-sm text-[#8EA89C] uppercase tracking-widest font-mono">
            Barcarena · Pará · Amazônia · Brasil
          </p>
        </div>

      </div>
    </section>
  );
};

import React, { useState, useRef } from 'react';
import { Compass, Globe, MapPin, Anchor } from 'lucide-react';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap, MOTION_CONFIG } from '../../utils/motionConfig';

export const Scene06Barcarena: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const steps = [
    {
      label: 'Barcarena',
      sub: 'Origem & Polo Estratégico',
      coords: '01° 30′ 21″ S, 48° 37′ 12″ O',
      scaleFactor: '1x',
      desc: 'Cidade portuária e industrial dinâmica no Baixo Tocantins, onde rios encontram grandes cadeias produtivas globais.'
    },
    {
      label: 'Pará',
      sub: 'Território & Diversidade',
      coords: 'Região Norte · Brasil',
      scaleFactor: '10x',
      desc: 'Coração bioeconômico do país, unindo ancestralidade, centros universitários e protagonismo ambiental sustentável.'
    },
    {
      label: 'Amazônia',
      sub: 'Bioma Global',
      coords: 'Maior Bacia Hidrográfica do Planeta',
      scaleFactor: '100x',
      desc: 'O ponto de partida do pensamento ecológico e científico do século XXI, inspirando soluções para o planeta.'
    },
    {
      label: 'Mundo',
      sub: 'Horizontes Sem Fronteiras',
      coords: 'Projeção Internacional',
      scaleFactor: 'Global',
      desc: 'Profissionais graduados prontos para liderar, inovar e atuar em qualquer latitude com excelência técnica.'
    }
  ];

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current) return;

    if (MOTION_CONFIG.isDesktop()) {
      // Step progression tied to scroll position
      steps.forEach((_, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * 120} center`,
            end: `top+=${(index + 1) * 120} center`,
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index)
          }
        });
      });
    }
  }, containerRef);

  const current = steps[activeStep];

  return (
    <section
      id="barcarena"
      ref={containerRef}
      className="py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
            <Compass className="w-4 h-4" />
            <span>06 / TERRITÓRIO & ESCALA</span>
            <span>—</span>
            <span>BARCARENA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight text-balance">
            De Barcarena para o mundo.
          </h2>
          <p className="text-sm sm:text-base text-[#57685F] mt-4 font-light leading-relaxed">
            A FAUNA reconhece a força de uma cidade conectada por águas, trabalho, gente e novos caminhos. É daqui que o conhecimento se expande para o globo.
          </p>
        </div>

        {/* Narrative Split: Geographic Arc & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (5 cols): Interactive Geographical Progression */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, i) => {
              const isCurrent = activeStep === i;
              return (
                <div
                  key={st.label}
                  onClick={() => setActiveStep(i)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#123524] text-white border-[#123524] shadow-lg transform -translate-y-0.5'
                      : 'bg-white text-[#1D2B24] border-[#E5DFD3] hover:border-[#C9A44C]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-semibold ${
                        isCurrent ? 'bg-[#C9A44C] text-[#123524]' : 'bg-[#F2ECE1] text-[#57685F]'
                      }`}>
                        0{i + 1}
                      </span>
                      <h3 className="font-serif text-xl font-bold tracking-wide">
                        {st.label}
                      </h3>
                    </div>
                    <span className={`text-[10px] font-mono ${isCurrent ? 'text-[#E5C879]' : 'text-[#8A6D3B]'}`}>
                      {st.coords}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed ${isCurrent ? 'text-[#C7D9D0]' : 'text-[#57685F]'}`}>
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Visual Vector & Photographic Canvas */}
          <div ref={visualRef} className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0E281C] group min-h-[460px] sm:min-h-[520px] flex flex-col justify-between p-8">
              {/* Photo Backdrop with Opacity Transitions */}
              <img
                src="/assets/barcarena_territorio_river.jpg"
                alt="Hidrovia e território em Barcarena, Pará"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/barcarena_territorio_river_1792412121050.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />

              {/* Minimalist Vector Expansion Rings (SVG) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <svg className="w-80 h-80 sm:w-96 sm:h-96" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="25" fill="none" stroke="#C9A44C" strokeWidth="1" strokeDasharray="2,2" />
                  <circle cx="100" cy="100" r={45 + activeStep * 15} fill="none" stroke="#FAF8F5" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="100" cy="100" r={65 + activeStep * 20} fill="none" stroke="#C9A44C" strokeWidth="0.6" strokeDasharray="3,3" opacity="0.4" />
                  <circle cx="100" cy="100" r="4" fill="#C9A44C" />
                </svg>
              </div>

              {/* Top HUD */}
              <div className="relative z-10 flex items-center justify-between text-white">
                <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#E5C879] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ESCALA: {current.scaleFactor}</span>
                </div>
                <span className="text-xs font-mono text-white/80">{current.coords}</span>
              </div>

              {/* Bottom Caption & Territorial Statement */}
              <div className="relative z-10 text-white space-y-2 max-w-lg">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#C9A44C] block">
                  ETAPA {activeStep + 1} DE 4 · {current.label.toUpperCase()}
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-semibold text-white">
                  {current.sub}
                </h4>
                <p className="text-xs sm:text-sm text-[#C5D6CD] font-light leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { MapPin, Globe, Compass, ArrowRight, Anchor } from 'lucide-react';

export const Scene06Barcarena: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      label: 'Barcarena',
      sub: 'Origem & Polo Estratégico',
      coords: '01° 30′ 21″ S, 48° 37′ 12″ O',
      desc: 'Cidade portuária e industrial dinâmica no Baixo Tocantins, onde rios encontram grandes cadeias produtivas globais.'
    },
    {
      label: 'Pará',
      sub: 'Território & Diversidade',
      coords: 'Região Norte · Brasil',
      desc: 'Coração bioeconômico do país, unindo ancestralidade, centros universitários e protagonismo ambiental sustentável.'
    },
    {
      label: 'Amazônia',
      sub: 'Bioma Global',
      coords: 'Maior Bacia Hidrográfica do Planeta',
      desc: 'O ponto de partida do pensamento ecológico e científico do século XXI, inspirando soluções para o planeta.'
    },
    {
      label: 'Mundo',
      sub: 'Horizontes Sem Fronteiras',
      coords: 'Projeção Internacional',
      desc: 'Profissionais graduados prontos para liderar, inovar e atuar em qualquer latitude com excelência técnica.'
    }
  ];

  return (
    <section className="py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden">
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
          
          {/* Left Column (5 cols): Interactive Geographical Vector Progression */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((st, i) => {
              const isCurrent = activeStep === i;
              return (
                <div
                  key={st.label}
                  onClick={() => setActiveStep(i)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#123524] text-white border-[#123524] shadow-lg'
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

          {/* Right Column (7 cols): Visual Anchor of Barcarena Waters */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0E281C] group">
              <img
                src="/src/assets/images/barcarena_territorio_river_1792412121050.jpg"
                alt="Hidrovia e paisagem ribeirinha em Barcarena, Pará"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Coordenadas HUD overlay */}
              <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#E5C879] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>POLO BARCARENA · PA</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#C9A44C] block">
                  GEO-EXPANSÃO ACADÊMICA
                </span>
                <h4 className="text-lg sm:text-xl font-serif font-semibold text-white">
                  O encontro da natureza amazônica com a infraestrutura global.
                </h4>
                <p className="text-xs text-[#C5D6CD] font-light">
                  Barcarena é um dos maiores nós logísticos e industriais do Brasil, demandando líderes qualificados e sustentabilidade real.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

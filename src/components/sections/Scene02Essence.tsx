import React from 'react';
import { ArrowRight, Compass, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Scene02Essence: React.FC = () => {
  return (
    <section id="nossa-essencia" className="py-28 bg-[#FAF8F5] text-[#1D2B24] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
            <span>02 / NOSSA ESSÊNCIA</span>
            <span>—</span>
            <span>IDENTIDADE & TERRITÓRIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#123524] leading-[1.15] text-balance">
            Uma faculdade que nasce na Amazônia pensando no mundo.
          </h2>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Dominant Editorial Visual with Masked Detail */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-[#E8E1D2]">
              <img
                src="/src/assets/images/estudantes_inovacao_amazonia_1792412121181.jpg"
                alt="Estudantes em ambiente contemporâneo de aprendizagem"
                className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#E5C879] block mb-1">
                  FORMAÇÃO CENTRADA NA PRÁTICA
                </span>
                <p className="text-base sm:text-lg font-serif italic text-[#FAF8F5]">
                  “A essência do nosso propósito é ofertar formação individualizada, como se fosse feita à mão para fazer a diferença.”
                </p>
              </div>
            </div>

            {/* Micro Strip: Proof & Pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D2]">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Boutique</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Atendimento personalizado e turmas com foco discente</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8E1D2]">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Prática</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Vivência real e aplicação desde os primeiros períodos</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white border border-[#E8E1D2]">
                <span className="block text-xl font-serif font-semibold text-[#123524]">Amazônica</span>
                <span className="block text-xs text-[#57685F] mt-0.5">Compromisso com o território e bioeconomia regional</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Narrative Prose & Secondary Visual Accent */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4 text-[#47574E] text-base leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#123524]">
                A FAUNA une rigor acadêmico, visão de futuro e compromisso indissociável com o lugar onde nasceu. Mais do que diplomar profissionais, somos uma instituição calculada para transformar conhecimento em possibilidades concretas.
              </p>
              <p>
                Em Barcarena, polo estratégico que conecta a riqueza natural, os grandes corredores hidroviários e a indústria sustentável, a educação precisa ser viva, prática e conectada à realidade das pessoas.
              </p>
            </div>

            {/* Secondary Visual Accent Box */}
            <div className="p-6 rounded-2xl bg-[#123524] text-[#FAF8F5] relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C9A44C] font-mono block">
                  POSICIONAMENTO INSTITUCIONAL
                </span>
                <h3 className="text-xl font-serif font-semibold text-white">
                  Um território de encontros, ideias e novas trajetórias.
                </h3>
                <p className="text-xs text-[#B2C5BC] leading-relaxed">
                  Nossos estudantes têm nome, identidade e acompanhamento direto. Acolhimento em um ambiente pensado para ser a extensão de suas casas.
                </p>
                <div className="pt-2">
                  <Link
                    to="/institucional"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5C879] hover:text-white transition-colors"
                  >
                    <span>Conheça nossa trajetória completa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

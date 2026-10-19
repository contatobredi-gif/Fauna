import React, { useState } from 'react';
import { Maximize2, X, Eye, Sparkles } from 'lucide-react';

interface SpaceItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  image: string;
  validationStatus: string;
}

export const Scene07Campus: React.FC = () => {
  const [activeImage, setActiveImage] = useState<SpaceItem | null>(null);

  const spaces: SpaceItem[] = [
    {
      id: 'bioclimatico',
      name: 'Pavilhão Central & Jardins Bioclimáticos',
      category: 'Arquitetura Sustentável',
      desc: 'Estruturas abertas em madeira certificada e vidro, desenhadas para ventilação natural tropical e harmonia botânica com a floresta.',
      image: '/src/assets/images/campus_architecture_modern_1792412121402.jpg',
      validationStatus: 'Conceito arquitetônico do Polo Barcarena'
    },
    {
      id: 'simulacao',
      name: 'Laboratórios de Simulação Realística',
      category: 'Saúde & Prática',
      desc: 'Ambientes preparados para o aprendizado prático de Enfermagem, Biomedicina e saúde com manequins anatômicos e tecnologia clínica.',
      image: '/public/assets/fauna-photo-4-Bot9x6Jv.jpg',
      validationStatus: 'Instalações laboratoriais em implantação'
    },
    {
      id: 'auditorio',
      name: 'Auditório Magna & Eventos Acadêmicos',
      category: 'Cultura & Solenidades',
      desc: 'Espaço nobre para a Solenidade do Manto, premiações de Mérito Acadêmico, congressos e palestras com grandes nomes.',
      image: '/public/assets/fauna-photo-5-0dhzBddg.jpg',
      validationStatus: 'Complexo de convivência e solenidades'
    },
    {
      id: 'estudos',
      name: 'Commons de Aprendizagem & Biblioteca',
      category: 'Pesquisa & Convivência',
      desc: 'Salas integradas de estudo individual e em grupo, com terminais de pesquisa digital e acervo bibliográfico contemporâneo.',
      image: '/public/assets/fauna-photo-8-Ce0rlf9T.jpg',
      validationStatus: 'Espaços de convivência integrados'
    }
  ];

  return (
    <section className="py-28 bg-[#FAF8F5] text-[#1D2B24] border-t border-[#E5DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
              <span>07 / CAMPUS FAUNA</span>
              <span>—</span>
              <span>INFRAESTRUTURA & ESPAÇOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight">
              Um espaço para viver o conhecimento.
            </h2>
          </div>

          <p className="text-xs text-[#57685F] max-w-sm leading-relaxed">
            Ambientes acolhedores desenhados com a sofisticação de uma Faculdade Boutique e a funcionalidade prática que sua carreira exige.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spaces.map((space) => (
            <div
              key={space.id}
              onClick={() => setActiveImage(space)}
              className="group bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden hover:border-[#C9A44C] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 overflow-hidden bg-[#0A1F15]">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-md text-white/80 group-hover:text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#E5C879] block">
                    {space.category}
                  </span>
                  <span className="text-xs text-white/80 font-light block line-clamp-1">
                    {space.validationStatus}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#123524] group-hover:text-[#8A6D3B] transition-colors mb-2">
                    {space.name}
                  </h3>
                  <p className="text-xs text-[#57685F] leading-relaxed line-clamp-3">
                    {space.desc}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-1.5 text-xs text-[#123524] font-medium group-hover:text-[#8A6D3B] transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Ampliar fotografia</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Photo Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#FAF8F5] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] bg-black">
              <img
                src={activeImage.image}
                alt={activeImage.name}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                aria-label="Fechar ampliação"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#FAF8F5]">
              <div className="flex items-center justify-between text-xs text-[#8A6D3B] font-mono uppercase mb-1">
                <span>{activeImage.category}</span>
                <span>{activeImage.validationStatus}</span>
              </div>
              <h4 className="text-2xl font-serif font-bold text-[#123524] mb-2">
                {activeImage.name}
              </h4>
              <p className="text-sm text-[#57685F] leading-relaxed">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

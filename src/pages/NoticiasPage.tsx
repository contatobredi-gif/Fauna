import React, { useState } from 'react';
import { Clock, Calendar, Bookmark, ArrowRight, X } from 'lucide-react';
import { NEWS_DATA, NewsItem } from '../data/content';

export const NoticiasPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      {/* Header */}
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Bookmark className="w-4 h-4" />
              <span>IMPRENSA & COMUNICAÇÃO INSTITUCIONAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Memória institucional
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Registros históricos da Faculdade Universo da Amazônia, com data e fonte identificadas. Eventos de outras unidades e matérias sem texto completo não são republicados como agenda de Barcarena.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden hover:border-[#C9A44C] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#0A1F15]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#123524]/90 backdrop-blur-md text-[10px] font-mono text-[#E5C879] uppercase tracking-wider">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#697A72]">
                    <span>{article.date}</span>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#123524] group-hover:text-[#8A6D3B] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#57685F] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveArticle(article)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123524] group-hover:text-[#C9A44C] transition-colors"
                >
                  <span>Ler registro</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reader Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3] shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E5DFD3] mb-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#8A6D3B]">
                <span>{activeArticle.category}</span>
                <span>·</span>
                <span>{activeArticle.date}</span>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1 rounded-lg text-[#57685F] hover:text-[#123524] hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#123524] leading-snug mb-4">
              {activeArticle.title}
            </h3>

            <div className="rounded-xl overflow-hidden mb-6 h-64 bg-black">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-[#47574E] leading-relaxed">
              {(activeArticle.fullText ?? activeArticle.excerpt).split('\n\n').map((block) => (
                <p key={block.slice(0, 48)}>{block}</p>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-[#E5DFD3] flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 bg-[#123524] text-white text-xs font-semibold rounded-lg hover:bg-[#0A1F15]"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

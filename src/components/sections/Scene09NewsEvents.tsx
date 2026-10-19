import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Bookmark, ArrowRight } from 'lucide-react';
import { NEWS_DATA } from '../../data/content';
import { useGSAPScene } from '../../hooks/useGSAPScene';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { gsap } from '../../utils/motionConfig';

export const Scene09NewsEvents: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAPScene(() => {
    if (reducedMotion || !containerRef.current || !gridRef.current) return;

    const items = gridRef.current ? Array.from(gridRef.current.children) : [];
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, containerRef);

  return (
    <section
      ref={containerRef}
      className="py-28 bg-[#FAF8F5] text-[#1D2B24] border-t border-[#E5DFD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#8A6D3B] uppercase mb-3">
              <Bookmark className="w-4 h-4 text-[#C9A44C]" />
              <span>09 / VIDA ACADÊMICA & IMPRENSA</span>
              <span>—</span>
              <span>ACONTECE NA FAUNA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#123524] leading-tight">
              Acontece na FAUNA.
            </h2>
          </div>

          <Link
            to="/noticias"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#123524] hover:text-[#C9A44C] font-semibold transition-colors"
          >
            <span>Ver todas as publicações e editais →</span>
          </Link>
        </div>

        {/* 3-Card Editorial Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {NEWS_DATA.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-[#E5DFD3] overflow-hidden hover:border-[#C9A44C] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#0A1F15]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/fauna-photo-3-DKHEpz8K.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#123524]/90 backdrop-blur-md text-[10px] font-mono text-[#E5C879] uppercase tracking-wider">
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
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#123524] group-hover:text-[#C9A44C] transition-colors"
                >
                  <span>Ler matéria completa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap, ShieldCheck, ExternalLink } from 'lucide-react';
import { MAIN_NAV_LINKS, ACADEMIC_PORTALS } from '../../data/navigation';

interface Props {
  onOpenInterest: () => void;
  onOpenInventory: () => void;
}

export const Header: React.FC<Props> = ({ onOpenInterest, onOpenInventory }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [portalsOpen, setPortalsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setPortalsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#123524]/10 shadow-xs py-3'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar 3-Zone Contract */}
          <div className="flex items-center justify-between gap-8">
            
            {/* Zone 1: Single element brand mark */}
            <Link
              to="/"
              className="flex items-center gap-3 shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded-lg"
              aria-label="FAUNA — Faculdade Universo da Amazônia, Página Inicial"
            >
              <img
                src="/logo.png"
                alt="Logo FAUNA"
                className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
              <div className="hidden sm:block">
                <span className={`block font-serif text-lg tracking-wider font-semibold uppercase ${
                  scrolled ? 'text-[#123524]' : 'text-white'
                }`}>
                  FAUNA
                </span>
                <span className={`block text-[10px] tracking-widest uppercase font-medium ${
                  scrolled ? 'text-[#57685F]' : 'text-white/80'
                }`}>
                  Barcarena · Pará
                </span>
              </div>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {MAIN_NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.href;
                const hasSub = link.sublinks && link.sublinks.length > 0;

                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => hasSub && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.href}
                      className={`inline-flex items-center gap-1 py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#C9A44C] ${
                        isActive
                          ? 'text-[#C9A44C] font-semibold'
                          : scrolled
                          ? 'text-[#1D2B24]'
                          : 'text-white/95'
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasSub && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    {hasSub && activeDropdown === link.label && (
                      <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                        <div className="bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl shadow-xl p-2 text-[#1D2B24]">
                          {link.sublinks?.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.href}
                              className="block p-2.5 rounded-lg hover:bg-[#F2ECE1] transition-colors group/sub"
                            >
                              <span className="block text-xs font-semibold text-[#123524] group-hover/sub:text-[#C9A44C] transition-colors">
                                {sub.label}
                              </span>
                              {sub.description && (
                                <span className="block text-[11px] text-[#697A72] mt-0.5 line-clamp-1">
                                  {sub.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Tools */}
            <div className="flex items-center gap-3 shrink-0">
              
              {/* Inventário Button for Governance */}
              <button
                type="button"
                onClick={onOpenInventory}
                className={`hidden md:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
                  scrolled
                    ? 'border-[#123524]/20 text-[#123524] hover:bg-[#123524]/5'
                    : 'border-white/20 text-white/90 hover:bg-white/10'
                }`}
                title="Visualizar inventário de conteúdos e status Barcarena"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A44C]" />
                <span className="hidden xl:inline">Auditoria de Conteúdo</span>
              </button>

              {/* Portais Dropdown Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setPortalsOpen(!portalsOpen)}
                  className={`hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                    scrolled
                      ? 'text-[#123524] hover:bg-[#123524]/5'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-[#C9A44C]" />
                  <span>Portais</span>
                  <ChevronDown className="w-3 h-3 opacity-60" />
                </button>

                {portalsOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[#FAF8F5] border border-[#E5DFD3] rounded-xl shadow-xl p-2 z-50 text-[#1D2B24] animate-fade-in">
                    <span className="block px-3 py-1 text-[10px] uppercase font-bold text-[#73827A] tracking-wider">
                      Ambientes Acadêmicos
                    </span>
                    {ACADEMIC_PORTALS.map((portal) => (
                      <Link
                        key={portal.name}
                        to="/vida-academica#portais"
                        onClick={() => setPortalsOpen(false)}
                        className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F2ECE1] text-[#123524] transition-colors"
                      >
                        <span className="font-medium block">{portal.name}</span>
                        <span className="text-[10px] text-[#697A72] block">{portal.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Primary Action Button */}
              <button
                type="button"
                onClick={onOpenInterest}
                className="px-4 py-2 text-xs md:text-sm font-semibold text-[#123524] bg-[#C9A44C] hover:bg-[#D8B45E] active:bg-[#B8943D] rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Inscreva-se</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled
                    ? 'text-[#123524] hover:bg-[#123524]/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#FAF8F5] text-[#1D2B24] overflow-y-auto flex flex-col animate-fade-in">
          {/* Mobile Header Bar */}
          <div className="flex items-center justify-between p-4 border-b border-[#E5DFD3]">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <img src="/logo.png" alt="FAUNA" className="h-8 w-auto" />
              <span className="font-serif font-bold text-lg text-[#123524]">FAUNA</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#123524] hover:bg-[#123524]/10 rounded-lg"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 px-5 py-6 space-y-4">
            {MAIN_NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-[#EBE4D5] pb-3">
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-serif font-semibold text-[#123524] block py-1"
                >
                  {link.label}
                </Link>
                {link.sublinks && (
                  <div className="pl-3 mt-1.5 space-y-1.5 border-l-2 border-[#C9A44C]/40">
                    {link.sublinks.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs text-[#57685F] py-0.5 hover:text-[#123524]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInventory();
                }}
                className="w-full text-left py-2 text-xs text-[#7A6038] flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#C9A44C]" />
                <span>Auditoria & Inventário de Conteúdo Barcarena</span>
              </button>
            </div>
          </div>

          {/* Mobile Bottom CTA */}
          <div className="p-5 bg-[#F2ECE1] border-t border-[#E5DFD3] space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInterest();
              }}
              className="w-full py-3 bg-[#123524] text-[#FAF8F5] text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <span>Inscreva-se no Vestibular</span>
            </button>
            <div className="text-center text-xs text-[#697A72]">
              FAUNA Barcarena · Da Amazônia para o mundo
            </div>
          </div>
        </div>
      )}
    </>
  );
};

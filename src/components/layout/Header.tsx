import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { flattenNavItems, MAIN_NAV_LINKS, type NavLink } from '../../data/navigation';
import { EnrollmentCta } from '../ui/EnrollmentCta';

function isSectionActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  const pathOnly = href.split('#')[0].split('?')[0];
  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverLockedRef = useRef(false);
  const leaveTimerRef = useRef<number>(0);
  const triggerRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const closeMenus = useCallback((options?: { lockHover?: boolean; restoreFocus?: boolean }) => {
    const openLabel = activeDropdown;
    window.clearTimeout(leaveTimerRef.current);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setOpenMobileGroup(null);

    if (options?.lockHover) {
      hoverLockedRef.current = true;
    }

    const active = document.activeElement;
    if (active instanceof HTMLElement && (headerRef.current?.contains(active) || document.getElementById('menu-mobile')?.contains(active))) {
      if (options?.restoreFocus && openLabel && triggerRefs.current[openLabel]) {
        triggerRefs.current[openLabel]?.focus();
      } else {
        active.blur();
      }
    }
  }, [activeDropdown]);

  const openDropdown = (label: string, source: 'hover' | 'focus' = 'hover') => {
    if (source === 'hover' && hoverLockedRef.current) return;
    window.clearTimeout(leaveTimerRef.current);
    setActiveDropdown(label);
  };

  const scheduleDropdownClose = () => {
    window.clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 140);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.clearTimeout(leaveTimerRef.current);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setOpenMobileGroup(null);
    // Keep hoverLockedRef so the cursor remaining over the nav does not reopen the panel.
  }, [location.pathname, location.search, location.hash]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenus({ restoreFocus: true });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [closeMenus]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      const mobileDrawer = document.getElementById('menu-mobile');
      if (headerRef.current?.contains(target) || mobileDrawer?.contains(target)) return;
      closeMenus();
      hoverLockedRef.current = false;
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [closeMenus]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => () => window.clearTimeout(leaveTimerRef.current), []);

  const isHome = location.pathname === '/';
  const isGlass = scrolled || !isHome || mobileMenuOpen;

  const handleNavLinkClick = () => {
    closeMenus({ lockHover: true });
  };

  const renderSubmenu = (link: NavLink) => {
    if (link.groups?.length) {
      return (
        <div className="grid grid-cols-3 gap-4 p-4 w-[640px]">
          {link.groups.map((group) => (
            <div key={group.title}>
              <p className="px-2 pb-2 text-[10px] uppercase tracking-wider font-bold text-[#8A6D3B]">{group.title}</p>
              {group.items.map((sub) => (
                <Link
                  key={sub.href + sub.label}
                  to={sub.href}
                  onClick={handleNavLinkClick}
                  className="block p-2 rounded-lg hover:bg-[#F2ECE1] transition-colors duration-200"
                >
                  <span className="block text-xs font-semibold text-[#123524]">{sub.label}</span>
                  {sub.description && (
                    <span className="block text-[11px] text-[#697A72] mt-0.5">{sub.description}</span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="p-2 w-64">
        {flattenNavItems(link).map((sub) => (
          <Link
            key={sub.href + sub.label}
            to={sub.href}
            onClick={handleNavLinkClick}
            className="block p-2.5 rounded-lg hover:bg-[#F2ECE1] transition-colors duration-200"
          >
            <span className="block text-xs font-semibold text-[#123524]">{sub.label}</span>
            {sub.description && (
              <span className="block text-[11px] text-[#697A72] mt-0.5">{sub.description}</span>
            )}
          </Link>
        ))}
      </div>
    );
  };

  const logoMark = (
    <img
      src="/logo.png"
      alt="FAUNA — Faculdade Universo da Amazônia"
      className={`w-auto object-contain object-left transition-[height] duration-300 ${
        isGlass ? 'h-11 sm:h-12 lg:h-[3.35rem]' : 'h-12 sm:h-[3.35rem] lg:h-16'
      }`}
    />
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,padding,backdrop-filter,border-color] duration-500 ${
          isGlass
            ? 'bg-[#FAF8F5]/70 backdrop-blur-xl border-b border-[#123524]/10 shadow-[0_10px_40px_rgba(6,21,14,0.08)] py-2.5 text-[#1D2B24]'
            : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent border-b border-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            <Link
              to="/"
              onClick={handleNavLinkClick}
              className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded-xl"
              aria-label="FAUNA — Faculdade Universo da Amazônia, Página Inicial"
            >
              {isGlass && !isHome ? (
                logoMark
              ) : (
                <span className="inline-flex items-center bg-[#FAF8F5] px-2 py-1">
                  {logoMark}
                </span>
              )}
            </Link>

            <nav
              ref={navRef}
              className="hidden lg:flex items-center gap-2.5 xl:gap-3 text-[12px] xl:text-[13px] font-medium min-w-0"
              aria-label="Principal"
              data-dropdown={activeDropdown ?? ''}
              onMouseLeave={() => {
                scheduleDropdownClose();
                hoverLockedRef.current = false;
              }}
              onPointerLeave={() => {
                scheduleDropdownClose();
                hoverLockedRef.current = false;
              }}
            >
              {MAIN_NAV_LINKS.map((link) => {
                const isActive = isSectionActive(location.pathname, link.href);
                const items = flattenNavItems(link);
                const hasSub = items.length > 0;
                const alignEnd = link.label === 'Vida Acadêmica' || link.label === 'Benefícios';
                const isOpen = hasSub && activeDropdown === link.label;

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => {
                      if (hasSub) openDropdown(link.label, 'hover');
                      else if (!hoverLockedRef.current) setActiveDropdown(null);
                    }}
                    onPointerEnter={() => {
                      if (hasSub) openDropdown(link.label, 'hover');
                      else if (!hoverLockedRef.current) setActiveDropdown(null);
                    }}
                    onFocusCapture={() => {
                      if (hasSub) openDropdown(link.label, 'focus');
                    }}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <Link
                      ref={(node) => {
                        triggerRefs.current[link.label] = node;
                      }}
                      to={link.href}
                      onClick={handleNavLinkClick}
                      aria-haspopup={hasSub ? 'true' : undefined}
                      aria-expanded={hasSub ? isOpen : undefined}
                      aria-controls={hasSub ? `${navId}-${link.label}` : undefined}
                      className={`inline-flex items-center gap-1 py-2 transition-colors duration-200 whitespace-nowrap hover:text-[#C9A44C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A44C] rounded-sm ${
                        isActive
                          ? 'text-[#C9A44C] font-semibold'
                          : isGlass
                          ? 'text-[#1D2B24]'
                          : 'text-white/95'
                      }`}
                    >
                      <span>{link.label}</span>
                      {hasSub && (
                        <ChevronDown className={`w-3.5 h-3.5 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      )}
                    </Link>

                    {hasSub && (
                      <div
                        id={`${navId}-${link.label}`}
                        hidden={!isOpen}
                        className={`absolute top-full ${alignEnd ? 'right-0' : 'left-0'} pt-1 z-50 ${isOpen ? 'block' : 'hidden'}`}
                      >
                        <div className="bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#E5DFD3] rounded-xl shadow-xl text-[#1D2B24]">
                          {renderSubmenu(link)}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link
                to="/vida-academica#portais"
                onClick={handleNavLinkClick}
                className={`hidden sm:inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 ${
                  isGlass
                    ? 'text-[#123524] hover:bg-[#123524]/5'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-[#C9A44C]" />
                <span>Portais</span>
              </Link>

              <EnrollmentCta
                className="px-4 py-2 text-xs md:text-sm font-semibold text-[#123524] bg-[#C9A44C] hover:bg-[#D8B45E] rounded-lg shadow-xs whitespace-nowrap text-center transition-colors duration-200"
              >
                Inscreva-se
              </EnrollmentCta>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((value) => !value)}
                className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                  isGlass
                    ? 'text-[#123524] hover:bg-[#123524]/10'
                    : 'text-white hover:bg-white/10'
                }`}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
                aria-controls="menu-mobile"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="menu-mobile"
          className="fixed inset-0 z-[60] lg:hidden bg-[#FAF8F5] text-[#1D2B24] overflow-y-auto flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <div className="flex items-center justify-between p-4 border-b border-[#E5DFD3] bg-[#FAF8F5]/90 backdrop-blur-xl">
            <Link to="/" onClick={handleNavLinkClick} className="inline-flex items-center" aria-label="FAUNA — Página inicial">
              <img src="/logo.png" alt="" className="h-12 w-auto object-contain" />
            </Link>
            <button
              type="button"
              onClick={() => closeMenus()}
              className="p-2 text-[#123524] hover:bg-[#123524]/10 rounded-lg"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 px-5 py-6 space-y-2 overflow-x-hidden">
            {MAIN_NAV_LINKS.map((link) => {
              const items = flattenNavItems(link);
              const expanded = openMobileGroup === link.label;
              const active = isSectionActive(location.pathname, link.href);

              return (
                <div key={link.label} className="border-b border-[#EBE4D5] pb-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to={link.href}
                      onClick={handleNavLinkClick}
                      className={`flex-1 text-base font-serif font-semibold py-2 ${
                        active ? 'text-[#C9A44C]' : 'text-[#123524]'
                      }`}
                    >
                      {link.label}
                    </Link>
                    {items.length > 0 && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-label={`${expanded ? 'Recolher' : 'Expandir'} ${link.label}`}
                        onClick={() => setOpenMobileGroup(expanded ? null : link.label)}
                        className="p-2 rounded-lg text-[#123524]"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {expanded && items.length > 0 && (
                    <div className="pl-3 pb-2 space-y-1 border-l-2 border-[#C9A44C]/40">
                      {items.map((sub) => (
                        <Link
                          key={sub.href + sub.label}
                          to={sub.href}
                          onClick={handleNavLinkClick}
                          className="block text-sm text-[#57685F] py-2 min-h-11"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-5 bg-[#F2ECE1] border-t border-[#E5DFD3] space-y-3">
            <EnrollmentCta className="w-full py-3 bg-[#123524] text-[#FAF8F5] text-sm font-semibold rounded-lg text-center block">
              Inscreva-se no Vestibular
            </EnrollmentCta>
            <div className="text-center text-xs text-[#697A72]">
              FAUNA Barcarena · Da Amazônia para o mundo
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, FileText, Shield, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenInventory: () => void;
  onOpenInterest: () => void;
}

export const Footer: React.FC<Props> = ({ onOpenInventory, onOpenInterest }) => {
  return (
    <footer className="bg-[#0A1F15] text-[#D8E2DC] border-t border-[#163A2B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A4030]">
          
          {/* Column 1: Institutional Brand & Territorial Statement */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="FAUNA Logo" className="h-10 w-auto brightness-110" />
              <div>
                <span className="block font-serif text-xl tracking-wider font-semibold text-[#FAF8F5] uppercase">
                  FAUNA
                </span>
                <span className="block text-[11px] tracking-widest uppercase text-[#C9A44C]">
                  Faculdade Universo da Amazônia
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#95AAA0] leading-relaxed max-w-sm">
              Formação de excelência com raízes na Amazônia e horizontes sem fronteiras. 
              Conectamos ensino, pesquisa e extensão ao futuro profissional e sustentável de Barcarena e do Pará.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A44C]">
              <MapPin className="w-4 h-4 shrink-0 text-[#C9A44C]" />
              <span>Barcarena · Pará · Brasil</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenInventory}
                className="inline-flex items-center gap-1.5 text-xs text-[#C9A44C] hover:text-[#E5C879] underline underline-offset-4 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Auditoria & Inventário de Conteúdo Barcarena</span>
              </button>
            </div>
          </div>

          {/* Column 2: Institucional & Governança */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Institucional</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li>
                <Link to="/institucional" className="hover:text-white transition-colors">
                  Quem Somos & História
                </Link>
              </li>
              <li>
                <Link to="/institucional#metodo-saber-mais" className="hover:text-white transition-colors">
                  Método Saber Mais
                </Link>
              </li>
              <li>
                <Link to="/institucional#cpa" className="hover:text-white transition-colors">
                  CPA — Autoavaliação
                </Link>
              </li>
              <li>
                <Link to="/institucional#lgpd" className="hover:text-white transition-colors">
                  LGPD & Privacidade
                </Link>
              </li>
              <li>
                <Link to="/institucional#editais" className="hover:text-white transition-colors">
                  Editais & Regimento
                </Link>
              </li>
              <li>
                <Link to="/contato#ouvidoria" className="hover:text-white transition-colors">
                  Ouvidoria Geral
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Formação & Ingresso */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Formação & Ingresso</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li>
                <Link to="/cursos?tipo=graduacao" className="hover:text-white transition-colors">
                  Cursos de Graduação
                </Link>
              </li>
              <li>
                <Link to="/cursos?tipo=pos" className="hover:text-white transition-colors">
                  Pós-graduação & Especializações
                </Link>
              </li>
              <li>
                <Link to="/como-ingressar#vestibular" className="hover:text-white transition-colors">
                  Vestibular Programado
                </Link>
              </li>
              <li>
                <Link to="/como-ingressar#enem" className="hover:text-white transition-colors">
                  Ingresso pelo ENEM
                </Link>
              </li>
              <li>
                <Link to="/como-ingressar#segunda-graduacao" className="hover:text-white transition-colors">
                  Segunda Graduação
                </Link>
              </li>
              <li>
                <Link to="/como-ingressar#transferencia" className="hover:text-white transition-colors">
                  Transferência Externa
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Portais & Vida Acadêmica */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Vida Acadêmica</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li>
                <Link to="/vida-academica#biblioteca" className="hover:text-white transition-colors">
                  Biblioteca & Periódicos
                </Link>
              </li>
              <li>
                <Link to="/vida-academica#portais" className="hover:text-white transition-colors">
                  Portal do Aluno
                </Link>
              </li>
              <li>
                <Link to="/vida-academica#portais" className="hover:text-white transition-colors">
                  Portal do Professor
                </Link>
              </li>
              <li>
                <Link to="/beneficios#fauna-experience" className="hover:text-white transition-colors">
                  FAUNA Experience
                </Link>
              </li>
              <li>
                <Link to="/beneficios#meu-amigo-vale-muito" className="hover:text-white transition-colors">
                  Programa Meu Amigo Vale Muito
                </Link>
              </li>
              <li>
                <Link to="/vida-academica#talentos" className="hover:text-white transition-colors">
                  Talentos S/A & Estágios
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip: Accreditation, Legal & Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A9186]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} FAUNA — Faculdade Universo da Amazônia. Mantenedora: F P do Nascimento EIRELI.
            </p>
            <p className="text-[10px] text-[#61776C]">
              Credenciamento MEC sob regulação oficial. As diretrizes e portarias do Polo Barcarena estão sendo divulgadas conforme calendário do Ministério da Educação.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/institucional#lgpd" className="hover:text-white transition-colors">
              Políticas de Privacidade
            </Link>
            <span className="text-[#1A4030]">·</span>
            <Link to="/institucional#cpa" className="hover:text-white transition-colors">
              Relatórios CPA
            </Link>
            <span className="text-[#1A4030]">·</span>
            <Link to="/contato" className="hover:text-white transition-colors">
              Fale Conosco
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { EnrollmentCta } from '../ui/EnrollmentCta';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1F15] text-[#D8E2DC] border-t border-[#163A2B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1A4030]">
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
              Conectando a Amazônia ao mundo. Somos uma Instituição de Ensino comprometida com o desenvolvimento regional e a sustentabilidade formando profissionais de excelência para o mercado de trabalho.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A44C]">
              <MapPin className="w-4 h-4 shrink-0 text-[#C9A44C]" />
              <span>Barcarena · Pará · Brasil</span>
            </div>

            <EnrollmentCta className="inline-flex mt-2 px-4 py-2 bg-[#C9A44C] text-[#123524] text-xs font-semibold rounded-lg">
              Inscreva-se
            </EnrollmentCta>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Institucional</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li><Link to="/institucional#quem-somos" className="hover:text-white transition-colors">Quem Somos</Link></li>
              <li><Link to="/institucional#metodo-saber-mais" className="hover:text-white transition-colors">Método Saber Mais</Link></li>
              <li><Link to="/institucional#cpa" className="hover:text-white transition-colors">CPA — Autoavaliação</Link></li>
              <li><Link to="/institucional/diretoria-docentes" className="hover:text-white transition-colors">Diretoria e Docentes</Link></li>
              <li><Link to="/institucional#lgpd" className="hover:text-white transition-colors">LGPD & Privacidade</Link></li>
              <li><Link to="/contato#ouvidoria" className="hover:text-white transition-colors">Ouvidoria</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Formação & Ingresso</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li><Link to="/cursos?tipo=graduacao" className="hover:text-white transition-colors">Cursos de Graduação</Link></li>
              <li><Link to="/cursos?tipo=pos" className="hover:text-white transition-colors">Pós-graduação</Link></li>
              <li><Link to="/como-ingressar#vestibular" className="hover:text-white transition-colors">Vestibular</Link></li>
              <li><Link to="/como-ingressar#enem" className="hover:text-white transition-colors">Ingresso pelo ENEM</Link></li>
              <li><Link to="/eventos" className="hover:text-white transition-colors">Eventos e Palestras</Link></li>
              <li><Link to="/como-ingressar#transferencia" className="hover:text-white transition-colors">Transferência Externa</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">Vida Acadêmica</h4>
            <ul className="space-y-2 text-xs text-[#95AAA0]">
              <li><Link to="/vida-academica#biblioteca" className="hover:text-white transition-colors">Biblioteca</Link></li>
              <li><Link to="/vida-academica#portais" className="hover:text-white transition-colors">Portais acadêmicos</Link></li>
              <li><Link to="/beneficios#fauna-experience" className="hover:text-white transition-colors">FAUNA Experience</Link></li>
              <li><Link to="/beneficios#meu-amigo-vale-muito" className="hover:text-white transition-colors">Meu Amigo Vale Muito</Link></li>
              <li><Link to="/vida-academica#talentos" className="hover:text-white transition-colors">Talentos S/A</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#7A9186]">
          <div className="space-y-1 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} FAUNA — Faculdade Universo da Amazônia. Mantenedora: F P do Nascimento EIRELI.
            </p>
            <p className="text-[10px] text-[#61776C]">
              Atos regulatórios e portarias aplicáveis ao polo Barcarena serão divulgados quando os documentos oficiais forem publicados.
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

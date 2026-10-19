import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Briefcase, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { CONTACT_CHANNELS } from '../config/contact';
import { SOCIAL_LINKS, isSocialAvailable } from '../config/socialLinks';
import { useAlignedHashScroll } from '../hooks/useHashTab';

const socialIcon = (id: string) => {
  const className = 'w-5 h-5';
  switch (id) {
    case 'instagram':
      return <Instagram className={className} />;
    case 'facebook':
      return <Facebook className={className} />;
    case 'youtube':
      return <Youtube className={className} />;
    case 'linkedin':
      return <Linkedin className={className} />;
    default:
      return <span className="text-[11px] font-bold tracking-wider">TT</span>;
  }
};

export const ContatoPage: React.FC = () => {
  useAlignedHashScroll();

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Phone className="w-4 h-4" />
              <span>ATENDIMENTO · BARCARENA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Estamos mais perto do seu futuro.
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Fale com a FAUNA pelos canais oficiais. Nossa equipe está pronta para orientar sobre cursos, ingresso e a implantação do polo em Barcarena.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <a href={CONTACT_CHANNELS.phoneHref} className="bg-white rounded-3xl border border-[#E5DFD3] p-6 space-y-3 hover:border-[#C9A44C] transition-colors">
            <Phone className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-xl font-bold text-[#123524]">Telefone</h2>
            <p className="font-mono text-sm font-semibold text-[#123524]">{CONTACT_CHANNELS.phoneDisplay}</p>
          </a>

          <a href={CONTACT_CHANNELS.whatsappHref} target="_blank" rel="noopener noreferrer" className="bg-white rounded-3xl border border-[#E5DFD3] p-6 space-y-3 hover:border-[#C9A44C] transition-colors">
            <Phone className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-xl font-bold text-[#123524]">WhatsApp</h2>
            <p className="font-mono text-sm font-semibold text-[#123524]">{CONTACT_CHANNELS.whatsappDisplay}</p>
            <p className="text-[11px] text-[#697A72]">{CONTACT_CHANNELS.hours}</p>
          </a>

          <a href={`mailto:${CONTACT_CHANNELS.email}`} className="bg-white rounded-3xl border border-[#E5DFD3] p-6 space-y-3 hover:border-[#C9A44C] transition-colors">
            <Mail className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-xl font-bold text-[#123524]">E-mail</h2>
            <p className="font-mono text-xs text-[#123524]">{CONTACT_CHANNELS.email}</p>
          </a>

          <div className="bg-white rounded-3xl border border-[#E5DFD3] p-6 space-y-3">
            <Clock className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-xl font-bold text-[#123524]">Horários</h2>
            <p className="text-sm text-[#47574E]">{CONTACT_CHANNELS.hours}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5DFD3] p-8 space-y-5">
            <div className="flex items-center gap-2 text-[#C9A44C]">
              <MapPin className="w-5 h-5" />
              <h2 className="font-serif text-2xl font-bold text-[#123524]">Localização</h2>
            </div>
            <p className="text-sm text-[#47574E]">{CONTACT_CHANNELS.city}</p>
            {!CONTACT_CHANNELS.addressConfirmed && (
              <p className="text-xs text-[#8A5A2B] leading-relaxed">
                {CONTACT_CHANNELS.addressNote} O mapa será publicado quando o endereço oficial estiver confirmado.
              </p>
            )}
          </div>

          <div className="lg:col-span-7 min-h-[280px] rounded-3xl border border-[#E5DFD3] bg-[#F4EEE3] flex items-center justify-center p-8 text-center">
            <div className="max-w-sm space-y-2">
              <MapPin className="w-8 h-8 text-[#C9A44C] mx-auto" />
              <p className="font-serif text-xl font-bold text-[#123524]">Mapa em atualização</p>
              <p className="text-xs text-[#57685F] leading-relaxed">
                Não exibimos uma localização presumida. Assim que o campus de Barcarena for homologado, o mapa oficial ocupará este espaço.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div id="ouvidoria" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 space-y-3 scroll-mt-28">
            <ShieldCheck className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-2xl font-bold text-[#123524]">Ouvidoria</h2>
            <p className="text-sm text-[#47574E] leading-relaxed">
              Canal independente para sugestões, elogios e manifestações da comunidade acadêmica e externa. Utilize o telefone ou o e-mail institucional para registro.
            </p>
          </div>
          <div id="trabalhe-conosco" className="bg-white rounded-3xl border border-[#E5DFD3] p-8 space-y-3 scroll-mt-28">
            <Briefcase className="w-5 h-5 text-[#C9A44C]" />
            <h2 className="font-serif text-2xl font-bold text-[#123524]">Trabalhe Conosco</h2>
            <p className="text-sm text-[#47574E] leading-relaxed">
              Docentes mestres/doutores e profissionais técnico-administrativos podem enviar currículo para o cadastro de reserva de Barcarena pelo e-mail institucional.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 space-y-5">
          <h2 className="font-serif text-2xl font-bold text-[#123524]">Redes sociais</h2>
          <p className="text-xs text-[#57685F]">Os perfis oficiais serão vinculados aqui quando as URLs institucionais forem confirmadas.</p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {SOCIAL_LINKS.map((network) => {
              const available = isSocialAvailable(network);
              const content = (
                <>
                  {socialIcon(network.id)}
                  <span className="text-xs font-semibold">{network.label}</span>
                  {!available && <span className="text-[10px] text-[#8A5A2B]">Indisponível</span>}
                </>
              );
              if (!available) {
                return (
                  <div key={network.id} className="flex flex-col items-center gap-2 rounded-2xl border border-[#E5DFD3] bg-[#FAF5EE] px-3 py-4 text-[#57685F]">
                    {content}
                  </div>
                );
              }
              return (
                <a
                  key={network.id}
                  href={network.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-2xl border border-[#E5DFD3] px-3 py-4 text-[#123524] hover:border-[#C9A44C]"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

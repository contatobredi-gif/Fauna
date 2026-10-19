import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import { ValidationNotice } from '../components/ui/ValidationNotice';

export const ContatoPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'informacoes',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      {/* Header */}
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <MessageSquare className="w-4 h-4" />
              <span>ATENDIMENTO & OUVIDORIA · BARCARENA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Fale com a FAUNA
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Estamos à disposição para esclarecer dúvidas sobre cursos, processos seletivos, convênios e parcerias institucionais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contacts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-[#123524]">
                Canais Oficiais
              </h2>

              <div className="space-y-4 text-xs text-[#47574E]">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF5EE]">
                  <MapPin className="w-5 h-5 text-[#C9A44C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#123524] block mb-0.5 font-medium">Unidade Barcarena</strong>
                    <span>Barcarena · Vila dos Cabanos · Pará</span>
                    <span className="block text-[11px] text-[#8A5A2B] mt-1 font-mono">
                      (Endereço definitivo em fase de homologação predial)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF5EE]">
                  <Phone className="w-5 h-5 text-[#C9A44C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#123524] block mb-0.5 font-medium">WhatsApp & Central de Atendimento</strong>
                    <span className="font-mono text-sm font-semibold text-[#123524]">(91) 98121-2525</span>
                    <span className="block text-[11px] text-[#697A72] mt-0.5">Segunda a Sexta, das 8h às 19h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF5EE]">
                  <Mail className="w-5 h-5 text-[#C9A44C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#123524] block mb-0.5 font-medium">Correio Eletrônico</strong>
                    <span className="font-mono text-xs">contato@fauna.edu.br</span>
                    <span className="block text-[11px] text-[#697A72] mt-0.5">Respostas em até 1 dia útil</span>
                  </div>
                </div>
              </div>

              {/* Special Sections: Ouvidoria & Trabalhe Conosco */}
              <div className="pt-4 border-t border-[#F0ECE1] space-y-3">
                <div id="ouvidoria" className="text-xs">
                  <strong className="text-[#123524] block font-serif text-sm">Ouvidoria Geral</strong>
                  <p className="text-[#57685F] mt-0.5 leading-relaxed">
                    Canal independente para sugestões, elogios e manifestações da comunidade acadêmica e externa.
                  </p>
                </div>
                <div id="trabalhe-conosco" className="text-xs pt-2">
                  <strong className="text-[#123524] block font-serif text-sm">Trabalhe Conosco (Banco de Talentos)</strong>
                  <p className="text-[#57685F] mt-0.5 leading-relaxed">
                    Docentes mestres/doutores e profissionais técnico-administrativos: envie seu currículo para nosso cadastro de reserva em Barcarena.
                  </p>
                </div>
              </div>
            </div>

            <ValidationNotice
              text="Para atendimento presencial, consulte antecipadamente nossa central para conferência de plantões acadêmicos no polo Barcarena."
            />
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#123524]/10 text-[#123524] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#123524]">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-xs sm:text-sm text-[#57685F] max-w-md mx-auto leading-relaxed">
                  Agradecemos seu contato com a Faculdade Universo da Amazônia. Nossa equipe responderá sua solicitação pelo e-mail ou WhatsApp informado em breve.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'informacoes', message: '' });
                  }}
                  className="mt-4 px-6 py-2.5 bg-[#123524] text-white text-xs font-semibold rounded-lg hover:bg-[#0A1F15]"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#123524] mb-1">
                    Envie sua mensagem
                  </h3>
                  <p className="text-xs text-[#697A72]">
                    Preencha o formulário abaixo para atendimento personalizado.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                      WhatsApp / Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(91) 90000-0000"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    Assunto
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] outline-none"
                  >
                    <option value="informacoes">Informações sobre Cursos e Vestibular</option>
                    <option value="bolsas">Bolsas e Benefícios (Meu Amigo Vale Muito)</option>
                    <option value="transferencia">Transferência de Faculdade</option>
                    <option value="ouvidoria">Ouvidoria Geral</option>
                    <option value="trabalhe-conosco">Trabalhe Conosco (Corpo Docente/Técnico)</option>
                    <option value="parcerias">Parcerias e Convênios (Club FAUNA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Como podemos ajudar você?"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] border border-[#D9D2C3] focus:border-[#123524] outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-4 h-4 text-[#C9A44C]" />
                    <span>Enviar Mensagem</span>
                  </button>
                  <p className="text-[11px] text-center text-[#7A8A82] mt-2">
                    Protegido pela LGPD institucional. Não compartilhamos suas informações.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

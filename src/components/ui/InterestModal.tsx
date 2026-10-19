import React, { useState } from 'react';
import { X, CheckCircle2, Send, GraduationCap } from 'lucide-react';
import { COURSES_DATA } from '../../data/content';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const InterestModal: React.FC<Props> = ({ isOpen, onClose, defaultCourseId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState(defaultCourseId || 'direito');
  const [entryType, setEntryType] = useState('vestibular');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#E5DFD3] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#123524] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C9A44C]/20 border border-[#C9A44C]/40 flex items-center justify-center text-[#E5C879]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-semibold tracking-wide text-[#FAF8F5]">Vestibular FAUNA Barcarena</h3>
              <p className="text-xs text-[#A3B8AD]">Processo Seletivo & Informações Acadêmicas</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#123524]/10 text-[#123524] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-semibold text-[#123524]">Interesse Registrado</h4>
              <p className="text-sm text-[#57685F] max-w-sm mx-auto leading-relaxed">
                Agradecemos o seu interesse na FAUNA Barcarena. Nossa equipe acadêmica entrará em contato com você assim que o edital oficial for publicado com as datas e benefícios.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#123524] text-[#FAF8F5] text-sm font-medium rounded-lg hover:bg-[#0A1F15] transition-colors"
                >
                  Concluir
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#57685F] leading-relaxed">
                Cadastre-se para receber em primeira mão o edital, o cronograma de provas e as condições especiais para a primeira turma em Barcarena.
              </p>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                  Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    WhatsApp / Telefone
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(91) 90000-0000"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    Curso de Interesse
                  </label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none transition-colors"
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.type})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#123524] mb-1.5">
                    Forma de Ingresso
                  </label>
                  <select
                    value={entryType}
                    onChange={(e) => setEntryType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-white border border-[#D9D2C3] focus:border-[#123524] focus:ring-1 focus:ring-[#123524] outline-none transition-colors"
                  >
                    <option value="vestibular">Vestibular Programado</option>
                    <option value="enem">Nota do ENEM</option>
                    <option value="segunda-graduacao">Segunda Graduação (Diploma)</option>
                    <option value="transferencia">Transferência de outra faculdade</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4 text-[#C9A44C]" />
                  <span>Confirmar Inscrição / Interesse</span>
                </button>
                <p className="text-[11px] text-center text-[#7A8A82] mt-2">
                  Seus dados estão protegidos conforme as diretrizes da LGPD institucional.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

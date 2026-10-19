import React, { useState } from 'react';
import { X, CheckCircle, AlertTriangle, FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { CONTENT_INVENTORY } from '../../data/content';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContentInventoryModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'todos' | 'validado' | 'pendente'>('todos');

  if (!isOpen) return null;

  const filteredItems = CONTENT_INVENTORY.filter(item => {
    if (filter === 'validado') return item.status === 'validado';
    if (filter === 'pendente') return item.status === 'pendente_validacao_barcarena';
    return true;
  });

  const validatedCount = CONTENT_INVENTORY.filter(i => i.status === 'validado').length;
  const pendingCount = CONTENT_INVENTORY.filter(i => i.status === 'pendente_validacao_barcarena').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-2xl border border-[#DCD5C6] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#123524] text-white p-6 border-b border-[#1C4E36] flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#C9A44C] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Governança & Mapeamento de Conteúdo Institucional</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif font-semibold text-[#FAF8F5]">
              Inventário de Conteúdos — FAUNA 3.0
            </h3>
            <p className="text-xs text-[#A3B8AD] mt-1 max-w-2xl leading-relaxed">
              Auditoria de todos os módulos extraídos da proposta anterior (fauna-frontend-six.vercel.app). 
              Os itens associados a Belém que necessitam de confirmação oficial pelo MEC e pela diretoria para Barcarena estão explicitamente identificados.
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats & Filter Bar */}
        <div className="px-6 py-3.5 bg-[#F4EEE3] border-b border-[#E5DFD3] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#57685F]">
              Total mapeado: <strong className="text-[#123524] tabular-nums font-semibold">{CONTENT_INVENTORY.length} seções</strong>
            </span>
            <span className="text-[#D0C7B6]">|</span>
            <span className="text-[#123524] flex items-center gap-1 font-medium">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
              <strong className="tabular-nums">{validatedCount}</strong> validados
            </span>
            <span className="text-[#D0C7B6]">|</span>
            <span className="text-[#8A5A2B] flex items-center gap-1 font-medium">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
              <strong className="tabular-nums">{pendingCount}</strong> pendentes Barcarena
            </span>
          </div>

          <div className="flex items-center gap-1 bg-[#E8E1D2] p-1 rounded-lg">
            <button
              onClick={() => setFilter('todos')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'todos' ? 'bg-white text-[#123524] shadow-xs' : 'text-[#57685F] hover:text-[#123524]'
              }`}
            >
              Todos ({CONTENT_INVENTORY.length})
            </button>
            <button
              onClick={() => setFilter('validado')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'validado' ? 'bg-white text-emerald-900 shadow-xs' : 'text-[#57685F] hover:text-[#123524]'
              }`}
            >
              Validados ({validatedCount})
            </button>
            <button
              onClick={() => setFilter('pendente')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filter === 'pendente' ? 'bg-white text-amber-900 shadow-xs' : 'text-[#57685F] hover:text-[#123524]'
              }`}
            >
              Pendentes ({pendingCount})
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-3 divide-y divide-[#EDE6D8]">
          {filteredItems.map((item) => (
            <div key={item.id} className="pt-3 first:pt-0">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#73827A] font-semibold">
                      {item.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-[#57685F]">{item.source}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-[#123524]">{item.title}</h4>
                  <p className="text-xs text-[#57685F] leading-relaxed">{item.summary}</p>
                </div>

                <div className="shrink-0 text-right">
                  {item.status === 'validado' ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-emerald-700" />
                      Validado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-900 bg-amber-100/80 border border-amber-300/80 px-2 py-0.5 rounded-full">
                      <AlertTriangle className="w-3 h-3 text-amber-700" />
                      Aguardando Validação Barcarena
                    </span>
                  )}
                </div>
              </div>

              {item.notes && (
                <div className="mt-2 text-xs p-2.5 rounded bg-white border border-[#E5DFD3] text-[#47574E]">
                  <strong className="text-[#123524] font-medium">Nota de Validação:</strong> {item.notes}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4EEE3] border-t border-[#E5DFD3] flex items-center justify-between text-xs text-[#57685F]">
          <span>Todas as 23 páginas do site de referência foram indexadas com sucesso (100% acessíveis).</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#123524] text-white rounded-lg hover:bg-[#0A1F15] transition-colors"
          >
            Fechar Inventário
          </button>
        </div>
      </div>
    </div>
  );
};

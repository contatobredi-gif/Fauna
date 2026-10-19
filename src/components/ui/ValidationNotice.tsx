import React from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  text?: string;
  className?: string;
  inline?: boolean;
}

export const ValidationNotice: React.FC<Props> = ({
  text = 'Conteúdo em estruturação preparatória para o polo Barcarena (sujeito à validação oficial final).',
  className = '',
  inline = false
}) => {
  if (inline) {
    return (
      <span className={`inline-flex items-center gap-1.5 text-xs text-[#8A5A2B] bg-[#F7F1E6] px-2 py-0.5 rounded border border-[#E4D3BC] ${className}`}>
        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
        <span className="font-medium">Validação Barcarena</span>
      </span>
    );
  }

  return (
    <div className={`flex items-start gap-2.5 p-3.5 rounded-lg bg-[#FAF5EE] border border-[#E9DFCE] text-[#6E4F28] text-xs leading-relaxed ${className}`}>
      <AlertCircle className="w-4 h-4 shrink-0 text-[#9E6F33] mt-0.5" />
      <div>
        <span className="font-semibold text-[#543A1A] block mb-0.5">Nota de Governança Institucional</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

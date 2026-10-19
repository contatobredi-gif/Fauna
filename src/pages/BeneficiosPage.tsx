import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { BENEFIT_PROGRAMS } from '../data/content';
import { ValidationNotice } from '../components/ui/ValidationNotice';
import { EnrollmentCta } from '../components/ui/EnrollmentCta';
import { useAlignedHashScroll } from '../hooks/useHashTab';

export const BeneficiosPage: React.FC = () => {
  useAlignedHashScroll();
  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      {/* Header */}
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>PROGRAMAS & BENEFÍCIOS INSTITUCIONAIS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Benefícios & Experiência FAUNA
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Programas de bolsas por indicação, ritos acadêmicos marcantes e convênios exclusivos para apoiar sua formação do primeiro dia à formatura.
            </p>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-14">
        
        {BENEFIT_PROGRAMS.map((program) => (
          <div
            key={program.id}
            id={program.id}
            className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs space-y-8 scroll-mt-28"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F0ECE1]">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block mb-1">
                  {program.badge} · {program.targetAudience}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#123524]">
                  {program.name}
                </h2>
              </div>

              {program.status === 'pendente_validacao_barcarena' ? (
                <div className="self-start sm:self-auto">
                  <ValidationNotice inline text={program.validationNote} />
                </div>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-100/70 border border-emerald-300/60 px-3 py-1 rounded-full self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Programa Confirmado</span>
                </span>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4 text-sm text-[#47574E] leading-relaxed">
                <h3 className="text-xl font-serif font-semibold text-[#123524]">
                  {program.headline}
                </h3>
                <p>{program.description}</p>

                <div className="space-y-2 pt-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#123524] block">
                    Regulamento e Diretrizes:
                  </span>
                  {program.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#57685F]">
                      <span className="text-[#C9A44C] font-bold">▪</span>
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discount Table if available */}
              {program.discountTable && (
                <div className="lg:col-span-5 bg-[#FAF5EE] rounded-2xl border border-[#E5DFD3] p-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#8A6D3B]">
                    Escala Progressiva de Benefício
                  </h4>
                  <div className="divide-y divide-[#EBE4D5] text-xs">
                    {program.discountTable.map((item) => (
                      <div key={item.label} className="py-2 flex items-center justify-between">
                        <span className="text-[#47574E]">{item.label}</span>
                        <strong className="text-[#123524] font-semibold">{item.discount}</strong>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-[#697A72] pt-2">
                    * Desconto válido para pagamento pontual até a data de vencimento.
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Action Callout */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#123524] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-[#FAF8F5]">
              Quer saber como aplicar para as bolsas e benefícios?
            </h3>
            <p className="text-xs sm:text-sm text-[#A3B8AD] max-w-xl">
              Nossa equipe de orientação acadêmica pode auxiliar você no cálculo de descontos e opções de ingresso no polo Barcarena.
            </p>
          </div>
          <EnrollmentCta
            className="px-6 py-3 bg-[#C9A44C] hover:bg-[#D8B45E] text-[#123524] text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 text-center"
          >
            Ir para inscrição
          </EnrollmentCta>
        </div>

      </div>
    </div>
  );
};

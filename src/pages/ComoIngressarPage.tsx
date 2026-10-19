import React from 'react';
import { CheckCircle2, FileText, Award, Compass } from 'lucide-react';
import { EnrollmentCta } from '../components/ui/EnrollmentCta';
import { useHashTab } from '../hooks/useHashTab';
import type { EnrollmentKind } from '../config/externalLinks';

type PathwayId = 'vestibular' | 'enem' | 'segunda' | 'transferencia';

const PATHWAY_TABS: { tab: PathwayId; hashes: string[] }[] = [
  { tab: 'vestibular', hashes: ['vestibular'] },
  { tab: 'enem', hashes: ['enem'] },
  { tab: 'segunda', hashes: ['segunda-graduacao', 'segunda'] },
  { tab: 'transferencia', hashes: ['transferencia'] },
];

export const ComoIngressarPage: React.FC = () => {
  const { activeTab: selectedPathway, setActiveTab } = useHashTab<PathwayId>(PATHWAY_TABS, 'vestibular');

  const pathways: {
    id: PathwayId;
    title: string;
    subtitle: string;
    desc: string;
    benefits: string[];
    kind: EnrollmentKind;
  }[] = [
    {
      id: 'vestibular',
      title: 'Vestibular Programado',
      subtitle: 'Processo Seletivo Próprio',
      desc: 'Realize sua prova em data e horário agendados, presencialmente em Barcarena ou em plataforma digital segura. Avaliação focada em redação e competências fundamentais.',
      benefits: ['Agendamento flexível de datas', 'Taxa de inscrição isenta no lançamento', 'Resultado ágil em até 48 horas'],
      kind: 'vestibular',
    },
    {
      id: 'enem',
      title: 'Ingresso pela Nota do ENEM',
      subtitle: 'Aproveitamento Imediato',
      desc: 'Utilize sua nota de qualquer edição do Exame Nacional do Ensino Médio a partir de 2015. Quanto maior sua pontuação, maiores as chances de bolsas de mérito.',
      benefits: ['Sem necessidade de prestar nova prova', 'Descontos progressivos por pontuação', 'Matrícula com processo simplificado'],
      kind: 'general',
    },
    {
      id: 'segunda',
      title: 'Segunda Graduação',
      subtitle: 'Portadores de Diploma Superior',
      desc: 'Se você já possui um curso superior de graduação reconhecido pelo MEC, ingresse diretamente com dispensa de vestibular e aproveitamento prévio de disciplinas cursadas.',
      benefits: ['Eliminação de disciplinas afins', 'Integralização acelerada do currículo', 'Descontos especiais para diplomados'],
      kind: 'graduacao',
    },
    {
      id: 'transferencia',
      title: 'Transferência Externa',
      subtitle: 'Venha para a FAUNA',
      desc: 'Estuda em outra instituição de ensino superior e deseja a excelência de uma Faculdade Boutique? Solicite sua transferência com análise ágil de histórico e grade curricular.',
      benefits: ['Aproveitamento integral das matérias compatíveis', 'Condições financeiras especiais de acolhimento', 'Suporte acadêmico individualizado'],
      kind: 'transferencia',
    },
  ];

  const requiredDocuments = [
    'Certificado de Conclusão do Ensino Médio (ou equivalente);',
    'Histórico Escolar completo do Ensino Médio;',
    'Certidão de Nascimento ou Casamento;',
    'Documento oficial de identificação com foto (RG, CNH ou Passaporte);',
    'Cadastro de Pessoa Física (C.P.F.);',
    'Comprovante de residência atualizado com CEP;',
    'Título de Eleitor (para maiores de 18 anos);',
    'Certificado de quitação com o Serviço Militar (para candidatos do sexo masculino).'
  ];

  const current = pathways.find((p) => p.id === selectedPathway)!;

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Compass className="w-4 h-4" />
              <span>PROCESSO SELETIVO & INGRESSO · BARCARENA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Como ingressar na FAUNA
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Descubra os caminhos de entrada pensados para valorizar sua trajetória acadêmica com agilidade e condições exclusivas.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {pathways.map((p) => {
            const isSelected = selectedPathway === p.id;
            return (
              <button
                key={p.id}
                id={p.id === 'segunda' ? 'segunda-graduacao' : p.id}
                type="button"
                onClick={() => setActiveTab(p.id)}
                className={`p-5 rounded-2xl border text-left transition-all scroll-mt-28 ${
                  isSelected
                    ? 'bg-[#123524] text-white border-[#123524] shadow-md'
                    : 'bg-white text-[#1D2B24] border-[#E5DFD3] hover:border-[#C9A44C]'
                }`}
              >
                <span className={`text-[10px] font-mono uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-[#E5C879]' : 'text-[#8A6D3B]'
                }`}>
                  {p.subtitle}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {p.title}
                </h3>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl border border-[#E5DFD3] p-8 sm:p-12 shadow-xs mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8A6D3B] block">
                MODALIDADE SELECIONADA
              </span>
              <h2 className="text-3xl font-serif font-bold text-[#123524]">
                {current.title}
              </h2>
              <p className="text-sm text-[#47574E] leading-relaxed">
                {current.desc}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#123524] block">
                  Vantagens desta forma de ingresso:
                </span>
                {current.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-xs text-[#57685F]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF5EE] p-6 rounded-2xl border border-[#E5DFD3] text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#123524] text-[#E5C879] flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-serif font-bold text-lg text-[#123524]">
                Inscrição oficial
              </h4>
              <p className="text-xs text-[#57685F] leading-relaxed">
                As inscrições da FAUNA 3.0 são feitas no ambiente externo oficial, quando o edital de Barcarena estiver publicado.
              </p>
              <EnrollmentCta
                kind={current.kind}
                className="w-full py-3 bg-[#123524] hover:bg-[#0A1F15] text-[#FAF8F5] text-xs font-semibold rounded-lg transition-colors inline-block"
              >
                Ir para inscrição
              </EnrollmentCta>
            </div>
          </div>
        </div>

        <div className="bg-[#FAF5EE] rounded-3xl border border-[#E5DFD3] p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A6D3B] mb-2">
              <FileText className="w-4 h-4" />
              <span>CHECKLIST DE MATRÍCULA</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#123524]">
              Documentos necessários para confirmação de vaga
            </h3>
            <p className="text-xs text-[#57685F] mt-1">
              Após aprovação no vestibular ou deferimento do processo seletivo, apresente a documentação abaixo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, idx) => (
              <div key={doc} className="p-4 bg-white rounded-xl border border-[#E5DFD3] flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#123524]/10 text-[#123524] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <span className="text-xs text-[#47574E] leading-relaxed">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Calendar } from 'lucide-react';
import { EVENTS_DATA } from '../data/events';

export const EventosPage: React.FC = () => {
  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Calendar className="w-4 h-4" />
              <span>AGENDA INSTITUCIONAL</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Eventos e Palestras
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Espaço reservado à programação oficial do polo Barcarena: aulas magnas, palestras, solenidades e encontros acadêmicos.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {EVENTS_DATA.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[#E5DFD3] p-10 sm:p-16 text-center space-y-4">
            <p className="font-serif text-3xl text-[#123524]">Programação em preparação</p>
            <p className="text-sm text-[#57685F] max-w-2xl mx-auto leading-relaxed">
              Ainda não há eventos confirmados para Barcarena. A agenda anterior da instituição, publicada para outras unidades, não é reproduzida aqui como calendário deste polo.
            </p>
            <p className="text-xs text-[#8A6D3B]">
              Cada evento publicado terá nome, data, local, descrição, imagem, categoria e, quando existir, um link de detalhes.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVENTS_DATA.map((event) => (
              <article key={event.id} className="bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden">
                {event.image && (
                  <img src={event.image} alt="" className="w-full h-48 object-cover" />
                )}
                <div className="p-6 space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#8A6D3B]">{event.category}</p>
                  <h2 className="font-serif text-xl font-bold text-[#123524]">{event.name}</h2>
                  <p className="text-xs text-[#57685F]">{event.date} · {event.location}</p>
                  <p className="text-xs text-[#47574E] leading-relaxed">{event.description}</p>
                  {event.detailsUrl ? (
                    <a href={event.detailsUrl} className="text-xs font-semibold text-[#123524] underline">Ver detalhes</a>
                  ) : (
                    <p className="text-[11px] text-[#8A5A2B]">Detalhes em atualização</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

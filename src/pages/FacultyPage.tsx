import React, { useMemo, useState } from 'react';
import { Users } from 'lucide-react';
import { FACULTY_MEMBERS, LEADERSHIP } from '../data/faculty';

export const FacultyPage: React.FC = () => {
  const areas = useMemo(
    () => ['Todas', ...Array.from(new Set(FACULTY_MEMBERS.map((member) => member.area)))],
    []
  );
  const [area, setArea] = useState('Todas');
  const filtered = FACULTY_MEMBERS.filter((member) => area === 'Todas' || member.area === area);

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F5] text-[#1D2B24]">
      <section className="bg-[#123524] text-white py-16 lg:py-20 border-b border-[#1C4E36]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C9A44C] tracking-widest uppercase">
              <Users className="w-4 h-4" />
              <span>GOVERNANÇA ACADÊMICA</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white leading-tight">
              Diretoria e Docentes
            </h1>
            <p className="text-sm sm:text-base text-[#B2C5BC] font-light leading-relaxed">
              Apresentação da liderança institucional e do corpo docente do polo Barcarena, com informações oficiais já confirmadas.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-14">
        <section className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#123524]">Diretoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP.map((person) => (
              <article key={person.id} className="bg-white rounded-3xl border border-[#E5DFD3] p-8 flex flex-col sm:flex-row gap-6">
                <div className="w-28 h-28 rounded-2xl bg-[#F4EEE3] border border-[#E5DFD3] flex items-center justify-center text-[#123524] font-serif text-3xl shrink-0">
                  {person.photoSrc ? (
                    <img src={person.photoSrc} alt="" className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    person.name.split(' ').slice(0, 2).map((part) => part[0]).join('')
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#123524]">{person.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-[#8A6D3B] font-semibold">{person.role}</p>
                  <p className="text-xs text-[#57685F]">{person.education}</p>
                  <p className="text-sm text-[#47574E] leading-relaxed">{person.bio}</p>
                  {person.notes && <p className="text-[11px] text-[#8A5A2B]">{person.notes}</p>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#123524]">Corpo docente</h2>
              <p className="text-xs text-[#57685F] mt-1">Listagem publicada somente com nomes, titulações e Lattes oficiais.</p>
            </div>
            {areas.length > 1 && (
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="px-3.5 py-2.5 text-xs rounded-lg bg-white border border-[#D9D2C3]"
              >
                {areas.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#E5DFD3] p-10 text-center space-y-2">
              <p className="font-serif text-xl text-[#123524]">Corpo docente em composição</p>
              <p className="text-sm text-[#57685F] max-w-xl mx-auto">
                Não exibimos pessoas fictícias como representantes da FAUNA. Quando a diretoria acadêmica autorizar a lista oficial de Barcarena, os perfis aparecerão nesta página, com foto, titulação, área, curso e Lattes.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((member) => (
                <article key={member.id} className="bg-white rounded-2xl border border-[#E5DFD3] p-6 space-y-3">
                  <div className="w-16 h-16 rounded-xl bg-[#F4EEE3] flex items-center justify-center font-serif text-xl text-[#123524]">
                    {member.name.split(' ').slice(0, 2).map((part) => part[0]).join('')}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#123524]">{member.name}</h3>
                  <p className="text-xs text-[#8A6D3B]">{member.title}</p>
                  <p className="text-xs text-[#57685F]">{member.area} · {member.course}</p>
                  {member.lattesUrl ? (
                    <a href={member.lattesUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-[#123524] underline">
                      Currículo Lattes
                    </a>
                  ) : (
                    <p className="text-[11px] text-[#8A5A2B]">Lattes em atualização</p>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

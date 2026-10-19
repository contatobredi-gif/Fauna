import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-24 pb-28 min-h-[70vh] bg-[#FAF8F5] text-[#1D2B24] flex items-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-mono uppercase tracking-widest text-[#C9A44C]">Erro 404</p>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#123524]">Página não encontrada</h1>
        <p className="text-sm text-[#57685F] leading-relaxed">
          O endereço solicitado não existe nesta plataforma. Volte à página inicial ou consulte os cursos do polo Barcarena.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-6 py-3 bg-[#123524] text-[#FAF8F5] text-sm font-semibold rounded-lg"
          >
            Ir para a homepage
          </Link>
          <Link
            to="/cursos"
            className="px-6 py-3 border border-[#123524] text-[#123524] text-sm font-semibold rounded-lg"
          >
            Ver cursos
          </Link>
        </div>
      </div>
    </div>
  );
};

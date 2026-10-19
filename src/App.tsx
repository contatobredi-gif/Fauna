/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { InstitucionalPage } from './pages/InstitucionalPage';
import { FacultyPage } from './pages/FacultyPage';
import { CursosPage } from './pages/CursosPage';
import { ComoIngressarPage } from './pages/ComoIngressarPage';
import { BeneficiosPage } from './pages/BeneficiosPage';
import { VidaAcademicaPage } from './pages/VidaAcademicaPage';
import { EventosPage } from './pages/EventosPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { ContatoPage } from './pages/ContatoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ScrollTrigger } from './utils/motionConfig';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && hash.length > 1) {
      const timer = window.setTimeout(() => ScrollTrigger.refresh(), 140);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1D2B24]">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/institucional" element={<InstitucionalPage />} />
            <Route path="/institucional/diretoria-docentes" element={<FacultyPage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/como-ingressar" element={<ComoIngressarPage />} />
            <Route path="/beneficios" element={<BeneficiosPage />} />
            <Route path="/vida-academica" element={<VidaAcademicaPage />} />
            <Route path="/eventos" element={<EventosPage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

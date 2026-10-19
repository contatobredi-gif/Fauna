/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ScrollTrigger } from './utils/motionConfig';

const InstitucionalPage = lazy(() =>
  import('./pages/InstitucionalPage').then((module) => ({ default: module.InstitucionalPage }))
);
const FacultyPage = lazy(() =>
  import('./pages/FacultyPage').then((module) => ({ default: module.FacultyPage }))
);
const CursosPage = lazy(() =>
  import('./pages/CursosPage').then((module) => ({ default: module.CursosPage }))
);
const ComoIngressarPage = lazy(() =>
  import('./pages/ComoIngressarPage').then((module) => ({ default: module.ComoIngressarPage }))
);
const BeneficiosPage = lazy(() =>
  import('./pages/BeneficiosPage').then((module) => ({ default: module.BeneficiosPage }))
);
const VidaAcademicaPage = lazy(() =>
  import('./pages/VidaAcademicaPage').then((module) => ({ default: module.VidaAcademicaPage }))
);
const EventosPage = lazy(() =>
  import('./pages/EventosPage').then((module) => ({ default: module.EventosPage }))
);
const NoticiasPage = lazy(() =>
  import('./pages/NoticiasPage').then((module) => ({ default: module.NoticiasPage }))
);
const ContatoPage = lazy(() =>
  import('./pages/ContatoPage').then((module) => ({ default: module.ContatoPage }))
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage }))
);

const PageFallback = () => (
  <div className="min-h-[50vh] pt-32 flex items-center justify-center text-[#57685F] text-sm">
    Carregando...
  </div>
);

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
          <Suspense fallback={<PageFallback />}>
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
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

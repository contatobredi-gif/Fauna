/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { InstitucionalPage } from './pages/InstitucionalPage';
import { CursosPage } from './pages/CursosPage';
import { ComoIngressarPage } from './pages/ComoIngressarPage';
import { BeneficiosPage } from './pages/BeneficiosPage';
import { VidaAcademicaPage } from './pages/VidaAcademicaPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { ContatoPage } from './pages/ContatoPage';
import { InterestModal } from './components/ui/InterestModal';
import { ContentInventoryModal } from './components/ui/ContentInventoryModal';

import { ScrollTrigger } from './utils/motionConfig';

// Auto scroll to top on route navigation and recalculate ScrollTriggers
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash && hash !== '#' && hash.length > 1) {
      try {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } catch {
        // Ignore invalid selector in hash
      }
    }
    try {
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    } catch {
      window.scrollTo(0, 0);
    }

    // Ensure ScrollTrigger recalculates trigger positions on new page DOM
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};

export default function App() {
  const [interestModalOpen, setInterestModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string | undefined>();
  const [inventoryModalOpen, setInventoryModalOpen] = useState(false);

  const handleOpenInterest = (courseId?: string) => {
    setSelectedCourseId(courseId);
    setInterestModalOpen(true);
  };

  const handleCloseInterest = () => {
    setInterestModalOpen(false);
    setSelectedCourseId(undefined);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1D2B24]">
        <Header 
          onOpenInterest={() => handleOpenInterest()} 
          onOpenInventory={() => setInventoryModalOpen(true)} 
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenInterest={handleOpenInterest} />} />
            <Route path="/institucional" element={<InstitucionalPage />} />
            <Route path="/cursos" element={<CursosPage onOpenInterest={handleOpenInterest} />} />
            <Route path="/como-ingressar" element={<ComoIngressarPage onOpenInterest={() => handleOpenInterest()} />} />
            <Route path="/beneficios" element={<BeneficiosPage onOpenInterest={() => handleOpenInterest()} />} />
            <Route path="/vida-academica" element={<VidaAcademicaPage />} />
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<HomePage onOpenInterest={handleOpenInterest} />} />
          </Routes>
        </main>

        <Footer 
          onOpenInventory={() => setInventoryModalOpen(true)}
          onOpenInterest={() => handleOpenInterest()}
        />

        {/* Global Modals */}
        <InterestModal
          isOpen={interestModalOpen}
          onClose={handleCloseInterest}
          defaultCourseId={selectedCourseId}
        />

        <ContentInventoryModal
          isOpen={inventoryModalOpen}
          onClose={() => setInventoryModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

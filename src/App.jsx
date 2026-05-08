import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import LocationSection from './components/LocationSection';
import ExperienceSection from './components/ExperienceSection';
import SpacesSection from './components/SpacesSection';
import GuestSection from './components/GuestSection';
import CyclingServicesSection from './components/CyclingServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConceptPage from './components/ConceptPage';
import { translations } from './i18n';

function App() {
  const [lang, setLang] = useState('es');
  const t = useMemo(() => translations[lang] ?? translations.es, [lang]);
  const isConceptPage = window.location.pathname === '/concepto' || window.location.pathname === '/concepto/';

  return (
    <div className="page">
      <Header t={t} lang={lang} setLang={setLang} />
      {isConceptPage ? (
        <ConceptPage t={t} />
      ) : (
        <main>
          <Hero t={t} />
          <ConceptSection t={t} />
          <LocationSection t={t} />
          <ExperienceSection t={t} />
          <SpacesSection t={t} />
          <GuestSection t={t} />
          <CyclingServicesSection t={t} />
          <ContactSection t={t} />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;

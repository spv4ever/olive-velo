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
import { translations } from './i18n';

function App() {
  const [lang, setLang] = useState('es');
  const t = useMemo(() => translations[lang] ?? translations.es, [lang]);

  return (
    <div className="page">
      <Header t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <ConceptSection t={t} />
        <LocationSection t={t} />
        <ExperienceSection />
        <SpacesSection />
        <GuestSection />
        <CyclingServicesSection />
        <ContactSection t={t} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

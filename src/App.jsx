import React from 'react';
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

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <ConceptSection />
        <LocationSection />
        <ExperienceSection />
        <SpacesSection />
        <GuestSection />
        <CyclingServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

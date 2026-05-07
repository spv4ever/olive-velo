import React from 'react';

function CyclingServicesSection({ t }) {
  return (
    <section id="cycling" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.cycling.eyebrow}</p>
        <h2>{t.cycling.title}</h2>
      </div>
      <ul className="services-grid">
        {t.cycling.services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  );
}

export default CyclingServicesSection;

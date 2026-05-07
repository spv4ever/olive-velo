import React from 'react';
function LocationSection({ t }) {
  return (
    <section id="location" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.location.eyebrow}</p>
        <h2>{t.location.title}</h2>
      </div>
      <div className="two-col">
        <p>{t.location.p1}</p>
        <p>{t.location.p2}</p>
      </div>
      <ul className="info-list">
        {t.location.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="location-map" aria-label="Mapa de Camí de Girona, Quart">
        <iframe
          title="Google Maps - Camí de Girona, Quart"
          src="https://maps.google.com/maps?q=Cam%C3%AD%20de%20Girona%2C%20Quart%2C%20Girona&z=14&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default LocationSection;

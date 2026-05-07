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
    </section>
  );
}

export default LocationSection;

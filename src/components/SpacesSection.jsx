import React from 'react';

function SpacesSection({ t }) {
  return (
    <section id="spaces" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.spaces.eyebrow}</p>
        <h2>{t.spaces.title}</h2>
      </div>
      <div className="spaces-grid">
        {t.spaces.items.map((space) => (
          <article className="space-card" key={space.title}>
            <div className="space-image image-placeholder" aria-hidden="true" />
            <h3>{space.title}</h3>
            <p>{space.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SpacesSection;

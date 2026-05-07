import React from 'react';

function SpacesSection({ t }) {
  const spaceImages = [
    '/images/space-masia.jpg',
    '/images/space-oli-pa.jpg',
    '/images/space-sanctuary.jpg',
    '/images/space-bike-room.jpg',
    '/images/space-arribada.jpg'
  ];

  return (
    <section id="spaces" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.spaces.eyebrow}</p>
        <h2>{t.spaces.title}</h2>
      </div>
      <div className="spaces-grid">
        {t.spaces.items.map((space, index) => (
          <article className="space-card" key={space.title}>
            <img className="space-image" src={spaceImages[index]} alt={space.title} loading="lazy" />
            <h3>{space.title}</h3>
            <p>{space.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SpacesSection;

import React from 'react';

function GuestSection({ t }) {
  return (
    <section className="section">
      <div className="section-head">
        <p className="eyebrow">{t.guestProfile.eyebrow}</p>
        <h2>{t.guestProfile.title}</h2>
      </div>
      <div className="card-grid">
        {t.guestProfile.items.map((guest) => (
          <article className="card" key={guest.title}>
            <h3>{guest.title}</h3>
            <p>{guest.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default GuestSection;

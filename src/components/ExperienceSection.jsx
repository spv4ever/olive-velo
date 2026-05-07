import React from 'react';

function ExperienceSection({ t }) {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.experience.eyebrow}</p>
        <h2>{t.experience.title}</h2>
      </div>
      <div className="card-grid">
        {t.experience.items.map((item) => (
          <article className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

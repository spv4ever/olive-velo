import React from 'react';
function ConceptSection({ t }) {
  return (
    <section id="concept" className="section">
      <div className="section-head">
        <p className="eyebrow">{t.concept.eyebrow}</p>
        <h2>{t.concept.title}</h2>
      </div>
      <div className="two-col">
        <p>{t.concept.p1}</p>
        <p>{t.concept.p2}</p>
      </div>
    </section>
  );
}

export default ConceptSection;

import React from 'react';

function ConceptPage({ t }) {
  return (
    <main className="detail-page">
      <section className="section detail-hero">
        <p className="eyebrow">{t.concept.eyebrow}</p>
        <h1>{t.conceptDetail.title}</h1>
        <p>{t.conceptDetail.intro}</p>
      </section>

      <section className="section">
        <h2>{t.conceptDetail.originTitle}</h2>
        <div className="two-col">
          <p>{t.conceptDetail.originP1}</p>
          <p>{t.conceptDetail.originP2}</p>
        </div>
      </section>

      <section className="section">
        <h2>{t.conceptDetail.visionTitle}</h2>
        <p>{t.conceptDetail.visionText}</p>
      </section>

      <section className="section">
        <h2>{t.conceptDetail.positioningTitle}</h2>
        <p>{t.conceptDetail.positioningText}</p>
      </section>

      <section className="section">
        <h2>{t.conceptDetail.communityTitle}</h2>
        <p>{t.conceptDetail.communityText}</p>
        <a className="button button-primary" href="/">{t.conceptDetail.backCta}</a>
      </section>
    </main>
  );
}

export default ConceptPage;

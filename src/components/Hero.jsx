import React from 'react';
function Hero({ t }) {
  return (
    <section id="top" className="hero section">
      <img className="hero-media" src="/images/hero-masia.jpg" alt={t.hero.imageAria} loading="eager" />
      <div className="hero-content">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.description}</p>
        <div className="cta-row">
          <a className="button button-primary" href="#concept">
            {t.hero.ctaPrimary}
          </a>
          <a className="button button-secondary" href="#experience">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

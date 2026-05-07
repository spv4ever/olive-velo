import React from 'react';
function ContactSection({ t }) {
  return (
    <section id="contact" className="section cta-section">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <a className="button button-primary" href="mailto:info@oliveandvelo.com">
        {t.contact.cta}
      </a>
    </section>
  );
}

export default ContactSection;

import React, { useState } from 'react';

const WEB3FORMS_KEY = '371eb75f-a5bb-40a5-b7a8-644bcce48f20';

function ContactSection({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Enviando...');
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Nuevo mensaje desde oliveandvelo.com/contacto');
    formData.append('from_name', 'Olive & Velo Web');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult('¡Mensaje enviado correctamente!');
        event.target.reset();
      } else {
        setResult('Hubo un error. Inténtalo de nuevo.');
      }
    } catch (error) {
      setResult('Error de conexión. Inténtalo en unos minutos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section cta-section">
      <p className="eyebrow">{t.contact.eyebrow}</p>
      <h2>{t.contact.title}</h2>
      <p>{t.contact.text}</p>
      <button type="button" className="button button-primary" onClick={() => setIsOpen(true)}>
        {t.contact.cta}
      </button>

      {isOpen && (
        <div className="contact-modal-overlay" role="presentation" onClick={() => setIsOpen(false)}>
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Formulario de contacto"
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="contact-modal-close" onClick={() => setIsOpen(false)} aria-label="Cerrar formulario">
              ✕
            </button>
            <h3>{t.contact.cta}</h3>
            <form className="contact-form" onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Mensaje" rows="5" required />
              <input type="checkbox" name="botcheck" className="botcheck" tabIndex="-1" autoComplete="off" />
              <button type="submit" className="button button-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
              <p className="contact-form-status">{result}</p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;

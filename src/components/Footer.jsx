import React from 'react';

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@oliveandvelo',
    href: 'https://www.instagram.com/oliveandvelo/',
    icon: '📷',
  },
  {
    label: 'X',
    handle: '@oliveandvelo',
    href: 'https://x.com/oliveandvelo',
    icon: '𝕏',
  },
  {
    label: 'TikTok',
    handle: '@oliveandvelo',
    href: 'https://www.tiktok.com/@oliveandvelo',
    icon: '🎵',
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <img src="/logo-olive-velo.png" alt="Olive & Velo" className="footer-logo" />
      <p>cycling house retreat</p>
      <p>Slow · Ride · Live</p>
      <p>Girona · Costa Brava</p>
      <p>
        <a href="mailto:info@oliveandvelo.com" className="footer-link">
          ✉️ info@oliveandvelo.com
        </a>
      </p>

      <ul className="social-links" aria-label="Social media links">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" className="footer-link">
              <span aria-hidden="true">{social.icon}</span> {social.label}: {social.handle}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;

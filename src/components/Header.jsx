import React from 'react';
import { languages } from '../i18n';

const links = ['#concept', '#location', '#experience', '#spaces', '#cycling', '#contact'];

function Header({ t, lang, setLang }) {
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label={t.header.homeAria}>
        <img src="/logo-olive-velo.png" alt="Olive & Velo" className="brand-logo" />
      </a>
      <nav aria-label={t.header.navAria}>
        <ul className="nav-list">
          {links.map((href, index) => (
            <li key={href}>
              <a href={href}>{t.nav[index]}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="lang-switcher" aria-label="Language switcher">
        {languages.map((item) => (
          <button key={item.code} type="button" className={item.code === lang ? 'active' : ''} onClick={() => setLang(item.code)}>
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;

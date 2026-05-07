import React from 'react';
const links = [
  { href: '#concept', label: 'Concept' },
  { href: '#location', label: 'Location' },
  { href: '#experience', label: 'Experience' },
  { href: '#spaces', label: 'Spaces' },
  { href: '#cycling', label: 'Cycling' },
  { href: '#contact', label: 'Contact' }
];

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="Olive and Velo home">
        olive&velo
      </a>
      <nav aria-label="Main navigation">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React from 'react';
import PageLink from './PageLink';

const Footer = () => (
  <footer className="bg-style text-center" data-testid="footer">
    <p data-testid="footer-text">
      kocka.xyz, 2024.
    </p>
    
    <p data-testid="footer-content">
      <PageLink href="/impresszum" className="nav-link footer-end" testId="navbar-cube">
        Impresszum
      </PageLink>
      <PageLink href="/felhasznalasi-feltetelek" className="nav-link footer-end" testId="navbar-cube">
        Felhasználási feltételek
      </PageLink>
      <PageLink href="/adatvedelem" className="nav-link" testId="navbar-cube">
        Adatvédelmi irányelvek
      </PageLink>     
    </p>
  </footer>
);

export default Footer;

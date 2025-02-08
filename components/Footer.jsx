import React from "react";
import PageLink from "./PageLink";

const Footer = () => (
  <footer
    className="bg-style text-center p-6 w-full flex flex-col items-center gap-4"
    style={{
      minHeight: "150px",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    data-testid="footer"
  >
    <p data-testid="footer-text">kocka.xyz, 2024.</p>

    {/* Felső linkek egy sorban */}
    <div className="flex justify-center space-x-6">
      <PageLink
        href="/kvizek"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Kvízek
      </PageLink>
      {/*<PageLink
        href="/kocka-kviz"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Kocka kvíz
      </PageLink>
      <PageLink
        href="/teglatest-kviz"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Téglatest kvíz
      </PageLink>
      <PageLink
        href="/gomb-kviz"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Gömb kvíz
      </PageLink>*/}
    </div>

    {/* Alsó linkek egy oszlopban */}
    <div className="flex flex-col items-center space-y-2">
      <PageLink
        href="/impresszum"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Impresszum
      </PageLink>
      <PageLink
        href="/felhasznalasi-feltetelek"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Felhasználási feltételek
      </PageLink>
      <PageLink
        href="/adatvedelem"
        className="nav-link footer-end"
        testId="navbar-cube"
      >
        Adatvédelmi irányelvek
      </PageLink>
    </div>
  </footer>
);

export default Footer;

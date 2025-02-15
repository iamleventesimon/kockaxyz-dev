import React from "react";
import "../globals.css";

const Content = () => {
  const linkStyle = {
    textDecoration: "none",
  };

  const linkHoverStyle = {
    color: "#333",
    textDecoration: "underline",
  };
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    marignleft: "10px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "start",
  };
  return (
    <div>
      <nav style={navStyle}>
        <ul style={listStyle}>
          <li>
            <a
              href="/kocka-kviz#section1"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Kocka kvíz
            </a>
          </li>
          <li>
            <a
              href="/teglatest-kviz#section2"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Téglatest kvíz
            </a>
          </li>
          <li>
            <a
              href="/gomb-kviz#section3"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Gömb kvíz
            </a>
          </li>
          <li>
            <a
              href="/negyzet-kviz#section4"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Négyzet kvíz
            </a>
          </li>
          <li>
            <a
              href="/teglalap-kviz#section5"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Téglalap kvíz
            </a>
          </li>
          <li>
            <a
              href="/kor-kviz#section6"
              style={linkStyle}
              onMouseOver={(e) => (e.target.style = linkHoverStyle)}
              onMouseOut={(e) => (e.target.style = linkStyle)}
            >
              Kör kvíz
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Content;

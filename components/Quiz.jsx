import React from "react";

const Content = () => {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
    display: "inline-block",
    width: "200px",
    height: "50px",
    lineHeight: "50px",
    textAlign: "center",
  };

  const linkHoverStyle = {
    color: "#333",
    textDecoration: "underline",
  };
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const listStyle = {
    padding: 0,
    textAlign: "center",
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
        </ul>
      </nav>
    </div>
  );
};

export default Content;

import React from "react";
import logo from "../assets/logo.png";
export const Header = props => {
  return (
    <header className="App-header">
      <img
        className="App-logo"
        src={logo}
        className="App-logo col-sm-12 col-md-4 offset-md-4"
        alt="Conpass Logo"
      />
      <nav>
        <a className="botao" href="#">
          Link Fake 1
        </a>
        <a className="botao" href="#">
          Link Fake 2
        </a>
        <a className="botao" href="#">
          Link Fake 3
        </a>
        <a className="botao" href="#">
          Link Fake 4
        </a>
      </nav>
    </header>
  );
};

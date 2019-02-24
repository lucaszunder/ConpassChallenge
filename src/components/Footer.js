import React from "react";

export const Footer = props => {
  return (
    <footer className="footer">
      <div className="icons-social">
        <a
          className="hvr-float-shadow"
          href="https://www.facebook.com/Zunder.lucas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" />
        </a>
        <a
          className="hvr-float-shadow"
          href="https://github.com/devzunder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="hvr-float-shadow"
          href="https://www.linkedin.com/in/zunder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
      <div>
        <p>Developed by DevZunder</p>
      </div>
    </footer>
  );
};

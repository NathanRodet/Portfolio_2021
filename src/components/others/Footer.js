import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="FooterBackgroud">
      <div className="Redirection">
        <div className="VisiteCV">
          <NavLink exact to="/Cv" activeClassName="navActive">
            <p>
              Cv et Portfolio
            </p>
            <i class="fas fa-arrow-circle-right"></i>
          </NavLink>
        </div>
        <div className="DownloadCV">
          <a href="../../media/CV.pdf" download="CV.pdf">
            <p>
              téléchargement du cv
          </p>
            <i class="fas fa-file-download"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
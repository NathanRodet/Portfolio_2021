import React from 'react';

const Experiences = () => {
  return (
    <div className="ExperiencesContent">
      <div className="Title">
        <h3>Mes Expériences</h3>
      </div>
      <div className="ExperiencesList">

        <div className="GED">
          <h4>
            Gestion électronique de documents (SaaS)
          </h4>
          <p>
            Application SaaS dédiée à la gestion sécurisée de documents dans un cloud.
          </p>
          <h5>
            Contexte
          </h5>
          <p>
            Projet universitaire autonome 2021, DUT RT - IUT de Roanne
          </p>
          <h6>
            Technologies et languages utilisées
          </h6>
          <ul>
            <li>
              <span>
                Symfony
              </span>
            </li>
            <li>
              <span>
                Bootstrap
              </span>
            </li>
            <li>
              <span>
                CSS
              </span>
            </li>
            <li>
              <span>
                SQL
              </span>
            </li>
          </ul>
        </div>

        <div className="BUT">
          <h4>
            Application web BUT
          </h4>
          <p>
            Application web dédiée à la présentation
            de la formation de BUT Réseaux et Télécoms et à la
            collecte de données de contact d'élèves intéressés.
          </p>
          <h5>
            Contexte
          </h5>
          <p>
            Projet tutoré 2021, DUT RT - IUT de Roanne
          </p>
          <h6>
            Technologies et languages utilisées
          </h6>
          <ul>
            <li>
              <span>
                React.js
              </span>
            </li>
            <li>
              <span>
                Javascript
              </span>
            </li>
            <li>
              <span>
                SCSS
              </span>
            </li>
          </ul>
        </div>

        <div className="Bomberman">
          <h4>
            REMAKE Bomberman
          </h4>
          <p>
            Application Python développée en groupe sans l'usage du module Pygames
            dans le cadre de l'épreuve d'ISN du Baccalauréat.

          </p>
          <h5>
            Contexte
          </h5>
          <p>
            Projet ISN 2019, Terminale S - Lycée René Cassin
          </p>
          <h6>
            Technologies et languages utilisées
          </h6>
          <ul>
            <li>
              <span>
                Python
              </span>
            </li>
          </ul>
        </div>


      </div>
    </div>
  );
};

export default Experiences;
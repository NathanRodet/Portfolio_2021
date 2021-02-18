import React from 'react';
import Contact from '../components/cv/Contact';
import Frameworks from '../components/cv/Frameworks';
import Languages from '../components/cv/Languages';
import Os from '../components/cv/Os';
import Presentation from '../components/cv/Presentation';
import Retour from '../components/cv/Retour';

const Cv = () => {
  return (
    <div className="CvBackground">
      <div className="Nav">
        <Retour />
      </div>
      <div className="CvContent">
        <div className="AboutMe">
          <Presentation />
        </div>
        <div className="WebKnowledge">
          <h4>
            Connaissances informatique (WEB)
          </h4>
          <Languages />
          <Frameworks />
          <Os />
        </div>
          <Contact />
      </div>
      <div className="Nav">
        <Retour />
      </div>
    </div>
  );
};

export default Cv;
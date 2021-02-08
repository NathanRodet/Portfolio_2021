import React from 'react';
import Contact from '../components/cv/Contact';
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
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Cv;
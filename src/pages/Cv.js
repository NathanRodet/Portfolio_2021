import React from 'react';
import Contact from '../components/cv/Contact';
import Presentation from '../components/cv/Presentation';
import Reseaux from '../components/cv/Reseaux';
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
          <Reseaux />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Cv;
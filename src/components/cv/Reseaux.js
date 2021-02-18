import React from 'react';
import network from './../../media/cv/network.jpg';

const Reseaux = () => {
  return (
    <div className="ReseauxContent">
      <div className="Network">
        <div className="Title">
              <h2>
                test
              </h2>
          </div>
        </div>
        <div className="NetworkIMG">
          <img src={network} alt="Networking" className="img" />
        </div>
    </div>
  );
};

export default Reseaux;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Retour = () => {
  return (
    <div className="RetourContent">

      <div className="Navigation">
        <NavLink exact to="/">
          <i id="left" class="fas fa-arrow-left"></i>
          <h3>Home</h3>
        </NavLink>
        <NavLink exact to="/">
          <h3>Portfolio</h3>
          <i id="right" class="fas fa-arrow-right"></i>
        </NavLink>
      </div>

    </div>
  );
};

export default Retour;
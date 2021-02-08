import React from 'react';
import { NavLink } from 'react-router-dom';

const Retour = () => {
  return (
    <div className="RetourBackground">
      <div className="RetourContent">
        <div className="Navigation">
            <NavLink exact to="/" activeClassName="navActive">
              <i class="fas fa-arrow-left"></i>
              <h3> back</h3>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Retour;
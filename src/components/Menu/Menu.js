// Functional Component with Arrow Function

import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/concepts">Concepts</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
  )
}

export default Menu;
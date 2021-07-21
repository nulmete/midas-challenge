import React from 'react';
import { Link } from 'react-router-dom';
import {
  detectRoute,
  uploadRoute,
  userMutantsRoute,
} from '../Routes/allRoutes';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to={detectRoute}>Detector de mutantes</Link>
      </li>
      <li>
        <Link to={uploadRoute}>Cargar mutantes</Link>
      </li>
      {/* TODO: add number of mutants at the end */}
      <li>
        <Link to={userMutantsRoute}>Mis mutantes</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;

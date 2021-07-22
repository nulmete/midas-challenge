import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  detectRoute,
  uploadRoute,
  userMutantsRoute,
} from '../Routes/allRoutes';
import NavStyles from './NavStyles';
import { useMutants } from '../../state/MutantsContext';

const Nav = () => {
  const { mutantsAmount } = useMutants();

  return (
    <NavStyles>
      <ul>
        <li>
          <NavLink to={detectRoute} exact>
            Detector de mutantes
          </NavLink>
        </li>
        <li>
          <NavLink to={uploadRoute} exact>
            Cargar mutantes
          </NavLink>
        </li>
        {/* TODO: add number of mutants at the end */}
        <li>
          <NavLink to={userMutantsRoute} exact>
            Mis mutantes ({mutantsAmount()})
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;

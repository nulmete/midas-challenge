import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiagnoses,
  faUpload,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
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
            <div className="text">Detector de mutantes</div>
            <div className="icon">
              <FontAwesomeIcon icon={faDiagnoses} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={uploadRoute} exact>
            <div className="text">Cargar mutantes</div>
            <div className="icon">
              <FontAwesomeIcon icon={faUpload} />
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={userMutantsRoute} exact>
            <div className="text">Mis mutantes ({mutantsAmount()})</div>
            <div className="icon">
              <FontAwesomeIcon icon={faUser} /> ({mutantsAmount()})
            </div>
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Nav;

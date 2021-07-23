import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import PropTypes from 'prop-types';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
};

const Alert = ({ children }) => (
  <AlertProvider template={AlertTemplate} {...options}>
    {children}
  </AlertProvider>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Alert;

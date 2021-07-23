import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './ButtonStyles';

const Button = ({ children, type, centerX = false, ...props }) => (
  <ButtonStyles type={type || 'button'} centerX={centerX} {...props}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  centerX: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;

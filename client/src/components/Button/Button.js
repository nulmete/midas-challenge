import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './ButtonStyles';

const Button = ({ children, centerX = false, ...props }) => (
  <ButtonStyles type="button" centerX={centerX} {...props}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  centerX: PropTypes.bool,
};

export default Button;

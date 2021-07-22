import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyles from './ButtonStyles';

const Button = ({ children, ...props }) => (
  <ButtonStyles type="button" {...props}>
    {children}
  </ButtonStyles>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;

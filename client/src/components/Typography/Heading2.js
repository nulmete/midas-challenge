import React from 'react';
import PropTypes from 'prop-types';
import Heading2Styles from './Heading2Styles';

const Heading2 = ({ children, ...props }) => (
  <Heading2Styles {...props}>{children}</Heading2Styles>
);

Heading2.propTypes = {
  children: PropTypes.node,
};

export default Heading2;

import React from 'react';
import PropTypes from 'prop-types';
import Heading3Styles from './Heading3Styles';

const Heading3 = ({ children, ...props }) => (
  <Heading3Styles {...props}>{children}</Heading3Styles>
);

Heading3.propTypes = {
  children: PropTypes.node,
};

export default Heading3;

import React from 'react';
import PropTypes from 'prop-types';
import ClickableImageStyles from './ClickableImageStyles';

const ClickableImage = ({ src, alt, onClick }) => (
  <ClickableImageStyles onClick={onClick}>
    <img src={src} alt={alt} />
  </ClickableImageStyles>
);

ClickableImage.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ClickableImage;

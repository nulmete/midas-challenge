import React from 'react';
import PropTypes from 'prop-types';
import SuccessImage from '../../assets/images/ok.png';
import Heading2 from '../Typography/Heading2';
import Button from '../Button/Button';
import SuccessScreenStyles from './SuccessScreenStyles';

const SuccessScreen = ({ message, handleNew }) => (
  <SuccessScreenStyles className="spacing-lg">
    <div>
      <img src={SuccessImage} alt="Success" />
      <Heading2>{message}</Heading2>
    </div>
    <Button type="submit" onClick={handleNew}>
      Volver a analizar
    </Button>
  </SuccessScreenStyles>
);

SuccessScreen.propTypes = {
  message: PropTypes.string.isRequired,
  handleNew: PropTypes.func.isRequired,
};

export default SuccessScreen;

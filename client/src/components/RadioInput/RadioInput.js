import React from 'react';
import PropTypes from 'prop-types';
import RadioInputStyles from './RadioInputStyles';

const RadioInput = ({
  label,
  name,
  htmlFor,
  required = false,
  register = () => {},
  error,
  ...props
}) => (
  <RadioInputStyles>
    <input
      type="radio"
      id={htmlFor}
      name={name}
      {...register(name, { required })}
      {...props}
    />
    {label && <label htmlFor={htmlFor}>{label}</label>}
    {error && <p className="input-error">{error}</p>}
  </RadioInputStyles>
);

RadioInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
  register: PropTypes.func,
  error: PropTypes.string,
};

export default RadioInput;

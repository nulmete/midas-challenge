import React from 'react';
import PropTypes from 'prop-types';
import TextInputStyles from './TextInputStyles';

const TextInput = ({
  label,
  htmlFor,
  required = false,
  register = () => {},
  error,
  ...props
}) => (
  <TextInputStyles>
    {/* TODO: show * after label if input is required */}
    {label && <label htmlFor={htmlFor}>{label}</label>}
    <input
      type="text"
      id={htmlFor}
      name={htmlFor}
      {...register(htmlFor, { required })}
      {...props}
    />
    {error && <p className="input-error">{error}</p>}
  </TextInputStyles>
);

TextInput.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  register: PropTypes.func,
  error: PropTypes.string,
};

export default TextInput;

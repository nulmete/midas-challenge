import styled from 'styled-components';

const TextInputStyles = styled.div`
  label {
    display: block;
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  input {
    border: none;
    box-shadow: var(--box-shadow-default);
    color: inherit;
    font-size: 1.8rem;
    font-family: inherit;
    font-weight: inherit;
    padding: 1.6rem 1rem;

    &::placeholder {
      color: var(--color-input-placeholder);
    }
  }
`;

export default TextInputStyles;

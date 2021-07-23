import styled from 'styled-components';

const RadioInputStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-size: 2rem;
    font-weight: var(--font-weight-lighter);
  }

  input[type='radio'] {
    transform: scale(1.5);
  }

  @media screen and (max-width: 25em) {
    flex-direction: row;

    input[type='radio'] {
      transform: scale(1.25);
      margin-right: 0.5rem;
    }
  }
`;

export default RadioInputStyles;

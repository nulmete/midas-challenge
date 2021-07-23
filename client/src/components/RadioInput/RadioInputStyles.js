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
`;

export default RadioInputStyles;

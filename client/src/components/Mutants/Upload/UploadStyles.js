import styled from 'styled-components';

const UploadStyles = styled.div`
  .levels__label {
    font-size: 2.2rem;
    margin-bottom: 3rem;

    .input-error {
      margin-left: 1rem;
    }
  }

  .levels__options {
    display: flex;

    & > * input[type='radio'] {
      margin-bottom: 1rem;
    }

    & > *:not(:last-child) {
      margin-right: var(--spacer);
    }
  }
`;

export default UploadStyles;

import styled from 'styled-components';

const UploadStyles = styled.div`
  form input[type='text'] {
    width: 60%;

    /* 900px */
    @media screen and (max-width: 56.25em) {
      width: 100%;
    }
  }

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

    @media screen and (max-width: 25em) {
      display: block;

      & > * input[type='radio'] {
        margin-bottom: 0;
      }

      & > *:not(:last-child) {
        margin-right: 0;
        margin-bottom: 0.5rem;
      }
    }
  }
`;

export default UploadStyles;

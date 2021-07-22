import styled from 'styled-components';

const DetectStyles = styled.div`
  .dna {
    box-shadow: var(--box-shadow-default);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.6rem;
    padding: var(--spacer) 1rem;

    &__sequence {
      max-width: 8ch;
    }

    &__sequence:not(:last-child) {
      margin-right: 10px;
      position: relative;

      &::after {
        position: absolute;
        content: ',';
        display: block;
        right: -8px;
        bottom: 0;
      }
    }
  }

  form > button[type='submit'] {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default DetectStyles;

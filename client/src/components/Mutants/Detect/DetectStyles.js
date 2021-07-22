import styled from 'styled-components';

const DetectStyles = styled.div`
  h3 {
    font-size: 4.2rem;
    font-weight: var(--font-weight-semi-bold);
  }

  .dna {
    box-shadow: var(--box-shadow-default);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.6rem;

    /* Testing purposes */
    height: 200px;

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
`;

export default DetectStyles;

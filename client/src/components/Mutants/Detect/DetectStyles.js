import styled from 'styled-components';

const DetectStyles = styled.div`
  .dna {
    box-shadow: var(--box-shadow-default);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: 2.6rem;
    padding: var(--spacer) 1rem;

    &__sequence {
      min-width: 8ch;
      max-width: 8ch;
      margin: 0.5em;

      @media screen and (max-width: 37.5em) {
        max-width: 100%;
      }

      input[type='text'] {
        font-size: 2.6rem;
        font-weight: var(--font-weight-lighter);
        width: 100%;
      }
    }
  }
`;

export default DetectStyles;

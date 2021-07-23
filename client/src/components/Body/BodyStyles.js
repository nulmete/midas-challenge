import styled from 'styled-components';

const BodyStyles = styled.div`
  background: var(--background-body);
  width: 100%;

  main {
    max-width: 95%;
    margin: 0 auto;
    padding: var(--spacer-lg) var(--spacer-lg) var(--spacer);

    /* 900px */
    @media screen and (max-width: 56.25em) {
      padding: var(--spacer);
    }

    /* 600px */
    @media screen and (max-width: 37.5em) {
      padding: 2rem;
    }
  }
`;

export default BodyStyles;

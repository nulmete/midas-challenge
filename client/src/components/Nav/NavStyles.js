import styled from 'styled-components';

const NavStyles = styled.nav`
  background-color: inherit;
  box-shadow: var(--box-shadow-nav);

  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
  }

  a {
    color: inherit;
    display: block;
    font-size: 2.6rem;
    font-weight: var(--font-weight-semi-bold);
    padding: var(--spacer) 0;
    text-decoration: none;

    &.active {
      color: var(--color-nav-active-link);
      border-bottom: 4px solid var(--color-nav-active-link);
    }
  }

  .icon {
    display: none;
  }

  @media screen and (max-width: 56.25em) {
    li {
      flex: 1 1 0;
      text-align: center;
    }

    .text {
      display: none;
    }

    .icon {
      display: block;

      svg {
        color: inherit;
      }
    }
  }
`;

export default NavStyles;

import styled from 'styled-components';

const UserMutantsStyles = styled.div`
  .mutants-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-gap: var(--spacer);

    .mutant {
      border: 2px solid var(--color-black);
      font-size: 2.2rem;
      font-weight: var(--font-weight-semi-bold);
      display: grid;
      grid-column-gap: 1.5rem;
      grid-row-gap: var(--spacer);
      grid-template-areas:
        'level name name'
        'superpower superpower superpower'
        '. . actions';
      justify-items: center;
      align-items: center;

      &--fav {
        outline: 3px solid var(--color-mutant-favorite);
      }

      &__level {
        border-bottom: 1px solid var(--color-black);
        border-right: 1px solid var(--color-black);
        color: var(--color-black);
        grid-area: level;
        padding: 1rem;
        justify-self: stretch;
        text-align: center;
      }

      &__name {
        color: var(--background-app);
        grid-area: name;
      }

      &__superpower {
        color: var(--color-mutant-power);
        grid-area: superpower;
      }

      &__actions {
        grid-area: actions;
        justify-self: end;
      }
    }
  }

  .no-mutants {
    font-size: 2.2rem;
  }
`;

export default UserMutantsStyles;

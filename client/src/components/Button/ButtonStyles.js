import styled from 'styled-components';
import { centerBlockItemHorizontally } from '../../mixins';

const ButtonStyles = styled.button`
  background: var(--color-black);
  border: none;
  border-radius: 1rem;
  color: var(--color-white);
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 2.6rem;
  font-weight: var(--font-weight-semi-bold);
  padding: 1rem 3rem;

  ${({ centerX }) =>
    centerX &&
    `
    ${centerBlockItemHorizontally}
  `}
`;

export default ButtonStyles;

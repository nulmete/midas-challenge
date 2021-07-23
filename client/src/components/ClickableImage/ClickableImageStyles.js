import styled from 'styled-components';
import { defaultImgStyling } from '../../mixins';

const ClickableImageStyles = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  img {
    ${defaultImgStyling}
  }
`;

export default ClickableImageStyles;

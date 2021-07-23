import styled from 'styled-components';
import { defaultImgStyling } from '../../mixins';

const SuccessScreenStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    ${defaultImgStyling}
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }
`;

export default SuccessScreenStyles;

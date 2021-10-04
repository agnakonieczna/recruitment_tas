import styled from 'styled-components';
import { ImgWithOverlay } from '../PhotosWrapper/PhotosWrapper.style';

export const ImgSectionTwo = styled(ImgWithOverlay)`
  ::before {
    display: none;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImgText = styled.p`
  position: absolute;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  width: 100%;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

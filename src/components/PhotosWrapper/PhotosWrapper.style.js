import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ImgWithOverlay = styled.div`
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    background-color: ${({ theme }) => theme.colors.transparentBlue};
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  ::before {
    content: 'gdy stawałem się dorosłym człowiekiem słyszałem głos dziadka mówiącego o domu przyjaźni i miłości.';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
  }
`;

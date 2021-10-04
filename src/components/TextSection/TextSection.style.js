import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 3rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 50%;
    padding: 0 5rem;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 3rem;
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const Text = styled.p`
  text-align: center;
  line-height: 1.5;
  margin: 1rem 0;
  padding: 0 2rem;
`;

export const Btn = styled(Link)`
  display: inline-block;
  border: 0.15rem solid ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: -0.1rem;
`;

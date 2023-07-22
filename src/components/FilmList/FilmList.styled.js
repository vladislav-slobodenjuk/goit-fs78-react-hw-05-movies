import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 360px));
  gap: 16px;

  margin: 0 auto;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  border: 1px solid black;
  border-radius: 4px;

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.03);
  }

  > a {
    text-decoration: none;
  }
`;

export const MovieName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  max-width: 342px;
  color: black;
`;

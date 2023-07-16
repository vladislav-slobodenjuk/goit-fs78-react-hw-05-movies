import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 360px));
  /* grid-template-columns: repeat(auto-fit, 300px); */
  gap: 16px;

  margin: 0 auto;

  width: 320px;

  @media screen and (min-width: 768px) {
    width: 768px;
    /* padding-left: 32px; */
    /* padding-right: 32px; */
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

  > a {
    text-decoration: none;
  }
`;

export const ProductName = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
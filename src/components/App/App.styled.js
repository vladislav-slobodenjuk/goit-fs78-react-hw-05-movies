import styled from 'styled-components';

export const Container = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr; */
  /* grid-gap: 16px; */

  padding: 0 16px;
  margin: 0 auto;
  padding-bottom: 16px;

  /* padding-top: 20px; */
  /* padding-bottom: 20px; */

  width: 370px;

  font-size: 20px;
  color: #010101;

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

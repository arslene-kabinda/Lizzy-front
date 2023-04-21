import styled from "styled-components";

// export const CardContainer = styled.div`
//   border: 1px solid yellow;
//   width: 0%;
//   margin: 0.8rem;

//   @media screen and (max-width: 960px) {
//     width: 100%;
//     margin: 1rem 0.2rem;
//   }
// `;
export const CardImage = styled.div`
  width: 18rem;
  height: 14rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 250px;
    margin: 0rem;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
  }
`;

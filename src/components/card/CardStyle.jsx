import styled from "styled-components";

export const CardContainer = styled.div`
  width: 22.5%;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  margin: 0.8rem;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 1rem 0.2rem;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 180px;
  background: gray;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 250px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

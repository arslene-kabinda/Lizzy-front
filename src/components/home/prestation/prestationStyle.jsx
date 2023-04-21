import styled from "styled-components";

export const PrestationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;
export const PrestationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  padding: 1rem 7rem;


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    height: auto;
  }
`;

export const PrestationItem = styled.div`
  width: 50%;
  margin: 1rem;
  p {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 1rem;
    p {
      font-size: 1.5rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
`;
export const PrestationImage = styled.div`
  width: 60%;
  height: 100%;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
    margin: 1rem;
  }
`;
export const PrestationContent2Container = styled.div`
  background: rgba(196, 196, 196, 0.08);
  padding: 1rem 7rem;
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
  }
`;
export const PrestationContent2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;
export const PrestationImage2 = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const PrestationItem2 = styled.div`
  width: 100%;
  margin: 1rem;
  p {
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    p {
      font-size: 1.3rem;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
`;
export const CardContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

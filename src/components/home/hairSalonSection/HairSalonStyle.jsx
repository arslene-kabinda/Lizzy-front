import styled from "styled-components";

export const HairSalonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 7rem;

  background-color: rgba(196, 196, 196, 0.08);

  h2 {
    font-size: 1.5rem;
    padding: 0rem 1rem;
    font-family: "Poppins", sans-serif;
    background-color: #f8f8f8;
  }
  @media screen and (max-width: 960px) {
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;

    h2 {
      font-size: 1.4;
      text-align: start;
    }
  }
`;
export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

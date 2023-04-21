import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem 7rem;
  background: #f7f7f7;
  position: relative;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
  }
`;

export const Item1 = styled.div`
  margin-right: 1rem;
  width: 22%;
  position: absolute;
  top: 3.1rem;
  left: 7.9rem;
  p {
    font-size: 2.1rem;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    position: relative;
    left: 0rem;
    top: 1rem;

    margin-right: 0rem;
    p {
      font-size: 1.7rem;
    }
  }
`;
export const Item2 = styled.div`
  margin-left: 0.5rem;

  width: 70%;
  align-self: flex-end;
  margin-top: 1.3rem;
  @media screen and (max-width: 960px) {
    margin-left: 0rem;
    width: 100%;
  }
`;

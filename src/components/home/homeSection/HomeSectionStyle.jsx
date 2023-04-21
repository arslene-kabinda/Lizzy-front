import styled from "styled-components";
import img from "../../../../public/assets/barber.jpeg";

export const HomeContainer = styled.div`
  background-image: linear-gradient(
      90.16deg,
      rgba(0, 0, 0, 0.91) 0.23%,
      rgba(0, 0, 0, 0.76) 46.14%,
      rgba(0, 0, 0, 0) 94.02%
    ),
    url(${img.src});

  width: 100%;
  height: 100vh;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const HomeContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin-left: 8rem;
  p {
    color: #fff;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    padding-bottom: 1rem;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem;
    margin-left: 0rem;
    justify-content: center;
    align-items: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-family: 'Poppins', sans-serif;
    }
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 800;
  @media screen and (max-width: 960px) {
    font-size: 2rem;
    align-items: center;
    text-align: center;
  }
`;

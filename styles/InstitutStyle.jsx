import styled from "styled-components";
import img from "../public/assets/_33.jpeg";

export const Container = styled.div`
  padding-bottom: 3rem;
`;
export const ContainerImg = styled.div`
  background-image: linear-gradient(
      182.2deg,
      rgba(0, 0, 0, 0.761) 67.11%,
      rgba(0, 0, 0, 0.734) 98.15%
    ),
    url(${img.src});
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    height: 40vh;
  }
`;
export const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
`;
export const ButtonLink = styled.a`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
`;

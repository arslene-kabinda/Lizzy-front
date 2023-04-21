import styled from "styled-components";
import img from "../../../../public/assets/backlayer.jpeg";
export const LayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.56) 0%,
      rgba(0, 0, 0, 0.71) 50.55%,
      rgba(0, 0, 0, 0.52) 100%
    ),
    url(${img.src});

  width: 100%;
  padding: 2rem 7rem;
  height: 60vh;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background-size: cover !important;
  p {
    color: #fff;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem;
    p {
      font-size: 1.5rem;
    }
  }
`;

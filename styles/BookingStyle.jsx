import { orange } from "@material-ui/core/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 8rem;
  background: rgba(255, 255, 255, 0.5);
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 1rem 2rem;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 765px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const FirstContent = styled.div`
  @media screen and (max-width: 765px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 1.2rem;
  background-color: #f8f8f8;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 765px) {
    width: 100%;
  }
`;

export const ContainerImage = styled.div`
  background: linear-gradient(
      0deg,
      rgba(3, 7, 9, 0.276) 100%,
      rgba(6, 10, 11, 0.308) 100%,
      rgba(0, 0, 0, 0.2248249641653537) 100%
    ),
    url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  width: 100%;
  margin-top: 1rem;
  border-radius: 5px;
  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px;
    /* border-top-left-radius: 5px; */
  }
  @media screen and (max-width: 765px) {
    width: 100%;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;

  padding-bottom: 1rem;
  justify-content: space-between;
  @media screen and (max-width: 799px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const ServicesContainer = styled.div`
  width: 49%;
  span {
    font-weight: bold;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
  }
  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

export const CalendarContainer = styled.div`
  width: 49%;
  @media screen and (max-width: 799px) {
    width: 100%;
  }
`;

export const ServiceBigContainer = styled.div``;

export const ServiceContainer = styled.div`
  width: 100%;
  border: 1px solid #97979749;
  display: flex;
  justify-content: space-between;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background: #ffffff;
  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.15)); */

  margin-top: 1rem;
`;

export const Service = styled.div`
  h4 {
    font-size: 0.92rem;
    font-weight: 600;
  }
  p {
    font-size: 0.75rem;
    color: #979797;
  }
`;

export const Option = styled.div`
  display: flex;
  justify-content: space-between;

  width: 25%;
`;

export const Btn = styled.div`
  padding-top: 0.9rem;
`;
export const Map = styled.div`
  width: 100%;
  margin-top: 4rem;
  img {
    width: 100%;
  }
`;
export const ReservationContainer= styled.div`
padding: 2rem 8rem;
margin-top:5rem;
width:100%;
.reservation {
  width: 60%;
  border: 1px solid #97979749;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  background: #ffffff;
}
`
import styled from "styled-components";
export const ContainerDetail = styled.div``;

export const ContainerImg = styled.div``;

export const SecondContent = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 8rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
  }
`;
export const Container = styled.div`
  width: 65%;

  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const CardContainer1 = styled.div`
  width: 100%;
  margin-right: 0.8rem;
  background: #ffffff;
  
  margin-bottom: 1.3rem;
`;
export const Container1 = styled.div`
  display: flex;
width:100%
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 1rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CardContent = styled.div`
  width: 40%;

  border-top-left-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 5px;
    }
  }
`;
export const Card = styled.div`
  margin-bottom: 1rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.153); */
  border-radius: 5px;
`;
export const CardContent2 = styled.div`
  margin-left: 0.2rem;

  border-bottom: 1px solid rgba(196, 196, 196, 0.39);
  width: 60%;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0rem;
  }
`;
export const Heading = styled.h2`
  font-size: 1em;
  padding-left: 0.7rem;
`;
export const IconContainer = styled.div`
  display: flex;

  align-items: center;
  padding-left: 0.7rem;
  color: rgba(0, 0, 0, 0.55);
  font-style: normal;
  font-family: "Poppins", sans-serif;
  address {
    padding-left: 0.8rem;
    font-style: normal;
  }
`;

export const Rating = styled.div`
  display: flex;

  align-items: center;
  padding-left: 0.9rem;
  p {
    font-family: "Poppins", sans-serif;
    color: rgba(0, 0, 0, 0.55);
  }
`;
export const ContainerBtn = styled.div`
  justify-content: flex-end;
  display: flex;
  padding-right: 1rem;
  @media screen and (max-width: 960px) {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }
`;
export const Container2 = styled.div`
  @media screen and (max-width: 960px) {
  }
`;
export const CardContainer2 = styled.div`
  width: 35%;
  margin-left: 0.8rem;
  img {
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-left: 0rem;
  }
`;

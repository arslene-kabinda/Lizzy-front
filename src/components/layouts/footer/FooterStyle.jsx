import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 1rem 8rem;
  background-color: #000000;
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 30%;
  color: #fff;
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
  }
  p {
    font-size: 1rem;
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 1.9rem;
  color: #fff;
  font-weight: bold;
`;
export const ContainerIcons = styled.div`
  a {
    padding-right: 0.5rem;
    font-size: 2rem;
    color: #fff;
    &:hover {
      color: #45ad7e;
    }
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  a {
    margin-bottom: 1rem;
    &:hover {
      color: #45ad7e;
    }
  }
`;

export const Border = styled.div`
  border-bottom: 1px solid rgba(247, 247, 247, 0.46);
  margin-top: 4.5rem;
  width: 50%;
  align-self: center;
  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    width: 100%;
  }
`;
export const CopyrightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    padding: 0.3rem;
  }
`;

import styled from "styled-components";

export const ContainerForm = styled.div`
  border: 1px solid #97979749;

  box-sizing: border-box;
  background-color: #ffffff;
  padding: 1rem;
  @media only screen and (max-width: 765px) {
    margin-top: 2px;
    width: 100%;
  }
`;
export const Title = styled.div`
  padding: 0px 50px;
  text-align: center;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 765px) {
    font-size: 0.6rem;
    padding: 0px;
    align-items: center;
    height: 50px;
    justify-content: space-between;
    padding: 0px 40px;
  }
`;
export const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
    margin: 0;
  padding-top: 2rem;
  h5 {
    font-size: 1rem;
    margin-right: 1.2rem;
  }
  @media only screen and (max-width: 765px) {
    padding-left: 0;
    padding-bottom: 0px;
  }
`;

export const TimeContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  h5 {
    font-size: 1rem;
    margin-right: 1.2rem;
  }
  @media only screen and (max-width: 799px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  button {
    background-color: #45ad7e;
    border: 0;
    padding: 0.6rem 2rem;
    font-size: 1rem;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 5px;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 765px) {
    button {
      font-size: 1rem;
      margin: 2px;
    }
  }
`;

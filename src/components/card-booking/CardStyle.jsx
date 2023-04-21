import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 80%;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  margin: 0.8rem;
  border-radius: 10px;
  margin-left:0;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin: 1rem 0.2rem;
  }
  .content{
    display:flex;
  }
  .info{
    margin-left:1rem;
  }
`;

export const ContainerImage = styled.div`
  width: 20%;
  height: 180px;
  border-raduis:20rem;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 250px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h5 {
    font-family: "Poppins", sans-serif;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

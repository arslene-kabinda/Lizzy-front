import styled from "styled-components";
export const Container = styled.div`
 
  dispaly: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    margin-left:.8rem;

`;
export const Ctnenfant = styled.div`


border:1px solid red;
  
  p {
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    padding-top: 3rem;
    font-family: "Poppins", sans-serif;
  }
}
@media screen and (max-width: 960px) {
  width: 100%;
  height: 100%;

}
`

export const ContainerImg = styled.div`
  width: 100%;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    border-bottom-right-radius:0;
    border-bottom-left-radius:0;
  }
`;

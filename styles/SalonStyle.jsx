import styled from "styled-components";
import img from "../public/assets/dresshair.jpeg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerImage = styled.div`
  background-image: linear-gradient(
      182.2deg,
      rgba(0, 0, 0, 0.672) 67.11%,
      rgba(0, 0, 0, 0.624) 98.15%
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 8rem;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
  }
`;
export const Items = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 3px;
  margin-top: 2rem;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Tag = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.55);
  width: 40%;
  height: auto;
  padding-left: 1rem;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 960px) {
    height: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.55);
    width: 100%;
  }
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  width: 60%;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const ContainerContent2 = styled.div`
  padding: 2rem 8rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    padding: 1rem 2rem;
  }
`;
export const Content2 = styled.div`
  width: 50%;
  padding-left: 10px;
  padding-right: 2.3rem;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Flex1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
export const BtnLink = styled.a`
  align-self: center;
  color: #000;
`;

export const Links = styled.a`
  width: 25%;
  height: 300px;
  margin-bottom:1.7rem;
  :hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 210px;
  }
`;

export const SalonContainer = styled.div`
padding: 2rem 8rem;
margin-top:5rem;
width:100%;

.containerImage{
  width: 50%;
  border-radius:5px;
  img{
    width:100%;
    height:100%
    border-radius:5px;



  }

}
.containerImage_text{
  display:flex;
  flex-direction:row;
  width: 100%;

}
.description{
  width: 50%;
  margin-left:1.5rem;

}

.containerService{
  
  display:flex;
  flex-direction:row;
  width:70%;
  border:1px solid black;
  padding:1rem;
  border-radius:5px;
  margin-bottom:2rem;

}
.contentService{
  width:60%;
}
.price{
  width:40%;
  margin-left:1rem
}
h3{
  margin-top:3rem;
  margin-bottom:2rem
}
h4{
  margin-top:3rem;
  margin-bottom:2rem
}
.btn{
  margin-top:5rem
}
input{
  padding: .3rem;
  margin-top: 10px;
  margin-bottom: 10px;

}
textarea{
  padding: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
button{
  margin-top:10px;
  margin-bottom:10px;
  padding: 0.3rem 1.5rem;
  margin-right: 1rem;
  background-color:#fff;
  border: 1px solid #45ad7e;

}

form{
  border:1px solid #000;
  width:25%;
  padding: 1rem;
}
select{
  padding:0.2rem;
  padding-left:3rem;
  margin-bottom: 10px;
}
`

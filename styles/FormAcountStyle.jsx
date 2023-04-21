import styled from "styled-components";

import img from "../public/assets/bacground.jpeg";


export const ContainerForm = styled.div`
background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 29.24%,
    rgba(0, 0, 0, 0.602) 64.62%,
    rgba(0, 0, 0, 0) 100%
  ),
  url(${img.src});
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 100%;
height: auto;
background-repeat: no-repeat !important;
background-position: center !important;
background-size: cover !important;
display: flex;
justify-content: center;
align-items: center;
`;
export const ContainerFormChild =styled.div`
border:1px solid yellow;
`

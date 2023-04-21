import React from "react";
import dynamic from 'next/dynamic'

import Styled from "styled-components";
// import img from "../public/assets/bacground.jpeg";


// console.dir({sr})

export const ContainerForm = Styled.div`
  background-image: linear-gradient(
      152.71deg,
      rgba(0, 0, 0, 0.68) 79.91%,
      rgba(0, 0, 0, 0.516333) 138.05%,
      rgba(0, 0, 0, 0.474167) 150.34%,
      rgba(0, 0, 0, 0.064) 150.34%,
      rgba(0, 0, 0, 0.68) 150.34%
    ),
      );
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
    // url(${img.src}

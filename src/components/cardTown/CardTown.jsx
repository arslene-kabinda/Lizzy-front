/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import React from "react";
import { Container, ContainerImg, Ctnenfant } from "./CardTownStyle";
import Link from "next/link";

const CardTown = ({ imagePreview, alt, cardDescription, id }) => {
  return (
  
    <Container>
      <ContainerImg> <img src={imagePreview} alt={alt} /></ContainerImg>
      <div>   <p>{cardDescription}</p></div>
      <div>
        <Button
        sx={{
           backgroundColor: "#fff",
           border:1,
           borderColor:'#45ad7e',
             color: "#000",
            paddingLeft: "1.2rem",
            paddingRight: "1.2rem",
            marginBottom: "1rem",
           fontWeight: "500",
            ":hover": {
              backgroundColor: "#45ad7e",
               fontWeight: "600",
               color:"#fff",
           },
        }}
      >
       Découvrir
        </Button>
    </div>


    </Container>
  );
};

export default CardTown;

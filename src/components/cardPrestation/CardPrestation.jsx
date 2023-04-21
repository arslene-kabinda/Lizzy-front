/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardContainer } from "../home/prestation/prestationStyle";
import { CardImage } from "./CardPrestionStyle";

const CardPrestation = ({ imagePreviews, alt }) => {
  return (
    <CardImage>
      <img src={imagePreviews} alt={alt} />
    </CardImage>
  );
};

export default CardPrestation;

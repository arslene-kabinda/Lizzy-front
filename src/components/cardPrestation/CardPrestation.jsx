/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardContainer } from "../home/prestation/prestationStyle";
import { CardImage } from "./CardPrestionStyle";
import Image from "next/image";

const CardPrestation = ({ imagePreviews, alt }) => {
  return (
    <CardImage>
      <Image src={imagePreviews} alt={alt} />
    </CardImage>
  );
};

export default CardPrestation;

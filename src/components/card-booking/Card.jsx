/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import HalfRating from "../rating/Rating";
import { CardContainer, CardContent, ContainerCard, ContainerImage } from "./CardStyle";
import imgPreview from "../../../public/assets/user.png"
const CardBooking = ({ imagePreviews, alt, userName, serviceName, time  }) => {
 
  return (
    <ContainerCard>
      <div className="content">
      <ContainerImage>
        <img src={imgPreview.src} alt={alt} />
      </ContainerImage>
      
      
        <div className="info">
        <h5>{userName}</h5>
          <p>{serviceName}</p>
          <p>{time}</p>
          
        </div>
      </div>
    </ContainerCard>
  );
};

export default CardBooking;

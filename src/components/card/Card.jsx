/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import HalfRating from "../../components/rating/Rating";
import { CardContainer, CardContent, ContainerImage } from "./CardStyle";

const Card = ({ imagePreviews, alt, cardTitle, rating }) => {
  const [value, setValue] = useState(rating);
  return (
    <CardContainer>
      <ContainerImage>
        <img src={imagePreviews} alt={alt} />
      </ContainerImage>
      <CardContent>
        <h5>{cardTitle}</h5>
        <div>
          <HalfRating value={value} />
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

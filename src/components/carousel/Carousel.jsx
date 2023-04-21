/* eslint-disable react/jsx-key */
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import CardPrestation from "../cardPrestation/CardPrestation";
import imgPrestation from "../../../public/assets/afro courts.jpeg";
import imgPrestation2 from "../../../public/assets/riri.jpeg";
import imgPrestation3 from "../../../public/assets/braid.jpeg";
import imgPrestation4 from "../../../public/assets/suks.jpeg";
import imgPrestation5 from "../../../public/assets/afro.jpeg";
import imgPrestation6 from "../../../public/assets/wom.jpeg";
import imgPrestation7 from "../../../public/assets/coupe-homme-wave-2-min.jpg";
import imgPrestation8 from "../../../public/assets/sukis.jpg";
import imgPrestation9 from "../../../public/assets/coiffure.jpeg";

import { Container } from "./CarouselStyle";

const responsive = {
  0: {
    items: 1,
  },
  512: {
    items: 2,
  },
  1024: {
    items: 4,
  },
};

const items = [
  <CardPrestation
    imagePreviews={imgPrestation3}
    alt="image preview "
    data-value="1"
  />,
  <CardPrestation
    imagePreviews={imgPrestation6}
    alt="image previews"
    data-value="2"
  />,
  <CardPrestation
    imagePreviews={imgPrestation9}
    alt="image previews"
    data-value="3"
  />,
  <CardPrestation
    imagePreviews={imgPrestation8}
    alt="image preview "
    data-value="4"
  />,
  <CardPrestation
    imagePreviews={imgPrestation5}
    alt="image previews"
    data-value="5"
  />,
  <CardPrestation
    imagePreviews={imgPrestation}
    alt="image previews"
    data-value="6"
  />,
  <CardPrestation
    imagePreviews={imgPrestation2}
    alt="image previews"
    data-value="7"
  />,
  <CardPrestation
    imagePreviews={imgPrestation4}
    alt="image previews"
    data-value="8"
  />,
  <CardPrestation
    imagePreviews={imgPrestation7}
    alt="image previews"
    data-value="9"
  />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      items={items}
      responsive={responsive}
      autoPlay="true"
      autoPlayInterval="4000"
    />
  );
};
export default Carousel;

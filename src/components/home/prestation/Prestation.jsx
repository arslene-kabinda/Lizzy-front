/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomButton from "../../button/Button";
import {
  CardContainer,
  PrestationContainer,
  PrestationContent,
  PrestationContent2,
  PrestationContent2Container,
  PrestationImage,
  PrestationImage2,
  PrestationItem,
  PrestationItem2,
} from "./prestationStyle";
import img from "../../../../public/assets/salon.jpeg";
import salonbg from "../../../../public/assets/salonbg.jpeg";
import prestation from "../../../../public/assets/prestation.jpeg";

import Card from "../../card/Card";
import CardPrestation from "../../cardPrestation/CardPrestation";
import Carousel from "../../carousel/Carousel";
import { Link } from "@mui/material";
const Prestation = () => {
  return (
    <PrestationContainer>
      <PrestationContent>
        <PrestationItem>
          <p>
            Vous êtes un professionnel de la bauté ? Découvrez la prise de
            rendez-vous en ligne.
          </p>
          <Link href="/formulaire_d'inscription">
            <a>
              <CustomButton>Ajoutez votre établissement </CustomButton>
            </a>
          </Link>
        </PrestationItem>
        <PrestationImage>
          <img src={salonbg.src} alt='image preview' />
        </PrestationImage>
      </PrestationContent>
      <PrestationContent2Container>
        <PrestationContent2>
          <PrestationImage2>
            <img src={prestation.src} alt='image preview' />
          </PrestationImage2>
          <PrestationItem2>
            <p>
              Trouver les prestations de nos professionnels qui pourront vous
              inspiez selon vos préferences.
            </p>
            <Link href='/salons_de_coiffure'>
              <a>
                <CustomButton>Faites votre reservation</CustomButton>
              </a>
            </Link>
          </PrestationItem2>
        </PrestationContent2>
        <CardContainer>
          <Carousel />
        </CardContainer>
      </PrestationContent2Container>
    </PrestationContainer>
  );
};

export default Prestation;

import React from "react";
import CustomButton from "../../button/Button";
import { HomeContainer, HomeContent, Title } from "./HomeSectionStyle";
import { Link } from "@mui/material";

const HomeSection = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <Title>Trouvez votre coiffeur, reservez votre coupe</Title>
        <p>
          Une plateforme qui met à votre disposition les salons de coiffure de
          Kinshasa.
        </p>
        <Link href="/salons_de_coiffure">
          <a>
            <CustomButton>Faites votre reservation</CustomButton>
          </a>
        </Link>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeSection;

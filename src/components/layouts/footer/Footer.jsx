import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Border,
  Container,
  ContainerContent,
  ContainerIcons,
  Content,
  CopyrightContainer,
  Links,
  Title,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Container>
      <Title>LIZZY</Title>

      <ContainerContent>
        <Content>
          <h3>À PROPOS DE LIZZY</h3>
          <Links>
            <Link href="/">
              <a>Ajoutez votre établissement</a>
            </Link>

            <Link href="/">
              <a>Faites votre reservation</a>
            </Link>
          </Links>
        </Content>
        <Content>
          <h3>TROUVEZ VOS PRESTATIONS</h3>
          <Links>
            <Link href="/salons_de_coiffure">
              <a>Salons de coiffure</a>
            </Link>

            <Link href="/instituts_de_beauté">
              <a>Instituts de beauté</a>
            </Link>
          </Links>
        </Content>
        <Content>
          <h3>RESTONS CONNECTER</h3>
          <ContainerIcons>
            <Link href="/">
              <a>
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </Link>
            <Link href="https://web.facebook.com/arslene.kabs">
              <a>
                <Icon icon="bx:bxl-facebook" />
              </a>
            </Link>

            <Link href="mailto: arskabinda@gmail.com">
              <a>
                <Icon icon="clarity:email-line" />
              </a>
            </Link>
          </ContainerIcons>
        </Content>
      </ContainerContent>

      <Border></Border>
      <CopyrightContainer>
        <p>LIZZY</p>
        <Icon
          icon="ant-design:copyright-circle-outlined"
          color="white"
          width="16"
          height="16"
        />
        <p>2021</p>
      </CopyrightContainer>
    </Container>
  );
};
export default Footer;

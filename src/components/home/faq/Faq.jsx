import React from "react";
// import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Item1, Item2 } from "./FaqStyle";

// import { borderBottom, fontSize } from "@mui/system";
import Link from "next/link";

const Faq = () => {
  return (
    <Container>
      <Item1>
        <p>Les questions les plus fréquentes</p>
      </Item1>
      <Item2>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ paddingLeft: "0px", paddingRight: "7px" }}
          >
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
              Qu&apos;est-ce que Lizzy ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lizzy est une plateforme de prise de rendez-vous en ligne pour un
              massage, une coupe de cheveux et plein d&apos;autres services ; qui
              change votre façon de vous organiser. Cette plateforme a été créé
              pour vous évitez de perdre du temps en vous permettant de prendre
              un rendez-vous en ligne dans l&apos;un des instituts de beauté ou
              salons de coiffure figurant sur cette dernière.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ paddingLeft: "0px", paddingRight: "7px" }}
          >
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
              Comment prendre rendez-vous sur Lizzy ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              - Sur la barre de recherche inscrivez le nom de l&apos;établissement de
              votre choix -Cliquez dessus et ainsi choisissez la prestation,
              puis l&apos;heure et la date qui vous conviennent le mieux -Renseignz
              vos coordonnées et adresse mail -puis soumetter la demande
              rendez-vous -Un code de verification vous sera envoyé par sms ou
              email, enregistrez le et soumettez encore le formulaire -Confirmez
              votre rendez-vous -Un sms ou un email de confirmation vous serons
              envoyés pour confirmé votre rendez-vous
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ paddingLeft: "0px", paddingRight: "7px" }}
          >
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
              Comment faire apparaitre mon salon ou institut sur Lizzy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Il vous suffit de nous contacter par télephone ou nous laisser un
              mail sur notre adresse indiqué ci-dessous : 
              <br></br>
              <Link href="mailto: arskabinda@gmail.com">
                <a>arskabinda@gmail.com</a>
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ paddingLeft: "0px", paddingRight: "7px" }}
          >
            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400" }}>
              Comment gérer mes rendez-vous sur Lizzy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            sx={{ paddingLeft: "0px", paddingRight: "7px" }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                textAlign: "start",
              }}
            >
              Comment puis-je deplacer mes rendez-vous sur Lizzy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontFamily: "Poppins" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Item2>
    </Container>
  );
};

export default Faq;

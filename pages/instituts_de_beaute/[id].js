/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import {
  ContainerImage,
  Content,
  Item,
  Items,
  Tag,
  Title,
} from "../../styles/SalonStyle";
import {
  CardContainer1,
  CardContainer2,
  CardContent,
  CardContent2,
  Container,
  Container1,
  Container2,
  ContainerBtn,
  ContainerDetail,
  ContainerImg,
  IconContainer,
  Rating,
  SecondContent,
  Heading,
  Card,
} from "../../styles/DetailStyle";
import { Formik, Form, Field, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";
import img from "../../public/assets/2.jpeg"; //
import HalfRating from "../../src/components/rating/Rating";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import map from "../../public/assets/map.jpeg";
import { useRouter } from "next/router";

import { Link } from "@mui/material";

const DetailTownship = ({ posts, township }) => {
  const Schema = Yup.object().shape({
    title: Yup.string().required("le nom est requis"),
  });
  const formik = useFormik({
    initialValues: {
      title: "Où(adresse, commune )",
    },
    validationSchema: Schema,
    onSubmit: () => {
      console.log("en soumisssion");
    },
  });
  const { errors, touched, handleSubmit, getFieldProps, values, handleChange } =
    formik;
  const [expandeText, setExpandeText] = useState(false);
  // const [value, setValue] = useState(rating);

  const expandedText = () => {
    if (expandeText === true) {
      setExpandeText(false);
    } else {
      setExpandeText(true);
    }
  };
  const router = useRouter();
  const id = router.query;
  return (
    <ContainerDetail>
      <ContainerImage>
        <Title> INSTITUTS DE BEAUTÉ / {township.township.name}</Title>
      </ContainerImage>
      <Content>
        <div>
          <p>
            Instituts de beauté à {township.township.name} : faites votre
            réservation en ligne
          </p>
        </div>
        <Items>
          <Tag>
            <p>Salons de coiffure</p>
          </Tag>
          <Item>
            <Icon
              icon='clarity:map-marker-outline-badged'
              width='32'
              height='32'
              color='rgba(0, 0, 0, 0.55)'
            />
            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                  <TextField
                    id='standard-basic'
                    {...getFieldProps("title")}
                    value={values.title}
                    label=''
                    error={Boolean(touched.title && errors.title)}
                    helperText={touched.title && errors.title}
                    onChange={handleChange}
                    variant='standard'
                    InputProps={{ disableUnderline: true }}
                    sx={{
                      paddingRight: "9.5rem",
                      paddingTop: ".8rem",
                      fontFamily: "Poppins",
                    }}
                  />
                  <Button
                    type='submit'
                    sx={{
                      backgroundColor: "#45ad7e",
                      color: "#fff",
                      borderRadius: "1px",
                      height: "3.5rem",
                      fontFamily: "Poppins",
                      ":hover": {
                        backgroundColor: "#45ad7ec5",
                        color: "#fff",
                      },
                    }}
                  >
                    <Icon icon='ci:search' width='28' height='28' />
                  </Button>
                </Stack>
              </Form>
            </FormikProvider>
          </Item>
        </Items>
      </Content>
      <SecondContent>
        <Container>
          <CardContainer1>
            {posts.beautySalons.map((item) => {
              // console.log("arsy", posts.beautySalons);
              return (
                <Card key={item._id}>
                  <Container1>
                    <CardContent>
                      <img src={img.src} alt='image preview' />
                    </CardContent>

                    <CardContent2>
                      <Heading>{item.name}</Heading>
                      <IconContainer>
                        <Icon
                          icon='clarity:map-marker-outline-badged'
                          width='22'
                          height='22'
                          color='rgba(0, 0, 0, 0.55)'
                        />
                        <address>
                          {item.adress[0].number},{item.adress[0].street}
                        </address>
                      </IconContainer>
                      <Rating>
                        <HalfRating value={item.ratingsAverage} />
                        <p>7 Avis</p>
                      </Rating>
                      <ContainerBtn>
                        <Link
                          href={`/${item._id}?id=${item._id}&&name=${item.name}`}
                          key={item._id}
                        >
                          <a>
                            <Button
                              sx={{
                                color: "#fff",
                                backgroundColor: "#45ad7e",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
                                fontFamily: "Poppins",
                                textTransform: "none",
                                alignSelf: "flex-end",
                                width: "11rem",
                                ":hover": {
                                  color: "#45ad7e",
                                  fontWeight: "700",
                                  border: "1px solid #45ad7e",
                                  backgroundColor: "transparent",
                                },
                              }}
                            >
                              Prendre RDV
                            </Button>
                          </a>
                        </Link>
                      </ContainerBtn>
                    </CardContent2>
                  </Container1>
                  <Container2>
                    <Accordion onClick={() => expandedText()}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <div>
                          <Typography sx={{ fontFamily: "Poppins" }}>
                            {expandeText ? `moins` : `Plus d'infos`}
                          </Typography>
                          {expandeText ? (
                            <div
                              style={{
                                display: "flex",
                              }}
                            >
                              <span> 7.0</span> <HalfRating />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse malesuada lacus ex, sit amet blandit
                          leo lobortis eget. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed amet, ut volutpat
                          magna nulla. In nunc sapien, gravida sed et lobortis.
                          Id magna dignissim vel tincidunt tincidunt purus, ac
                          arcu, nunc. Habitasse massa nulla iaculis donec
                          viverra nulla quam tristique. Nibh dui magna tellus,
                          pellentesque vulputate ultrices quisque tempor.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </Container2>
                </Card>
              );
            })}
          </CardContainer1>
        </Container>
        <CardContainer2>
          <img src={map.src} alt='image preview' />
        </CardContainer2>
      </SecondContent>
    </ContainerDetail>
  );
};

export default DetailTownship;

export async function getServerSideProps(context) {
  // console.log(context.query);
  const res = await fetch(
    `http://127.0.0.1:4001/api/beautySalons?township=${context.query.id}`
  );
  const response = await fetch(
    `http://127.0.0.1:4001/api/township/${context.query.id}`
  );
  // const resp = await fetch(
  //   `http://127.0.0.1:4001/api/beautySalons/${context.query.id}`
  // );
  console.log(context.query.id);

  const township = await response.json();
  // console.log("aaaa", township);
  // const beautySalon = await resp.json();
  // console.log("marduk", beautySalon);

  const posts = await res.json();
  // console.log("arsy", posts);

  return {
    props: { posts, township },
  };
}

// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://127.0.0.1:4001/api/township${params.id}`);
//   const posts = await res.json();
//   console.log("arsy", params.id);

//   return {
//     props: {
//       posts,
//     },

//     revalidate: 10,
//   };
// }

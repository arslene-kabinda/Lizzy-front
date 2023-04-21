/* eslint-disable @next/next/link-passhref */
import React from "react";
import {
  BtnLink,
  Container,
  ContainerContent2,
  ContainerImage,
  Content,
  Content2,
  Flex,
  Flex1,
  Item,
  Items,
  Links,
  Tag,
  Title,
} from "../../styles/SalonStyle";
import { Formik, Form, Field, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Icon } from "@iconify/react";
import SearchIcon from "@mui/icons-material/Search";
import img from "../../public/assets/dresshair.jpeg";
import Link from "next/link";
import { Post } from "../../src/components/Post";
import CardTown from "../../src/components/cardTown/CardTown";
const Salons = ({ posts }) => {
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
  return (
    <>
      <Container>
        <ContainerImage>
          <Title>SALONS DE COIFFURE </Title>
        </ContainerImage>
        <Content>
          <p>
            Faites votre réservation en ligne et planifier un rendez-vous avec
            un institut de beauté
          </p>
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
        <ContainerContent2>
          <Flex>
            <Content2>
              <p>
                Comme indiqué ci-dessus ,un salon de coiffure est l&aposendroit
                idéal où les hommes, comme les femmens vont pour faire
                l&apos;entretien de leurs cheveux et tant d&apos;autres services
                tels que : les coupes, le brushing, la mise en pils, les mèches
                , les chignons, les poses de postiches etc... et ainsi dans nos
                différents salons le coiffeur ou coiffeuse conseil le client
                pour une coupe en tenant comptes de ses envies et de sa
                personnalité.
              </p>
            </Content2>

            {posts?.townships &&
              posts?.townships.length &&
              posts?.townships?.slice(0, 10).map((item) => {
                return (
                  <Link
                    href={`/salons_de_coiffure/commune/${item._id}?name=${item.name}`}
                    key={item._id}
                  >
                    <Links>
                      <CardTown
                        key={item._id}
                        cardDescription={item.name}
                        imagePreview={item.coverPicture}
                      />
                    </Links>
                  </Link>
                );
              })}
          </Flex>
        </ContainerContent2>
      </Container>
      <br />

      <br />
    </>
  );
};

export default Salons;

export async function getStaticProps() {
  const res = await fetch(`https://lizzy-app.onrender.com/api/township`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },

    revalidate: 10,
  };
}

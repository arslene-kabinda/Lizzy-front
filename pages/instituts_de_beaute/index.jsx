/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from "react";
import {
  ButtonLink,
  Container,
  ContainerImg,
  Title,
} from "../../styles/InstitutStyle";
import { Formik, Form, Field, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  ContainerContent2,
  Content,
  Content2,
  Flex,
  Item,
  Items,
  Links,
  Tag,
} from "../../styles/SalonStyle";
import { Icon } from "@iconify/react";
import CardTown from "../../src/components/cardTown/CardTown";
import Link from "next/link";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import BasicPagination from "../../src/components/pagination/Pagination";

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  let res = await fetch(
    `http://127.0.0.1:4001/api/township?page=${page}&limit=10`
  );

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Instituts = ({ posts }) => {
  const router = useRouter();
  const [townships, setTownships] = useState();
  const [state, setState] = useState(
    router.query.name ? router.query.name : "Où(adresse, commune )"
  );
  const [loading, setLoading] = useState(false);
  const [numberOfPage, setNumberOfPage] = useState(posts.page);
  const Schema = Yup.object().shape({
    title: Yup.string().required("le nom est requis"),
  });
  const formik = useFormik({
    initialValues: {
      title: state,
    },
    validationSchema: Schema,
    onSubmit: ({ title }) => {
      setLoading(true);
      fetch(`http://127.0.0.1:4001/api/township?name=${title}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          router.replace({
            pathname: "http://localhost:3002/instituts_de_beaute",
            query: { name: title },
          });
          setTownships(data.townships);
        });
    },
  });

  useEffect(() => {
    if (router.query.name) {
      fetch(`http://127.0.0.1:4001/api/township?name=${router.query.name}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setTownships(data.townships);
        });
    }
    setTownships(posts.townships);
  }, []);

  const { errors, touched, handleSubmit, getFieldProps, values, handleChange } =
    formik;
  return (
    <Container>
      <ContainerImg>
        <Title>INSTITUTS DE BEAUTÉ</Title>
      </ContainerImg>
      <Content>
        <p>
          Faites votre réservation en ligne et planifier un rendez-vous avec un
          institut de beauté
        </p>
        <Items>
          <Tag>
            <p>Instituts de beauté</p>
          </Tag>
          <Item>
            <FormikProvider value={formik}>
              <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  sx={{ width: "100%" }}
                >
                  <TextField
                    {...getFieldProps("title")}
                    value={
                      values.title.charAt(0).toUpperCase() +
                      values.title.slice(1)
                    }
                    label=''
                    id='outlined-error'
                    error={Boolean(touched.title && errors.title)}
                    onChange={handleChange}
                    variant='standard'
                    sx={{
                      padding: "0 .2em",
                      paddingTop: ".8rem",
                      fontFamily: "Poppins",
                      width: "100%",
                      border:
                        touched.title && errors.title
                          ? "1.5px solid red"
                          : "1.5px solid transparent",
                    }}
                    InputProps={{ disableUnderline: true }}
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
                    {loading ? (
                      <CircularProgress color='inherit' />
                    ) : (
                      <Icon icon='ci:search' width='28' height='28' />
                    )}
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
              Comme indiquer ci-dessus , l&aposinstitut de beauté est
              l&aposendroit idéal pour recvoir les différents types de soins :
              soin de visage, beauté des pieds et beuaté de mains , soins
              corporel, voir même l&aposépilation pour ceux qui aspirent à la
              detente et au bien être.
            </p>
          </Content2>

          {townships &&
            townships.length &&
            townships.map((item) => {
              return (
                <Link
                  href={`/instituts_de_beaute/${item._id}?name=${item.name}`}
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
      <BasicPagination
        numberOfPage={posts.page}
        query={`http://localhost:3002/instituts_de_beaute?page=${numberOfPage}&limit=10`}
        setPage={setNumberOfPage}
      />
    </Container>
  );
};

export default Instituts;


import React from "react";
/* eslint-disable react/no-unescaped-entities */
import {
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Checkbox,
  Button,
  Avatar,
  Link,
} from "@mui/material";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockIcon from "@mui/icons-material/Lock";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Icon } from "@iconify/react";
import { ContainerForm } from "../../styles/FormAcountStyle";
import { useRouter } from "next/router";

const Login = ({ handleChange }) => {
  const paperStyle = {
    backgroundColor: "#fff",
    height: " auto",
    width: "30rem",
    margin: "10rem auto",
    padding: "1.9rem",
    fontFamily: "Poppins",
  };
  const avatarStyle = { backgroundColor: "#45ad7e" };
  const { push } = useRouter();
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("entrez une addresse mail valid svp")
      .required("Veuillez entrer votre adresse-email "),
    password: Yup.string().required("Veuillez inserer votre mot de passe  "),
  });
  const onSubmit = async (values) => {
    const response = await fetch("http://127.0.0.1:4001/api/users/login", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (window) {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      push("/");
    }
  };

  return (
    <ContainerForm>
      <Grid item xs={12}>
        <Paper style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}>
              <LockIcon />
            </Avatar>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "1.1rem",
                paddingBottom: "1rem",
              }}
            >
              Avez-vous dejà utilisé Lizzy ?
            </Typography>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => {
              return (
                <Form sx={{ fontFamily: "Poppins" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        label='Adresse-Email'
                        name='email'
                        placeholder='Entrez votre adresse-email'
                        fullWidth
                        required
                        helperText={<ErrorMessage name='email' />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        as={TextField}
                        label='Mot de passe '
                        name='password'
                        placeholder='veuillez entrer votre mot de passe'
                        type='password'
                        fullWidth
                        required
                        helperText={<ErrorMessage name='password' />}
                      />
                    </Grid>
                    <Grid sx={{ marginLeft: "1rem", fontFamily: "Poppins" }}>
                      <Field
                        sx={{ fontFamily: "Poppins" }}
                        as={FormControlLabel}
                        name='remember'
                        control={<Checkbox color='primary' />}
                        label='Se souvenir de moi'
                      />
                    </Grid>

                    <Button
                      type='submit'
                      color='primary'
                      variant='contained'
                      disabled={props.isSubmitting}
                      fullWidth
                      boxShadow={0}
                      sx={{
                        color: "#fff",
                        marginLeft: "1rem",
                        textTransform: "none",
                        fontSize: "1rem",
                        fontFamily: "Poppins",
                        ":hover": {
                          backgroundColor: "transparent",
                          backgroundColor: "transparent",
                          border: " 1px solid #45ad7e",
                          transition: "0.5s ease-in-out",
                          fontFamily: "Poppins",
                          color: "#45ad7e",
                        },
                      }}
                    >
                      {props.isSubmitting ? "Loading" : "Se connecter"}
                    </Button>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
          <Grid item xs={12}>
            <Typography
              sx={{
                textAlign: "center",
                paddingTop: ".7rem",
              }}
            >
              <Link
                href='/ResetPassword'
                sx={{
                  color: "#000",
                  textDecoration: "none",
                  borderBottom: "1px solid black",
                  ":hover": {
                    color: "#45ad7e",
                  },
                }}
              >
                <a>Mot de passe oublié ?</a>
              </Link>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#45ad7e",
              padding: ".5rem",
              borderRadius: "5px",
              fontFamily: "Poppins",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",

                fontFamily: "Poppins",

                color: "#fff",
              }}
            >
              Avez vous dejà un compte
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #45ad7e ",
              marginTop: "1rem",
              padding: ".4rem",
              borderRadius: "5px",
              fontFamily: "Poppins",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",

                fontFamily: "Poppins",
              }}
            >
              <Link
                href='/signup'
                
                sx={{
                  color: "#000",
                  textDecoration: "none",
                  textAlign: "center",

                  ":hover": {
                    color: "#45ad7e",
                  },
                }}
              >
                S'inscrire
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </ContainerForm>
  );
};

export default Login;

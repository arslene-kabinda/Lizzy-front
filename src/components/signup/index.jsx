import React from "react";

/* eslint-disable react/no-unescaped-entities */
import {
  Avatar,
  Button,
  FormHelperText,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@mui/material/Checkbox";

import * as Yup from "yup";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Signup = () => {
  const paperStyle = {
    backgroundColor: "#fff",

    height: " auto",
    margin: "0 auto",
    padding: "1.9rem",
    fontFamily: "Poppins",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#45ad7e" };
  const marginTop = { marginTop: 5 };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    termsAndConditions: false,
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "nom trop court")
      .required("veuillez inserer votre Prenom"),
    lastName: Yup.string()
      .min(3, "nom trop court")
      .required("veuillez inserer votre Nom"),

    email: Yup.string()
      .email("veillez entrer un adresse une adresse valide svp ")
      .required("veillez inserer votre adresse-email"),
    password: Yup.string()
      .min(8, "La longueur minimale du mot de passe doit être de 8")
      .required("veuillez saisir votre mot de passe correect "),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "votre mot de passe ne correspond pas")
      .required("veuillez saisir votre mot de passe "),
    phoneNumber: Yup.number()
      .typeError("veuillez inserer un numéro valide svp")
      .required("veuillez inserer votre numéro de télephone"),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  return (
    <Grid item xs={12} align="center">
      <Paper style={paperStyle}>
        <Grid item xs={12}>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>S'inscrire</h2>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "1.1rem",
              paddingBottom: "1rem",
            }}
          >
            Nouveau sur Lizzy ?
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => {
            return (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      label="Prenom"
                      name="firstName"
                      placeholder="Entrez votre prenom"
                      fullWidth
                      required
                      helperText={<ErrorMessage name="firstName" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      label="Nom"
                      name="lastName"
                      placeholder="Entrez votre nom"
                      fullWidth
                      required
                      helperText={<ErrorMessage name="name" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      label="Numéro de téléphone"
                      name=" phoneNumber"
                      placeholder="Entrez votre numéro de téléphone"
                      fullWidth
                      required
                      helperText={<ErrorMessage name=" phoneNumber" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      label="Adresse Email"
                      name="email"
                      placeholder="Entrez votre numéro de téléphone"
                      fullWidth
                      required
                      helperText={<ErrorMessage name=" phoneNumber" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="password"
                      type="password"
                      label="Mot de passe"
                      placeholder="Entrez votre mot de passe"
                      fullWidth
                      required
                      helperText={<ErrorMessage name="password" />}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      fullWidth
                      name="confirmPassword"
                      type="password"
                      label="Confirmer votre mot de passe "
                      placeholder="Confirmer votre mot de passe"
                      helperText={<ErrorMessage name="confirmPassword" />}
                    />
                  </Grid>
                  <Grid sx={{ marginLeft: "1rem", fontFamily: "Poppins" }}>
                    <Field
                      sx={{ fontFamily: "Poppins" }}
                      as={FormControlLabel}
                      name="termsAndConditions"
                      control={<Checkbox color="primary" />}
                      label="J'accepte les termes et conditions."
                    />
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={props.isSubmitting}
                    color="primary"
                    fullWidth
                    boxShadow={0}
                    sx={{
                      color: "#fff",

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
                    {props.isSubmitting ? "Loading" : "S'inscrire"}
                  </Button>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Signup;

import React from "react";
import * as Yup from "yup";
import {
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { ResetFormContainer } from "../../styles/ResetFormStyle";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ResetPassword = () => {
  const paperStyle = {
    backgroundColor: "#fff",
    height: " auto",
    margin: "0 auto",
    padding: "2.5rem",
    fontFamily: "Poppins",
  };
  const initialValue = {
    email: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("entrez une addresse mail valid svp")
      .required("Veuillez entrer votre adresse-email "),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <Grid item xs={12}>
      <ResetFormContainer>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "1rem",
                paddingBottom: "1rem",
              }}
            >
              Récupération de mot de passe
            </Typography>
          </Grid>
          <Formik
            initialValue={initialValue}
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
                        label="Adresse-Email"
                        name="email"
                        placeholder="Entrez votre adresse-email"
                        fullWidth
                        required
                        helperText={<ErrorMessage name="email" />}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                        disabled={props.isSubmitting}
                        fullWidth
                        sx={{
                          color: "#fff",
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
                        {props.isSubmitting
                          ? "Loading"
                          : "Rénitialiser le mot de passe "}
                      </Button>
                    </Grid>
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
                href="/mon_compte"
                sx={{
                  color: "#000",
                  textDecoration: "none",
                  borderBottom: "1px solid black",
                  ":hover": {
                    color: "#45ad7e",
                  },
                }}
              >
                Retour à la connexion
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </ResetFormContainer>
    </Grid>
  );
};

export default ResetPassword;

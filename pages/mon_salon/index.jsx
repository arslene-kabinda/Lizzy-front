import React, { useEffect } from "react";
import { Formik, Form } from "formik";

import { Grid, Typography } from "@mui/material";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core";
import TextField from "../../src/components/formUI/textField";
import Select from "../../src/components/formUI/select";
import establishment from "../../src/components/data/Establishment.json";
import Button from "../../src/components/formUI/button";
import { ContainerForm } from "../../styles/FormAcountStyle";
import { useRouter } from "next/router";

// const ContainerForm = dynamic(import('../../styles/FormStyle'), { ssr: false })

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    backgroundColor: "#fff",
    width: "566px",
    height: " auto",
    marginTop: "6rem",
    marginBottom: "6rem",
    padding: "2.5rem",
    borderRadius: "5px",
  },
}));
const Initial_Form_State = {
  Prenom: "",
  Nom: "",
  email: "",
  phone: "",
  Role: "",
  name: "",
  description: "",
};
const Form_Validation = Yup.object().shape({
  Prenom: Yup.string().required("veuillez saisir votre prenom svp"),
  Nom: Yup.string().required("veuillez saisir votre nom svp "),
  name: Yup.string().required("veuillez saisir le nom de l'établissement svp "),
  description: Yup.string().required(
    "veuillez saisir le nom de l'établissement svp "
  ),
  email: Yup.string()
    .email("adresse mail incorrect. ")
    .required("veuillez saisir votre adresse mail svp"),
  phone: Yup.number()
    .integer()
    .typeError("veuillez inserer un numéro de téléphone valide svp")
    .required("veuillez inserer votre numéro de téléphone svp "),
  Role: Yup.string().required("veuillez inserez votre rôle svp"),
});

const RegisterForm = () => {
  const classes = useStyles();
  const { push } = useRouter();
  const [user, setUser] = React.useState();
  const [token, setToken] = React.useState();

  useEffect(() => {
    if (window) {
      let userStorage = localStorage.getItem("user");
      userStorage = userStorage ? localStorage.getItem("user") : {};
      const tokenStorage = localStorage.getItem("token");

      setToken(tokenStorage);
      setUser(userStorage);
    }
  }, []);

  return (
    <Grid item xs={12}>
      <ContainerForm>
        <div className={classes.formWrapper}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              paddingBottom: "1rem",
              fontSize: "1.2rem",
              fontWeight: "500",
            }}
          >
            Decouvrez la plateforme qui developpe votre activité
          </Typography>
          <Formik
            initialValues={{
              ...Initial_Form_State,
            }}
            validationSchema={Form_Validation}
            onSubmit={async (values, { resetForm }) => {
              values["owner"] = user._id;
              const response = await fetch(
                "https://lizzy-app.onrender.com/api/hairSalons",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(values),
                }
              );
              const data = await response.json();

              push("/monSalon");
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Votre Prenom
                  </Typography>

                  <TextField name='Prenom' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Votre Nom
                  </Typography>
                  <TextField name='Nom' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Nom de l&apos;établissement
                  </Typography>
                  <TextField name='name' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Description de l&apos;établissement
                  </Typography>
                  <TextField name='description' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Votre adresse mail
                  </Typography>
                  <TextField name='email' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Votre numéro de téléphone
                  </Typography>
                  <TextField name='phone' />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>
                    Vous êtes
                  </Typography>
                  <Select name='Role' options={establishment} />
                </Grid>
                <Grid item xs={12}>
                  <Typography sx={{ fontFamily: "Poppins" }}>image</Typography>
                  <input type />
                </Grid>
                <Grid item xs={12}>
                  <Button>Je decouvre gratuitement</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </ContainerForm>
    </Grid>
  );
};

export default RegisterForm;

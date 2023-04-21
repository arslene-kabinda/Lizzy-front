import React, { useEffect } from "react";

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
import { useFormik } from "formik";
import {
  ContainerForm,
  ContainerFormChild,
} from "../../styles/FormAcountStyle";
import { useRouter } from "next/router";

const Signup = () => {
  const { push } = useRouter();
  const paperStyle = {
    backgroundColor: "#fff",
    borderColor: "#000",
    border: 1,
    height: " auto",
    width: "30rem",
    margin: "10rem auto",
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
    phoneNumber: 0,
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

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const response = await fetch("http://127.0.0.1:4001/api/users/signup", {
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
        push("/MonCompte");
      }
    },
  });

  return (
    <ContainerForm>
      <Grid item xs={12}>
        <Paper style={paperStyle}>
          <Grid align={"center"}>
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
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

          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  label='Prenom'
                  name='firstName'
                  placeholder='Entrez votre prenom'
                  fullWidth
                  required
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  label='Nom'
                  name='lastName'
                  placeholder='Entrez votre nom'
                  fullWidth
                  required
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  // label='Form'
                  name='phoneNumber'
                  placeholder='Entrez votre numéro de téléphone'
                  fullWidth
                  required
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  label='Adresse Email'
                  name='email'
                  type='email'
                  placeholder='Entrez votre numéro de téléphone'
                  fullWidth
                  required
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  name='password'
                  type='password'
                  label='Mot de passe'
                  placeholder='Entrez votre mot de passe'
                  fullWidth
                  required
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                  fullWidth
                  name='confirmPassword'
                  type='password'
                  label='Confirmer votre mot de passe '
                  placeholder='Confirmer votre mot de passe'
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Grid>
              <Grid sx={{ marginLeft: "1rem", fontFamily: "Poppins" }}>
                <TextField
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  sx={{ fontFamily: "Poppins" }}
                  as={FormControlLabel}
                  name='termsAndConditions'
                  control={<Checkbox color='primary' />}
                  label="J'accepte les termes et conditions."
                />
              </Grid>

              <Button
                type='submit'
                variant='contained'
                disabled={formik.isSubmitting}
                color='primary'
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
                {formik.isSubmitting ? "Loading" : "S'inscrire"}
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </ContainerForm>
  );
};
export default Signup;

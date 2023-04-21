import Layout from "../src/components/layouts/Layouts";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/Theme";
import Header from "../src/components/layouts/header/Header";
import Footer from "../src/components/layouts/footer/Footer";

function MyApp({ Component, pageProps }) {
  switch (Component.name) {
    case "MonCompte":

    case "ResetPassword":
      return <Component {...pageProps} />;
    default:
      return (
        <>
          <Head>
            <title>Lizzy</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </>
      );
  }
}

export default MyApp;

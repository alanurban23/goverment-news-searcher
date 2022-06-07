import { useEffect } from "react";
import "../styles/globals.css";
import Home from ".";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return <Home />;
}

export default MyApp;

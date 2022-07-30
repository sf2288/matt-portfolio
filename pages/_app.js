import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { MotionDiv } from "../components/Common/MotionDiv";
import "../styles/globals.scss";
import { Layout } from "./../layout/index";

function MyApp({ Component, pageProps }) {
  useEffect(() => {}, []);
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

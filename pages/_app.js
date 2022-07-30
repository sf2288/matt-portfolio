import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";
import { Layout } from "./../layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

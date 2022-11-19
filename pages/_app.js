import MusxHeader from "../components/common/navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <MusxHeader /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

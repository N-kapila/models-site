import styles from "./page.module.css";
import Header from "../app/header/page";
import LoginPage from "../app/user-login/page";
import Footer from "../app/footer/page";
import Searchpage from "../app/search-page/page";

export default function Home() {
  return (
    <>
      <Header />

      <Searchpage />

      <Footer />
    </>
  );
}

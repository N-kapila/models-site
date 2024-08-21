import styles from "./page.module.css";
import Header from "../app/header/page";
import LoginPage from "../app/user-login/page";
import Footer from "../app/footer/page";
import Searchpage from "../app/search-page/page";
import UserSettings from "../app/user-settings/page";
import UserProfile from "./user-profile/page";
import PhotoUpload from "./photo-upload/page";
import HomePage from "./home/page";

export default function Home() {
  return (
    <>
      <Header />

      <HomePage />

      <Footer />
    </>
  );
}

import Header from "../header/page";
import Footer from "../footer/page";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

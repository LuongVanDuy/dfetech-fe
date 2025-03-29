import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

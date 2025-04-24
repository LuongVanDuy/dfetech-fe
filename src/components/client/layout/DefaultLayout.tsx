import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLayout({ children }: any) {
  return (
    <div id="wrapper">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}

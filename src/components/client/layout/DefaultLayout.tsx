import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Global } from "@emotion/react";

export type DefaultLayoutProps = PropsWithChildren & { 
  disableImageBackground?: boolean,
  backgroundBody?: string
};

export default function DefaultLayout({ children, disableImageBackground, backgroundBody }: DefaultLayoutProps) {
  return (
    <div id="wrapper">
      <Global styles={`
        body {
          ${backgroundBody ? `background: ${backgroundBody}` : ""};
        }
      `} />
      <Header />
      <main id="main">
        {!disableImageBackground && <div className="fixed top-0 left-0 mix-blend-lighten">
          <img src="/home/image-bg.png" alt="" />
        </div>}
        {children}
      </main>
      <Footer />
    </div>
  );
}

"use client";
import "../styles/globals.css";
import { Plus_Jakarta_Sans, Teko } from "next/font/google";

import { SessionProvider } from "next-auth/react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import RegistyProvider from "@/helper/provider/RegistyProvider";

const jakartaFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-custom",
  display: "swap",
});

const tekoFont = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakartaFont.variable} ${tekoFont.variable}`}>
      <body className="antialiased">
        <SessionProvider>
          <AntdRegistry>
            <ConfigProvider>
              <RegistyProvider>
                <Provider store={store}>{children}</Provider>
              </RegistyProvider>
            </ConfigProvider>
          </AntdRegistry>
        </SessionProvider>
      </body>
    </html>
  );
}

"use client";
import "../../styles/globals.css";

import RegistyProvider from "@/helper/provider/RegistyProvider";
import store from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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

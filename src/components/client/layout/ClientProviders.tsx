"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RegistyProvider from "@/helper/provider/RegistyProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <AntdRegistry>
        <ConfigProvider>
          <RegistyProvider>
            <Provider store={store}>{children}</Provider>
          </RegistyProvider>
        </ConfigProvider>
      </AntdRegistry>
    </SessionProvider>
  );
}

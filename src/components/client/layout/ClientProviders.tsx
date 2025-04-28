"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import store from "@/store/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import RegistyProvider from "@/helper/provider/RegistyProvider";
import SocialNav from "../nav/SocialNav";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const socials = [
    { name: "Facebook", icon: "/socials/Facebook.svg", url: "#" },
    { name: "Youtube", icon: "/socials/Social.svg", url: "#" },
    { name: "Linkedin", icon: "/socials/Social-1.svg", url: "#" },
    { name: "X", icon: "/socials/Social-2.svg", url: "#" },
    { name: "Tiktok", icon: "/socials/Social-3.svg", url: "#" },
    { name: "Line", icon: "/socials/Social-4.svg", url: "#" },
    { name: "Whatsapp", icon: "/socials/Social-5.svg", url: "#" },
  ];

  return (
    <SessionProvider>
      <AntdRegistry>
        <ConfigProvider>
          <RegistyProvider>
            <Provider store={store}>
              {children}
              <SocialNav socials={socials} />;
            </Provider>
          </RegistyProvider>
        </ConfigProvider>
      </AntdRegistry>
    </SessionProvider>
  );
}

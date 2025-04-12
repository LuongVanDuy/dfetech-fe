"use client";

import React, { useEffect, useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOutlined,
  HomeOutlined,
  QuestionCircleOutlined,
  UserOutlined,
  FileDoneOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import HeaderAdmin from "./HeaderAdmin";
import Image from "next/image";

const { Sider, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("DashBoard", "/admin", <HomeOutlined />),
  getItem("Quản lý Page", "/admin/pages", <FileTextOutlined />),
];

const LayoutAdmin = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Sider
        width={256}
        collapsedWidth={96}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="sider-default sider-admin"
      >
        <div className="flex items-end mt-[25px] mb-[25px]  justify-center cursor-pointer">
          <Image
            alt="Logo"
            src="/brands/Logo.svg"
            width={113}
            height={54}
            className="w-[113px] h-[54px]"
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["/admin"]}
          mode="inline"
          items={items}
          onClick={({ key }) => router.push(key)}
        />
      </Sider>

      <Layout style={{ overflow: "auto" }}>
        <HeaderAdmin />
        <Content
          style={{
            padding: 20,
            background: "rgba(245, 245, 250, 1)",
            overflowY: "scroll",
            overflowX: "hidden",
            height: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

type Props = {
  children: any;
};

export default LayoutAdmin;

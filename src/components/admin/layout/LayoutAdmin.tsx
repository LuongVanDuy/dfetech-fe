"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { DashboardOutlined, DesktopOutlined, FileOutlined, SettingOutlined } from "@ant-design/icons";
import HeaderAdmin from "./HeaderAdmin";
import Image from "next/image";
import Link from "next/link";

const { Sider, Content } = Layout;

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  path: string;
};

const items: MenuItem[] = [
  {
    key: "1",
    icon: <DashboardOutlined />,
    label: <Link href="/admin">Dashboard</Link>,
    path: "/admin",
  },
  {
    key: "2",
    icon: <DesktopOutlined />,
    label: <Link href="/admin/pages">Pages</Link>,
    path: "/admin/pages",
  },
  {
    key: "3",
    icon: <FileOutlined />,
    label: <Link href="/admin/posts">Posts</Link>,
    path: "/admin/posts",
  },
  {
    key: "4",
    icon: <SettingOutlined />,
    label: <Link href="/admin/settings">Settings</Link>,
    path: "/admin/settings",
  },
];

const LayoutAdmin = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const [collapsed, setCollapsed] = useState(false);

  const selectedKey = useMemo(() => {
    const currentItem = items.find((item) => pathname === item.path);
    return currentItem ? currentItem.key : "1";
  }, [pathname]);

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Sider width={256} collapsedWidth={96} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} className="sider-default sider-admin">
        <div className="flex items-end mt-[25px] mb-[25px]  justify-center cursor-pointer">
          <Image alt="Logo" src="/brands/Logo.svg" width={113} height={54} className="w-[113px] h-[54px]" />
        </div>
        <Menu selectedKeys={[selectedKey]} defaultOpenKeys={["sub1"]} mode="inline" theme="dark" inlineCollapsed={collapsed}>
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
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

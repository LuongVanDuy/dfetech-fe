"use client";

import React from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginAdmin: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();

  const handleSubmit = async (values: LoginFormValues) => {
    const { email, password } = values;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      const response = await fetch("/api/auth/session");
      const session = await response.json();

      if (
        session?.user?.type === "SYSTEM" &&
        session?.user?.isSuperAdmin === 1
      ) {
        router.push("/admin");
      } else {
        await signOut({ redirect: false });
        messageApi.error({
          content: "Bạn không có quyền truy cập trang này!",
        });
      }
    } else {
      messageApi.error({
        content: "Đăng nhập thất bại, vui lòng kiểm tra lại!",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-center w-[100vw] h-[100vh]">
        <div>
          <div className="flex items-end pt-[20px] justify-center mb-[15px]"></div>

          <Form
            name="admin_login"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
            className="min-w-[400px]"
          >
            <Form.Item<LoginFormValues>
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập tài khoản của bạn!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Tài khoản"
                prefix={<UserOutlined />}
              />
            </Form.Item>

            <Form.Item<LoginFormValues>
              name="password"
              rules={[
                { required: true, message: "Vui lòng nhập mật khẩu của bạn!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Mật khẩu"
                prefix={<LockOutlined />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;

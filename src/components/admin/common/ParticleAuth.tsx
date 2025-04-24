// components/ParticleAuth.tsx

"use client"; // Nếu dùng trong app router với tương tác động

import React from "react";
import { Col } from "antd";
import { HeartFilled } from "@ant-design/icons";
import usecustomStyles from "./customStyles";

const customStyles = usecustomStyles();

const ParticleAuth = () => {
  return (
    <Col
      xs={24}
      lg={10}
      style={{
        backgroundColor: customStyles.colorPrimary,
        color: customStyles.colorBgContainer,
        borderRadius: "6px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          padding: "20px",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ marginBottom: "30px", position: "relative" }}>
          <img src="/admin/images/logo-light.png" alt="Logo" height="30" />

          <img
            src="/admin/images/effect-pattern/auth-effect-2.png"
            alt="Effect 2"
            style={{
              position: "absolute",
              zIndex: "1",
              top: "0%",
              right: 0,
              transform: "rotate(-45deg)",
            }}
          />
          <img
            src="/admin/images/effect-pattern/auth-effect.png"
            alt="Effect"
            style={{
              top: "-15px",
              left: "-20px",
              position: "absolute",
              zIndex: "1",
              overflow: "hidden",
            }}
          />
          <img
            src="/admin/images/effect-pattern/auth-effect.png"
            alt="Effect Bottom"
            style={{
              position: "absolute",
              zIndex: "1",
              bottom: "-15px",
              right: "-20px",
            }}
          />
        </div>

        <div>
          <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>
            Start your journey with us.
          </h3>
          <p>
            It brings together your tasks, projects, timelines, files, and more
          </p>
        </div>

        <div className="text-center text-white-75">
          <p style={{ marginBottom: "0px" }}>
            &copy; {new Date().getFullYear()} Lizant. Crafted with{" "}
            <HeartFilled /> by Themesbrand
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ParticleAuth;

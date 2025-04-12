"use client";

import LayoutAdmin from "@/components/layouts/admin/LayoutAdmin";
import React, { useState } from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Dashboard = (props: any) => {
  return (
    <LayoutAdmin>
      <Title level={2}>Dashboard</Title>
    </LayoutAdmin>
  );
};

export default Dashboard;

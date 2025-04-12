"use client";

import LayoutAdmin from "@/components/layouts/admin/LayoutAdmin";
import React, { useEffect, useState } from "react";
import { Button, Space, Table, Tag, Typography } from "antd";
import TopPage from "@/components/layouts/admin/TopPage";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchPageList } from "@/store/actions/page";
import { useSession } from "next-auth/react";
import { USIcon } from "@/components/icons/USIcon";
import { VNIcon } from "@/components/icons/VNIcon";
import { THIcon } from "@/components/icons/THIcon";

const iconMap: Record<string, JSX.Element> = {
  en: <USIcon />,
  vi: <VNIcon />,
  th: <THIcon />,
};

const Pages = (props: any) => {
  const pageTitle = "Danh sách trang";
  const breadcrumbs = [
    { path: "/admin", title: "DashBoard" },
    { title: pageTitle },
  ];

  const { pageLoading, fetchPageList, pageList, pageCount } = props;
  const { data: session } = useSession();

  const router = useRouter();

  const loadList = () => {
    fetchPageList(session?.user.accessToken, {});
  };

  useEffect(() => {
    if (session?.user.accessToken) {
      loadList();
    }
  }, [session?.user.accessToken]);

  const columns = [
    {
      title: "Tên trang",
      dataIndex: "pageName",
      key: "pageName",
      render: (text: string) => <strong>{text}</strong>,
    },
    {
      title: "Ngôn ngữ",
      key: "translations",
      render: (_: any, record: any) => {
        return (
          <div className="flex space-x-4">
            {record.translations.map((t: any) => (
              <a
                key={t.id}
                href={`/admin/pages/${t.id}`}
                className="text-lg hover:text-blue-500"
                title={t.langCode.toUpperCase()}
              >
                {iconMap[t.langCode] || t.langCode}
              </a>
            ))}
          </div>
        );
      },
    },
  ];

  return (
    <LayoutAdmin>
      <TopPage items={breadcrumbs} pageTitle={pageTitle} />
      <StyledTable
        tableLayout="auto"
        size="small"
        loading={pageLoading}
        columns={columns}
        dataSource={pageList}
        rowKey={(_, index) => `key-${index}`}
        scroll={{ x: "max-content" }}
      />
    </LayoutAdmin>
  );
};

const mapStateToProps = (state: any) => ({
  pageLoading: state.page.loading,
  pageList: state.page.list,
  pageCount: state.page.count,
});

const mapDispatchToProps = {
  fetchPageList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pages);

const StyledTable = styled(Table)`
  background-color: #fff;
  padding: 24px;
  && {
    thead > tr:first-child > *:first-child,
    thead > tr:first-child > *:last-child {
      border-radius: 0 !important;
    }
    .ant-table-column-title {
      font-weight: 500;
    }
    .ant-pagination {
      &-prev,
      &-next,
      &-item {
        width: 24px;
        min-width: 24px;
        height: 24px;
        line-height: 22px;
        &-active {
          font-weight: 500;
        }
      }
    }
  }
`;

"use client";
import LayoutAdmin from "@/components/layouts/admin/LayoutAdmin";
import TopPage from "@/components/layouts/admin/TopPage";
import { fetchPageDetail, updatePage } from "@/store/actions/page";
import { Button, Card, Col, Form, Input, Row, Space } from "antd";
import { data } from "framer-motion/client";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PageDetail = (props: any) => {
  const { loading, fetchPageDetail, pageDetail, updatePage, beforeUpload } =
    props;
  const router = useRouter();
  const { data: session } = useSession();

  const pageTitle = "Danh sách trang";
  const breadcrumbs = [
    { path: "/admin", title: "DashBoard" },
    { title: pageTitle },
  ];

  const [form] = Form.useForm();
  const [formField, setFormField] = useState<any | undefined>();

  const params = useParams();
  const pageId = params.id || "";

  useEffect(() => {
    if (session?.user.accessToken) {
      fetchPageDetail(session?.user.accessToken, pageId);
    }
  }, [session?.user.accessToken, pageId]);

  useEffect(() => {
    if (pageDetail) {
      setFormField(pageDetail);
    }
  }, [pageDetail]);

  useEffect(() => {
    if (formField && Object.keys(formField).length > 0) {
      form.setFieldsValue(formField.data);
    }
  }, [formField, form]);

  const onSuccess = () => {};

  const onFailure = (error: any) => {};

  const onFinish = async (values: any) => {
    const payload = {
      data: { ...values },
      id: Number(pageId),
    };

    updatePage(session?.user.accessToken, payload, onSuccess, onFailure);
  };

  return (
    <LayoutAdmin>
      <TopPage items={breadcrumbs} pageTitle={pageTitle} />
      <StyledForm
        form={form}
        name="form_details"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Row gutter={20}>
          <Col xs={18} xl={18}>
            <Form.Item<any>
              label="Title"
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập !" }]}
            >
              <Input placeholder="Tên trang" />
            </Form.Item>
            <Card title="Showcare Section" bordered={false}>
              <Row gutter={20}>
                <Col xs={24} xl={24}>
                  <Form.Item
                    label="Title"
                    name={["content", "showcare", "title"]}
                    rules={[
                      { required: true, message: "Vui lòng nhập tiêu đề!" },
                    ]}
                  >
                    <Input placeholder="Tiêu đề" />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={24}>
                  <Form.Item
                    label="Subtitle"
                    name={["content", "showcare", "subtitle"]}
                    rules={[
                      { required: true, message: "Vui lòng nhập phụ đề!" },
                    ]}
                  >
                    <Input placeholder="Phụ đề" />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={14}>
                  <Form.Item
                    label="Slogan"
                    name={["content", "showcare", "slogan"]}
                    rules={[
                      { required: true, message: "Vui lòng nhập Slolan!" },
                    ]}
                  >
                    <Input placeholder="Slolan" />
                  </Form.Item>
                </Col>
                <Col xs={24} xl={10}>
                  <Form.Item
                    label="Author"
                    name={["content", "showcare", "author"]}
                    rules={[
                      { required: true, message: "Vui lòng nhập Author!" },
                    ]}
                  >
                    <Input placeholder="Author" />
                  </Form.Item>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={6} xl={6}>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={false}>
                Lưu trữ
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </StyledForm>
    </LayoutAdmin>
  );
};

const mapStateToProps = (state: any) => ({
  pageDetail: state.page.detail,
  loading: state.page.loading,
});

const mapDispatchToProps = {
  fetchPageDetail: fetchPageDetail,
  updatePage: updatePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageDetail);

const StyledForm = styled(Form)`
  && {
    .form_actions {
      text-align: right;
      .ant-form-item {
        margin-bottom: 0;
      }
    }
    .ant-form-item {
      margin-bottom: 8px;
    }

    &.ant-form {
      &-horizontal {
        .ant-form-item {
          margin-bottom: 15px;
          &-control {
            flex: 0 0 100%;
            min-width: 100%;
          }
          &-label {
            text-align: start;
            & > label {
              height: auto;
            }
          }
        }
      }
      .form_actions {
        .ant-form-item {
          margin-bottom: 0;
        }
        .ant-space {
          flex-wrap: wrap;
        }
      }
    }

    .ant-card-body {
      padding: 12px;
    }

    .ant-card-head {
      padding: 0 12px;
    }
  }
`;

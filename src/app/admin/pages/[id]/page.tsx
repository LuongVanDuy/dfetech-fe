"use client";
import SoftwareSolutionBox from "@/components/admin/form/SoftwareSolutionBox";
import LayoutAdmin from "@/components/admin/layout/LayoutAdmin";
import TopPage from "@/components/admin/layout/TopPage";
import { fetchPageDetail, updatePage } from "@/store/actions/page";
import { Button, Card, Col, Collapse, Form, Input, Row, Space } from "antd";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const { Panel } = Collapse;

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
      console.log(pageDetail);
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
          <Col xs={24} xl={18}>
            <Form.Item<any>
              label="Title"
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập !" }]}
            >
              <Input placeholder="Tên trang" />
            </Form.Item>
            <Collapse
              defaultActiveKey={["1"]}
              items={[
                {
                  key: "1",
                  label: "Showcase",
                  children: (
                    <Row gutter={20}>
                      <Col xs={24} sm={12} md={12} xl={12}>
                        <Form.Item
                          label="Main Title"
                          name={["content", "showcare", "title"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the main title!",
                            },
                          ]}
                        >
                          <Input placeholder="Main title of the website or section" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={12} xl={12}>
                        <Form.Item
                          label="Subtitle"
                          name={["content", "showcare", "subtitle"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the subtitle!",
                            },
                          ]}
                        >
                          <Input placeholder="Short description about the content" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={8} xl={8}>
                        <Form.Item
                          label="Slogan"
                          name={["content", "showcare", "slogan"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the slogan!",
                            },
                          ]}
                        >
                          <Input placeholder="Short message, the slogan of the website" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={8} xl={8}>
                        <Form.Item
                          label="Author"
                          name={["content", "showcare", "author"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the author's name!",
                            },
                          ]}
                        >
                          <Input placeholder="Author or creator of the content" />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={12} md={8} xl={8}>
                        <Form.Item
                          label="Trusted Client"
                          name={["content", "showcare", "trusted"]}
                          rules={[
                            {
                              required: true,
                              message: "Please enter the trusted client name!",
                            },
                          ]}
                        >
                          <Input placeholder="Name of a trusted client" />
                        </Form.Item>
                      </Col>
                    </Row>
                  ),
                },
              ]}
            />
            {/* <Collapse
              defaultActiveKey={["2"]}
              items={[
                {
                  key: "2",
                  label: "Showcase",
                  children: (
                    <Row gutter={20}>
                      {["box_1", "box_2", "box_3", "box_4"].map(
                        (box, index) => (
                          <Col xs={24} sm={12} md={12} xl={12} key={index}>
                            <Card
                              title={`Box ${index + 1}`}
                              style={{
                                marginBottom: "20px",
                              }}
                            >
                              <Form.Item
                                label="Title"
                                name={[
                                  "content",
                                  "software_solutions",
                                  box,
                                  "title",
                                ]}
                                rules={[
                                  {
                                    required: true,
                                    message: "Please enter the main title!",
                                  },
                                ]}
                              >
                                <Input placeholder="Main title of the website or section" />
                              </Form.Item>

                              <Form.List
                                name={[
                                  "content",
                                  "software_solutions",
                                  box,
                                  "links",
                                ]}
                                initialValue={[{}]}
                              >
                                {(fields, { add, remove }) => (
                                  <SoftwareSolutionBox
                                    namePrefix={box}
                                    fields={fields}
                                    add={add}
                                    remove={remove}
                                  />
                                )}
                              </Form.List>
                            </Card>
                          </Col>
                        )
                      )}
                    </Row>
                  ),
                },
              ]}
            /> */}
          </Col>
          <Col xs={24} xl={6}>
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

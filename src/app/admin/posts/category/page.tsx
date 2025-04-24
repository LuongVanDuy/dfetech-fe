"use client";

import LayoutAdmin from "@/components/admin/layout/LayoutAdmin";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Input, message, Modal, Row, Space, Table, Tag, Typography } from "antd";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { connect } from "react-redux";
import { useSession } from "next-auth/react";
import { fetchPostCategories, fetchPostCategory, createPostCategory, updatePostCategory } from "@/store/actions/postCategory";

const { Title } = Typography;

const Pages = (props: any) => {
  const { postCategoriesLoading, fetchPostCategories, postCategories, postCategoriesCount, createPostCategory, updatePostCategory } = props;
  const router = useRouter();
  const { data: session } = useSession();
  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();
  const [formDelete] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const [editPostCategory, setEditPostCategory] = useState({ flag: false, id: 0 });
  const [deletePostCategory, setDeletePostCategory] = useState({ flag: false, id: 0 });

  const loadList = () => {
    fetchPostCategories(session?.user.accessToken, {});
  };

  const onSuccess = (messageContent: string) => {
    messageApi.success({
      content: messageContent,
    });
    setEditPostCategory({ flag: false, id: 0 });
    loadList();
  };

  const onFailure = (error: any) => {
    messageApi.error({
      content: error,
    });
    setEditPostCategory({ flag: false, id: 0 });
    loadList();
  };

  useEffect(() => {
    if (session?.user.accessToken) {
      loadList();
    }
  }, [session?.user.accessToken]);

  const handleCreate = async (values: any) => {
    createPostCategory(session?.user.accessToken, values, () => onSuccess("Cập nhật danh mục thành công"), onFailure);
  };

  const handleEdit = (item: any) => {
    setEditPostCategory({ flag: true, id: item.id });
    formEdit.setFieldsValue({
      label_vi: item.label_vi,
      slug_vi: item.slug_vi,
      label_en: item.label_en,
      slug_en: item.slug_en,
      label_th: item.label_th,
      slug_th: item.slug_th,
    });
  };

  const handleEditSubmit = (values: any) => {
    const payload = {
      data: { ...values },
      id: Number(editPostCategory.id),
    };
    updatePostCategory(session?.user.accessToken, payload, () => onSuccess("Cập nhật danh mục thành công"), onFailure);
  };

  const handleEditCancel = () => {
    setEditPostCategory({ flag: false, id: 0 });
  };

  const handleDelete = (item: any) => {
    setDeletePostCategory({ flag: true, id: item.id });
  };

  const handleDeleteSubmit = () => {
    setDeletePostCategory({ ...deletePostCategory, flag: false });
  };

  const handleDeleteCancel = () => {
    setDeletePostCategory({ flag: false, id: 0 });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "label_en",
      key: "label_en",
    },
    {
      title: "Name",
      dataIndex: "label_vi",
      key: "label_vi",
    },
    {
      title: "Name",
      dataIndex: "label_th",
      key: "label_th",
    },
    {
      title: "",
      dataIndex: "actions",
      width: 250,
      render: (_: any, origin: any) => {
        return (
          <Space wrap>
            <StyledButton type="primary" size="small" onClick={() => handleEdit(origin)}>
              Edit
            </StyledButton>
            <StyledButton type="primary" danger size="small" onClick={() => handleDelete(origin)}>
              Delete
            </StyledButton>
          </Space>
        );
      },
    },
  ];

  return (
    <LayoutAdmin>
      {contextHolder}
      <Title level={2}>Category</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={8}>
          <StyledForm form={form} name="form" autoComplete="off" layout="vertical" onFinish={handleCreate}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="label_en" label="Tên (Tiếng Anh)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Anh" }]}>
                  <Input placeholder="Nhập tên tiếng Anh" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="slug_en" label="Slug (Tiếng Anh)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Anh" }]}>
                  <Input placeholder="Nhập slug tiếng Anh" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="label_vi" label="Tên (Tiếng Việt)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Việt" }]}>
                  <Input placeholder="Nhập tên tiếng Việt" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="slug_vi" label="Slug (Tiếng Việt)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Việt" }]}>
                  <Input placeholder="Nhập slug tiếng Việt" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="label_th" label="Tên (Tiếng Thái)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Thái" }]}>
                  <Input placeholder="Nhập tên tiếng Thái" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="slug_th" label="Slug (Tiếng Thái)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Thái" }]}>
                  <Input placeholder="Nhập slug tiếng Thái" />
                </Form.Item>
              </Col>
            </Row>
            <div className="form_actions">
              <Space>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={false}>
                    Thêm danh mục
                  </Button>
                </Form.Item>
              </Space>
            </div>
          </StyledForm>
        </Col>
        <Col xs={24} xl={16}>
          <StyledTable
            tableLayout="auto"
            size="small"
            loading={postCategoriesLoading}
            columns={columns}
            dataSource={postCategories}
            rowKey={(_, index) => `key-${index}`}
            scroll={{ x: "max-content" }}
          />
        </Col>
      </Row>
      <StyledModal
        open={editPostCategory.flag}
        title="Chỉnh sửa"
        okButtonProps={{ form: "form_delete", htmlType: "submit" }}
        okText="Cập nhật"
        onCancel={handleEditCancel}
        cancelText="Đóng"
      >
        <Form form={formEdit} name="form_edit" autoComplete="off" layout="vertical" onFinish={handleEditSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item name="label_en" label="Tên (Tiếng Anh)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Anh" }]}>
                <Input placeholder="Nhập tên tiếng Anh" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="slug_en" label="Slug (Tiếng Anh)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Anh" }]}>
                <Input placeholder="Nhập slug tiếng Anh" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="label_vi" label="Tên (Tiếng Việt)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Việt" }]}>
                <Input placeholder="Nhập tên tiếng Việt" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="slug_vi" label="Slug (Tiếng Việt)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Việt" }]}>
                <Input placeholder="Nhập slug tiếng Việt" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item name="label_th" label="Tên (Tiếng Thái)" rules={[{ required: true, message: "Vui lòng nhập tên tiếng Thái" }]}>
                <Input placeholder="Nhập tên tiếng Thái" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="slug_th" label="Slug (Tiếng Thái)" rules={[{ required: true, message: "Vui lòng nhập slug tiếng Thái" }]}>
                <Input placeholder="Nhập slug tiếng Thái" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </StyledModal>
      <StyledModal
        open={deletePostCategory.flag}
        title="Xóa danh mục"
        okButtonProps={{ form: "form_delete", htmlType: "submit", danger: true }}
        okText="Xóa"
        onCancel={handleDeleteCancel}
        cancelText="Đóng"
      >
        <Form form={formDelete} name="form_delete" autoComplete="off" onFinish={handleDeleteSubmit}>
          <div>Bạn có chắc chắn muốn xóa danh mục này?</div>
        </Form>
      </StyledModal>
    </LayoutAdmin>
  );
};

const mapStateToProps = (state: any) => ({
  postCategories: state.postCategory.list,
  postCategoriesCount: state.postCategory.count,
  postCategoriesLoading: state.postCategory.loading,
});

const mapDispatchToProps = {
  fetchPostCategories: fetchPostCategories,
  fetchPostCategory: fetchPostCategory,
  createPostCategory: createPostCategory,
  updatePostCategory: updatePostCategory,
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

const StyledButton = styled(Button)`
  && {
    padding-top: 0;
    padding-bottom: 0;
    height: 22px;
  }
`;

const StyledModal = styled(Modal)`
  && {
    width: 572px !important;
    .ant-modal {
      &-content {
        padding: 0;
      }
      &-header {
        padding: 16px 24px;
        margin: 0;
        box-shadow: inset 0px -1px 0px #f0f0f0;
      }
      &-title {
        font-weight: 500;
      }
      &-body {
        padding: 24px;
        .ant-form-item {
          margin-bottom: 5px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      &-footer {
        box-shadow: inset 0px 1px 0px #f0f0f0;
        padding: 10px 16px;
      }
    }
  }
`;

const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 24px;
`;

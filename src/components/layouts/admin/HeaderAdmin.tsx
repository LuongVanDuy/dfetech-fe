import React from "react";
import { Avatar, Layout, Menu, Popover, Space, Tag } from "antd";
import styled from "styled-components";
import { signOut, useSession } from "next-auth/react";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const menu = () => {
  const doLogout = () => {
    signOut();
  };

  return (
    <Menu style={{ border: "none" }}>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="3" onClick={doLogout}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );
};

const HeaderAdmin = () => {
  return (
    <StyledHeader>
      <div className="flex items-center gap-[25px]">
        <PopoverAccount
          trigger={["click"]}
          content={menu()}
          overlayClassName="account_popover"
          placement="bottomRight"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Space style={{ padding: "5px 0" }}>
            <Avatar size={32} icon={<UserOutlined />} />
          </Space>
        </PopoverAccount>
      </div>
    </StyledHeader>
  );
};

export default HeaderAdmin;

const StyledHeader = styled(Header)`
  background-color: #fff;
  padding: 0 40px;
  box-shadow: 0px 2px 16px 0px rgba(96, 97, 112, 0.1) !important;
  height: 60px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const PopoverAccount = styled(Popover)`
  .ant-dropdown-menu {
    width: 150px;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: #ffffff;
  }

  .ant-dropdown-menu-item {
    padding: 8px 16px;
    color: #333333;
    font-size: 14px;
  }

  .ant-dropdown-menu-item:hover {
    background-color: #e6f7ff;
  }
`;

const Name = styled.div`
  & {
    line-height: 1;
    &:hover {
      cursor: pointer;
    }

    span {
      &:not(:last-of-type) {
        width: 100%;
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      &.ant-tag {
        background: none !important;
        margin: 0;
        padding: 0;
        line-height: 1;
        border: none;
        font-size: 10px;
      }
    }
  }
`;

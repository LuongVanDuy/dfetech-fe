import React from 'react';
import { getSession } from 'next-auth/react';
import { Breadcrumb, Button } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

interface TopPageProps {
  pageTitle: string;
  items: { path?: string; title: string }[];
}

const TopPage: React.FC<TopPageProps> = ({ pageTitle, items }) => {
  const router = useRouter();

  const handleClick = (path?: string) => {
    if (path) {
      router.push(path);
    }
  };

  const breadcrumbItems = items.map((item) => ({
    key: item.title,
    title: item.path ? (
      <a onClick={() => handleClick(item.path)}>{item.title}</a>
    ) : (
      item.title
    ),
  }));

  return (
    <TopPageWrapper>
      <StyledBreadcrumb items={breadcrumbItems} />
      <h2>{pageTitle}</h2>
    </TopPageWrapper>
  );
};

export default TopPage;

const TopPageWrapper = styled(`div`)`
  margin: -24px -24px 24px;
  padding: 16px 24px;
  background: #ffffff;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    top: 100%;
    height: 24px;
    background: ${(props) => props.theme?.bg};
  }
  h2 {
    font-size: 20px;
    line-height: calc(28 / 20);
  }
  p {
    margin-bottom: 0;
    font-size: 13px;
    color: #333333;
    line-height: 131%;
  }
`;
const StyledBreadcrumb = styled(Breadcrumb)`
  margin-bottom: 5px;
`;

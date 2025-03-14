'use client';

import { Layout as AntdLayout } from 'antd';

import CustomMenu from './CustomMenu';

const { Content, Header } = AntdLayout;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AntdLayout>
      <Header className="!bg-white">
        <CustomMenu />
      </Header>
      <Header />
      <Content>{children}</Content>
    </AntdLayout>
  );
};

export default Layout;

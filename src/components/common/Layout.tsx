'use client';

import { Layout as AntdLayout } from 'antd';

import CustomMenu from './CustomMenu';

const { Content, Header } = AntdLayout;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AntdLayout className="!bg-white">
      <Header className="!bg-white !px-0 sticky top-0 z-50 border-0 border-b border-gray-200 border-solid h-20 flex items-center justify-between">
        <CustomMenu />
      </Header>
      <Content className="bg-white">{children}</Content>
    </AntdLayout>
  );
};

export default Layout;

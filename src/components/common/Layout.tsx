'use client';

import { Layout as AntdLayout } from 'antd';

import Header from './Header';

const { Content } = AntdLayout;

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AntdLayout>
      <Header />
      <Content>{children}</Content>
    </AntdLayout>
  );
};

export default Layout;

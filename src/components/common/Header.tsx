'use client';

import { Flex, Layout, Menu } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Header: AntdHeader } = Layout;

const route = [
  {
    key: '1',
    label: <Link href="/">Trang chủ</Link>,
  },
  {
    key: '2',
    label: <Link href="/introduce">Giới thiệu</Link>,
  },
  {
    key: '3',
    label: <Link href="/courses">Các khóa học</Link>,
  },
  {
    key: '4',
    label: <Link href="/knowledge">Kiến thức xanh</Link>,
  },
];

const Header = () => {
  return (
    <AntdHeader className="!bg-white">
      <Flex justify="space-between" align="center">
        <div>
          <Image
            alt="Sen Xanh"
            width={120}
            height={31}
            src={
              'https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/logo_senxanh_713966778f.png'
            }
          />
        </div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={route}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
    </AntdHeader>
  );
};

export default Header;

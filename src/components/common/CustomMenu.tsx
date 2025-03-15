'use client';

import { Button, Flex, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const routes = [
  {
    slug: '/',
    label: 'Trang chủ',
  },
  {
    slug: '/introduce',
    label: 'Giới thiệu',
  },
  {
    slug: '/courses',
    label: 'Các khóa học',
  },
  {
    slug: '/knowledge',
    label: 'Kiến thức xanh',
  },
];

const CustomMenu = () => {
  const [pageActive, setPageActive] = useState<string>('');

  useEffect(() => {
    if (window.location) {
      const path = window.location.pathname;
      setPageActive(path);
    }
  }, []);

  return (
    <Flex justify="space-between" align="center" className="container">
      <div className="-mt-2">
        <Image
          loader={({ src }) => src}
          alt="Sen Xanh logo"
          width={150}
          height={31}
          src={
            'https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/logo_senxanh_713966778f.png'
          }
        />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[pageActive]}
        defaultSelectedKeys={[routes[0].slug]}
        onSelect={({ key }) => setPageActive(key)}
        items={routes.map((route) => ({
          key: route.slug,
          label: (
            <Link
              href={route.slug}
              className=" font-bold text-base text-primary"
            >
              {route.label}
            </Link>
          ),
        }))}
        className="menu-items flex-1 justify-end !border-b-0"
      />
      <Button className="btn-primary-header" onClick={() => {}}>
        Liên hệ ngay
      </Button>
    </Flex>
  );
};

export default CustomMenu;

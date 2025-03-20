'use client';

import { Button, Drawer, Flex, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { MenuOutlined } from '@ant-design/icons'

import ContactButton from './ContactButton'

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

const Navbar = () => {
  const [pageActive, setPageActive] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setPageActive(window.location.pathname);
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

      <div className="hidden lg:flex flex-1 justify-end items-center">
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
                className="font-bold text-base text-primary"
              >
                {route.label}
              </Link>
            ),
          }))}
          className="menu-items flex-1 justify-end !border-b-0"
        />
        <ContactButton className="btn-primary-header" />
      </div>

      <div className="self-end lg:hidden">
        <ContactButton className="btn-primary-header w-full mr-2" />
        <Button
          icon={<MenuOutlined />}
          type="text"
          size="large"
          onClick={() => setMobileMenuOpen(true)}
          className="ml-auto"
        />
      </div>
      <Drawer
        placement="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width={280}
        styles={{
          body: {
            padding: 0,
          },
        }}
        rootClassName="lg:hidden"
      >
        <div className="p-4">
          <Menu
            selectedKeys={[pageActive]}
            defaultSelectedKeys={[routes[0].slug]}
            onSelect={({ key }) => {
              setPageActive(key);
              setMobileMenuOpen(false);
            }}
            className="!border-e-0"
            items={routes.map((route) => ({
              key: route.slug,
              label: (
                <Link
                  href={route.slug}
                  className="font-bold text-base text-primary"
                >
                  {route.label}
                </Link>
              ),
            }))}
          />
        </div>
      </Drawer>
    </Flex>
  );
};

export default Navbar;

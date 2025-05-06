'use client'

import { Button, Drawer, Flex, Menu } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { MenuOutlined } from '@ant-design/icons'

import ContactButton from '../ContactForm/Button'

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
    slug: null,
    label: 'Kiến thức xanh',
    children: [
      {
        slug: '/knowledge?tab=skills',
        label: 'Vườn kỹ năng',
      },
      {
        slug: '/knowledge?tab=training',
        label: 'Huấn luyện cá nhân',
      },
    ],
  },
  {
    slug: null,
    label: 'Tin tức',
    children: [
      {
        slug: '/news',
        label: 'Báo chí',
      },
      {
        slug: '/customer',
        label: 'Khách hàng',
      },
      {
        slug: '/faqs',
        label: 'Hỏi đáp',
      },
    ],
  },
]

const Navbar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pageActive, setPageActive] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    if (pathname.includes('/knowledge')) {
      const tab = searchParams.get('tab') ?? 'skills'
      setPageActive('/knowledge?tab=' + tab)
    } else setPageActive(`/${pathname.split('/')[1]}`)
  }, [pathname])

  return (
    <Flex justify='space-between' align='center' className='container'>
      <div className='-mt-2'>
        <Link href='/' className='flex items-center' onClick={() => setPageActive('/')}>
          <Image
            loader={({ src }) => src}
            alt='Sen Xanh logo'
            width={150}
            height={31}
            src={
              'https://senxanh-prod-media.s3.ap-southeast-1.amazonaws.com/logo_mau_921cc78d91.svg'
            }
          />
        </Link>
      </div>

      <div className='hidden flex-1 items-center justify-end gap-4 lg:flex'>
        <Menu
          mode='horizontal'
          selectedKeys={[pageActive]}
          defaultSelectedKeys={['/']}
          onSelect={({ key }) => setPageActive(key)}
          items={routes.map(route => ({
            key: route.slug ?? route.label,
            label: (
              <>
                <Link
                  href={route.slug ?? ''}
                  className='text-primary text-base font-bold'>
                  {route.label}
                </Link>
              </>
            ),
            children: route.children?.map(child => ({
              key: child.slug,
              label: (
                <Link href={child.slug} className='text-primary text-base font-bold'>
                  {child.label}
                </Link>
              ),
            })),
          }))}
          className='menu-items flex-1 justify-end !border-b-0'
        />
        <ContactButton className='btn-primary-header' />
      </div>

      <div className='flex items-center gap-2 self-end lg:hidden'>
        <ContactButton className='btn-primary-header w-full' />
        <Button
          icon={<MenuOutlined />}
          type='text'
          size='large'
          onClick={() => setMobileMenuOpen(true)}
          className='ml-auto'
        />
      </div>
      <Drawer
        placement='right'
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width={280}
        styles={{
          body: {
            padding: 0,
          },
        }}
        rootClassName='lg:hidden'>
        <div className='p-4'>
          <Menu
            selectedKeys={[pageActive]}
            defaultSelectedKeys={['/']}
            onSelect={({ key }) => {
              setPageActive(key)
              setMobileMenuOpen(false)
            }}
            mode='inline'
            className='!border-e-0'
            items={routes.map(route => ({
              key: route.slug ?? route.label,
              label: (
                <Link
                  href={route.slug ?? ''}
                  className='text-primary text-base font-bold'>
                  {route.label}
                </Link>
              ),
              children: route.children?.map(child => ({
                key: child.slug,
                label: (
                  <Link href={child.slug} className='text-primary text-base font-bold'>
                    {child.label}
                  </Link>
                ),
              })),
            }))}
          />
        </div>
      </Drawer>
    </Flex>
  )
}

export default Navbar

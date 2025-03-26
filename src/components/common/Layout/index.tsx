'use client'

import { Layout as AntdLayout } from 'antd'

import Contact from './Contact'
import MyFooter from './Footer'
import Navbar from './Navbar'

const { Content, Header, Footer } = AntdLayout

type Props = {
  children: React.ReactNode
  footer: any
  contact: any
}

const Layout = ({ children, footer, contact }: Props) => {
  return (
    <AntdLayout className='!bg-white'>
      <Header className='!bg-white !px-0 sticky top-0 z-50 border-0 border-b border-gray-200 border-solid h-20 flex items-center justify-center'>
        <Navbar />
      </Header>
      <Content className='bg-white'>{children}</Content>
      <Footer className='!bg-white border-t border-gray-200 border-solid !px-0 !pt-16 !pb-0'>
        <MyFooter {...footer.data} />
      </Footer>
      <Contact contacts={contact.data} />
    </AntdLayout>
  )
}

export default Layout

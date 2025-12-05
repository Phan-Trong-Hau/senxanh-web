'use client'

import { Divider, Form } from 'antd'
import Image from 'next/image'

import { Asset } from '@/utils/type'

import ContactForm from '../ContactForm'

type Social = {
  id: string
  href: string
  icon: Asset
}

type Contact = {
  id: string
  text: string
}

type Props = {
  logo: Asset
  social: Social[]
  contacts: Contact[]
  copyright: string
}

const Footer = ({ logo, social, contacts, copyright }: Props) => {
  const [form] = Form.useForm()

  return (
    <div className='container'>
      <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-20'>
        <div className='flex-1'>
          <Image
            src={logo?.url}
            alt='logo'
            width={logo?.width}
            height={logo?.height}
            layout='fixed'
            className='w-[200px] object-cover'
          />

          <div className='mt-6 flex gap-4'>
            {social?.map((social: any) => (
              <a
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                key={social.id}>
                <Image
                  src={social.icon?.url}
                  alt='social'
                  width={social.icon?.width}
                  height={social.icon?.height}
                  layout='fixed'
                  className='w-10 object-cover md:w-12'
                />
              </a>
            ))}
          </div>
          <div className='mt-6'>
            {contacts?.map((contact: Contact) => (
              <p
                key={contact.id}
                className='text-primary mb-1 text-base font-bold md:mb-2'>
                {contact.text}
              </p>
            ))}
          </div>
        </div>
        <div className='max-w-[450px] flex-1'>
          <div className='text-primary my-6 text-xl font-bold'>LIÊN HỆ TƯ VẤN</div>
          <ContactForm form={form} />
        </div>
      </div>
      <Divider />
      <div className='my-6 flex items-center justify-between text-sm text-gray-600'>
        <p>{copyright}</p>
      </div>
    </div>
  )
}

export default Footer

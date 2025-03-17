'use client';

import { Divider, Form, Input } from 'antd';
import Image from 'next/image';

import { Asset } from '@/utils/type';

type Props = {
  logo: Asset;
  social: any[];
  contacts: any[];
  copyright: string;
};

const Footer = ({ logo, social, contacts, copyright }: Props) => {
  return (
    <div className="container">
      <div className="flex md:flex-row flex-col justify-between gap-4 md:gap-20">
        <div className="flex-1">
          <Image
            src={logo?.url}
            alt="logo"
            width={logo?.width}
            height={logo?.height}
            layout="fixed"
            className="w-[200px] object-cover"
          />

          <div className="flex gap-4 mt-6">
            {social?.map((social: any) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
              >
                <Image
                  src={social.icon.url}
                  alt={social.icon.alternativeText}
                  width={social.icon.width}
                  height={social.icon.height}
                  layout="fixed"
                  className="w-[50px] object-cover"
                />
              </a>
            ))}
          </div>
          <div className=" mt-6">
            {contacts?.map((address: any) => (
              <p
                key={address.id}
                className="text-primary font-bold text-base mb-1 md:mb-2"
              >
                {address.text}
              </p>
            ))}
          </div>
        </div>
        <div className="flex-1 max-w-[450px]">
          <Form className="w-full">
            <h3 className="text-primary font-bold text-xl my-6">
              LIÊN HỆ TƯ VẤN
            </h3>
            <Form.Item name="name" className="!mb-3">
              <Input type="text" placeholder="Họ và tên" />
            </Form.Item>
            <Form.Item name="email" className="!mb-3">
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item name="phone" className="!mb-3">
              <Input type="phone" placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item name="content" className="!mb-3">
              <Input.TextArea placeholder="Nội dung cần tư vấn" />
            </Form.Item>
            <Form.Item>
              <button type="submit" className="btn btn-primary">
                Gửi yêu cầu
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center my-6 text-sm text-gray-600">
        <p>{copyright}</p>
      </div>
    </div>
  );
};

export default Footer;

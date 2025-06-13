'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Asset } from '@/utils/type'

type Contact = {
  id: string
  icon: Asset
  href: string
  name: string
}

type Props = {
  contacts: Contact[]
}

const Contact = ({ contacts }: Props) => {
  return (
    <div className='fixed right-4 bottom-4 z-50 md:right-10 md:bottom-10'>
      <div className='flex flex-col gap-4 md:gap-5'>
        {contacts?.map((contact: Contact) => {
          if (!contact.icon?.url || !contact.href) return null
          return (
            <div key={contact.id}>
              <Link href={contact.href} target='_blank' rel='noopener noreferrer'>
                <Image
                  loader={({ src }) => src}
                  src={contact.icon?.url}
                  alt={contact.name}
                  width={contact.icon.width}
                  height={contact.icon.height}
                  className='h-14 w-14'
                />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact

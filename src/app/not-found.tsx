import { Button } from 'antd'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-[calc(100vh-65px)] flex-col items-center justify-center'>
      <h2 className='text-[32px] !font-bold'>404</h2>
      <p className='text-lg'>
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa. Vui lòng quay về trang chủ.
      </p>
      <Button className='btn-primary'>
        <Link href='/'>Quay về trang chủ</Link>
      </Button>
    </div>
  )
}

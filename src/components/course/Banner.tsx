import { Image } from 'antd'

const Banner = ({ image }: any) => {
  return (
    <div className='container'>
      <div className='section'>
        <Image src={image.url} alt={image.name} />
      </div>
    </div>
  )
}
export default Banner

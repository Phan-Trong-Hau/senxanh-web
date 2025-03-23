import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['localhost', 'senxanh-prod-media.s3.ap-southeast-1.amazonaws.com'],
  },
}

export default nextConfig

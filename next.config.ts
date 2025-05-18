import type { NextConfig } from 'next'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = withBundleAnalyzer({
  images: {
    domains: ['localhost', 'senxanh-prod-media.s3.ap-southeast-1.amazonaws.com'],
  },
})

export default nextConfig

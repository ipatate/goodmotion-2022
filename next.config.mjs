/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer'

export default withContentlayer({
  experimental: {
    concurrentFeatures: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [],
  },
})

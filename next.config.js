/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'],
  },
})

const path = require('path');
const basePath = process.env.BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  output: 'standalone',
  basePath: `/${basePath}`,
  assetPrefix: `/${basePath}`,
  publicRuntimeConfig: {
    dev: Boolean(process.env.NODE_ENV === 'development'),
    basePath,
    domain: process.env.DOMAIN || process.env.NEXT_PUBLIC_DOMAIN,
    protocol: process.env.PROTOCOL || process.env.NEXT_PUBLIC_PROTOCOL,
  },
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

module.exports = nextConfig;

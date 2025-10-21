/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  output: 'export',
  basePath: isProd ? basePath : '',
  assetPrefix: isProd ? assetPrefix : '',
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: 'out',
}

module.exports = nextConfig



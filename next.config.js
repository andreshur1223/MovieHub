/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const assetPrefix = basePath ? `${basePath}/` : ''

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: { unoptimized: true },
}

module.exports = nextConfig



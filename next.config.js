/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    reactStrictMode: true,
    swcMinify: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
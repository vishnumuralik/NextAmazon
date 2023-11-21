/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co"],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;

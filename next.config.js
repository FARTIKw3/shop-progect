/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "strapi-progect-shop-production.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

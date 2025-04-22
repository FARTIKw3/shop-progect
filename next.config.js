/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "https://mystrapi5-11-3-production.up.railway.app"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

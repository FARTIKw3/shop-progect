import { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

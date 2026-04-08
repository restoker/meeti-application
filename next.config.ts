import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    domains: ['www.cosmos.so', 'cosmos.so', 'cdn.cosmos.so'],
  },
};

export default nextConfig;

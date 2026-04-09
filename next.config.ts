import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cosmos.so',
      },
      {
        protocol: 'https',
        hostname: 'cosmos.so',
      },
      {
        protocol: 'https',
        hostname: 'cdn.cosmos.so',
      },
    ],
  },
};

export default nextConfig;

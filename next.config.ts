import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/nextjs-notes-app',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

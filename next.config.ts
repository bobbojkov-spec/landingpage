import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make the entire site run under /landingpage
  basePath: "/landingpage",
  assetPrefix: "/landingpage",

  // Your existing image config
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;

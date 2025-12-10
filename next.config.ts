import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Make the entire site run under /landingpage
  basePath: "/landingpage",

  // Image settings
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    unoptimized: false,
  },
};

export default nextConfig;

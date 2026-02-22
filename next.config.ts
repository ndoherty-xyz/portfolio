import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.telescope.fyi",
      },
      {
        protocol: "https",
        hostname: "fluidkey.com",
      },
    ],
  },
};

export default nextConfig;

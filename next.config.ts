import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thequissettlanding.com",
        pathname: "/_assets/media/**",
      },
    ],
  },
};

export default nextConfig;

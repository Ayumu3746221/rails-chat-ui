import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: undefined,
      allowedOrigins: [process.env.NEXT_PUBLIC_API_URL || ""],
    },
  },
};

export default nextConfig;

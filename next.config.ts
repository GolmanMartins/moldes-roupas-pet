import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Check the Next.js application independently of the Cloudflare worker.
  typescript: {
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;

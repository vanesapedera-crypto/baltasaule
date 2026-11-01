import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Vercel bezmaksas plāna bilžu optimizācijas limits ir pārsniegts —
    // bildes tiek rādītas tieši no /public bez apstrādes.
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;

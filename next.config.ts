import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  allowedDevOrigins: ["26.107.132.37"],
  // Permite servir los placeholders de Unsplash con next/image
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
}

export default nextConfig

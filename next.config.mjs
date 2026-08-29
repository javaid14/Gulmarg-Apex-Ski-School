/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  output: "export",
  basePath: "/Gulmarg-Apex-Ski-School",
  assetPrefix: "/Gulmarg-Apex-Ski-School",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

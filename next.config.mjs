/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  output: "export",
  basePath: "/Gulmarg-Apex-Ski-School",
  assetPrefix: "/Gulmarg-Apex-Ski-School/",
};

export default nextConfig;

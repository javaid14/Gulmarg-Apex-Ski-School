/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/Gulmarg-Apex-Ski-School" : "",

  assetPrefix: isProd ? "/Gulmarg-Apex-Ski-School/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

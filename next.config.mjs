/** @type {import('next').NextConfig} */

//const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",

  basePath: "/Gulmarg-Apex-Ski-School",

  assetPrefix: "/Gulmarg-Apex-Ski-School/",

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;

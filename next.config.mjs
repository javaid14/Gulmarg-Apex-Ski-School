/** @type {import('next').NextConfig} */

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",

  basePath: isGitHubPages ? "/Gulmarg-Apex-Ski-School" : "",

  assetPrefix: isGitHubPages ? "/Gulmarg-Apex-Ski-School/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

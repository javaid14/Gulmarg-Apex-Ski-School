/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === "production") {
  const isGitHubPages = true;
}

const nextConfig = {
  output: "export",

  basePath: isGitHubPages ? "/Gulmarg-Apex-Ski-School" : "",

  assetPrefix: isGitHubPages ? "/Gulmarg-Apex-Ski-School/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

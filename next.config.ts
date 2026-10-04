import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo>/. Apply the prefix only for
// production builds so local `npm run dev` stays at the root URL.
const basePath = process.env.NODE_ENV === 'production' ? '/DioriaPersonalWebsite' : '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;

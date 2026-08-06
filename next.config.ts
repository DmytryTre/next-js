import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['172.18.0.1:3000', '172.18.0.1'],
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: { babel: false }
          }
        ],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Prevent ESLint from failing production builds.
   */
  eslint: {
    ignoreDuringBuilds: true,
  },

  /**
   * Workaround for Next.js 15 Flight bundling issue
   * with packages that ship .d.ts files at runtime.
   */
  webpack(config) {
    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.d\.ts$/,
        use: 'ignore-loader',
      });
    }
    return config;
  },
};

export default nextConfig;

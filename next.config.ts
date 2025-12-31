import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /**
   * Explicit Turbopack config (empty on purpose).
   * This silences the Turbopack warning and allows
   * us to keep using Webpack with custom loaders.
   */
  turbopack: {},

  /**
   * Required workaround for Node-only packages
   * like rate-limiter-flexible that ship .d.ts files.
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

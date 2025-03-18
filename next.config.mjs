import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  experimental: {
    workerThreads: true,
    cpus: 4, // Adjust based on your CPU
    scrollRestoration: true,
    largePageDataBytes: 128 * 1000, // 128KB
    webpackMemoryOptimizations: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: false,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.example.com/api/:path*",
      },
    ];
  },
  productionBrowserSourceMaps: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack(config, { dev, isServer }) {
    // Development optimizations
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/.git/**',
          '**/node_modules/**',
          '**/.next/**',
          '**/dist/**',
        ],
        aggregateTimeout: 300,
        poll: false,
      };
    }

    // Production optimizations
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        })
      );
    }

    // Server optimizations
    if (isServer) {
      config.resolve.alias["fs"] = false;
    }

    return config;
  },
};

export default nextConfig;


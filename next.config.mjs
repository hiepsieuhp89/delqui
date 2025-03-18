import TerserPlugin from "terser-webpack-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    optimizeFonts: process.env.NODE_ENV === 'production',
    experimental: {
        workerThreads: true,
        cpus: 4, // Adjust based on your CPU
        scrollRestoration: true,
        largePageDataBytes: 128 * 1000, // 128KB
        webpackMemoryOptimizations: true, // New in Next.js 15
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    //  Skip khi run build
    // eslint: {
    //     ignoreDuringBuilds: true,
    // },
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: false,
    images: {
        minimumCacheTTL: 43200,
        domains: ['upload69.cam', 'upload69.com'],
        unoptimized: process.env.NODE_ENV !== 'production',
    },
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

// Sửa phần này để tránh lỗi module không tìm thấy
// Chỉ sử dụng Cloudflare khi đang ở môi trường phát triển cục bộ
if (process.env.NODE_ENV === "development" && !process.env.VERCEL) {
    try {
        const { setupDevPlatform } = await import("@cloudflare/next-on-pages/next-dev");
        await setupDevPlatform();
    } catch (error) {
        console.warn("Không thể thiết lập Cloudflare dev platform:", error);
    }
}

export default nextConfig;
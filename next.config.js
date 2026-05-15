/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // ✅ Yeh do lines add karo (ESLint errors ko ignore karega)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // ✅ Agar TypeScript errors bhi ignore karne hain toh yeh bhi add karo
  typescript: {
    ignoreBuildErrors: true,
  },
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: ['raw-loader', 'glslify-loader'],
    });
    return config;
  },
};

module.exports = nextConfig;

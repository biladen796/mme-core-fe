/** @type {import('next').NextConfig} */
const isBuildProductEnv = process.env.NEXT_BUILD_ENV === 'production';

const nextConfig = {
  basePath: isBuildProductEnv ? "/mme-core-fe" : "",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true }
};

export default nextConfig;

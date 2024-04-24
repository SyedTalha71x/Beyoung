/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.nike.com'
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'www.spl.com.pk'
            },
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
            {
                protocol: 'https',
                hostname: 'media1.calvinklein.com'
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com'
            },
            {
                protocol: 'https',
                hostname: 'www.youngla.com'
            }
        ]
    },
};

export default nextConfig;

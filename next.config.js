/** @type {import('next').NextConfig} */
const nextConfig =

    {
        compilerOptions: {

            baseUrl: './src',
            paths: {
                '@/components/*': ['components/*'],
                '@/context/*': ['context/*']
            }
        }
    }

module.exports = nextConfig

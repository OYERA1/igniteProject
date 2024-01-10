import type { Config } from 'tailwindcss'

type PluginType = {
    addVariant: (name: string, selector: string) => void
}

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--background-primary))',
                secondary: 'rgb(var(--background-secondary))',
                content: {
                    green: 'rgb(var(--content-green))',
                    red: 'rgb(var(--content-red))',
                    hover: {
                        green: 'rgb(var(--content-hover-green))',
                        red: 'rgb(var(--content-hover-red))'
                    }
                },
                text: {
                    primary: 'rgb(var(--text-primary))',
                    background: 'rgb(var(--text-background))'
                }
            },
            fontFamily: {
                sans: 'var(--font-roboto)',
                mono: 'var(--font-roboto-mono)'
            }
        },
        plugins: [
            function ({ addVariant }: PluginType) {
                addVariant('child', '& > *')
            }
        ]
    }
}
export default config

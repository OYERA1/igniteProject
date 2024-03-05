import type { Config } from "tailwindcss";

type PluginType = {
	addVariant: (name: string, selector: string) => void;
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				product: {
					green: "rgb(var(--product-green))",
					"green-dark": "rgb(var(--product-green-dark))",
					"green-light": "rgb(var(--product-green-light))",
				},
				feedback: {
					red: "rgb(var(--feedback-red))",
					"red-dark": "rgb(var(--feedback-red-dark))",
				},
				base: {
					td: "#2d2b32",
					background: "rgb(var(--base-gray1))",
					elements: "rgb(var(--base-gray2))",
					divider: "rgb(var(--base-gray3))",
					placeholder: "rgb(var(--base-gray4))",
					label: "rgb(var(--base-gray5))",
					text: "rgb(var(--base-gray6))",
					title: "rgb(var(--base-gray7))",
					white: "rgb(var(--base-white))",
				},
			},
			fontFamily: {
				roboto: ["var(--font-roboto)"],
				"roboto-mono": ["var(--font-roboto-mono)"],
			},
		},
		plugins: [
			({ addVariant }: PluginType) => {
				addVariant("child", "& > *");
			},
		],
	},
};
export default config;

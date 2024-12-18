import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
			},
		},
	},
	plugins: [require("@tailwindcss/container-queries"), require("@tailwindcss/typography")],
};

export default config;

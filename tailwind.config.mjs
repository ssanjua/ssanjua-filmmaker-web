/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        myPink: '#FF43D3',
        myGray: '#161616',
      },
    },
  },
	plugins: [],
}

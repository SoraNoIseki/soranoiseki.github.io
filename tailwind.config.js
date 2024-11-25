/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./layouts/**/*.html",
		"./assets/**/*.{js,css}",
		"./content/**/*.md",
		"./themes/**/assets/**/*.{js,css}", // Theme-specific assets
    	"./themes/**/layouts/**/*.html", // Theme-specific layouts
		"./themes/**/content/**/*.md", // Example site content
	],
	theme: {
		extend: {},
	},
	plugins: [
        require('flowbite/plugin')
    ]
};

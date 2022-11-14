/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                darkBlue: 'hsl(213, 19%, 18%)',
                veryDarkBlue: 'hsl(216, 12%, 8%)',
            },
            fontFamily: {
                overpass: ['Overpass', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
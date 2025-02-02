module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // The path to your React components/files
    ],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('../public/02-hero-bg.jpg')"
            }
        },
    },
    plugins: [],
    };
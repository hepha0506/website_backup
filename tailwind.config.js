/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'Noto Sans KR', 'Inter', 'sans-serif'],
            },
            colors: {
                primary: '#50B849', // Heungje Green
                'text-main': '#231F20', // Dark Grey
                'bg-main': '#FFFFFF', // White
                'bg-sub': '#F5F5F5', // Light Grey
            }
        },
    },
    plugins: [],
}

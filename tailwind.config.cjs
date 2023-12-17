/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'success-light': '#f0fe58',
        'success-main': '#c3dc06',
        'success-dark': '#a5be00',
        'warning-light': '#ffc36d',
        'warning-main': '#ff9e32',
        'warning-dark': '#cc4902',
        'error-light': '#ff8b8b',
        'error-main': '#ff4949',
        'error-dark': '#be0000',
        'grey-light': '#ced4da',
        'grey-main': '#adb5bd',
        'grey-dark': '#6c757d',
      },
      minWidth: {
        '115': '115px',
      }
    },
  },
  plugins: [],
}

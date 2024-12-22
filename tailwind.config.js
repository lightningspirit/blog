/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     typography: {
  //       DEFAULT: {
  //         css: {
  //           'code, pre': {
  //             overflowX: 'scroll',
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

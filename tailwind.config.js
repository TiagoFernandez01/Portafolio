/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        font1:['font1','Roboto Mono'],
        font2:['font2','Roboto'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

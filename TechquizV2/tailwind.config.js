import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    // Define os breakpoints personalizados
    breakpoints: {
      xs: "475px", // ou qualquer valor que você preferir
    },
  },
  plugins: [
    flowbitePlugin
  ],
}


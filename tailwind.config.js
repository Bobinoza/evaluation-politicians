/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        'custom-color-1': '#4C4743',
        'icon-color-2': '#A7A29E',
        'hover-color-nav': '#433E3A',

        'bg-amazon-azul-escuro': '#131921',
        'bg-amazon-azul-semi-escuro': '#232E3F',
        'bg-amazon-cinza': '#E3E6E6',
        'bg-hover-nav-amazon': '#EAEDED',
        'texto-amazon-1': '#111',
        
      },

      gridTemplateColumns: {
        'mygrid': 'repeat(4, 1fr)'
      }
    },
  },
  plugins: [],
}


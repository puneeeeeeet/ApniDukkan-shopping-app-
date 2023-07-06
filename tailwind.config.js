/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth:{
      container:"1520px",
      contentContainer:"1280px",
    },
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',   // Small screens and above
        md: '667px', 
        mdl: '768px',  // Medium screens and above
        lg: '960px', 
        lgl: '1024px', // Large screens and above
        xl: '1280px',
        "2xl": "1400px",  // Extra-large screens and above
      },
      colors: {
        blue: '#0071dc',   // Custom primary color
        lightBlue: '#e6f1fc', // Custom secondary color
        yellow: '#ffc220',    // Custom accent color
        hoverBg: '#004f9a', 
        lightText: '#46474a', 
      },
      boxShadow:{
        bannerShadow:"0 1px 2px 1px #00000026"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

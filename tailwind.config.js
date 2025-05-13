/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: '#f6f9fc',
        customGrey: '#3a3a3a',
        paragraphColor: '#425466',
      },
      letterSpacing: {
        title: '-0.04em',
      },
      fontFamily: {
        santa: ['FagoWeb W04 ExtdIta',], // Set as default for sans
        lato: ['Lato',],
        jost: ['Jost',]
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
        'pulse-slow': 'customPulse 7s ease-in-out infinite',
      },
      keyframes: {
        customPulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' }, // Full opacity and original size
          '50%': { opacity: '0.7', transform: 'scale(0.95)' }, // Reduced opacity and slight shrink
        },
      },
      screens: {
        'max-920': { max: '920px' }, // Custom screen size for 920px
      }
    },
  },
  plugins: [],
};

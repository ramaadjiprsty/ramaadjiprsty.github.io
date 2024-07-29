/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding: '16px'
    },
    extend: {
      colors : {
        primary : '#4338ca',
        secondary: '#64748b',
        dark : '#0f172a',
      },
      animation : {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes : {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

}
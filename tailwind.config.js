/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'project-300': '#BFB1FF',
        'project-400': '#9F85FF',
        'project-500': '#7442FF',
        'project-600': '#7130F7',
        'project-600-30': '#7130F73E',
        'indigo-300': '#BFB1FF',
        'grey-900': '#040912',
        'dark': '#0D0E10',
        'dark-80': 'rgba(13, 14, 16, 0.8)',
        'typo-primary': '#FFFFFF',
        'typo-secondary': 'rgba(223, 223, 242, 0.6)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'fk-screamer': ['"FK Screamer"', 'sans-serif'],
      },
      backgroundImage: {
        'nexus-bg': "url('https://cdn.guildfi.com/image/upload/f_auto,c_auto,w_3840,q_auto/v1724920598/nexus_ss1_bg_27aa7f0d74.png?updated_at=2024-08-29T08:36:39.621Z')",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'button': '0px 10px 10px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/line-clamp')
  ],
}

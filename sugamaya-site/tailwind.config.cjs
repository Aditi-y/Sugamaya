module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        emerald: '#138808',
        navy: '#0B1B3B',
        ash: '#F5F7FA',
        primary: {
          DEFAULT: '#0B5ED7',
          600: '#0A50B6',
          700: '#09449A',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}





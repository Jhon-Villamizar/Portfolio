module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryBold: 'var(--color-primaryBold)',
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',
        onPrimaryBg: 'var(--color-onPrimaryBg)',
        icon: 'var(--color-icon)',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryBold: 'var(--color-primaryBold)',
        primaryDark: 'var(--color-primaryDark)',
        primaryBg: 'var(--color-primaryBg)',
        primaryBgSoft: 'var(--color-primaryBgSoft)',
        onPrimaryBg: 'var(--color-onPrimaryBg)',
        divider: 'var(--color-divider)',
        icon: 'var(--color-icon)',
        name: 'var(--color-name)',
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ['./src/**/*.html', './src/**/*.ts'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white-p': 'var(--c-pure-white)',
        'black-p': 'var(--c-pure-black)',
        'white-fx': 'var(--c-white)',
        'black-fx': 'var(--c-black)',
        white: 'var(--c-fl-white)',
        black: 'var(--c-fl-black)',
        capture: {
          1: 'var(--c-capture-1)',
          2: 'var(--c-capture-2)'
        },
        mono: {
          10: 'var(--c-fl-mono-10)',
          30: 'var(--c-fl-mono-30)',
          70: 'var(--c-fl-mono-70)',
          100: 'var(--c-fl-mono-100)',
        },
        brand: {
          d: {
            1: 'var(--c-fl-brand-d-1)',
            2: 'var(--c-fl-brand-d-2)',
            3: 'var(--c-fl-brand-d-3)',
          },
          1: 'var(--c-fl-brand-1)',
          2: 'var(--c-fl-brand-2)',
          l: {
            1: 'var(--c-fl-brand-l-1)',
            2: 'var(--c-fl-brand-l-2)',
            3: 'var(--c-fl-brand-l-3)',
          }
        },
        alert: {
          error: 'var(--c-fl-alert-error)',
          success: 'var(--c-fl-alert-success)',
          info: 'var(--c-fl-alert-info)',
          warning: 'var(--c-fl-alert-warning)',
        }
      }
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '672px',
      // => @media (min-width: 768px) { ... }

      'lg': '1056px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1312px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1584px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active','checked'],
      borderWidth: ['hover','checked'],
      borderColor: ['hover','checked'],
      display: ['group-hover']
    },
  },

  plugins: [],
};

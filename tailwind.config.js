/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary50: '#EFF6FF',
        primary100: '#DBEAFE',
        primary200: '#BFDBFE',
        primary300: '#93C5FD',
        primary400: '#60A5FA',
        primary500: '#3B82F6',
        primary600: '#2563EB',
        primary700: '#1D4ED8',
        primary800: '#1E40AF',
        primary900: '#1E3A8A',

        secondary50: '#E0E7FF',
        secondary100: '#C7D2FE',
        secondary200: '#A5B4FC',
        secondary300: '#818CF8',
        secondary400: '#6366F1',
        secondary500: '#4F46E5',
        secondary600: '#4338CA',
        secondary700: '#3730A3',
        secondary800: '#312E81',
        secondary900: '#292D67',

        gray50: '#F9FAFB',
        gray100: '#F3F4F6',
        gray200: '#E5E7EB',
        gray300: '#D1D5DB',
        gray400: '#9CA3AF',
        gray500: '#6B7280',
        gray600: '#4B5563',
        gray700: '#374151',
        gray800: '#1F2937',
        gray900: '#111827',
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
  },
  plugins: [],
}


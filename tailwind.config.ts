import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          confianca: '#1E3A5F',
          claro: '#2563EB',
        },
        laranja: {
          acao: '#F97316',
          hover: '#EA580C',
        },
        verde: {
          resultado: '#22C55E',
          escuro: '#16A34A',
        },
        vermelho: {
          dor: '#EF4444',
          escuro: '#DC2626',
        },
        amarelo: {
          alerta: '#F59E0B',
        },
        neutro: {
          charcoal: '#1A1A2E',
          grafite: '#374151',
          cinza: '#6B7280',
          claro: '#9CA3AF',
          gelo: '#F3F4F6',
          neve: '#F9FAFB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-montserrat)', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        button: '12px',
        input: '8px',
        badge: '8px',
      },
    },
  },
  plugins: [],
};

export default config;

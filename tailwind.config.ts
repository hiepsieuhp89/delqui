import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	screens: {
  		xs: '360px',
  		xsm: '400px',
  		sm: '568px',
  		md: '768px',
  		lg: '992px',
  		xl: '1280px',
  		xxl: '1560px',
  		xxxl: '1920px'
  	},
  	extend: {
  		boxShadow: {
  			'light-grey': '0 4px 6px rgba(211, 211, 211, 0.6)'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		colors: {
  			'normal-text': '#333333',
  			'main-blue': '#2C3E50',
  			'sub-blue': '#1D2A36',
  			'key-blue': '#7DD5FF',
  			'key-blue2': '#3C8FD2',
  			'form-list-border': '#C7C7C7',
  			'key-visual-copy': '#FFD600',
  			'key-visual-required': '#D56863',
  			successV2: {
  				'50': '#F0FDF5',
  				'100': '#BCF5DA',
  				'200': '#7AECB5',
  				'300': '#37E28F',
  				'400': '#127F4A',
  				DEFAULT: '#1AB369'
  			},
  			warningV2: {
  				'100': '#FFE2AE',
  				'200': '#FFC65C',
  				'300': '#CE8500',
  				'400': '#925E00',
  				DEFAULT: '#FFA90B'
  			},
  			errorV2: {
  				'100': '#FDB8CB',
  				'200': '#FC7797',
  				'300': '#E3063B',
  				'400': '#9F0429',
  				DEFAULT: '#FA3363'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'16': '1rem',
  			'34': '2.125em'
  		},
  		width: {
  			'100': '6.25em',
  			'200': '12.5em',
  			'300': '18.75em',
  			'400': '25em',
  			'500': '31.25em'
  		},
  		maxWidth: {
  			'100': '6.25em',
  			'200': '12.5em',
  			'300': '18.75em',
  			'400': '25em',
  			'500': '31.25em'
  		},
  		minWidth: {
  			'100': '6.25em',
  			'200': '12.5em',
  			'300': '18.75em',
  			'400': '25em',
  			'500': '31.25em'
  		},
  		keyframes: {
  			ripple: {
  				'0%': {
  					opacity: '0',
  					transform: 'scale(0)'
  				},
  				'40%': {
  					opacity: '0.5'
  				},
  				'100%': {
  					opacity: '0',
  					transform: 'scale(1)'
  				}
  			}
  		},
  		animation: {
  			ripple: 'ripple 0.6s linear forwards'
  		},
  		fontFamily: {
  			japanese: [
  				'Noto Sans JP',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			],
  			allison: [
  				'Allison',
  				'cursive'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }: any) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: '1px',
          scrollbarColor: '#c1c1c1',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(31 41 55)',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
export default config;

import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-montserrat)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			gradient: 'gradient 8s linear infinite',
  			float: 'float 6s ease-in-out infinite',
  			'fade-in': 'fade-in 1s ease-out',
  			grid: 'grid 20s linear infinite',
  			'orbit-1': 'orbit-1 20s linear infinite',
  			'orbit-2': 'orbit-2 25s linear infinite',
  			'orbit-3': 'orbit-3 30s linear infinite',
  			'orbit-4': 'orbit-4 15s linear infinite',
  			'orbit-5': 'orbit-5 35s linear infinite',
  			'orbit-6': 'orbit-6 40s linear infinite',
  			'orbit-7': 'orbit-7 45s linear infinite',
  			'spin-slow': 'spin 20s linear infinite',
  			'pulse-slow': 'pulse 4s ease-in-out infinite',
  			trail: 'trail 3s linear infinite'
  		},
  		keyframes: {
  			gradient: {
  				'0%, 100%': {
  					'background-position': '0% 50%'
  				},
  				'50%': {
  					'background-position': '100% 50%'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-20px)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			grid: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'orbit-1': {
  				'0%': {
  					transform: 'rotate(0deg) translateX(140px) rotate(0deg) scale(1)'
  				},
  				'50%': {
  					transform: 'rotate(180deg) translateX(140px) rotate(-180deg) scale(1.2)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateX(140px) rotate(-360deg) scale(1)'
  				}
  			},
  			'orbit-2': {
  				'0%': {
  					transform: 'rotate(72deg) translateX(100px) rotate(-72deg) scale(0.8)'
  				},
  				'50%': {
  					transform: 'rotate(252deg) translateX(100px) rotate(-252deg) scale(1)'
  				},
  				'100%': {
  					transform: 'rotate(432deg) translateX(100px) rotate(-432deg) scale(0.8)'
  				}
  			},
  			'orbit-3': {
  				'0%': {
  					transform: 'rotate(144deg) translateX(140px) rotate(-144deg) scale(1.1)'
  				},
  				'50%': {
  					transform: 'rotate(324deg) translateX(140px) rotate(-324deg) scale(0.9)'
  				},
  				'100%': {
  					transform: 'rotate(504deg) translateX(140px) rotate(-504deg) scale(1.1)'
  				}
  			},
  			'orbit-4': {
  				'0%': {
  					transform: 'rotate(216deg) translateX(90px) rotate(-216deg) scale(0.9)'
  				},
  				'50%': {
  					transform: 'rotate(396deg) translateX(90px) rotate(-396deg) scale(1.1)'
  				},
  				'100%': {
  					transform: 'rotate(576deg) translateX(90px) rotate(-576deg) scale(0.9)'
  				}
  			},
  			'orbit-5': {
  				'0%': {
  					transform: 'rotate(288deg) translateX(160px) rotate(-288deg) scale(1.2)'
  				},
  				'50%': {
  					transform: 'rotate(468deg) translateX(160px) rotate(-468deg) scale(1)'
  				},
  				'100%': {
  					transform: 'rotate(648deg) translateX(160px) rotate(-648deg) scale(1.2)'
  				}
  			},
  			trail: {
  				'0%': {
  					opacity: '0.8'
  				},
  				'100%': {
  					opacity: '0'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

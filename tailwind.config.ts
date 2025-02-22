import type { Config } from "tailwindcss";

export default {
   darkMode: ["class"],
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/styles/**/*.{css,scss,sass,less,styl,stylus}"
   ],
   theme: {
      extend: {
         colors: {
            background: {
               DEFAULT: 'hsl(var(--background))',
               foreground: 'hsl(var(--foreground))'
            },
            primary: {
               DEFAULT: 'hsl(var(--primary))',
               foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
               DEFAULT: 'hsl(var(--secondary))',
               foreground: 'hsl(var(--secondary-foreground))'
            },
            accent: {
               DEFAULT: 'hsl(var(--accent))',
               foreground: 'hsl(var(--accent-foreground))'
            },
            card: {
               DEFAULT: 'hsl(var(--card))',
               foreground: 'hsl(var(--card-foreground))'
            },
            popover: {
               DEFAULT: 'hsl(var(--popover))',
               foreground: 'hsl(var(--popover-foreground))'
            },
            muted: {
               DEFAULT: 'hsl(var(--muted))',
               foreground: 'hsl(var(--muted-foreground))'
            },
            destructive: {
               DEFAULT: 'hsl(var(--destructive))',
               foreground: 'hsl(var(--destructive-foreground))'
            },
            border: 'var(--border)',
            input: 'var(--input)',
            ring: 'var(--ring)',
            chart: {
               '1': 'var(--chart-1)',
               '2': 'var(--chart-2)',
               '3': 'var(--chart-3)',
               '4': 'var(--chart-4)',
               '5': 'var(--chart-5)'
            }
         },
         fontFamily: {
            sans: [
               'Inter',
               'sans-serif'
            ]
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

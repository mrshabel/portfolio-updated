/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                gold: "#ebb60a",

                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // vintage
                main: "var(--main)",
                overlay: "var(--overlay)",
                bg: "var(--bg)",
                bw: "var(--bw)",
                blank: "var(--blank)",
                text: "var(--text)",
                mtext: "var(--mtext)",
                border: "var(--border)",
                ring: "var(--ring)",
                ringOffset: "var(--ring-offset)",

                secondaryBlack: "#212121",
            },
            borderRadius: {
                base: "5px",
            },
            boxShadow: {
                shadow: "var(--shadow)",
            },
            translate: {
                boxShadowX: "4px",
                boxShadowY: "4px",
                reverseBoxShadowX: "-4px",
                reverseBoxShadowY: "-4px",
            },
            fontWeight: {
                base: "500",
                heading: "700",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                "fade-in-up": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in-up": "fade-in-up 0.5s ease-out",
                "fade-in-down": "fade-in-down 0.5s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

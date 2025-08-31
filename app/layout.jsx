import { ThemeProvider } from "@/components/theme-provider";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main-nav";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
    title: "Shabel - Software Engineer",
    description:
        "Building distributed systems and backend infrastructure with Go and Python.",
    icons: {
        icon: "/profile.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${dmSans.className} text-foreground bg-background dark:bg-secondaryBlack bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="mx-auto min-h-screen p-12 px-6 sm:p-24 max-w-6xl animate-fade-in-up overflow-x-hidden">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}

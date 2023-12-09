import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr ShaBel | Portfolio",
  description: "A showcase of Shabel's skills and experience.",
  icons: {
    icon: "/profile.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className=" animate-fade-in-up overflow-x-hidden mx-auto min-h-screen  p-24 px-6 max-w-5xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

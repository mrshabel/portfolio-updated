import { ThemeProvider } from "@/components/theme-provider";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mr ShaBel | Portfolio",
  description: "A showcase of Shabel's skills and experience.",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

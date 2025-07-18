import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "Generated by Notion-Clone",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/next.svg",
        href: "/next.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/next.svg",
        href: "/next.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
              >
              {children}
            </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
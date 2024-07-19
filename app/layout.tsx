import { GamepadsProvider } from 'react-ts-gamepads';
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/modetoggle";
import { Metadata } from "next";
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const inter = Inter({ subsets: ["latin"],   variable: "--font-sans" });

disableReactDevTools()

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "A game made by me in Next js that is held together by hopes, dreams and duct-tape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
       <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Tic Tac Toe</title>
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable)}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
              {children}
          </ThemeProvider>
        </body>
    </html>
  );
}

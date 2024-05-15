import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/modetoggle";

const inter = Inter({ subsets: ["latin"],   variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
            <div id="modetoggle" className="absolute animate-fade top-4 right-4">
              <ModeToggle />
            </div>
           <p className="absolute animate-fade bottom-4 left-4 text-zinc-500">
              Made with ♥️ by Hanan
            </p>
              {children}
          </ThemeProvider>
        </body>
    </html>
  );
}

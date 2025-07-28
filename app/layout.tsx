import { Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/dashboard/context/ThemeContext";
import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";


const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./header/Header";
import { ModalProvider } from "./context/ModalContext";
import FloatingIcons from "./functions/Floating";
import { SidebarProvider } from "./context/SidebarContext";
import { Birds } from "./functions/Birds";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeWrapper from "./functions/ThemeWrapper";
import { FilebarProvider } from "./context/FilebarContext";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul",
  description: "Created by Abdulmumin Ibrahim",
  
};

export default  function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const cookieStore = await cookies();
  //const theme = cookieStore.get("theme")?.value || "light"; 
  return (
    <html lang="en">
  <SpeedInsights/>
      <ThemeProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center`}
         
        >
          <ThemeWrapper>
          <ModalProvider>
            <SidebarProvider>
              <Birds />
              <Header />
              <FilebarProvider>
              {children}
              </FilebarProvider>
            </SidebarProvider>
          </ModalProvider>
          <footer className="bg-gray-900 text-white p-4 text-center">
            <p>&copy; 2025 Abdulmumin Ibrahim ©️</p>
          </footer>
          <FloatingIcons />
          </ThemeWrapper>
        </body>
      </ThemeProvider>
    </html>
  );
}
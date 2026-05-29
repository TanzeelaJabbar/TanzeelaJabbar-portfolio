import { Geist, Geist_Mono } from "next/font/google";
import "@/app/styles/global.css";
import "@/app/styles/color.css";
import "@/app/styles/typography.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanzeela - Personal Portfolio",
  description: " A personal portfolio website showcasing the projects and skills of Tanzeela, a software developer specializing in web development and design.  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
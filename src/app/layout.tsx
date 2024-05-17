import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Provider from "@/app/Components/Provider";
import NavBar from "@/app/Components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Provider>
        <NavBar/>
        <body className={inter.className}>{children}</body>
      </Provider> */}
      <body className={inter.className}>
        {children}
        </body>
      
    </html>
  );
}

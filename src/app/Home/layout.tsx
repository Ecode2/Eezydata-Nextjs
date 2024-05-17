import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Provider from "@/app/Components/security/Provider";
import NavBar from "@/app/Components/common/nav-bar";
import Protected from "@/app/Components/security/Protected";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Page",
  description: "Dashboard of the app",
};

export default function HomeLayout({children}:
  {children: React.ReactNode}) {

  return (
      <Provider>
        <Protected>
          <main>
            {children}
          </main>
        </Protected>
      </Provider>
  );
}

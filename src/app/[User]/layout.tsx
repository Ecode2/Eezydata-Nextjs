import type { Metadata } from "next";
import Protected from "@/Components/security/Protected";
import MenuBar from "@/Components/home/MenuBar";
import { getServerSideProps } from "@/lib/data";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { MenuSkeleton } from "@/Components/home/skeletons";


export const metadata: Metadata = {
  title: "User Dashboard | EezyData",
  description: "Dashboard of the app",
};

export default async function HomeLayout({children, params}:
  {children: React.ReactNode, params: {User: string}}) {

    const session = await getServerSideProps();
    if (session?.user?.username !== params.User) {
        redirect('/');
    }

  return (
        <Protected>
          <main className=" dark:bg-corduroy-950 border-corduroy-400 sm:border sm:rounded-lg max-w-screen-sm">

            {children}
            
            <section className="menu-contain max-w-screen-sm">
              <Suspense fallback={<MenuSkeleton/>}>
                <MenuBar username={`${params.User}`}/>
              </Suspense>
            </section>
          </main>
        </Protected>
  );
}

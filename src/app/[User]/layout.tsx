import type { Metadata } from "next";
import Protected from "@/Components/security/Protected";
import MenuBar from "@/Components/home/MenuBar";
import { getServerSideProps } from "@/lib/data";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { MenuSkeleton } from "@/Components/home/skeletons";


export const metadata:  Metadata = {
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
          <main className=" dark:bg-corduroy-950 border-corduroy-400 border-x-[1.2px] overflow-hidden rounded-lg max-w-[500px]  h-screen " >

            {children}
            
            <section className="menu-contain mb-[4px] max-w-[500px]">
              <Suspense fallback={<MenuSkeleton/>}>
                <MenuBar username={`${params.User}`}/>
              </Suspense>
            </section>
          </main>
        </Protected>
  );
}

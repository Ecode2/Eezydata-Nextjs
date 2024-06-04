import "@/styles/Home.css";
import React, { Suspense } from "react";
import AccountInfo from '@/Components/home/account-info/AccountComponent';
import ServiceBar from "@/Components/home/Services";
import ActionBar from "@/Components/home/ActionBar";
import UserBar from "@/Components/home/UserBar";
import { ActionSkeleton, AccountSkeleton, ServiceSkeleton, UserSkeleton } from "@/Components/home/skeletons";

export default async function Home({params}: {params: {User: string} }) {

    return (
    <section className="w-full h-screen max-w-screen-sm items-center flex flex-col flex-wrap gap-y-10">

        <section className="user-contain" >
            <Suspense fallback={<UserSkeleton/>}>
                <UserBar username={params.User}/>
            </Suspense>
        </section>
        
        <section className="w-full px-1 pt-20 ">
            <Suspense fallback={<AccountSkeleton/>}>
                <AccountInfo/>
            </Suspense>
        </section>

        <section className="action-contain" >
            <Suspense fallback={<ActionSkeleton/>}>
                <ActionBar username={params.User}/>
            </Suspense>
        </section>

        <section className="service-contain">
            <Suspense fallback={<ServiceSkeleton/>}>
                <ServiceBar/>
            </Suspense>
        </section>

    </section>
    );
}
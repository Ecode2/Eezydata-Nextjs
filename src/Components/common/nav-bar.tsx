"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function NavBar(){
    
    const {data: session, status} = useSession();
    console.log(session, status);

    return(
        <nav className="z-50 bg-gray-900 w-screen h-10 fixed top-0 left-0  px-4 flex flex-row flex-nowrap justify-between items-center">

            <h1 className="text-green-700">EezyData</h1>
            <div className="flex flex-row flex-nowrap justify-center gap-4 items-center">
                {session?.user ? ( 
                    <>
                        <p className="text-green-700"> 
                            <Link href={`/${session.user.username}`}>{session.user.username}</Link> 
                         </p>
                        <Link className="text-red-600" href="/api/auth/signout">Logout</Link>
                        {/*<button className="text-red-600" onClick={() => signOut()}>Logout</button>*/}
                    </>
                ) : (
                    <>
                        <button className="text-green-600" onClick={() => signIn()}>SignIn</button>
                    </>
                )}
            </div>

        </nav>
    );
}

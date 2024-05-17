//Where all data fetching operation will 
//take place. This file will be used to fetch data from the server.
import type {GetServerSidePropsContext} from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

  
// Use it in server contexts
export async function getServerSideProps() {
  //const session = await getServerSession(authOptions);
  const session = await getSession();
  console.log('yes session', session);

  if (!session) {
    console.log('no session');
    //redirect('/api/auth/signin');
  }

  console.log('session', session);
  return {
    props: {
      session,
    }
  }
}
'use server';

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/auth";

const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export async function checkToken() {/* token: string | undefined) { */

  const session = await getServerSession(authOptions);
  const token = session?.user?.access_token;

  if (typeof token !== 'string') {redirect('/api/auth/signin')};

  try {
    const response = await axios.post(
      `${apiUrl}/auth/user/confirm?token=${token}`,
    )

    console.log(response.data)
    response.status !== 200 && (redirect('/api/auth/signin'))

    if (!response.data) {redirect('/api/auth/signin')}
      
  }catch (error) {
    redirect('/api/auth/signin');
  } 

}
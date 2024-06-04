'use server';

import axios from "axios";
import { redirect } from "next/navigation";
import { getServerSideProps } from "@/lib/data";
import { UserInfo, WalletInfo } from "@/lib/definitions";

const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;



export async function checkToken() {

  const session = await getServerSideProps(); 

  const token = session?.user?.access_token;

  if (typeof token !== 'string') {redirect('/api/auth/signin')};

  try {
    const response = await axios.post(
      `${apiUrl}/auth/user/confirm?token=${token}`,
    )

    response.status !== 200 && (redirect('/api/auth/signin'))

    if (!response.data) {redirect('/api/auth/signin')}
      
  }catch (error) {
    redirect('/api/auth/signin');
  } 

}

export const getWalletInfo = async (token: string, username: string) => {
  try {
    const response = await axios.post(
      `${apiUrl}/paystack/info?username=${username}`,
      {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }
    )

    if (response.status !== 200) {return false}

    const walletinfo : WalletInfo = response.data;

    if (walletinfo.is_active != true) {return false};

    return {
      'account_name': walletinfo.account_name,
      'account_number': walletinfo.account_number,
    }
      
  }catch (error) {
    return false
  } 
}

export const getUserInfo = async (token: string) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/auth/user/info`,
      {
        headers: {
          "Authorization" : `Bearer ${token}`
        }
      }
    )

    if (response.status !== 200) {return false}

    const userinfo : UserInfo = response.data;

    if (userinfo.is_active != true) {return false}

    return {
      'user_balance': userinfo.balance,
      'user_bank': userinfo.wallet_type,
    }
      
  }catch (error) {
    return false
  } 
}


export const getPriceInfo = async (brand: string | null | string[] | undefined, brandType: string | null | string[] | undefined) => {
  return 0;
}
//Where all data fetching operation will 
//take place. This file will be used to fetch data from the server.
import { getServerSession, Session} from "next-auth";
import { authOptions } from "@/app/api/auth/auth";
import { redirect } from "next/navigation";
import { getUserInfo, getWalletInfo } from "@/lib/actions";

  
export async function getServerSideProps(): Promise<Session> {

  const session = await getServerSession(authOptions);

  if (!session?.user?.access_token) {
    redirect('/api/auth/signin');
  }

  return session;
}


export async function fetchAccountInfo() {

  
  const session = await getServerSideProps();

  const [walletinfo, userinfo] = await Promise.all([
    getWalletInfo(session?.user?.access_token, session?.user?.username),
    getUserInfo(session?.user?.access_token)
  ]);

  if (!walletinfo || !userinfo) {
    return false;
  }

  const { account_number, account_name } =  walletinfo;
  const {user_balance, user_bank} = userinfo;

  return {
    account_number,
    account_name,
    user_balance,
    user_bank
  }

}



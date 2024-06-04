import { fetchAccountInfo } from "@/lib/data";


export const PriceBarInfo = async () => {
    const { account_number, account_name, user_balance, user_bank } = await fetchAccountInfo() as { account_number: string; account_name: string; user_balance: number; user_bank: string | null; };
    return { account_number, account_name, user_balance, user_bank };
}
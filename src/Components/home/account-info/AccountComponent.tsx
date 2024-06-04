import { PriceBarInfo } from "@/Components/home/account-info/AccountInfoServer";
import PriceBar from "@/Components/home/account-info/AccountInfo";

export default async function AccountInfo() {

    const priceBarInfo = await PriceBarInfo();

    return(
        <PriceBar 
            account_number={priceBarInfo.account_number} 
            account_name={priceBarInfo.account_name} 
            user_balance={priceBarInfo.user_balance} 
            user_bank={priceBarInfo.user_bank}
        />
    )

}
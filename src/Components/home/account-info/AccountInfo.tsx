"use client";
import { EyeIcon, EyeSlashIcon, FolderIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import {FilmIcon} from '@heroicons/react/24/outline';
import { getCookie, setCookie, deleteCookie } from '@/Components/common/cookie';

export default function PriceBar ({ account_number, account_name, user_balance, user_bank }:
    { account_number: string; account_name: string; user_balance: number; user_bank: string | null; }){ 

    const [hideBalance, setHideBalance] = useState(""); //cookies().get("hideBalance");

    useEffect(() => {
        
        const updateState = async () => {
            
            const currentValue = getCookie("hideBalance");

            if (hideBalance != currentValue?.value && typeof currentValue?.value === "string") {

                typeof currentValue?.value === "undefined"? setHideBalance("")  : setHideBalance(currentValue?.value);

            }
  
        }

        return () => {
            updateState();
        };
    }, [hideBalance]);

    const handleHideBalance = async () => {

        if (hideBalance) {

            deleteCookie("hideBalance");
            setHideBalance("");

        }else {
            deleteCookie("hideBalance");
            setCookie("hideBalance", "hide");
            setHideBalance("hide");
        }
        
    }

    return(

        <ul className="account-bar">
            <li className="account-info">
                <div className="account-num">
                    <p>Available Balance</p>
                    <div className="show-hide">
                        <p> {!user_balance ? (!hideBalance ? "****" : `#${user_balance}` ) : "#0.0" } </p>
                        <button onClick={() => handleHideBalance() }> 
                            {!hideBalance? 
                                <EyeSlashIcon className="eye-icon"/> : 
                                <EyeIcon className="eye-icon"/>
                            } 
                        </button>
                    </div>
                </div>
                <button className="btn">Top Wallet</button>
            </li>
 
            <li className="account-info">
                <div className='two-flex'> 
                    {account_number ? account_number : "0001112223 "} 
                    <span><FilmIcon className='copy-icon'/></span>
                </div>
                <div className='txt-start pd-x3'> {user_bank ? user_bank : "Bank Name"} </div>
            </li>

            <li className="account-info">
                <div className='txt-start'> {account_name ? account_name : "account/name"} </div>
                <div className='txt-start pd-x3'>1% Intrest</div>
            </li>
        </ul>

    )
}



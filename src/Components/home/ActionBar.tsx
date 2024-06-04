"use client";
import { UserGroupIcon, BanknotesIcon} from '@heroicons/react/24/outline';
import {BarsArrowDownIcon} from "@heroicons/react/24/outline";
import {BarsArrowUpIcon} from "@heroicons/react/24/outline";
import Link from "next/link";


export default function ActionBar({username}: {username: string}) {
   
    return(
        <div className="action-bar">
            <Link href={`/${username}`} className="icon-contain">
                <UserGroupIcon className='icon'/>
                <p>Referral</p>
            </Link>

            <Link href={"/johndoe"} className="icon-contain">
                <BarsArrowUpIcon className='icon'/>
                <p>Transfer</p>
            </Link>

            <Link href={"/johndoe"} className="icon-contain">
                <BarsArrowDownIcon className='icon'/>
                <p>Withdraw</p>
            </Link>
        </div>
    )
    
}
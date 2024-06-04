"use client";
import { HomeIcon, WalletIcon, UsersIcon, BanknotesIcon} from '@heroicons/react/24/outline';
/* import { HomeIcon } from '@heroicons/react/24/solid'; */
import Link from "next/link";

export default function MenuBar({username}: {username: string}) {
   
    return(
        <footer className="menu-bar">
            <Link href={`/${username}`} className="flex flex-col justify-center items-center">
                <HomeIcon className='icon'/>
                <p>Home</p>
            </Link>

            <Link href={`/${username}/Pricing`} className="icon-contain">
                <BanknotesIcon className='icon'/>
                <p>Prices</p>
            </Link>

            <Link href={`/${username}/Wallet`} className="icon-contain">
                <WalletIcon className='icon'/>
                <p>Wallet</p>
            </Link>

            <Link href={`/${username}/Profile`} className="icon-contain">
                <UsersIcon className='icon'/>
                <p>Profile</p>
            </Link>
        </footer>
    )
    
}
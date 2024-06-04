"use client";
import { UserCircleIcon} from '@heroicons/react/24/outline';
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function UserBar({username}: {username: string}) {
   
    return(
        <nav className="user-bar">
            
                <Link href={`/${username}`} className="two-flex">
                    <UserCircleIcon className='user-icon'/> {/* Add a condition to use username if present */}
                    <p>{` Hi ${username}`}</p>
                </Link>

            <div className="user-contact">
                <Link href={"/johndoe"} className="icon-contain">
                    <PhoneArrowDownLeftIcon className='icon'/>
                </Link>

                <Link href={"/johndoe"} className="icon-contain">
                    <BellIcon className='user-icon'/>
                </Link>
            </div>
        </nav>
    )
    
}
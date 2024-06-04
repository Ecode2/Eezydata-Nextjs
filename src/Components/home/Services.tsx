"use client";

import { UserCircleIcon, TvIcon, DevicePhoneMobileIcon, BuildingLibraryIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'

export default function ServiceBar() {
    return(
        <ul className="service-bar max-w-full">
            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <UserCircleIcon className='icon'/>
                    <p>Data</p>
                </Link>
            </li>

            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <DevicePhoneMobileIcon className='icon'/>
                    <p>Airtime</p>
                </Link>
            </li>

            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <TvIcon className='icon'/>
                    <p>Cable Tv</p>
                </Link>
            </li>

            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <LightBulbIcon className='icon'/>
                    <p>Electricity</p>
                </Link>
            </li>

            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <BuildingLibraryIcon className='icon'/>
                    <p>Education</p>
                </Link>
            </li>

            <li>
                <Link href={"/johndoe"} className="icon-contain">
                    <UserCircleIcon className='icon'/>
                    <p>More</p>
                </Link>
            </li>
        </ul>
    )
    
}
import React from 'react';
// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

export type WalletInfo = {
    user_id: number,
    user_code: string,
    authUser_id: string, 
    account_name: string,
    bvn: string,
    bank: string,
    account_id: number,
    account_number: string,
    is_active: boolean
}


export type UserInfo = {
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    balance: number,
    wallet_type: string | null,
    phone: string,
    is_active: boolean,
    is_superuser: boolean
}

export type SubServices = {
    serviceIcon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {title?: string; titleId?: string;} & React.RefAttributes<SVGSVGElement>>;
    serviceName:string;
    subServiceType: string;
}

export type Service = {
    icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {title?: string; titleId?: string;} & React.RefAttributes<SVGSVGElement>>,
    serviceType: string;
    subServices: SubServices[];
}
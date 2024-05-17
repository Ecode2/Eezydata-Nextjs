import nextAuth from "next-auth";

declare module "next-auth"{
    interface Session {
        user :{
            username: string,
            email: string,
            firstname: string,
            lastname: string,
            balance: number,
            wallet_type: null | string,
            phone: string,
            is_active: boolean,
            is_superuser: boolean,
            access_token: string,
            token_type: string
        }
    }
}
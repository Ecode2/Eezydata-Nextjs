"use server";
import { cookies } from "next/headers";

/* export const cookie = {
    get: (key: string) => {
        return cookies().get(key); //localStorage.getItem(key);
    },
    set: (key: string, value: string) => {
        cookies().set(key, value); //localStorage.setItem(key, value);
    },
    delete: (key: string) => {
        cookies().delete(key); //localStorage.removeItem(key);
    }
}; */

export const getCookie = (key: string) => {
    return cookies().get(key); //localStorage.getItem(key);
};

export const setCookie = (key: string, value: string) => {
    cookies().set(key, value); //localStorage.setItem(key, value);
}

export const deleteCookie = (key: string) => {
    cookies().delete(key); //localStorage.removeItem(key);
}

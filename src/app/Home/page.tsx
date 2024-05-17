"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import {useState } from "react";
import React from "react";

export default function Home() {
    const {data: session} = useSession();
    const [price, setPrice] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    const getPrice = async () => {
        
        try {
            const res = await axios.post('http://127.0.0.1:5500/api/v1/bills/plan',
                {
                    bill_type: "cable",
                    brand: "dstv"
                },
                {
                    headers: {
                        Authorization: `Bearer ${session?.user.access_token}`
                    }
                }
            );

            console.log(res.data, 'data')
            setPrice(res.data);

        } catch(err) {
            setError(err);
        }
    }

    return (
    <main className="w-screen h-screen gap-y-5 flex flex-col justify-center items-center flex-wrap">
        
        {!session && <h1>Home Page</h1>}
        {session && <p> Welcome {session.user.username}</p>}

        {error && <p>{error.message}</p>}
        <div className="w-1/2 border border-slate-800 bg-green-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatum ipsam illo explicabo provident amet, aperiam quod sit incidunt doloremque hic ea quaerat obcaecati officia qui suscipit quisquam culpa natus.
        </div>
        <div className="w-1/2 border border-slate-800 bg-green-800">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore voluptatum ipsam illo explicabo provident amet, aperiam quod sit incidunt doloremque hic ea quaerat obcaecati officia qui suscipit quisquam culpa natus.
        </div>
        <button onClick={getPrice}>Get Prices</button>

        {price  && <p>{price}</p>}
    </main>
    );
}

import { NextApiRequest, NextApiResponse, NextPage } from "next";
import { type NextRequest, NextResponse } from "next/server";
import Pricing from "@/app/[User]/Pricing/page";
import { getPriceInfo } from "@/lib/actions";
/* 
export default NextPage(Pricing, {
    getStaticProps: async(context: { params: { serviceType: any; }; }) => {
        //fetch service info from db
        const {serviceType} = context.params;
        if (serviceType) {
            //get info from data.tsx
            return {
                props: {/* data },
            }
        }
        return { 
            props: {/* data },
        }
    }
})  
*/
/* export {handler as GET, handler as POST} */
/* create a GET function to get the info required from a function in data.tsx
using the pages query functions as parameters */

export async function GET (req: NextRequest) {

    const searchParams = req.nextUrl.searchParams;
    const {serviceName, subServiceType} = {subServiceType: searchParams.get("subServiceType"), serviceName: searchParams.get("serviceName")};

    console.log("query", serviceName, subServiceType)

    if (req.method != "GET" && !serviceName && !subServiceType && typeof serviceName != "string" && typeof subServiceType != "string") {
        
        return NextResponse.json({error: "Invalid request"}, {status: 400});
    } 

    try {
        // create a custom type for the return value of getPriceInfo
        const priceInfo = await getPriceInfo(serviceName, subServiceType);
        return NextResponse.json({priceInfo: priceInfo}, {status: 200});

    } catch (err) {
        return NextResponse.json({error: "An error occured"}, {status: 500});
    }
} 

/* export {handler as GET, handler as POST} */
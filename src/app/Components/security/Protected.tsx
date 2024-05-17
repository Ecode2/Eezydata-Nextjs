import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/auth";
import { checkToken } from "../../lib/actions";

const Protected = async({children}: {children: React.ReactNode}) => {

    /* const data = await getServerSession(authOptions);
    await checkToken(data?.user?.access_token); */

    await checkToken();

    return (
        <>
        {children}
        </>
    )
}

export default Protected;
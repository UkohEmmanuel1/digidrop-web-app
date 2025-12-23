import { getToken } from "@/lib/auth";
import { redirect } from "next/navigation";
import { cache } from "react";



export const loginRequired = cache(async ()=>{
    const accessToken = await getToken();
    if (!accessToken) {
        redirect("/login")
    }
    return { isAuthenticated: true, userToken: accessToken }
})
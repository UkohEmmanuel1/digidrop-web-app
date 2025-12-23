import { getProfileStats } from "@/app/data/profile/profile";


export async function GET(req:Request) {
    const data = await getProfileStats();
    console.log("backend res:", data)
    return Response.json(data)

}
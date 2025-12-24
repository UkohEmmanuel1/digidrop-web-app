import { getProfileStats } from "@/app/data/profile/profile";


export async function GET(req:Request) {
    const data = await getProfileStats();
    return Response.json(data)

}
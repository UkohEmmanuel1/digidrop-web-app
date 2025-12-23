import { getLeaderboardstats } from "@/app/data/profile/profile";


export async function GET(){
    const data = await getLeaderboardstats()
    return Response.json(data)
}
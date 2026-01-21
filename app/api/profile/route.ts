import { getProfile } from "@/app/data/profile/profile";

export async function GET() {  
    const data = await getProfile();
    return Response.json(data)   
}
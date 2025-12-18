import { apiClient } from "@/apiClient/client";
import { loginRequired } from "../users";


export async function getProfile() {
    await loginRequired()
    const res = await apiClient.get('/profile');
    return res.data;
}

export async function getProfileStats() {
    await loginRequired()
    const res = await apiClient.get('/profile/stats');
    return res.data;
}
 
export async function getLeaderboardstats(){
    await loginRequired()
    const res = await apiClient.get('/leaderboard/')
    return res.data
}
import { apiClient } from "@/apiClient/client";
import { loginRequired } from "../users";


export async function getNewTasks() {
    await loginRequired()
    const res = await apiClient.get('/tasks/');
    console.log("api res:", res.data)
    return res.data;
}
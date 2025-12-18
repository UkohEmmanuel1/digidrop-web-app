import { apiClient } from "@/apiClient/client";
import { loginRequired } from "../users";


export async function getNewTasks() {
    await loginRequired()
    const res = await apiClient.get('/tasks/');
    return res.data;
}
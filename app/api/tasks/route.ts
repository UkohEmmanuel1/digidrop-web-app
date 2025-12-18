import { getNewTasks } from "@/app/data/tasks/onsite-task"



export async function GET(){
    const data = await getNewTasks()
    return Response.json(data)
}
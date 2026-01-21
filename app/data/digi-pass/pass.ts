import { apiClient } from "@/apiClient/client"
import { DigiPass } from "@/types/response-type"


export const getDigiPasses =async () => {
    const entry_passes = await apiClient.get('/digi-passes')
    return entry_passes.data
}


export const getPassById = async (id:string): Promise<DigiPass> => {
    try {
        const single_pass = await apiClient.get(`/passes/${id}`)
        return single_pass.data
    } catch (error) {
        console.log("API Error: ", error)
        throw error;
    }
}
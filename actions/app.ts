import { apiClient } from "@/apiClient/client"


type Payload={
    txHash: string,
    newPassId: number
    isUpgrade: boolean
}

export async function verifyPayment(payload:Payload) {
    try {
        const res = await apiClient.post('/verify/payment', payload)
        return res.data
    } catch (error:any) {
        console.error('payment verification error:', error.response?.data || error);
        throw new Error('Payment verification failed');
    }
}
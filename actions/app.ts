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


export async function startTask(taskId: number) {
  try {
    const res = await apiClient.post(`/tasks/${taskId}/start`);
    return res.data;
  } catch (error: any) {
    console.error('Start task error:', error?.response?.data || error);
    throw new Error(
      error?.response?.data?.error || 'Failed to start task'
    );
  }
}

export async function completeTask(taskId: number) {
  try {
    const res = await apiClient.post(`/tasks/${taskId}/completed`);
    return res.data;
  } catch (error: any) {
    console.error('Complete task error:', error?.response?.data || error);
    throw new Error(
      error?.response?.data?.error || 'Failed to complete task'
    );
  }
}

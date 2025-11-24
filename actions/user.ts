'use server'

import { apiClient } from "@/apiClient/client";
import { setRefreshToken, setToken } from "@/lib/auth";


export async function getNonce() {
    try {
        const res = await apiClient.get('/login');
        return res.data
    } catch (error) {
        throw error || new Error("Nonce failed'")
    }
}

export async function walletLogin(walletAddress: string, signature: string, ref?:string) {
  try {
    const { data } = await apiClient.post('/login', { walletAddress, signature }); // Use apiClient here
    await setToken(data.token); // Assuming you have setRefreshToken too if needed
    await setRefreshToken(data.refresh);
    return data;
  } catch (error) {
    throw new Error('Login failed');
  }
}

export async function getProfile(){
   try {
       const response = await apiClient.get('/profile')
       return response.data
   } catch (error) {
      console.log("something went error: api error")
     throw error
   }
}
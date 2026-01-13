"use client"
import { apiClient } from "@/apiClient/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

export default function MintConfirmPage() {
    const router =useRouter()
    useEffect(() => {
  let interval: NodeJS.Timeout;

  const checkStatus = async () => {
    const { data } = await apiClient.get("/profile");

    if (data.has_pass) {
      clearInterval(interval);
      router.replace("/dashboard");
    }
  };

  checkStatus(); // immediate
  interval = setInterval(checkStatus, 10000);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FaSpinner size={30} color="white" />
          <p className="mt-4 text-lg font-semibold text-white">
              Waiting for blockchain confirmation…
          </p>
          <p className="text-sm text-gray-500">
            Please return after confirming the transaction in your wallet.
          </p>
    </div>
  );
}

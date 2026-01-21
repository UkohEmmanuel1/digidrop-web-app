"use client"
import { Suspense } from "react"
import EditProfileClient from "../_components/EditProfileClient";

const EditProfile = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditProfileClient />
    </Suspense>
  )
}

export default EditProfile
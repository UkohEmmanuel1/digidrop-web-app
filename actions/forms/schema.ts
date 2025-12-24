import { z } from "zod"

export const profileSchema = z.object({
  names: z.string().min(2).max(80),
  email: z.string().email()
})
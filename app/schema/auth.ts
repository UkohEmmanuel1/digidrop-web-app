import { z } from "zod";


export const signupSchema = z.object({
    email: z.string().email({message:"please enter a valid email"}).min(2, {message:"email is required"}),
    username: z.string(),
    password: z.string().min(4, {message: "password is too short"}),
    referral_code: z.string().optional()
})

export type UserSignupSchemaType = z.infer<typeof signupSchema>;
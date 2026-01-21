import { z } from "zod";


export const signupSchema = z.object({
    email: z.string().email({message:"please enter a valid email"}).min(2, {message:"email is required"}),
    username: z.string(),
    password: z.string().min(4, {message: "password is too short"}),
    referral_code: z.string().optional()
})

export const forgetPasswordSchema = z.object({
    email: z.string().email({message:"please enter a valid email"}).min(2, {
      message: "your email is required.",
    }),
  })

export const PasswordResetSchema = z.object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirm_password: z.string().min(8, "Please confirm your password"),
  }).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"], // this tells Zod where the error should appear
  });



export type UserSignupSchemaType = z.infer<typeof signupSchema>;
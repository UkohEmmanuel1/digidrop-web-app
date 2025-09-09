"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { forgetPasswordSchema, PasswordResetSchema } from '@/app/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const PasswordReset = () => {
    const form = useForm<z.infer<typeof PasswordResetSchema>>({
        resolver: zodResolver(PasswordResetSchema),
        defaultValues: {
          password: "",
          confirm_password: ""
        },
      })

    function onSubmit(data: z.infer<typeof PasswordResetSchema>) {
    toast.success('email sent successfully, please check your email for reset link')
    }
  return (
    <div className='h-screen w-full relative'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-[320px] h-[200px] md:w-[580px] bg-[#181818] text-white md:h-[400px] border-2 border-dashed outline-none shadow rounded-none'>
                <CardHeader>
                    <CardTitle className='font-bold font-chakra text-2xl text-center py-2'>Reset Password</CardTitle>
                    <CardDescription className='text-lg text-center capitalize'>provide your new password</CardDescription>
                </CardHeader>
                <CardContent className='flex items-center justify-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className='w-[80%]'>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input placeholder="enter your register email address" {...field} className='my-4' />
                            </FormControl>
                            <FormMessage />
                            </FormItem>

                        )}
                        />
                        <br />
                        <FormField
                        control={form.control}
                        name="confirm_password"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                                <Input placeholder="confirm your new password" {...field} className='my-4' />
                            </FormControl>
                            <FormMessage />
                            </FormItem>

                        )}
                        />
                        <Button variant={"outline"} type="submit" className='mt-6 w-full p-2 bg-transparent border-white'>Reset Password</Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
        </div>

    </div>
  )
}

export default PasswordReset


"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { forgetPasswordSchema } from '@/app/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

const ForgetPassword = () => {
    const form = useForm<z.infer<typeof forgetPasswordSchema>>({
        resolver: zodResolver(forgetPasswordSchema),
        defaultValues: {
          email: "",
        },
      })

    function onSubmit(data: z.infer<typeof forgetPasswordSchema>) {
    toast.success('email sent successfully, please check your email for reset link')
    }
  return (
    <div className='h-screen w-full relative'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-[320px] h-[200px] md:w-[580px] bg-[#181818] text-white md:h-[380px] border-2 border-dashed outline-none shadow rounded-none'>
                <CardHeader>
                    <CardTitle className='font-bold font-chakra text-2xl text-center py-2'>FORGOT PASSWORD</CardTitle>
                    <CardDescription>YOU WILL RECEIVE A LINK TO YOUR EMAIL TO RESET YOUR PASSWORD</CardDescription>
                </CardHeader>
                <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="enter your register email address" {...field} className='my-4' />
                            </FormControl>
                            <FormMessage />
                            </FormItem>

                        )}
                        />
                        <Button variant={"secondary"} type="submit" className='mt-4'>Submit</Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
        </div>

    </div>
  )
}

export default ForgetPassword
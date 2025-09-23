"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { useForm,  } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
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
import { signupSchema, UserSignupSchemaType } from '@/app/schema/auth';
import Link from 'next/link';

const Login = () => {
    const form = useForm<UserSignupSchemaType>({
        resolver: zodResolver(signupSchema),
        defaultValues:{
           email:"",
           password:""
        }
    })
  return (
    <div className='h-screen w-full relative bg-[url("/assets/bg.png")] bg-cover bg-center bg-no-repeat'>
        <div className="flex h-full justify-center items-center">
            <Card className='w-full max-w-2xl bg-gray-900  text-gray-200'>
                <CardHeader>
                    <CardTitle className='text-center text-2xl uppercase font-chakra'>WELcome to  DiGiVerse</CardTitle>
                    <CardContent>
                        <div className='w-full px-8 py-3 flex items-center'>
                            <Button variant={"outline"} className='bg-black w-full text-white'>Sign In with X</Button>
                        </div>
                        <div className='flex items-center gap-2 w-full px-8 py-2'>
                            <div className='w-[50%] h-1 bg-white border-white border-2'/>
                             <p className="text-lg uppercase">Or</p>
                             <div className='w-[50%] h-1 bg-white border-white border-2'/>
                        </div>
                        <Form {...form}>
                            <form action="">
                                <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        enter your email
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="password" {...field} />
                                    </FormControl>
                                    
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <div className="flex justify-between items-center py-4 px-2 gap-4">
                                    <span className='flex gap-3'><input type='checkbox'/> Remember me</span>
                                    <Link href={"/forget-password"} className='text-[#CB6CE6]'>Forget Password</Link>
                                </div>
                                <div className='w-full flex justify-center items-center'>
                                    <Button variant={"outline"} className='bg-gray-900 text-white'>Login</Button>
                                </div>

                            </form>
                        </Form> 
                        <p className="text-xl font-medium text-center py-4 tracking-wide">Dont have an account? <a href="/signup" className='text-[#CB6CE6]'>SignUp</a></p>    
                    </CardContent>
                </CardHeader>
            </Card>

        </div>
        Login
    </div>
  )
}

export default Login
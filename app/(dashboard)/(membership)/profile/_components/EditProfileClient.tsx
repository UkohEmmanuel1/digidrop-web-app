"use client"
import { Suspense } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { profileSchema } from '@/actions/forms/schema';
import { useCompleteTask } from '@/hooks/useCompleteQuest';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { updateProfile } from "@/actions/user";
import { toast } from "sonner";

const EditProfileClient = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const taskId = searchParams.get('taskId');
    const completeTask = useCompleteTask();

    const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      names: "",
      email: ""
    },
  })

   async function onSubmit(values: z.infer<typeof profileSchema>) {
    // Do something with the form values.
    try {
      await updateProfile(values);

      if (taskId) {
        await completeTask.mutateAsync(taskId);
      }

      router.push('/dashboard');
      toast.success('Profile updated successfully');
    } catch {
      form.setError("root", {
        message: "Failed to update profile. Try again."
      });
    }
  
  }
  return (
    <Card className="w-[300px]">
        <CardHeader>
            <CardTitle>Update your Profile</CardTitle>
            {form.formState.errors.root && (
              <p className="text-sm text-red-500">
                {form.formState.errors.root.message}
              </p>
            )}
        </CardHeader>
        <CardContent>
                <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="names"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="enter a prefered username" {...field} />
                    </FormControl>
                    <FormDescription>
                        This is your public display name.
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="enter a valid email" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
              {form.formState.isSubmitting ? "Saving..." : "Submit"}
            </Button>
            </form>
            </Form> 
        </CardContent>
     
    </Card>
  )
}

export default EditProfileClient
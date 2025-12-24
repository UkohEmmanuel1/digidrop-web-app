"use client"
import React, { Suspense } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoteCard from './dashboard/note-card';
import QuestTable from './dashboard/quest-table';
import { useTasks } from '@/hooks/useTasks';
import { TaskSkeleton } from './dashboard/taskSkeleton';

// const quest_data = [
//         { icon: "twitter", title: "twitter@example.com", points: 5, external_link: "https://futurexpay.com"},
//         { icon: "instagram", title: "insta@example.com", points: 7, external_link: "https://futurexpay.com" },
//         { icon: "discord",  title: "fb@example.com", points: 10, external_link: "https://futurexpay.com" },
// ]



const TaskQuest = () => {
  const { data, isLoading } = useTasks();
  
  if (isLoading) {
    return <TaskSkeleton />;
  }
  return (
     <Tabs defaultValue="allQuest" className="w-full max-w-3xl mx-auto mt-10">
      <TabsList className=" text-white w-full uppercase font-chakra bg-transparent mb-4">
        <TabsTrigger value="allQuest" className='text-xl uppercase data-[state=active]:bg-transparent data-[state=active]:text-brandColor'>All Mission</TabsTrigger>    
      </TabsList>

      <TabsContent value="allQuest">
        <Card className='w-[80%] md:w-[680px] mx-auto h-full bg-[#333333] text-gray-200 border border-gray-200'>
          <CardHeader className='w-full mx-auto'>
            <NoteCard />
          </CardHeader>
          <CardContent>
                
                  <QuestTable data={data}/>        
          </CardContent>
        </Card>
      </TabsContent>
{/* 
      <TabsContent value="pending">
        <Card>
          <CardHeader>
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is the analytics content. You can show charts or stats here.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="unclaimed">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is the settings content. Preferences, toggles, forms, etc. go here.</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="claimed">
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <p>This is the settings content. Preferences, toggles, forms, etc. go here.</p>
          </CardContent>
        </Card>
      </TabsContent> */}
    </Tabs>
  )
}

export default TaskQuest
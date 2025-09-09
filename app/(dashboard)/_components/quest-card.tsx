"use client"
import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NoteCard from './dashboard/note-card';
import QuestTable from './dashboard/quest-table';

const quest_data = [
        { icon: "twitter", task: "twitter@example.com", point: 5, url: "https://futurexpay.com"},
        { icon: "instagram", task: "insta@example.com", point: 7, url: "https://futurexpay.com" },
        { icon: "discord",  task: "fb@example.com", point: 10, url: "https://futurexpay.com" },
]
const quest2_data = [
        { icon: "user", task: "follow user ", point: 5, url: "https://futurexpay.com"},
        { icon: "instagram", task: "insta@example.com", point: 7, url: "https://futurexpay.com" },
        { icon: "discord",  task: "fb@example.com", point: 10, url: "https://futurexpay.com" },
]


const TaskQuest = () => {
  return (
     <Tabs defaultValue="allQuest" className="w-full max-w-3xl mx-auto mt-10">
      <TabsList className=" text-white w-full uppercase font-chakra bg-transparent mb-4">
        <TabsTrigger value="allQuest" className='text-xl uppercase data-[state=active]:bg-transparent data-[state=active]:text-brandColor'>All Mission</TabsTrigger>
        <TabsTrigger value="pending" className='text-xl uppercase data-[state=active]:bg-transparent data-[state=active]:text-brandColor'>Pending</TabsTrigger>
        <TabsTrigger value="unclaimed" className='text-xl uppercase data-[state=active]:bg-transparent data-[state=active]:text-brandColor'>UnClaimed</TabsTrigger>
        <TabsTrigger value="claimed" className='text-xl uppercase data-[state=active]:bg-transparent data-[state=active]:text-brandColor'>Claimed</TabsTrigger>
      </TabsList>

      <TabsContent value="allQuest">
        <Card className='w-[80%] md:w-[680px] mx-auto h-full bg-[#333333] text-gray-200 border border-gray-200'>
          <CardHeader className='w-full mx-auto'>
            <NoteCard />
          </CardHeader>
          <CardContent>
                <QuestTable data={quest_data}/>
                <h2 className='font-chakra text-xl py-2 leading-6'>One Time Quest</h2>
                <QuestTable data={quest2_data} type='onetime'/>
          </CardContent>
        </Card>
      </TabsContent>

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
      </TabsContent>
    </Tabs>
  )
}

export default TaskQuest
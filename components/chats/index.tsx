import React from "react";
import ChatHeader from "./chatHeader";
import { ChatItem } from "./chatItem";
import { supabase } from "@/lib/supabase";

const MyChats = async () => {
  const { data: chatItems, error } = await supabase
    .from('conversations')
    .select("*")
    .order('last_message_time', { ascending: false })
    .limit(20)
  
  if (error) {
    console.error('Error fetching chat items:', error)
    return null
  }
  return (
    <div className="w-[30rem] flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <ChatHeader />

      <div className="h-[calc(100vh-9.5rem)] overflow-y-auto">
        {/* Chat items */}
        {chatItems.map((item, index) => (
          <ChatItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MyChats;

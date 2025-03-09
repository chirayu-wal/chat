"use client";
import { useState, useEffect, Suspense } from "react";
import Topbar from "@/components/common/topbar";
import Sidebar from "@/components/common/sidebar";
import { chatItems } from "@/lib/chatData";
import ChatHeader from "@/components/chats/chatHeader";
import ChatSection from "@/components/chats/chatSection";
import { ChatItem } from "@/components/chats/chatItem";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </Suspense>

      <div className="flex flex-col h-screen w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {/* Left Sidebar - Navigation */}
        <Topbar />
        <div className="flex flex-1">
          {/* Chat List */}
          <div className="w-[30rem] flex-shrink-0 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <ChatHeader />

            <div className="h-[calc(100vh-9.5rem)] overflow-y-auto">
              {/* Chat items */}
              {chatItems.map((item, index) => (
                <ChatItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Chat Content */}
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

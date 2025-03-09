import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Users, Stars } from "lucide-react";

const MessagesHeader = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4">
      <div className="flex items-center gap-2">
        <Avatar>
            <AvatarFallback className="text-xs dark:bg-gray-700 dark:text-gray-300"><Users className="h-4 w-4" /></AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <h2 className="text-lg font-semibold dark:text-white">
                Test El Centro
            </h2>
            <span className="text-xs text-gray-500 dark:text-gray-400">
                {["Jash","Mom","Bro"].join(", ")}
            </span>
        </div>
        
      </div>
      <div className="flex items-center gap-2">
      <div className="flex">
          <Avatar className="h-6 w-6 border dark:border-gray-600">
            <AvatarFallback className="text-xs dark:bg-gray-700 dark:text-gray-300">
              R
            </AvatarFallback>
          </Avatar>
          <Avatar className="ml-[-8px] h-6 w-6 border dark:border-gray-600">
            <AvatarFallback className="bg-blue-500 text-xs text-white">
              B
            </AvatarFallback>
          </Avatar>
          <Avatar className="ml-[-8px] h-6 w-6 border dark:border-gray-600">
            <AvatarFallback className="bg-purple-500 text-xs text-white">
              K
            </AvatarFallback>
          </Avatar>
          <Avatar className="ml-[-8px] h-6 w-6 border dark:border-gray-600">
            <AvatarFallback className="bg-green-500 text-xs text-white">
              P
            </AvatarFallback>
          </Avatar>
          <span className="ml-1 flex h-6 w-6 items-center justify-center rounded-full border dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-xs dark:text-gray-300">
            +3
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Stars className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default MessagesHeader;

import {
  List,
  MessageCircleIcon,
  MessageCircleQuestion,
  RefreshCw,
  Stars,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center space-x-4 pl-6 pr-2 py-2 bg-white dark:bg-gray-800 border-b">
      <div className="flex items-center space-x-2">
        <MessageCircleIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        <span className="text-gray-500 dark:text-gray-400">Le Chats</span>
      </div>
      <div className="flex items-center space-x-4 px-6 py-2">
        <Button variant={"outline"}>
          <RefreshCw className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          Refresh
        </Button>
        <Button variant={"outline"}>
          <MessageCircleQuestion className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          Help
        </Button>
       <Select>
          <SelectTrigger>
            <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-300"/>
              <span className="text-xs font-medium text-black dark:text-gray-400">
                5 / 6 phones
              </span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5/6 phones">5 / 6 phones</SelectItem>
          </SelectContent>
        </Select>
        <Button variant={"outline"}>
          <MessageCircleQuestion className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          
        </Button>
        <Button variant={"outline"}>
          <MessageCircleQuestion className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          
        </Button>
        <Button variant={"outline"}>
        <Stars className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
        <List className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          
        </Button>
      </div>
    </div>
  );
};

export default Topbar;

import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">

        <Button
          variant="ghost"
          className="flex items-center gap-1 border-green-500 dark:border-green-600 px-2 py-1 text-xs text-green-600 dark:text-green-400"
        >
          <Filter className="h-3 w-3" />
          <span className="text-xs font-bold">Custom filter</span>
        </Button>
        <Button
          variant="outline"
          size={"sm"}
        >
          Save
        </Button>
        </div>
        <div className="flex items-center gap-2">

        <Button
          size={"sm"}
          variant="outline"
        >
          <Search className="h-3 w-3" />
          Search
        </Button>
        <Button
          variant="outline"
          size={"sm"}
          className="flex items-center gap-1 border-green-500 dark:border-green-600 px-2 py-1 text-xs text-green-600 dark:text-green-400"
        >
          <Filter className="h-3 w-3" />
          Filtered
        </Button>
        </div>
    </div>
  );
};

export default ChatHeader;

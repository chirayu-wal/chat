import moment from "moment";
import React from "react";
import { Badge } from "@/components/ui/badge";

const MessageBadge = () => {
  return (
    <div className="mb-6 flex justify-center">
      <Badge
        variant="outline"
        className="bg-white dark:bg-gray-800 dark:border-gray-700 px-3 py-1 text-xs text-gray-500 dark:text-gray-400"
      >
        {moment().format("DD-MM-YYYY")}
      </Badge>
    </div>
  );
};

export default MessageBadge;

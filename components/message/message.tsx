import { CheckCheck, Send } from "lucide-react";
import React from "react";

const Message = () => {
  return (
    <div className="mb-4 flex justify-end">
      <div className="">
        <div className="rounded-lg bg-green-100 dark:bg-green-900/30 p-3">
          <div className="mb-1 flex gap-4 items-center justify-between">
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              Periskope
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +91 99718 44008
            </span>
          </div>
          <p className="text-base dark:text-gray-200">testing</p>
          <div className="mt-1 flex items-center justify-end gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                <Send className="h-2 w-2 " />
              <span className="text-xs">bharat@realhelps.dev</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs">09:49</span>
              <CheckCheck className="h-3 w-3 text-blue-400 dark:text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

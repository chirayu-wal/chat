import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Message from "@/components/message/message";
import { cn } from "@/lib/utils";

const ReciverMessage = ({
  isSameSenderAsLastMessage,
}: {
  isSameSenderAsLastMessage: boolean;
}) => {
  return (
    <div className="flex">
      {isSameSenderAsLastMessage ? null : (
        <Avatar className="mr-2 mt-1 h-8 w-8 dark:bg-gray-700">
          <AvatarFallback className="dark:text-gray-300">RA</AvatarFallback>
        </Avatar>
      )}
      <div className={cn("", isSameSenderAsLastMessage ? "ml-10" : "")}>
        <Message />
      </div>
    </div>
  );
};

export default ReciverMessage;

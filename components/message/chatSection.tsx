import React from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Smile,
  PaperclipIcon,
  Clock,
  ImageIcon,
  Mic,
  SendHorizonal,
} from "lucide-react";
import Message from "@/components/message/message";
import MessagesHeader from "@/components/message/messagesHeader";
import ReciverMessage from "@/components/message/reciverMessage";
import { Input } from "@/components/ui/input";
import ChatBadge from "@/components/message/messageBadge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import MessageSideBar from "@/components/message/messageSideBar";

const ChatSection = () => {
  return (
    <div className="flex w-full flex-1">
      <div className="w-full flex flex-1 flex-col">
        {/* Chat Header */}
        <MessagesHeader />

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-4">
          <ChatBadge />
          <ReciverMessage isSameSenderAsLastMessage={false} />
          <ReciverMessage isSameSenderAsLastMessage={true} />
          <ReciverMessage isSameSenderAsLastMessage={true} />

          <Message />
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3">
          <form className="flex items-center gap-4 mb-2">
            <Input
              placeholder="Message ...."
              className=" bg-white dark:bg-gray-800 px-4 py-2 text-sm text-gray-400 dark:text-gray-500 border-0 shadow-none"
            />
            <Button variant={"ghost"}>
              <SendHorizonal className="text-green-400 w-20 h-20" />
            </Button>
          </form>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <PaperclipIcon className="text-gray-500 dark:text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Smile className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <Mic className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
            <Select>
              <SelectTrigger>
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="bg-green-500 text-xs text-white">
                    P
                  </AvatarFallback>
                </Avatar>
                <span className="text-xs">Periskope</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="periskope">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-green-500 text-xs text-white">
                      P
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs">Periskope</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <MessageSideBar />
    </div>
  );
};

export default ChatSection;

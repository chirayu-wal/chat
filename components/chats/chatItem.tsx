
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, PhoneIcon, Pin } from "lucide-react";

export function ChatItem({
    name,
    message,
    time,
    avatar,
    avatarColor = "bg-gray-200 dark:bg-gray-700",
    badges,
    isActive = false,
    phoneNumber,
    phoneExt,
    unreadCount,
    pinned = false,
    muted = false,
  }: {
    name: string;
    message: string;
    time: string;
    avatar: string;
    avatarColor?: string;
    badges: { text: string; color: string }[];
    isActive?: boolean;
    phoneNumber?: string;
    phoneExt?: string;
    unreadCount?: number;
    pinned?: boolean;
    muted?: boolean;
  }) {
    return (
      <div
        className={`flex cursor-pointer gap-3 border-b border-gray-200 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 ${
          isActive ? "bg-gray-50 dark:bg-gray-800" : ""
        }`}
      >
        <Avatar className={`h-10 w-10 ${avatarColor}`}>
          <AvatarImage src={`https://avatar.vercel.sh/${avatar}`} />
          <AvatarFallback className="text-xs dark:text-gray-200">
            {avatar}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="font-medium dark:text-white">{name}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{time}</div>
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
            {message.length > 30 ? message.substring(0, 30) + "..." : message}
          </div>
          <div className="mt-1 flex items-center gap-1">
            {phoneNumber && (
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <PhoneIcon className="mr-1 h-3 w-3" />
                {phoneNumber}{" "}
                {phoneExt && (
                  <span className="text-gray-400 dark:text-gray-500">
                    {phoneExt}
                  </span>
                )}
              </div>
            )}
            <div className="ml-auto flex items-center gap-1">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  className={`px-1.5 py-0 text-[10px] ${badge.color}`}
                >
                  {badge.text}
                </Badge>
              ))}
              {pinned && (
                <Pin className="h-3 w-3 text-gray-400 dark:text-gray-500" />
              )}
              {muted && (
                <Bell className="h-3 w-3 text-gray-400 dark:text-gray-500" />
              )}
              {unreadCount && (
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  {unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
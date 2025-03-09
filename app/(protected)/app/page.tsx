import { Suspense } from "react";
import Topbar from "@/components/common/topbar";
import Sidebar from "@/components/common/sidebar";
import ChatSection from "@/components/message/chatSection";
import Chats from "@/components/chats";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        <Sidebar />
      </Suspense>

      <div className="flex flex-col h-screen w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {/* Left Sidebar - Navigation */}
        <Topbar />
        <div className="flex flex-1">
          {/* Chat List */}
          <Suspense fallback={<div>Loading...</div>}>
            <Chats />
          </Suspense>

          {/* Chat Content */}
          <ChatSection />
        </div>
      </div>
    </div>
  );
}

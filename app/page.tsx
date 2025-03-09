import { Button } from "@/components/ui/button";
import { getUser } from "@/queries/user";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await getUser();
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center gap-4 overflow-hidden bg-gray-100 dark:bg-gray-900">
      <h1 className="text-7xl font-bold">Welcome to Le Chat</h1>
      {user ? (
        <Link href="/app">
          <Button>Go to App</Button>
        </Link>
      ) : (
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default page;

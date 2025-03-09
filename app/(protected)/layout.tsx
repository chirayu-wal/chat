import React from "react";
import { redirect } from "next/navigation";
import { getUser } from "@/queries/user";

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getUser();
  if (!user) {
    redirect("/sign-in");
  }

  return children;
};

export default ProtectedLayout;

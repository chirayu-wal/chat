"use server";
import { createClient } from "@/utils/supabase/server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { validatedAction } from "@/lib/auth/middleware";
import config from "@/config";

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data) => {
  const supabase = await createClient();
  const { email, password } = data;

  const { data: signInData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: "Invalid credentials. Please try again." };
  }
  const { data: userData, error: userDataError } = await supabase
    .from("user_data")
    .select("*")
    .eq("user_id", signInData.user?.id)
    .single();
  console.log(userData);

  if (userDataError && userDataError.code === "PGRST116") {
    // No user_data entry found, create one
    const { error: insertError } = await supabase
      .from("user_data")
      .insert({ user_id: signInData.user?.id });
    if (insertError) {
      console.error("Error creating user_data entry:", insertError);
      // Consider how you want to handle this error
    }
  }
  // If sign-in is successful, redirect to dashboard
  redirect("/app");
});

const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const signUp = validatedAction(signUpSchema, async (data) => {
  const supabase = await createClient();
  const { email, password, name } = data;

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name
      }
    }
  });
  if (signUpError) {
    return { error: signUpError.message };
  }
  // Check if user_data entry exists and create i
  const { error: insertError } = await supabase
    .from("user_data")
    .insert({ user_id: signUpData?.user?.id, name });

  if (insertError) {
    console.error("Error creating user_data entry:", insertError);
    // Consider how you want to handle this error
  }
  redirect("/app");
});

export const signInWithMagicLink = validatedAction(
  z.object({
    name: z.string(),
    email: z.string().email(),
    redirect: z.string().optional(),
    priceId: z.string().optional(),
  }),
  async (data) => {
    const supabase = await createClient();
    const { name,email, priceId } = data;
    const redirectTo = `${config.domainName}/api/auth/callback`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        data: {
          name
        },
        emailRedirectTo: `${redirectTo}?priceId=${encodeURIComponent(
          priceId || ""
        )}&redirect=${encodeURIComponent("/app")}`,
      },
    });
    if (error) {
      console.error("Error sending magic link:", error);
      return { error: error.message };
    }

    return { success: "Magic link sent to your email." };
  }
);
export const signInWithGoogle = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const supabase = await createClient();
  const priceId = formData.get("priceId") as string;
  try {
    const redirectTo = `${config.domainName}/api/auth/callback`;
    const { error: signInError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${redirectTo}?priceId=${encodeURIComponent(
          priceId || ""
        )}&redirect=/app`,
      },
    });
    if (signInError) {
      return { error: "Failed to sign in with Google. Please try again." };
    }
  } catch (error) {
    console.error("Error signing in with Google:", error);
    return { error: "Failed to sign in with Google. Please try again." };
  }
};

export const signOut = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/sign-in");
};
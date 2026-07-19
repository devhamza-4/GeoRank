"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlistAction(email: string) {
  const cleanEmail = email.toLowerCase().trim();

  // Basic email validation
  if (!cleanEmail || !cleanEmail.includes("@") || cleanEmail.length < 5) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // Check if Supabase keys are configured
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return {
      success: false,
      error:
        "Supabase credentials missing. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.",
    };
  }

  try {
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email: cleanEmail }]);

    if (error) {
      // Postgres code 23505 = unique constraint error (email already registered)
      if (error.code === "23505") {
        return {
          success: true,
          message: "You're already on the waitlist! We'll reach out soon.",
        };
      }
      return { success: false, error: error.message };
    }

    return {
      success: true,
      message: "Thank you for joining! You're on the early access waitlist.",
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
    return { success: false, error: errorMessage };
  }
}

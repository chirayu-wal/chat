'use client';

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { User, type SupabaseClient } from '@supabase/supabase-js';

export const useSupabase = (): { supabase: SupabaseClient | undefined, user: User | null } => {
  const [supabase, setSupabase] = useState<SupabaseClient>();
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    const supabase = createClient();
    const gUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    gUser();
    setSupabase(supabase);
  }, []);

  return { supabase, user };
};

import { createClient } from "@supabase/supabase-js";


const url = process.env.SUPABASE_URL;
const anonKey = process.env.SUPABASE_ANON_KEY;


export const supabaseClient = createClient(url, anonKey);
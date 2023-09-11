import { createClient } from "@supabase/supabase-js";

const supabaseRestEndpoint: string = process.env.REACT_APP_SUPABASE_REST || "";
const supabaseApiKey: string = process.env.REACT_APP_SUPABASE_API_KEY || "";
const supabaseClient = createClient(supabaseRestEndpoint, supabaseApiKey);

export default supabaseClient;
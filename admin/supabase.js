
const SUPABASE_URL = "https://lgeboriunubbtyeuxsrv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_C76bursTy_hk0RGlxztxHQ_rWRr0L6y";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.supabaseClient = supabaseClient;

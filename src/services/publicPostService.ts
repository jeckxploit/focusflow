import { supabase } from "./supabase"

export const getAllPublicPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, profiles:user_id(email)")
    .eq("status", "published")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}

export const getPostById = async (id: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, profiles:user_id(email)")
    .eq("id", id)
    .single()

  if (error) throw error
  return data
}
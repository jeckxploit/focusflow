import { supabase } from "./supabase"

export const getPosts = async (userId: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId) // Filter agar hanya mengambil data milik user ini
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}

export const createPost = async (title: string, content: string) => {
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) throw new Error("User not authenticated")

  const { data, error } = await supabase.from("posts").insert([
    {
      title,
      content,
      user_id: user.id,
    },
  ])

  if (error) throw error
  return data
}

export const deletePost = async (id: string, userId: string) => {
  // Pastikan user_id juga dicek saat menghapus untuk keamanan tambahan
  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id)
    .eq("user_id", userId) 
    
  if (error) throw error
}
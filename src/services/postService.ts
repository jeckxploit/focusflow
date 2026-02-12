import { supabase } from "./supabase"

export const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}

export const createPost = async (title: string, content: string) => {
  const user = await supabase.auth.getUser()

  const { data, error } = await supabase.from("posts").insert([
    {
      title,
      content,
      user_id: user.data.user?.id,
    },
  ])

  if (error) throw error
  return data
}

export const deletePost = async (id: string) => {
  const { error } = await supabase.from("posts").delete().eq("id", id)
  if (error) throw error
}
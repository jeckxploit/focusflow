import { supabase } from "./supabase"

export const getPosts = async (userId: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[postService] Error fetching posts:", error)
    throw new Error(error.message)
  }
  return data
}

export const getPublicPosts = async (userId: string) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("user_id", userId)
    .eq("status", "published")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[postService] Error fetching public posts:", error)
    throw new Error(error.message)
  }
  return data
}

export const createPost = async (title: string, content: string, status: 'draft' | 'published' = 'draft') => {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error("User not authenticated")

  const { data, error } = await supabase.from("posts").insert([
    {
      title,
      content,
      status,
      user_id: user.id,
    },
  ])

  if (error) {
    console.error("[postService] Error creating post:", error)
    throw new Error(error.message)
  }
  return data
}

export const updatePost = async (id: string, updates: { title?: string, content?: string, status?: 'draft' | 'published' }) => {
  const { error } = await supabase
    .from("posts")
    .update(updates)
    .eq("id", id)
    
  if (error) {
    console.error("[postService] Error updating post:", error)
    throw new Error(error.message)
  }
}

export const deletePost = async (id: string, userId: string) => {
  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("id", id)
    .eq("user_id", userId) 
    
  if (error) {
    console.error("[postService] Error deleting post:", error)
    throw new Error(error.message)
  }
}
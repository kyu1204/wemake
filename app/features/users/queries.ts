import client from "~/supa-client";
import { productListSelect } from "../products/queries";

export const getUserByUsername = async (username: string) => {
  const { data, error } = await client
    .from("profiles")
    .select(
      `
        profile_id,
        name,
        username,
        avatar,
        role,
        headline,
        bio
    `
    )
    .eq("username", username)
    .single();

  if (error) throw error;

  return data;
};

export const getUserProducts = async (username: string) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
        ${productListSelect},
        profiles!products_to_profiles!inner(
            profile_id
        )
        `
    )
    .eq("profiles.username", username)
    .order("stats->>upvotes", { ascending: false });

  if (error) throw error;

  return data;
};

export const getUserPosts = async (username: string) => {
  const { data, error } = await client
    .from("community_post_list_view")
    .select("*")
    .eq("author_username", username)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

import client from "~/supa-client";

export const getGptIdeas = async ({ limit }: { limit: number }) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .limit(limit);
  if (error) {
    throw error;
  }
  return data;
};

export const getGptIdea = async ({ id }: { id: number }) => {
  const { data, error } = await client
    .from("gpt_ideas_view")
    .select("*")
    .eq("gpt_idea_id", id)
    .single();
  if (error) {
    throw error;
  }
  return data;
};

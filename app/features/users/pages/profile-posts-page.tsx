import { data } from "react-router";
import { z } from "zod";
import { PostCard } from "~/features/community/components/post-card";
import { makeSSRClient } from "~/supa-client";
import { getUserPosts } from "../queries";
import type { Route } from "./+types/profile-posts-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Posts | wemake",
    },
  ];
};

export const paramsSchema = z.object({
  username: z.string(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client } = makeSSRClient(request);
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success)
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );

  const posts = await getUserPosts(client, parsedData.username);

  return { posts };
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.posts.map((post) => (
        <PostCard
          key={post.post_id}
          id={post.post_id}
          title={post.title}
          author={post.author_username}
          authorAvatarUrl={post.author_avatar}
          category={post.topic}
          postedAt={post.created_at}
          expanded
        />
      ))}
    </div>
  );
}

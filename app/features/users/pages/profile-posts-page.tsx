import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";
import { data } from "react-router";
import { getUserPosts } from "../queries";
import { z } from "zod";

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

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success)
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );

  const posts = await getUserPosts(parsedData.username);

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

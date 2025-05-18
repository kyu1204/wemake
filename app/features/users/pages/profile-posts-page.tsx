import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Posts | wemake",
    },
  ];
};

export default function ProfilePostsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <PostCard
          key={index}
          id={`post-${index}`}
          title={`Post ${index + 1}`}
          author="Harry"
          authorAvatarUrl="https://github.com/apple.png"
          category="Productivity"
          postedAt="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}

import type { Route } from "./+types/post-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Post | wemake" },
    { name: "description", content: "Post page" },
  ];
};

export default function PostPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Post</h1>
    </div>
  );
}

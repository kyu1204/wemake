import type { Route } from "./+types/submit-post-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Post | wemake" },
    { name: "description", content: "Submit Post page" },
  ];
};

export default function SubmitPostPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Post</h1>
    </div>
  );
}

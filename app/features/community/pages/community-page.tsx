import type { Route } from "./+types/community-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | wemake" },
    { name: "description", content: "Community page" },
  ];
};

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">커뮤니티</h1>
    </div>
  );
}

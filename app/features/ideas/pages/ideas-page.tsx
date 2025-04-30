import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/ideas-page";
import { IdeaCard } from "../components/idea-card";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "IdeasGPT | wemake",
      description: "Find ideas for your next project",
    },
  ];
};

export default function IdeasPage() {
  return (
    <div className="space-y-20">
      <Hero title="IdeasGPT" subtitle="Find ideas for your next project" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 11 }, (_, index) => (
          <IdeaCard
            key={index}
            id={`idea-${index}`}
            title="A Startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations based on the user's goals and preferences."
            viewCount={Math.floor(Math.random() * 1000)}
            createdAt="12 hours ago"
            likeCount={Math.floor(Math.random() * 100)}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

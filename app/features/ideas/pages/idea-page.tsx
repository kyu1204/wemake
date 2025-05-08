import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/idea-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "IdeaGPT | wemake",
      description: "Find ideas for your next project",
    },
  ];
};

export default function IdeaPage() {
  return (
    <div>
      <Hero title="IdeaGPT #12312312312" />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          A Startup that creates an AI-powered generated personal trainer,
          delivering customized fitness recommendations based on the user's
          goals and preferences and also provides a community for users to
          connect and share their fitness journey.
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span>123</span>
          </div>
          <DotIcon className="size-4" />
          <span>10 hours ago</span>
          <DotIcon className="size-4" />
          <Button variant="outline">
            <HeartIcon className="size-4" />
            <span>12</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}

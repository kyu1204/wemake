import { DotIcon, EyeIcon, HeartIcon } from "lucide-react";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import type { Route } from "./+types/idea-page";
import { getGptIdea } from "../queries";
import { DateTime } from "luxon";

export const meta = ({
  data: {
    idea: { gpt_idea_id },
  },
}: Route.MetaArgs) => {
  return [
    {
      title: `IdeaGPT #${gpt_idea_id}  | wemake`,
      description: "Find ideas for your next project",
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const idea = await getGptIdea({
    id: Number(params.ideaId),
  });
  return { idea };
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <Hero title={`IdeaGPT #${loaderData.idea.gpt_idea_id}`} />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">{loaderData.idea.idea}</p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span>{loaderData.idea.views}</span>
          </div>
          <DotIcon className="size-4" />
          <span>
            {DateTime.fromISO(loaderData.idea.created_at).toRelative()}
          </span>
          <DotIcon className="size-4" />
          <Button variant="outline">
            <HeartIcon className="size-4" />
            <span>{loaderData.idea.likes}</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}

import type { MetaFunction } from "react-router";
import type { Route } from "../+types";

export const meta: MetaFunction = () => {
  return [
    { title: "Weekly Leaderboards | wemake" },
    { name: "description", content: "Weekly product leaderboards on wemake" },
  ];
};

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
  };
}

export default function WeeklyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-4xl font-bold">
        Top Products of Week {loaderData.week}, {loaderData.year}
      </h1>
      {/* 실제 구현시 데이터를 로드하여 표시 */}
    </div>
  );
}

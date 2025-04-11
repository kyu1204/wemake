import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import { Button } from "~/common/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Product leaderboards on wemake" },
  ];
};

export default function LeaderboardsPage() {
  return (
    <div className="container py-10 space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Leaderboards</h1>
        <p className="text-xl text-muted-foreground">
          Top products by different time periods
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <Button asChild variant="outline">
          <Link to="/products/leaderboards/yearly/2024">Yearly</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products/leaderboards/monthly/2024/4">Monthly</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products/leaderboards/weekly/2024/16">Weekly</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/products/leaderboards/daily/2024/4/15">Daily</Link>
        </Button>
      </div>
    </div>
  );
}

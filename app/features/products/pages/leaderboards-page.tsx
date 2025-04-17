import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/leaderboards-page";
import { Hero } from "~/common/components/hero";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Top products leaderboard" },
  ];
};

export default function LeaderboardsPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Leaderboards"
        subtitle="The most popular products on wemake"
      />
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by day.
          </p>
        </div>

        {Array.from({ length: 7 }, (_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`Description for product ${index + 1}`}
            commentCount={Math.floor(Math.random() * 100)}
            viewCount={Math.floor(Math.random() * 1000)}
            upvoteCount={Math.floor(Math.random() * 500)}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/daily">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by week.
          </p>
        </div>

        {Array.from({ length: 7 }, (_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`Description for product ${index + 1}`}
            commentCount={Math.floor(Math.random() * 100)}
            viewCount={Math.floor(Math.random() * 1000)}
            upvoteCount={Math.floor(Math.random() * 500)}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/weekly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by month.
          </p>
        </div>

        {Array.from({ length: 7 }, (_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`Description for product ${index + 1}`}
            commentCount={Math.floor(Math.random() * 100)}
            viewCount={Math.floor(Math.random() * 1000)}
            upvoteCount={Math.floor(Math.random() * 500)}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/monthly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tighter">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The most popular products on wemake by year.
          </p>
        </div>

        {Array.from({ length: 7 }, (_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index + 1}`}
            description={`Description for product ${index + 1}`}
            commentCount={Math.floor(Math.random() * 100)}
            viewCount={Math.floor(Math.random() * 1000)}
            upvoteCount={Math.floor(Math.random() * 500)}
          />
        ))}
        <Button variant="link" asChild className="text-lg self-center">
          <Link to="/products/leaderboards/yearly">
            Explore all products &rarr;
          </Link>
        </Button>
      </div>
    </div>
  );
}

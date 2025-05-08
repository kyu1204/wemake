import { DateTime } from "luxon";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/pagination";
import { Button } from "~/common/components/ui/button";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/weekly-leaderboards-page";

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    weekYear: Number(params.year),
    weekNumber: Number(params.week),
  });

  return [
    {
      title: `Best of week ${date
        .startOf("week")
        .toLocaleString(DateTime.DATE_SHORT)} - ${date
        .endOf("week")
        .toLocaleString(DateTime.DATE_SHORT)} | wemake`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success) {
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
  });

  if (!date.isValid) {
    throw data(
      { error_code: "invalid date", message: "Invalid date" },
      { status: 400 }
    );
  }
  const today = DateTime.now().startOf("week");
  if (date > today) {
    throw data(
      { error_code: "future date", message: "Future date" },
      { status: 400 }
    );
  }

  return {
    ...parsedData,
  };
};

export default function WeeklyLeaderboardsPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ week: 1 });
  const nextWeek = urlDate.plus({ week: 1 });
  const isStartOfWeek = urlDate.equals(DateTime.now().startOf("week"));

  return (
    <div className="space-y-10">
      <Hero
        title={`Best of week ${urlDate
          .startOf("week")
          .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
          .endOf("week")
          .toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="flex items-center gap-2 justify-center">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            &larr; {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isStartOfWeek && (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}
            >
              {nextWeek.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }, (_, index) => (
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
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.message} / {error.data.error_code}
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }

  return <div>Unknown error</div>;
}

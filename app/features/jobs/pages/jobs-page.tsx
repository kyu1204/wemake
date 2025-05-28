import { data, useSearchParams } from "react-router";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";
import { JobCard } from "../components/job-card";
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGES } from "../constants";
import type { Route } from "./+types/jobs-page";
import { getJobs } from "../queries";
import { z } from "zod";
import { useEffect, useState } from "react";

export const searchParamsSchema = z.object({
  type: z
    .enum(JOB_TYPES.map((type) => type.value) as [string, ...string[]])
    .optional(),
  location: z
    .enum(
      LOCATION_TYPES.map((location) => location.value) as [string, ...string[]]
    )
    .optional(),
  salary: z.enum(SALARY_RANGES).optional(),
});

export const meta: Route.MetaFunction = () => [
  { title: "Jobs | wemake" },
  { description: "Find your dream job at wemake" },
];

export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = searchParamsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data(
      { error_code: "invalid search params", message: "Invalid search params" },
      { status: 400 }
    );
  }

  const jobs = await getJobs({
    limit: 20,
    type: parsedData.type as (typeof JOB_TYPES)[number]["value"],
    location: parsedData.location as (typeof LOCATION_TYPES)[number]["value"],
    salary: parsedData.salary as (typeof SALARY_RANGES)[number],
  });
  return { jobs };
};

export default function JobsPage({ loaderData }: Route.ComponentProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [clickedFiltersKeyValuePairs, setClickedFiltersKeyValuePairs] =
    useState<{ key: string; value: string }[]>([]);

  const onFilterClick = (key: string, value: string) => {
    if (
      clickedFiltersKeyValuePairs.some(
        (pair) => pair.key === key && pair.value === value
      )
    ) {
      searchParams.delete(key);
      setClickedFiltersKeyValuePairs((prev) =>
        prev.filter((pair) => pair.key !== key)
      );
    } else {
      searchParams.set(key, value);
      setClickedFiltersKeyValuePairs((prev) => [...prev, { key, value }]);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="space-y-20">
      <Hero title="Jobs" subtitle="Companies looking for makers" />
      <div className="grid grid-cols-1 xl:grid-cols-6 gap-20 items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:col-span-4 gap-5">
          {loaderData.jobs.map((job) => (
            <JobCard
              key={job.job_id}
              id={job.job_id}
              company={job.company_name}
              companyLogoUrl={job.company_logo}
              companyHq={job.company_location}
              title={job.position}
              postedAt={job.created_at}
              type={job.job_type}
              positionLocation={job.location}
              salary={job.salary_range}
            />
          ))}
        </div>
        <div className="xl:col-span-2 sticky top-20 flex flex-col gap-10">
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">Type</h4>
            <div className="flex flex-wrap gap-2">
              {JOB_TYPES.map((type) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("type", type.value)}
                  className={cn(
                    type.value === searchParams.get("type") ? "bg-accent" : ""
                  )}
                >
                  {type.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">
              Location
            </h4>
            <div className="flex flex-wrap gap-2">
              {LOCATION_TYPES.map((location) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("location", location.value)}
                  className={cn(
                    location.value === searchParams.get("location")
                      ? "bg-accent"
                      : ""
                  )}
                >
                  {location.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-start">
            <h4 className="text-sm text-muted-foreground font-bold">Salary</h4>
            <div className="flex flex-wrap gap-2">
              {SALARY_RANGES.map((range) => (
                <Button
                  variant="outline"
                  onClick={() => onFilterClick("salary", range)}
                  className={cn(
                    range === searchParams.get("salary") ? "bg-accent" : ""
                  )}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

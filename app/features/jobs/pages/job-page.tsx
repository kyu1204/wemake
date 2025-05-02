import type { Route } from "./+types/job-page";

export function meta({ data }: Route.MetaFunction) {
  return [{ title: "Job Details" }, { description: "View job details" }];
}

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request, params }: Route.ActionArgs) {
  return {};
}

export default function JobPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Job Details</h1>
    </div>
  );
}

import type { Route } from "./+types/submit-job-page";

export function meta({ data }: Route.MetaFunction) {
  return [{ title: "Submit Job" }, { description: "Submit a new job posting" }];
}

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitJobPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Job</h1>
    </div>
  );
}

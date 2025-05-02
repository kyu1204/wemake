import type { Route } from "./+types/job-page";

export const meta: Route.MetaFunction = () => [
  { title: "Job Details | wemake" },
  { description: "View job details" },
];

export default function JobPage() {
  return <div></div>;
}

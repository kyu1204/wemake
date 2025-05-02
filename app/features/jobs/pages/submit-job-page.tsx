import type { Route } from "./+types/submit-job-page";

export const meta: Route.MetaFunction = () => [
  { title: "Submit Job | wemake" },
  { description: "Submit a new job posting" },
];

export default function SubmitJobPage() {
  return <div></div>;
}

import type { Route } from "./+types/submit-post-page";
import { Hero } from "~/common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/intput-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Post | wemake" },
    { name: "description", content: "Submit Post page" },
  ];
};

export default function SubmitPostPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Create Discussion"
        subtitle="Ask questions, share ideas, and connect with other developers"
      />
      <Form className="flex flex-col gap-10 max-w-screen-md mx-auto">
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="(40 characters or less)"
          required
          placeholder="i.e What is the best productivity tool?"
        />
        <SelectPair
          label="Category"
          name="category"
          description="Select the category that best fits your discussion"
          placeholder="Select a category"
          required
          options={[
            { label: "Productivity", value: "productivity" },
            { label: "Programming", value: "programming" },
            { label: "Design", value: "design" },
            { label: "Other", value: "other" },
          ]}
        />
        <InputPair
          label="Content"
          name="content"
          id="content"
          description="(1000 characters or less)"
          required
          placeholder="i.e I'm having trouble with my code..."
          textarea
        />
        <Button type="submit" className="mx-auto">
          Create Discussion
        </Button>
      </Form>
    </div>
  );
}

import { Hero } from "~/common/components/hero";

import { Form } from "react-router";
import InputPair from "~/common/components/intput-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { PRODUCT_STAGES } from "../constants";
import type { Route } from "./+types/create-team-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Submit Team | wemake",
    },
  ];
};

export default function SubmitTeamPage() {
  return (
    <div className="space-y-20">
      <Hero
        title="Submit Team"
        subtitle="Create a team to the wemake community"
      />
      <Form className="max-w-screen-2xl mx-auto flex flex-col gap-10 items-center">
        <div className="grid grid-cols-3 gap-10 w-full">
          <InputPair
            label="What is the name of your product?"
            placeholder="i.e Doggy Social"
            description="(20 characters or less)"
            maxLength={20}
            name="name"
            id="name"
            type="text"
            required
          />
          <SelectPair
            label="What is the stage of your product?"
            description="Select the stage of your product"
            name="stage"
            placeholder="Select a stage"
            required
            options={PRODUCT_STAGES.map((stage) => ({
              label: stage.label,
              value: stage.value,
            }))}
          />
          <InputPair
            label="What is the size of your team?"
            description="(1-100)"
            name="size"
            id="size"
            type="number"
            min={1}
            max={100}
            required
          />
          <InputPair
            label="How many equity are you willing to give?"
            description="(each)"
            name="equity"
            id="equity"
            type="number"
            min={1}
            max={100}
            required
          />
          <InputPair
            label="What roles are you looking for?"
            placeholder="i.e React Developer, Backend Developer, Product Manager"
            description="(comma separated)"
            name="roles"
            id="roles"
            type="text"
            required
          />
          <InputPair
            label="What is the description of your product?"
            placeholder="i.e We are building a new social media platform for dogs to connect with each other"
            description="(200 characters max)"
            name="description"
            id="description"
            type="text"
            textarea
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size="lg">
          Create team
        </Button>
      </Form>
    </div>
  );
}

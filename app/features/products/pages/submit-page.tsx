import { useState } from "react";
import { Form } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/intput-pair";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import type { Route } from "./+types/submit-page";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit your product to wemake" },
  ];
};

export default function SubmitPage({ actionData }: Route.ComponentProps) {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero
        title="Submit Your Product"
        subtitle="Share your product with the world"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is the name of your product."
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name of your product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            type="text"
            required
            placeholder="A concise description of your product"
          />
          <InputPair
            label="URL"
            description="The URL of your product."
            id="url"
            name="url"
            type="text"
            placeholder="https://example.com"
          />
          <InputPair
            label="Description"
            description="A detailed description of your product."
            id="description"
            name="description"
            type="text"
            placeholder="A detailed description of your product."
            textarea
          />
          <SelectPair
            name="category"
            required
            label="Category"
            description="Select the category of your product."
            placeholder="Select the category of your product."
            options={[
              { label: "AI", value: "ai" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Marketing", value: "marketing" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {icon ? (
              <img
                src={icon}
                alt="icon"
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>
          <Label className="flex flex-col gap-1">
            Icon
            <small className="text-muted-foreground">
              The is the icon of your product.
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
          />
          <div className="flex flex-col text-xs">
            <span className="text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className="text-muted-foreground">
              Allowed formats: PNG, JPEG
            </span>
            <span className="text-muted-foreground">Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}

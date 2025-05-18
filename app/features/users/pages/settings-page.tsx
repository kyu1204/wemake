import { Form } from "react-router";
import type { Route } from "./+types/settings-page";
import InputPair from "~/common/components/intput-pair";
import SelectPair from "~/common/components/select-pair";
import { useState } from "react";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Settings | wemake",
    },
  ];
};

export default function SettingsPage() {
  const [avatar, setAvatar] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Edit Profile</h2>
          <Form className="flex flex-col w-1/2 gap-5">
            <InputPair
              label="Name"
              description="Your public name"
              id="name"
              name="name"
              required
              placeholder="John Doe"
            />
            <SelectPair
              label="Role"
              description="What role do you do identify the most with"
              name="role"
              required
              placeholder="Select a role"
              options={[
                { label: "Software Engineer", value: "software-engineer" },
                { label: "Product Manager", value: "product-manager" },
                { label: "Designer", value: "designer" },
                { label: "Other", value: "other" },
              ]}
            />
            <InputPair
              label="Headline"
              description="Your public headline. It will be displayed on your profile."
              id="headline"
              name="headline"
              required
              placeholder="John Doe"
              textarea
            />
            <InputPair
              label="Bio"
              description="Your public bio. It will be displayed on your profile."
              id="bio"
              name="bio"
              required
              placeholder="John Doe"
              textarea
            />
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <Label className="flex flex-col gap-1">
            Avatar
            <small className="text-muted-foreground">
              This is your public avatar.
            </small>
          </Label>
          <div className="space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <Input
              type="file"
              className="w-1/2"
              onChange={onChange}
              required
              name="avatar"
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
            <Button type="submit" className="w-full">
              Update Avatar
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}

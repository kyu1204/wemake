import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/team-page";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import InputPair from "~/common/components/intput-pair";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Team | wemake",
    },
  ];
};

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Join lynn's team" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            {
              title: "Product name",
              value: "Doggie Social",
            },
            {
              title: "Stage",
              value: "MVP",
            },
            {
              title: "Team size",
              value: 3,
            },
            {
              title: "Available equity",
              value: 50,
            },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <p>{item.value}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-bold text-2xl">
                <ul className="text-lg list-disc list-inside">
                  {[
                    "React Developer",
                    "Backend Developer",
                    "Product Manager",
                    "UI/UX Designer",
                  ].map((role) => (
                    <li key={role}>{role}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>
                  Doggie Social is a social media platform for dogs to connect
                  with each other. It is a place where dogs can meet new
                  friends, share photos, and chat with other dog owners.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <aside className="col-span-2 boarder rounded-lg shadow-sm p-6 space-y-5">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/inthetiger.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4 className="font-medium text-lg">Lynn</h4>
              <Badge variant="secondary">Entrepreneur</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              label="Introduce yourself"
              placeholder="i.e I'm a React Developer with 3 years of experience"
              name="introduction"
              id="introduction"
              type="text"
              description="Tell us about yourself"
              textarea
              required
            />
            <Button type="submit" className="w-full">
              Get in touch
            </Button>
          </Form>
        </aside>
      </div>
    </div>
  );
}

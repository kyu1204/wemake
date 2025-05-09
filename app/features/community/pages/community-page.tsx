import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/community-page";
import { Form, Link, useSearchParams } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { PERIOD_OPTIONS, SORT_OPTIONS } from "../constants";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "../components/post-card";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Community | wemake" },
    { name: "description", content: "Community page" },
  ];
};

export default function CommunityPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") || "newest";
  const period = searchParams.get("period") || "all";
  return (
    <div>
      <Hero
        title="Community"
        subtitle="Ask questions, share ideas, and connect with other developers"
      />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y-5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                    <span className="text-sm capitalize">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        key={option}
                        className="capitalize cursor-pointer"
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set("sorting", option);
                            searchParams.delete("period");
                            setSearchParams(searchParams);
                          }
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((period) => (
                        <DropdownMenuCheckboxItem
                          key={period}
                          className="capitalize cursor-pointer"
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set("period", period);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {period}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form>
                <Input
                  type="text"
                  placeholder="Search for discussions"
                  name="search"
                  className="w-2/3"
                />
              </Form>
            </div>
            <Button asChild>
              <Link to="/community/new">Create Discussion</Link>
            </Button>
          </div>
          <div className="space-y-5">
            {Array.from({ length: 11 }, (_, index) => (
              <PostCard
                key={index}
                id={`post-${index}`}
                title={`Post ${index + 1}`}
                author="Harry"
                authorAvatarUrl="https://github.com/apple.png"
                category="Productivity"
                postedAt="12 hours ago"
                expanded={true}
              />
            ))}
          </div>
        </div>
        <aside className="col-span-2 space-y-5 flex flex-col">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topics
          </span>
          <div className="flex flex-col gap-2 items-start">
            {[
              "AI Tools",
              "Design Tools",
              "Dev Tools",
              "Note Taking apps",
              "Productivity Tools",
            ].map((category) => (
              <Button variant="link" asChild className="pl-0">
                <Link
                  key={category}
                  to={`/community?topics=${category}`}
                  className="font-semibold"
                >
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

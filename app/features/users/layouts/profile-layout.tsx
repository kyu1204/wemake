import { data, Form, Link, NavLink, Outlet } from "react-router";
import { z } from "zod";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Button, buttonVariants } from "~/common/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/common/components/ui/dialog";
import { Textarea } from "~/common/components/ui/textarea";
import { cn } from "~/lib/utils";
import { getUserByUsername } from "../queries";
import type { Route } from "./+types/profile-layout";

export const paramsSchema = z.object({
  username: z.string(),
});

export const loader = async ({ params }: { params: { username: string } }) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success)
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );

  const user = await getUserByUsername(parsedData.username);

  return { user };
};

export default function ProfileLayout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <Avatar className="size-40">
          {loaderData.user.avatar ? (
            <AvatarImage src={loaderData.user.avatar} />
          ) : (
            <AvatarFallback>{loaderData.user.name[0]}</AvatarFallback>
          )}
        </Avatar>
        <div className="space-y-5">
          <div className="flex gap-2">
            <h1 className="text-2xl text-muted-foreground">
              {loaderData.user.name}
            </h1>
            <Button variant="outline" asChild>
              <Link to="/my/settings">Edit profile</Link>
            </Button>
            <Button variant="secondary">Follow</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">Message</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Message</DialogTitle>
                  <DialogDescription className="space-y-4">
                    <span className="text-sm text-muted-foreground block">
                      Send a message to {loaderData.user.name}
                    </span>
                    <Form className="space-y-4">
                      <Textarea
                        placeholder="Message"
                        rows={4}
                        className="resize-none"
                      />
                      <Button type="submit">Send</Button>
                    </Form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-sm text-muted-foreground">
              @{loaderData.user.username}
            </span>
            <Badge variant="secondary">{loaderData.user.role}</Badge>
            <Badge variant="secondary">100 followers</Badge>
            <Badge variant="secondary">100 following</Badge>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        {[
          { label: "About", to: `/users/${loaderData.user.username}` },
          {
            label: "Products",
            to: `/users/${loaderData.user.username}/products`,
          },
          {
            label: "Posts",
            to: `/users/${loaderData.user.username}/posts`,
          },
        ].map((item) => (
          <NavLink
            end
            key={item.label}
            className={({ isActive }) =>
              cn(
                buttonVariants({ variant: "outline" }),
                isActive && "bg-accent text-foreground"
              )
            }
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <div className="max-w-screen-md">
        <Outlet
          context={{
            headline: loaderData.user.headline,
            bio: loaderData.user.bio,
          }}
        />
      </div>
    </div>
  );
}

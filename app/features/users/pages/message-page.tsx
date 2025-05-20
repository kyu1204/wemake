import { SendIcon } from "lucide-react";
import { Form } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { MessagesBubble } from "../components/messages-bubble";

export default function MessagePage() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Card>
        <CardHeader className="flex flex-row gap-4 items-center">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/saranghe41.png" />
            <AvatarFallback>J</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <CardTitle>Jinny</CardTitle>
            <CardDescription>2 days ago</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="py-10 overflow-y-scroll flex flex-col justify-start h-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <MessagesBubble
            key={index}
            avatarUrl="https://github.com/saranghe41.png"
            username="Jinny"
            content="this is a message from jinny, make it short and sweet for the demo. but make it long enough to test the layout. more longer message will be more longer, maybe more than 100 words."
            isCurrentUser={index % 2 === 0}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <Form className="relative flex justify-end items-center">
            <Textarea
              placeholder="Write a message..."
              rows={2}
              className="resize-none"
            />
            <Button type="submit" size="icon" className="absolute right-2">
              <SendIcon className="size-4" />
            </Button>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
}

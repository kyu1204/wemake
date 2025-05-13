import { Form, Link } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { MessageCircleIcon, DotIcon } from "lucide-react";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";
export interface ReplyProps {
  avatarUrl: string;
  username: string;
  userLink: string;
  timestamp: string;
  content: string;
  topLevel: boolean;
}

export function Reply({
  avatarUrl,
  username,
  userLink,
  timestamp,
  content,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);

  const toggleReplying = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarFallback>{username.charAt(0).toUpperCase()}</AvatarFallback>
          <AvatarImage src={avatarUrl} />
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={userLink}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-4" />
            <span className="text-xs text-muted-foreground">{timestamp}</span>
          </div>
          <p className="text-muted-foreground">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" />
            <span>Reply</span>
          </Button>
        </div>
      </div>
      {replying && (
        <Form className="flex items-start gap-5 w-3/4">
          <Avatar className="size-14">
            <AvatarFallback>N</AvatarFallback>
            <AvatarImage src="https://github.com/kyu1204.png" />
          </Avatar>
          <div className="flex flex-col gap-5 w-full items-end">
            <Textarea
              placeholder="Write a reply"
              className="w-full resize-none"
              rows={5}
            />
            <Button type="submit">Reply</Button>
          </div>
        </Form>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            avatarUrl="https://github.com/serranoarevalo.png"
            username="Nico"
            userLink="/users/@nico"
            timestamp="12 hours ago"
            content="I'm looking for a productivity tool that can help me get more done. I've tried a few different ones and I'm not sure which one is the best. best."
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}

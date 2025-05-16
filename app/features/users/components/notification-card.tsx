import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import type { ReactNode, MouseEvent } from "react";
import { EyeIcon } from "lucide-react";
import { cn } from "~/lib/utils";

export interface NotificationCardProps {
  username: string;
  message: string;
  avatarUrl: string;
  avatarFallback: string;
  timestamp: string;
  seen: boolean;
}

export function NotificationCard({
  username,
  message,
  avatarUrl,
  avatarFallback,
  timestamp,
  seen,
}: NotificationCardProps) {
  return (
    <Card className={cn("min-w-[450px]", seen ? "" : "bg-yellow-500/60")}>
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">
            <span>{username}</span>
            <span> {message}</span>
          </CardTitle>
          <small className="text-sm text-muted-foreground">{timestamp}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button variant="outline" size="icon">
          <EyeIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

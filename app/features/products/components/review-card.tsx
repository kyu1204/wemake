import { StarIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";

interface ReviewCardProps {
  username: string;
  handle: string;
  avatarUrl?: string;
  rating: number;
  content: string;
  postedAt: string;
}

export function ReviewCard({
  handle,
  username,
  avatarUrl,
  rating,
  content,
  postedAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>{handle[0]}</AvatarFallback>
          <AvatarImage src={avatarUrl} />
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{handle}</h4>
          <p className="text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon
            key={index}
            className="size-4"
            fill={index < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-muted-foreground">{postedAt}</span>
    </div>
  );
}

import { Button } from "~/common/components/ui/button";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import { CreateReviewDialog } from "../components/create-review-dialog";
import { ReviewCard } from "../components/review-card";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "View product reviews" },
  ];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger>
            <Button variant="secondary">Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              key={index}
              handle="John Doe"
              username="username"
              avatarUrl="https://github.com/shadcn.png"
              rating={5}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              postedAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}

import { data, useOutletContext } from "react-router";
import { z } from "zod";
import { Button } from "~/common/components/ui/button";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import { makeSSRClient } from "~/supa-client";
import { CreateReviewDialog } from "../components/create-review-dialog";
import { ReviewCard } from "../components/review-card";
import { getReviewsByProductId } from "../queries";
import type { Route } from "./+types/product-reviews-page";

export function meta() {
  return [
    { title: "Product Reviews | wemake" },
    { name: "description", content: "View product reviews" },
  ];
}

export const paramsSchema = z.object({
  productId: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client } = makeSSRClient(request);
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success)
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );

  const reviews = await getReviewsByProductId(client, parsedData.productId);
  return { reviews };
};

export default function ProductReviewsPage({
  loaderData,
}: Route.ComponentProps) {
  const { reviews_count } = useOutletContext<{ reviews_count: string }>();
  const { reviews } = loaderData;

  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {reviews_count} {reviews_count === "1" ? "Review" : "Reviews"}
          </h2>
          <DialogTrigger>
            <Button variant="secondary">Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {reviews.map((review) => (
            <ReviewCard
              key={review.review_id}
              handle={review.profiles.name}
              username={review.profiles.username}
              avatarUrl={review.profiles.avatar}
              rating={review.rating}
              content={review.review}
              postedAt={review.created_at}
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}

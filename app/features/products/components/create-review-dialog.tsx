import { StarIcon } from "lucide-react";
import { useState } from "react";
import { Form } from "react-router";
import InputPair from "~/common/components/intput-pair";
import { Button } from "~/common/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/common/components/ui/dialog";
import { Label } from "~/common/components/ui/label";

export function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">
          What did you think of this product?
        </DialogTitle>
        <DialogDescription>
          Share your thoughts and experiences with this product.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoveredRating >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  value="star"
                  name="rating"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onClick={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>
        <InputPair
          required
          textarea
          label="Review"
          description="Maximum 1000 characters"
          placeholder="Write your review here"
        />
        <DialogFooter>
          <Button type="submit">Submit Review</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}

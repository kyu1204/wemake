import type { DateTime } from "luxon";
import client from "~/supa-client";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
        product_id,
        name,
        description,
        reviews:stats->>reviews,
        views:stats->>views,
        upvotes:stats->>upvotes
    `
    )
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    .limit(limit)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

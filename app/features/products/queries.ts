import type { DateTime } from "luxon";
import client from "~/supa-client";
import { PAGE_SIZE } from "./constants";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
  page = 1,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
  page?: number;
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
    .order("stats->>upvotes", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) throw new Error(error.message);
  return data;
};

export const getProductPagesByDateRange = async ({
  startDate,
  endDate,
}: {
  startDate: DateTime;
  endDate: DateTime;
}) => {
  const { count, error } = await client
    .from("products")
    .select(`*`, { count: "exact", head: true })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO());
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

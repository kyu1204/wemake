import type { DateTime } from "luxon";
import client from "~/supa-client";
import { PAGE_SIZE } from "./constants";

export const productListSelect = `
        product_id,
        name,
        tagline,
        reviews:stats->>reviews,
        views:stats->>views,
        upvotes:stats->>upvotes
    `;

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
    .select(productListSelect)
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

export const getCategories = async () => {
  const { data, error } = await client
    .from("categories")
    .select(
      `
      category_id,
      name,
      description
    `
    )
    .order("category_id", { ascending: true });
  if (error) throw error;
  return data;
};

export const getCategory = async ({ categoryId }: { categoryId: number }) => {
  const { data, error } = await client
    .from("categories")
    .select(
      `
      category_id,
      name,
      description
    `
    )
    .eq("category_id", categoryId)
    .single();
  if (error) throw error;
  return data;
};

export const getProductsByCategory = async ({
  categoryId,
  limit,
  page = 1,
}: {
  categoryId: number;
  limit: number;
  page?: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(productListSelect)
    .eq("category_id", categoryId)
    .order("stats->>upvotes", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (error) throw new Error(error.message);
  return data;
};

export const getProductPagesByCategory = async ({
  categoryId,
}: {
  categoryId: number;
}) => {
  const { count, error } = await client
    .from("products")
    .select(`*`, { count: "exact", head: true })
    .eq("category_id", categoryId);
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

export const getProductsBySearch = async ({
  query,
  limit,
  page = 1,
}: {
  query: string;
  limit: number;
  page?: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(productListSelect)
    .or(`name.ilike.%${query}%,tagline.ilike.%${query}%`)
    .order("stats->>upvotes", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);
  if (error) throw new Error(error.message);
  return data;
};

export const getProductPagesBySearch = async ({ query }: { query: string }) => {
  const { count, error } = await client
    .from("products")
    .select(`*`, { count: "exact", head: true })
    .or(`name.ilike.%${query}%,tagline.ilike.%${query}%`);
  if (error) throw new Error(error.message);
  if (!count) return 1;
  return Math.ceil(count / PAGE_SIZE);
};

export const getProductById = async (productId: number) => {
  const { data, error } = await client
    .from("product_overview_view")
    .select("*")
    .eq("product_id", productId)
    .single();

  if (error) throw error;
  return data;
};

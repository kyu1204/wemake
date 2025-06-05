import type { Route } from "./+types/product-visit-page";
import client from "~/supa-client";
import { z } from "zod";
import { data, redirect } from "react-router";

export const paramsSchema = z.object({
  productId: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedParams } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid search params", message: "Invalid search params" },
      { status: 400 }
    );
  }

  const { data: product } = await client
    .from("products")
    .select("url")
    .eq("product_id", parsedParams.productId)
    .single();

  if (product) {
    await client.rpc("track_event", {
      event_type: "product_visit",
      event_data: {
        product_id: params.productId,
      },
    });
    return redirect(product.url);
  }

  return null;
};

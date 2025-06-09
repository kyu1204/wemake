import { data, redirect } from "react-router";
import { z } from "zod";
import { makeSSRClient } from "~/supa-client";
import type { Route } from "./+types/product-visit-page";

export const paramsSchema = z.object({
  productId: z.coerce.number(),
});

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const { client } = makeSSRClient(request);
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

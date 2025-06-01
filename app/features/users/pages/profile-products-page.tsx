import { z } from "zod";
import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";
import { data } from "react-router";
import { getUserProducts } from "../queries";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Products | wemake",
    },
  ];
};

export const paramsSchema = z.object({
  username: z.string(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);

  if (!success)
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );

  const products = await getUserProducts(parsedData.username);

  return { products };
};

export default function ProfileProductsPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.products.map((product) => (
        <ProductCard
          key={product.product_id}
          id={product.product_id}
          name={product.name}
          description={product.tagline}
          reviewCount={product.reviews}
          viewCount={product.views}
          upvoteCount={product.upvotes}
        />
      ))}
    </div>
  );
}

import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/pagination";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";
import {
  getCategory,
  getProductPagesByCategory,
  getProductsByCategory,
} from "../queries";
import { PAGE_SIZE } from "../constants";
import { z } from "zod";
import { data } from "react-router";

export const meta: Route.MetaFunction = ({ data }: Route.MetaArgs) => {
  return [
    { title: `${data.category.name} | wemake` },
    {
      name: "description",
      content: data.category.description,
    },
  ];
};

export const paramsSchema = z.object({
  categoryId: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      { error_code: "invalid params", message: "Invalid params" },
      { status: 400 }
    );
  }

  const [products, totalPages, category] = await Promise.all([
    getProductsByCategory({
      categoryId: parsedData.categoryId,
      limit: PAGE_SIZE,
    }),
    getProductPagesByCategory({
      categoryId: Number(params.categoryId),
    }),
    getCategory({
      categoryId: Number(params.categoryId),
    }),
  ]);

  return { products, totalPages, category };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={loaderData.category.name}
        subtitle={loaderData.category.description}
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
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
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}

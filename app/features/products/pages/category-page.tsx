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

export const meta: Route.MetaFunction = ({ data }: Route.MetaArgs) => {
  return [
    { title: `${data.category.name} | wemake` },
    {
      name: "description",
      content: data.category.description,
    },
  ];
};

export const loader = async ({ params }: Route.LoaderArgs) => {
  const [products, totalPages, category] = await Promise.all([
    getProductsByCategory({
      categoryId: Number(params.categoryId),
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
            description={product.description}
            commentCount={product.reviews}
            viewCount={product.views}
            upvoteCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}

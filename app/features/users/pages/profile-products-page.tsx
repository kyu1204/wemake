import { ProductCard } from "~/features/products/components/product-card";
import type { Route } from "./+types/profile-products-page";

export const meta: Route.MetaFunction = () => {
  return [
    {
      title: "Products | wemake",
    },
  ];
};

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <ProductCard
          key={index}
          id={`product-${index}`}
          name={`Product ${index + 1}`}
          description={`Description for product ${index + 1}`}
          commentCount={Math.floor(Math.random() * 100)}
          viewCount={Math.floor(Math.random() * 1000)}
          upvoteCount={Math.floor(Math.random() * 500)}
        />
      ))}
    </div>
  );
}

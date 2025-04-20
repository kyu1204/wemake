import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/pagination";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";

export const meta: Route.MetaFunction = ({ params }: Route.MetaArgs) => {
  return [
    { title: "Developer Tools | wemake" },
    {
      name: "description",
      content: "Tools for developers to build products faster",
    },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-10">
      <Hero
        title="Developer Tools"
        subtitle="Tools for developers to build products faster"
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }, (_, index) => (
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
      <ProductPagination totalPages={10} />
    </div>
  );
}
